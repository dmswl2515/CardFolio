package com.cardfolio.springboot.controller;

import java.util.List;
import java.util.Optional;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.entity.CardBenefit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cardfolio.springboot.service.CardService;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "*")
public class CardController {
	
	private final CardService cardService;
	
	public CardController(CardService cardService) {
		this.cardService = cardService;
	}

	/**
	 *  신용카드/체크카드 조회
	 * @parma 카드타입
	 * @return 신용카드 또는 체크카드 타입의 데이터
	 * */
	@GetMapping("/type/{type}")
	public Page<Card> getCardsByType(@PathVariable String type,
									 @RequestParam(defaultValue = "0") int page,
									 @RequestParam(defaultValue = "10") int size) {
		Pageable pageable = PageRequest.of(page, size);
		return cardService.getCardByType(type, pageable);
	}
	
	@GetMapping("/{cardId}")
	public ResponseEntity<Card> getCardById(@PathVariable String cardId) {
		Optional<Card> card = cardService.getCardByCardId(cardId);
		return card.map(ResponseEntity::ok)
				   .orElse(ResponseEntity.notFound().build());
	}

	/**
	 * 이벤트가 있는 카드들 조회
	 * @param company 카드사명 (선택사항)
	 * @return 이벤트가 있는 카드 리스트
	 */
	@GetMapping("/events")
	public ResponseEntity<List<Card>> getCardsWithEvents(
			@RequestParam(required = false) String company) {
		List<Card> cards = cardService.getCardsWithEvents(company);
		return ResponseEntity.ok(cards);
	}

	/**
	 * 특정 회사의 특정 혜택별 카드 조회
	 * @param company 카드사명
	 * @param benefit 혜택명
	 * @return 해당 혜택을 제공하는 카드 리스트
	 */
	@GetMapping("/company/{company}/benefit/{benefit}")
	public ResponseEntity<List<Card>> getCardsByBenefit(
			@PathVariable String company,
			@PathVariable String benefit) {
		List<Card> cards = cardService.getCardsByBenefit(company, benefit);
		return ResponseEntity.ok(cards);
	}

}
