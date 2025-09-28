package com.cardfolio.springboot.service.common;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

/**
 * 고급 카드 랭킹 알고리즘 서비스
 * Reddit(Wilson Score), Netflix(Exponential Smoothing), Twitter(Decay Function) 
 * 실제 서비스에서 사용하는 알고리즘을 카드 랭킹에 적용
 */
@Service
@RequiredArgsConstructor
public class AdvancedRankingService {

    private final CardRepository cardRepository;

    // 카드사별 브랜드 가중치 (제휴 및 신뢰도 기반)
    private static final Map<String, Double> BRAND_WEIGHTS = Map.of(
        "신한카드", 1.1,
        "삼성카드", 1.1, 
        "현대카드", 1.05,
        "KB국민카드", 1.0,
        "우리카드", 1.0,
        "하나카드", 1.0,
        "롯데카드", 0.95,
        "NH농협카드", 0.9,
        "IBK기업은행", 0.9,
        "BC바로카드", 0.85
    );

    /**
     * 성능 최적화된 통합 랭킹 - 1번 DB 조회로 3가지 알고리즘 처리
     */
    @Cacheable(value = "companyRanking", key = "#companyName + '_' + #limit", unless = "#result == null")
    public Map<String, List<Card>> getOptimizedCompanyRanking(String companyName, int limit) {
        System.out.println("알고리즘 계산 실행: " + companyName + " (캐시 미스)");
        
        long startTime = System.currentTimeMillis();
        // 1번만 DB 조회 (성능 최적화)
        List<Card> allCards = getCardsByCompany(companyName);
        
        // 3가지 알고리즘을 같은 데이터로 처리 (중복 제거)
        List<Card> bestSellers = calculateBestSellers(allCards, limit);
        
        // 베스트셀러에서 제외된 카드들로 스테디셀러 계산
        List<Card> remainingCards = allCards.stream()
                .filter(card -> bestSellers.stream().noneMatch(bs -> bs.getCardId().equals(card.getCardId())))
                .collect(Collectors.toList());
        List<Card> steadySellers = calculateSteadySellers(remainingCards, limit);
        
        // 베스트셀러, 스테디셀러에서 제외된 카드들로 트렌딩 계산
        List<Card> trendingCards = allCards.stream()
                .filter(card -> bestSellers.stream().noneMatch(bs -> bs.getCardId().equals(card.getCardId())) &&
                               steadySellers.stream().noneMatch(ss -> ss.getCardId().equals(card.getCardId())))
                .collect(Collectors.toList());
        List<Card> trending = calculateTrending(trendingCards, limit);
        
        Map<String, List<Card>> result = new HashMap<>();
        result.put("bestSellers", bestSellers);
        result.put("steadySellers", steadySellers);
        result.put("trending", trending);
        
        long endTime = System.currentTimeMillis();
        System.out.println("알고리즘 계산 완료: " + companyName + " (캐시에 저장됨) - 소요시간: " + (endTime - startTime) + "ms");
        
        return result;
    }

    /**
     * 베스트셀러 계산 (Wilson Score Algorithm)
     */
    private List<Card> calculateBestSellers(List<Card> cards, int limit) {
        return cards.stream()
                .map(this::calculateWilsonScore)
                .sorted((a, b) -> Double.compare(b.getAlgorithmScore(), a.getAlgorithmScore()))
                .limit(limit)
                .collect(Collectors.toList());
    }

    /**
     * Wilson Score 계산 (Reddit 알고리즘)
     * 95% 신뢰구간 기반으로 조회수가 적어도 신뢰할 수 있는 점수 제공
     */
    private Card calculateWilsonScore(Card card) {
        double views = Math.max(Optional.ofNullable(card.getViews()).orElse(1), 1);
        double rating = Optional.ofNullable(card.getUserRating()).orElse(4.2);
        
        // 긍정적 반응 = 전체 조회수 × (평점/5)
        double positive = views * (rating / 5.0);
        double total = views;
        
        // Wilson Score Interval 계산 (95% 신뢰구간)
        double z = 1.96; // 95% confidence level
        double phat = positive / total;
        
        double wilsonScore = (phat + z * z / (2 * total) - 
                             z * Math.sqrt((phat * (1 - phat) + z * z / (4 * total)) / total)) / 
                             (1 + z * z / total);
        
        // 브랜드 가중치 및 광고 보너스 적용
        double brandWeight = BRAND_WEIGHTS.getOrDefault(card.getCompany(), 1.0);
        double sponsorBonus = Boolean.TRUE.equals(card.getIsSponsored()) ? 1.15 : 1.0;
        
        double finalScore = wilsonScore * 100 * brandWeight * sponsorBonus;
        
        card.setAlgorithmScore(Math.round(finalScore * 100.0) / 100.0);
        return card;
    }

    /**
     * 스테디셀러 계산 (Exponential Smoothing)
     */
    private List<Card> calculateSteadySellers(List<Card> cards, int limit) {
        return cards.stream()
                .map(this::calculateSteadyScore)
                .sorted((a, b) -> Double.compare(b.getAlgorithmScore(), a.getAlgorithmScore()))
                .limit(limit)
                .collect(Collectors.toList());
    }

    /**
     * Exponential Smoothing 기반 안정성 점수 계산
     * Netflix의 시청 지속성 분석 모델 적용
     */
    private Card calculateSteadyScore(Card card) {
        // 가상의 월별 데이터 생성 (실제 서비스에서는 실제 월별 통계 사용)
        List<Double> monthlyViews = generateMonthlyPattern(card);
        
        // Exponential Smoothing (α = 0.3, Netflix 권장값)
        double smoothedValue = exponentialSmoothing(monthlyViews, 0.3);
        
        // 변동성 계산 (변동계수 = 표준편차/평균)
        double stability = calculateStability(monthlyViews);
        
        // 출시 기간 보너스 (오래된 카드일수록 안정성 가산점)
        double ageBonus = calculateAgeBonus(card.getRelease());
        
        // 최종 점수 = 평활값 × 안정성 × 기간보너스
        double finalScore = (smoothedValue * stability * ageBonus) / 100;
        
        card.setAlgorithmScore(Math.round(finalScore * 100.0) / 100.0);
        return card;
    }

    /**
     * Netflix Exponential Smoothing 알고리즘
     * 최근 데이터에 더 높은 가중치를 부여하는 시계열 분석
     */
    private double exponentialSmoothing(List<Double> values, double alpha) {
        if (values.isEmpty()) return 0.0;
        
        double smoothed = values.get(0);
        for (int i = 1; i < values.size(); i++) {
            smoothed = alpha * values.get(i) + (1 - alpha) * smoothed;
        }
        return smoothed;
    }

    /**
     * 트렌딩 계산 (Decay Function)
     */
    private List<Card> calculateTrending(List<Card> cards, int limit) {
        return cards.stream()
                .map(this::calculateTrendingScore)
                .sorted((a, b) -> Double.compare(b.getAlgorithmScore(), a.getAlgorithmScore()))
                .limit(limit)
                .collect(Collectors.toList());
    }

    /**
     * Twitter Trending Decay Function
     * 시간에 따른 지수적 감소로 트렌딩 측정
     */
    private Card calculateTrendingScore(Card card) {
        double views = Math.max(Optional.ofNullable(card.getViews()).orElse(1), 1);
        long daysSinceRelease = getDaysSinceRelease(card.getRelease());
        
        // Twitter-style 지수적 감소 (반감기 90일)
        double decayFactor = Math.exp(-daysSinceRelease / 90.0);
        
        // 신카드 보너스 (1년 이내)
        double newCardBonus = daysSinceRelease <= 365 ? 1.5 : 1.0;
        
        // 일일 평균 견인력
        double dailyTraction = daysSinceRelease > 0 ? views / daysSinceRelease : views;
        
        double trendingScore = dailyTraction * decayFactor * newCardBonus;
        
        card.setAlgorithmScore(Math.round(trendingScore * 100.0) / 100.0);
        return card;
    }

    // ========== 유틸리티 메서드들 ==========

    /**
     * 회사별 카드 조회
     */
    private List<Card> getCardsByCompany(String companyName) {
        if (companyName == null || companyName.trim().isEmpty()) {
            return cardRepository.findAll();
        }
        return cardRepository.findByCompany(companyName);
    }

    /**
     * 최적화된 월별 조회수 패턴 생성 (성능 개선)
     * 실제 운영시에는 card_monthly_stats 테이블에서 조회
     */
    private List<Double> generateMonthlyPattern(Card card) {
        double totalViews = Math.max(Optional.ofNullable(card.getViews()).orElse(1), 1);
        double baseViews = totalViews / 6.0;
        
        // 성능 최적화: Random 계산 제거, 고정 패턴 사용
        return Arrays.asList(
            baseViews * 0.8,  // 6개월 전
            baseViews * 0.9,  // 5개월 전
            baseViews * 1.0,  // 4개월 전
            baseViews * 1.1,  // 3개월 전
            baseViews * 1.0,  // 2개월 전
            baseViews * 0.95  // 1개월 전
        );
    }

    /**
     * 안정성 지수 계산 (변동계수의 역수)
     */
    private double calculateStability(List<Double> values) {
        if (values.size() < 2) return 1.0;
        
        double mean = values.stream().mapToDouble(Double::doubleValue).average().orElse(1.0);
        double variance = values.stream()
                .mapToDouble(v -> Math.pow(v - mean, 2))
                .average()
                .orElse(0.0);
        
        double cv = Math.sqrt(variance) / mean; // 변동계수
        return Math.max(1.0 / (1.0 + cv), 0.1); // 안정성 = 1/(1+변동계수)
    }

    /**
     * 출시 기간에 따른 안정성 보너스
     */
    private double calculateAgeBonus(Date releaseDate) {
        long daysSinceRelease = getDaysSinceRelease(releaseDate);
        
        if (daysSinceRelease >= 365) {
            return 1.3; // 1년 이상 - 검증된 안정성
        } else if (daysSinceRelease >= 180) {
            return 1.2; // 6개월 이상
        } else if (daysSinceRelease >= 90) {
            return 1.1; // 3개월 이상
        } else {
            return 1.0; // 신규
        }
    }

    /**
     * 출시일로부터 경과 일수 계산
     */
    private long getDaysSinceRelease(Date releaseDate) {
        if (releaseDate == null) return 365; // 기본값
        
        try {
            LocalDate release = releaseDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            LocalDate now = LocalDate.now();
            return java.time.temporal.ChronoUnit.DAYS.between(release, now);
        } catch (Exception e) {
            return 365; // 예외 발생시 기본값
        }
    }
}