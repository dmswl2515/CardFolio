package com.cardfolio.springboot.service;

import java.util.List;
import java.util.Optional;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.entity.CardBenefit;
import com.cardfolio.springboot.repository.CardBenefitRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.cardfolio.springboot.repository.CardRepository;

@Service
public class CardService {
	private final CardRepository cardRepository;
	private final CardBenefitRepository cardBenefitRepository;
	
	public CardService(CardRepository cardRepository, CardBenefitRepository cardBenefitRepository) {
		this.cardRepository = cardRepository;
		this.cardBenefitRepository = cardBenefitRepository;
	}

	public Page<Card> getCardByType(String type, Pageable pageable) {
		int offset = (int) pageable.getOffset();
		int size = pageable.getPageSize();
		
		// 페이지네이션된 데이터 조회
		List<Card> cards = cardRepository.findByTypeWithPagination(type, offset, size);
		
		// 전체 개수 조회
		long total = cardRepository.countByType(type);
		
		// Page 객체 수동 생성
		return new PageImpl<>(cards, pageable, total);
	}
	
	public Optional<Card> getCardById(Long id) {
		return cardRepository.findById(id);
	}
	
	public List<CardBenefit> getCardBenefits(String cardId) {
		return cardBenefitRepository.findByCardIdOrderByBenefitSeq(cardId);
	}
	
	public Optional<Card> getCardByCardId(String cardId) {
		Optional<Card> cardOpt = cardRepository.findByCardId(cardId);
		if (cardOpt.isPresent()) {
			Card card = cardOpt.get();
			// 혜택 정보도 함께 조회해서 설정
			List<CardBenefit> benefits = getCardBenefits(cardId);
			card.setBenefits(benefits);
		}
		return cardOpt;
	}
	
}
