package com.cardfolio.springboot.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.cardfolio.springboot.dto.CardDto;
import com.cardfolio.springboot.repository.CardRepository;

@Service
public class CardService {
	private final CardRepository cardRepository;
	
	public CardService(CardRepository cardRepository) {
		this.cardRepository = cardRepository;
	}

	public Page<CardDto> getCardByType(String type, Pageable pageable) {
		int offset = (int) pageable.getOffset();
		int size = pageable.getPageSize();
		
		// 페이지네이션된 데이터 조회
		List<CardDto> cards = cardRepository.findByTypeWithPagination(type, offset, size);
		
		// 전체 개수 조회
		long total = cardRepository.countByType(type);
		
		// Page 객체 수동 생성
		return new PageImpl<>(cards, pageable, total);
	}
	
}
