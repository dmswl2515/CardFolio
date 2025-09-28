package com.cardfolio.springboot.controller;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.service.common.AdvancedRankingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * 고급 카드 랭킹 API 컨트롤러
 * Reddit, Netflix, Twitter 알고리즘 기반 랭킹 서비스
 */
@RestController
@RequestMapping("/api/advanced-ranking")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AdvancedRankingController {

    private final AdvancedRankingService advancedRankingService;

    /**
     * 베스트셀러 랭킹 (Wilson Score - Reddit 알고리즘)
     * 조회수와 만족도를 결합한 신뢰구간 기반 랭킹
     */
    @GetMapping("/best-seller")
    public ResponseEntity<List<Card>> getBestSellerRanking(
            @RequestParam(required = false) String company,
            @RequestParam(defaultValue = "10") int limit) {
        
        Map<String, List<Card>> results = advancedRankingService.getOptimizedCompanyRanking(company, limit);
        return ResponseEntity.ok(results.get("bestSellers"));
    }

    /**
     * 스테디셀러 랭킹 (Exponential Smoothing - Netflix 알고리즘)  
     * 시계열 분석 기반 안정성과 일관성 측정
     */
    @GetMapping("/steady-seller")
    public ResponseEntity<List<Card>> getSteadySellerRanking(
            @RequestParam(required = false) String company,
            @RequestParam(defaultValue = "10") int limit) {
        
        Map<String, List<Card>> results = advancedRankingService.getOptimizedCompanyRanking(company, limit);
        return ResponseEntity.ok(results.get("steadySellers"));
    }

    /**
     * 트렌딩 랭킹 (Decay Function - Twitter 알고리즘)
     * 시간 기반 지수적 감소로 최신 트렌드 측정
     */
    @GetMapping("/trending")
    public ResponseEntity<List<Card>> getTrendingRanking(
            @RequestParam(required = false) String company,
            @RequestParam(defaultValue = "10") int limit) {
        
        Map<String, List<Card>> results = advancedRankingService.getOptimizedCompanyRanking(company, limit);
        return ResponseEntity.ok(results.get("trending"));
    }

    /**
     * 성능 최적화된 카드사별 종합 고급 랭킹
     * 1번 DB 조회로 3가지 알고리즘 결과를 모두 반환 (CompanyDetailPage용)
     */
    @GetMapping({"/company/{companyName}", "/company/"})
    public ResponseEntity<CompanyAdvancedRankingResponse> getCompanyAdvancedRanking(
            @PathVariable(required = false) String companyName,
            @RequestParam(defaultValue = "6") int limitPerType) {
        
        // 성능 최적화: 1번 DB 조회로 3가지 알고리즘 처리
        Map<String, List<Card>> rankingResults = advancedRankingService.getOptimizedCompanyRanking(companyName, limitPerType);
        
        CompanyAdvancedRankingResponse response = CompanyAdvancedRankingResponse.builder()
                .companyName(companyName)
                .bestSellers(rankingResults.get("bestSellers"))
                .steadySellers(rankingResults.get("steadySellers"))
                .trending(rankingResults.get("trending"))
                .build();
        
        return ResponseEntity.ok(response);
    }

    /**
     * 응답 DTO 클래스
     * 카드사별 3가지 알고리즘 결과를 담는 객체
     */
    @lombok.Data
    @lombok.Builder
    public static class CompanyAdvancedRankingResponse {
        private String companyName;
        private List<Card> bestSellers;    // Wilson Score 결과
        private List<Card> steadySellers;  // Exponential Smoothing 결과  
        private List<Card> trending;       // Decay Function 결과
    }
}