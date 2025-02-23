package com.cardfolio.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cardfolio.springboot.dto.CardDto;
import com.cardfolio.springboot.repository.CardRepository;

@Service
public class CardService {
	private final CardRepository cardRepository;
	
	public CardService(CardRepository cardRepository) {
		this.cardRepository = cardRepository;
	}
	
	//Retrieve Card Type
	public List<CardDto> getCardByType(String type) {
		return cardRepository.findByType(type);
	}
	
}
