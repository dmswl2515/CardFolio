package com.cardfolio.springboot.service.common;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CardRankingService {

    private final CardRepository cardRepository;
    
    // 캐시백 금액 추출용 정규식 패턴 (성능 최적화를 위해 static final로 선언)
    private static final Pattern CASHBACK_PATTERN = Pattern.compile("(\\d+(?:\\.\\d+)?)만원");
    
    // 연회비 금액 추출용 정규식 패턴
    private static final Pattern ANNUAL_FEE_PATTERN = Pattern.compile("([\\d,]+)원");
    
    // 전월실적 금액 추출용 정규식 패턴
    private static final Pattern PREVIOUS_PERFORMANCE_PATTERN = Pattern.compile("([\\d,]+)만원");

    public enum RankingType {
        OVERALL,              // 전체 랭킹
        CARD_TYPE,            // 카드타입별 (신용/체크)
        COMPANY,              // 카드사별
        BENEFIT,              // 혜택별 (통신사, 영화, 쇼핑 등)
        NEW_RELEASE,          // 신규카드별
        PREVIOUS_PERFORMANCE  // 전월실적별
    }

    public List<Card> getRankedCards(RankingType rankingType, String filterValue, int limit) {
        List<Card> cards;

        switch (rankingType) {
            case CARD_TYPE:
                cards = cardRepository.findByTypeOrderByScoreDesc(filterValue, limit);
                break;

            case COMPANY:
                cards = cardRepository.findByCompanyOrderByScoreDesc(filterValue, limit);
                break;

            case BENEFIT:
                cards = cardRepository.findByBenefitCategoryOrderByScoreDesc(filterValue, limit);
                break;

            case NEW_RELEASE:
                cards = cardRepository.findNewReleaseCardsOrderByScoreDesc(limit);
                break;

            case PREVIOUS_PERFORMANCE:
                cards = cardRepository.findByPreviousPerformanceOrderByScoreDesc(filterValue, limit);
                break;

            case OVERALL:
            default:
                cards = cardRepository.findAllOrderByCalculatedScore(limit);
                break;
        }
        return cards.stream()
                .map(this::calculateAndSetScore)
                .collect(Collectors.toList());
    }

    private Card calculateAndSetScore(Card card) {
        double algorithmScore = calculateAlgorithmScore(card);
        
        // 알고리즘 점수 설정
        card.setAlgorithmScore(algorithmScore);
        
        return card;
    }

    private double calculateAlgorithmScore(Card card) {
        double score = 0.0;

        // 1순위: 조회수 점수 (최대 40점)
        if (card.getViews() != null) {
            double viewScore = Math.min(card.getViews() * 0.02, 40.0);
            score += viewScore;
        }

        // 2순위: 신규 출시 (최대 25점)
        if (card.getRelease() != null) {
            // Date를 LocalDate로 변환 (java.sql.Date의 경우 직접 변환 불가능하므로 valueOf 사용)
            LocalDate releaseDate;
            if (card.getRelease() instanceof java.sql.Date) {
                releaseDate = ((java.sql.Date) card.getRelease()).toLocalDate();
            } else {
                releaseDate = card.getRelease().toInstant()
                    .atZone(ZoneId.systemDefault())
                    .toLocalDate();
            }
            long daysFromRelease = ChronoUnit.DAYS.between(releaseDate, LocalDate.now());
            if (daysFromRelease <= 30) { // 30일 이내 신규 카드
                score += Math.max(25 - (daysFromRelease * 0.7), 5);
            }
        }

        // 3순위: 캐시백 점수 (최대 20점)
        if (card.getEvent() != null && !card.getEvent().isEmpty()) {
            double cashbackAmount = extractCashbackAmount(card.getEvent());
            if (cashbackAmount > 0) {
                score += Math.min(cashbackAmount * 1.0, 20.0); // 1만원당 1점
            }
        }

        // 4순위: 연회비 점수 (최대 15점)
        if (card.getAnnualfee() != null && !card.getAnnualfee().isEmpty()) {
            int minAnnualFee = extractMinAnnualFee(card.getAnnualfee());
            if (minAnnualFee == 0) {
                score += 15.0; // 연회비 무료
            } else if (minAnnualFee <= 10000) {
                score += 12.0; // 1만원 이하
            } else if (minAnnualFee <= 50000) {
                score += 8.0;  // 5만원 이하
            } else {
                score += 3.0;  // 5만원 초과
            }
        }

        // 5순위: 전월실적 점수 (최대 10점) - 전월실적이 낮거나 없을수록 높은 점수
        if (card.getCondition() != null && !card.getCondition().isEmpty()) {
            int previousPerformance = extractPreviousPerformance(card.getCondition());
            if (previousPerformance == 0) {
                score += 10.0; // 전월실적 없음 (최고점)
            } else if (previousPerformance <= 30) {
                score += 8.0;  // 30만원 이하
            } else if (previousPerformance <= 50) {
                score += 5.0;  // 50만원 이하
            } else {
                score += 2.0;  // 50만원 초과
            }
        }

        return Math.round(score * 10.0) / 10.0; // 소수점 1자리까지
    }

    // Event 컬럼에서 캐시백 금액을 추출하는 헬퍼 메소드
    private double extractCashbackAmount(String event) {
        if (event == null || event.isEmpty()) {
            return 0.0;
        }

        // "1.2만원 캐시백", "최대 25만원 캐시백" 등에서 숫자 추출
        Matcher matcher = CASHBACK_PATTERN.matcher(event);

        if (matcher.find()) {
            return Double.parseDouble(matcher.group(1));
        }
        return 0.0;
    }
    
    // 연회비 문자열에서 최소 금액을 추출하는 헬퍼 메소드
    private int extractMinAnnualFee(String annualFeeStr) {
        if (annualFeeStr == null || annualFeeStr.isEmpty()) {
            return 0;
        }
        
        String lowerStr = annualFeeStr.toLowerCase();
        
        // 무료 케이스들
        if (lowerStr.contains("없음") || lowerStr.contains("면제")) {
            return 0;
        }
        
        // 숫자 추출 패턴: "12,000원", "150,000원" 등
        Matcher matcher = ANNUAL_FEE_PATTERN.matcher(annualFeeStr);
        
        int minFee = Integer.MAX_VALUE;
        boolean found = false;
        
        while (matcher.find()) {
            try {
                // 콤마 제거 후 숫자로 변환
                String numberStr = matcher.group(1).replace(",", "");
                int fee = Integer.parseInt(numberStr);
                minFee = Math.min(minFee, fee);
                found = true;
            } catch (NumberFormatException e) {
                // 파싱 실패시 무시
            }
        }
        
        return found ? minFee : 0;
    }
    
    // 전월실적 문자열에서 금액을 추출하는 헬퍼 메소드
    private int extractPreviousPerformance(String conditionStr) {
        if (conditionStr == null || conditionStr.isEmpty()) {
            return 0;
        }
        
        String lowerStr = conditionStr.toLowerCase();
        
        // 전월실적 없음 케이스
        if (lowerStr.contains("없음")) {
            return 0;
        }
        
        // 숫자 추출: "전월실적30만원 이상" → 30
        Matcher matcher = PREVIOUS_PERFORMANCE_PATTERN.matcher(conditionStr);
        
        if (matcher.find()) {
            try {
                // 콤마 제거 후 숫자로 변환
                String numberStr = matcher.group(1).replace(",", "");
                return Integer.parseInt(numberStr);
            } catch (NumberFormatException e) {
                // 파싱 실패시 0 반환
                return 0;
            }
        }
        
        return 0;
    }


    // 이벤트별 카드들 조회 (event 컬럼 검색) - 카드사별 1개씩
    public List<Card> getCardsByEvent(String keyword, int limit) {
        List<Card> cards = cardRepository.findByEventKeywordOrderByScoreDesc(keyword, limit);
        return cards.stream()
                .map(this::calculateAndSetScore)
                .collect(Collectors.toList());
    }
    
    // 혜택 타입별 카드들 조회 (benefitcontent 컬럼 기준)
    public List<Card> getCardsByBenefitType(String typeKeyword, int limit) {
        List<Card> cards = cardRepository.findByBenefitTypeOrderByScoreDesc(typeKeyword, limit);
        return cards.stream()
                .map(this::calculateAndSetScore)
                .collect(Collectors.toList());
    }
}
