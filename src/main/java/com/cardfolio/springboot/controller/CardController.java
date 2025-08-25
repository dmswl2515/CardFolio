package com.cardfolio.springboot.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

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
	public Page<CardDto> getCardsByType(@PathVariable String type,
										@RequestParam(defaultValue = "0") int page,
										@RequestParam(defaultValue = "10") int size) {
		Pageable pageable = PageRequest.of(page, size);
		return cardService.getCardByType(type, pageable);
	}
	
	
	

}
