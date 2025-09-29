package com.cardfolio.springboot.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.service.CardService;

@WebMvcTest(CardController.class)
@DisplayName("CardController Web Layer 테스트")
class CardControllerTest {

    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private CardService cardService;
    
    private Card testCard;
    
    @BeforeEach
    void setUp() {
        testCard = new Card();
        testCard.setId(1L);
        testCard.setCardId("CARD001");
        testCard.setName("테스트 신용카드");
        testCard.setCompany("테스트카드");
        testCard.setType("credit");
        testCard.setEvent("5% 캐시백 이벤트");
        testCard.setViews(1500);
        testCard.setUserRating(4.5);
        testCard.setIsSponsored(false);
    }
    
    @Test
    @DisplayName("카드 타입별 조회 API - 성공")
    void getCardsByType_Success() throws Exception {
        // given
        List<Card> cards = Arrays.asList(testCard);
        Page<Card> cardPage = new PageImpl<>(cards, PageRequest.of(0, 10), 1);
        when(cardService.getCardByType(anyString(), any())).thenReturn(cardPage);
        
        // when & then
        mockMvc.perform(get("/api/cards/type/credit")
                .param("page", "0")
                .param("size", "10")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray())
                .andExpect(jsonPath("$.content[0].name").value("테스트 신용카드"))
                .andExpect(jsonPath("$.content[0].company").value("테스트카드"))
                .andExpect(jsonPath("$.content[0].type").value("credit"))
                .andExpect(jsonPath("$.totalElements").value(1));
    }
    
    @Test
    @DisplayName("카드 ID로 단일 카드 조회 - 성공")
    void getCardById_Success() throws Exception {
        // given
        when(cardService.getCardByCardId("CARD001")).thenReturn(Optional.of(testCard));
        
        // when & then
        mockMvc.perform(get("/api/cards/CARD001")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.cardId").value("CARD001"))
                .andExpect(jsonPath("$.name").value("테스트 신용카드"))
                .andExpect(jsonPath("$.company").value("테스트카드"))
                .andExpect(jsonPath("$.event").value("5% 캐시백 이벤트"));
    }
    
    @Test
    @DisplayName("카드 ID로 단일 카드 조회 - 카드 없음")
    void getCardById_NotFound() throws Exception {
        // given
        when(cardService.getCardByCardId("NONEXISTENT")).thenReturn(Optional.empty());
        
        // when & then
        mockMvc.perform(get("/api/cards/NONEXISTENT")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound());
    }
    
    @Test
    @DisplayName("이벤트 카드 전체 조회 API - 성공")
    void getCardsWithEvents_All() throws Exception {
        // given
        Card eventCard1 = new Card();
        eventCard1.setName("이벤트 카드1");
        eventCard1.setCompany("신한카드");
        eventCard1.setEvent("10% 할인");
        
        Card eventCard2 = new Card();
        eventCard2.setName("이벤트 카드2");
        eventCard2.setCompany("현대카드");
        eventCard2.setEvent("적립금 증정");
        
        List<Card> eventCards = Arrays.asList(eventCard1, eventCard2);
        when(cardService.getCardsWithEvents(null)).thenReturn(eventCards);
        
        // when & then
        mockMvc.perform(get("/api/cards/events")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].name").value("이벤트 카드1"))
                .andExpect(jsonPath("$[0].event").value("10% 할인"))
                .andExpect(jsonPath("$[1].name").value("이벤트 카드2"));
    }
    
    @Test
    @DisplayName("특정 회사 이벤트 카드 조회 API - 성공")
    void getCardsWithEvents_ByCompany() throws Exception {
        // given
        Card eventCard = new Card();
        eventCard.setName("신한 이벤트 카드");
        eventCard.setCompany("신한카드");
        eventCard.setEvent("5% 캐시백");
        
        List<Card> eventCards = Arrays.asList(eventCard);
        when(cardService.getCardsWithEvents("신한카드")).thenReturn(eventCards);
        
        // when & then
        mockMvc.perform(get("/api/cards/events")
                .param("company", "신한카드")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].company").value("신한카드"))
                .andExpect(jsonPath("$[0].event").value("5% 캐시백"));
    }
    
    @Test
    @DisplayName("회사별 혜택별 카드 조회 API - 성공")
    void getCardsByBenefit_Success() throws Exception {
        // given
        Card benefitCard = new Card();
        benefitCard.setName("쇼핑 혜택 카드");
        benefitCard.setCompany("현대카드");
        benefitCard.setBenefit1("쇼핑 5% 적립");
        
        List<Card> benefitCards = Arrays.asList(benefitCard);
        when(cardService.getCardsByBenefit("현대카드", "쇼핑")).thenReturn(benefitCards);
        
        // when & then
        mockMvc.perform(get("/api/cards/company/현대카드/benefit/쇼핑")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].name").value("쇼핑 혜택 카드"))
                .andExpect(jsonPath("$[0].company").value("현대카드"))
                .andExpect(jsonPath("$[0].benefit1").value("쇼핑 5% 적립"));
    }
    
    @Test
    @DisplayName("회사별 혜택별 카드 조회 API - 결과 없음")
    void getCardsByBenefit_EmptyResult() throws Exception {
        // given
        when(cardService.getCardsByBenefit("존재하지않는카드사", "존재하지않는혜택")).thenReturn(Arrays.asList());
        
        // when & then
        mockMvc.perform(get("/api/cards/company/존재하지않는카드사/benefit/존재하지않는혜택")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(0));
    }
}