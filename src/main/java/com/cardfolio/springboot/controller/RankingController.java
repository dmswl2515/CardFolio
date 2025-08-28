package com.cardfolio.springboot.controller;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.service.common.CardRankingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ranking")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RankingController {

    private final CardRankingService cardRankingService;

    // 전체 랭킹
    @GetMapping("/overall")
    public ResponseEntity<List<Card>> getOverallRanking(
            @RequestParam(defaultValue = "100") int limit) {
        List<Card> cards = cardRankingService.getRankedCards(
                CardRankingService.RankingType.OVERALL, null, limit);
        return ResponseEntity.ok(cards);
    }

    // 카드타입별 랭킹 (신용/체크)
    @GetMapping("/type/{cardType}")
    public ResponseEntity<List<Card>> getTypeRanking(
            @PathVariable String cardType,
            @RequestParam(defaultValue = "100") int limit) {
        List<Card> cards = cardRankingService.getRankedCards(
                CardRankingService.RankingType.CARD_TYPE, cardType, limit);
        return ResponseEntity.ok(cards);
    }

    // 카드사별 랭킹
    @GetMapping("/company/{company}")
    public ResponseEntity<List<Card>> getCompanyRanking(
            @PathVariable String company,
            @RequestParam(defaultValue = "100") int limit) {
        List<Card> cards = cardRankingService.getRankedCards(
                CardRankingService.RankingType.COMPANY, company, limit);
        return ResponseEntity.ok(cards);
    }

    // 혜택별 랭킹 (통신사, 영화, 쇼핑 등)
    @GetMapping("/benefit/{category}")
    public ResponseEntity<List<Card>> getBenefitRanking(
            @PathVariable String category,
            @RequestParam(defaultValue = "100") int limit) {
        List<Card> cards = cardRankingService.getRankedCards(
                CardRankingService.RankingType.BENEFIT, category, limit);
        return ResponseEntity.ok(cards);
    }

    // 신규카드 랭킹
    @GetMapping("/new-release")
    public ResponseEntity<List<Card>> getNewReleaseRanking(
            @RequestParam(defaultValue = "100") int limit) {
        List<Card> cards = cardRankingService.getRankedCards(
                CardRankingService.RankingType.NEW_RELEASE, null, limit);
        return ResponseEntity.ok(cards);
    }

    // 전월실적별 랭킹
    @GetMapping("/previous-performance/{amount}")
    public ResponseEntity<List<Card>> getPreviousPerformanceRanking(
            @PathVariable String amount,
            @RequestParam(defaultValue = "100") int limit) {
        List<Card> cards = cardRankingService.getRankedCards(
                CardRankingService.RankingType.PREVIOUS_PERFORMANCE, amount, limit);
        return ResponseEntity.ok(cards);
    }

    // 카드사별 캐시백 Top5
    @GetMapping("/event/{keyword}")
    public ResponseEntity<List<Card>> getCardsByEvent(
            @PathVariable String keyword,
            @RequestParam(defaultValue = "5") int limit) {
        List<Card> cards = cardRankingService.getCardsByEvent(keyword, limit);
        return ResponseEntity.ok(cards);
    }
    
    // 카드 타입별 랭킹 (할인형/포인트형/마일리지형) TOP30
    @GetMapping("/benefit-type/{typeKeyword}")
    public ResponseEntity<List<Card>> getCardsByBenefitType(
            @PathVariable String typeKeyword,
            @RequestParam(defaultValue = "30") int limit) {
        List<Card> cards = cardRankingService.getCardsByBenefitType(typeKeyword, limit);
        return ResponseEntity.ok(cards);
    }

}