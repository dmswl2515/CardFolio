package com.cardfolio.springboot.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cardfolio.springboot.dto.CardDto;
import com.cardfolio.springboot.service.CardService;

@RestController
@RequestMapping("/api/cards")
@CrossOrigin(origins = "*")
public class CardController {
	
	private final CardService cardService;
	
	public CardController(CardService cardService) {
		this.cardService = cardService;
	}
	
	@GetMapping("/type/{type}")
	public List<CardDto> getCardsByType(@PathVariable String type) {
		return cardService.getCardByType(type);
	}
	
	
	

}
