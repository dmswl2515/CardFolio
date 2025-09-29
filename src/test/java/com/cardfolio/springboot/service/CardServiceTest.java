package com.cardfolio.springboot.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.cardfolio.springboot.entity.Card;
import com.cardfolio.springboot.entity.CardBenefit;
import com.cardfolio.springboot.repository.CardBenefitRepository;
import com.cardfolio.springboot.repository.CardRepository;

@ExtendWith(MockitoExtension.class)
@DisplayName("CardService 단위 테스트")
class CardServiceTest {

    @Mock
    private CardRepository cardRepository;
    
    @Mock
    private CardBenefitRepository cardBenefitRepository;
    
    @InjectMocks
    private CardService cardService;
    
    private Card testCard;
    private CardBenefit testBenefit;
    
    @BeforeEach
    void setUp() {
        // 테스트용 카드 데이터 준비
        testCard = new Card();
        testCard.setId(1L);
        testCard.setCardId("CARD001");
        testCard.setName("테스트 카드");
        testCard.setCompany("테스트 카드사");
        testCard.setType("credit");
        testCard.setEvent("5% 캐시백 이벤트");
        testCard.setViews(1000);
        
        // 테스트용 혜택 데이터 준비
        testBenefit = new CardBenefit();
        testBenefit.setCardId("CARD001");
        testBenefit.setBenefitSeq(1);
        testBenefit.setMainCategory("쇼핑");
        testBenefit.setCategory("온라인쇼핑");
        testBenefit.setSummary("5% 적립");
    }
    
    @Test
    @DisplayName("카드 ID로 카드 조회 - 성공")
    void getCardById_Success() {
        // given
        when(cardRepository.findById(1L)).thenReturn(Optional.of(testCard));
        
        // when
        Optional<Card> result = cardService.getCardById(1L);
        
        // then
        assertThat(result).isPresent();
        assertThat(result.get().getName()).isEqualTo("테스트 카드");
        assertThat(result.get().getCompany()).isEqualTo("테스트 카드사");
    }
    
    @Test
    @DisplayName("카드 ID로 카드 조회 - 카드 없음")
    void getCardById_NotFound() {
        // given
        when(cardRepository.findById(999L)).thenReturn(Optional.empty());
        
        // when
        Optional<Card> result = cardService.getCardById(999L);
        
        // then
        assertThat(result).isEmpty();
    }
    
    @Test
    @DisplayName("카드ID로 카드 조회 - 혜택 포함")
    void getCardByCardId_WithBenefits() {
        // given
        List<CardBenefit> benefits = Arrays.asList(testBenefit);
        when(cardRepository.findByCardId("CARD001")).thenReturn(Optional.of(testCard));
        when(cardBenefitRepository.findByCardIdOrderByBenefitSeq("CARD001")).thenReturn(benefits);
        
        // when
        Optional<Card> result = cardService.getCardByCardId("CARD001");
        
        // then
        assertThat(result).isPresent();
        assertThat(result.get().getBenefits()).hasSize(1);
        assertThat(result.get().getBenefits().get(0).getMainCategory()).isEqualTo("쇼핑");
    }
    
    @Test
    @DisplayName("이벤트가 있는 카드들 조회 - 전체")
    void getCardsWithEvents_All() {
        // given
        Card eventCard1 = new Card();
        eventCard1.setName("이벤트 카드1");
        eventCard1.setEvent("10% 할인");
        
        Card eventCard2 = new Card();
        eventCard2.setName("이벤트 카드2");
        eventCard2.setEvent("적립금 증정");
        
        List<Card> eventCards = Arrays.asList(eventCard1, eventCard2);
        when(cardRepository.findByEventIsNotNullOrderByViewsDesc()).thenReturn(eventCards);
        
        // when
        List<Card> result = cardService.getCardsWithEvents(null);
        
        // then
        assertThat(result).hasSize(2);
        assertThat(result.get(0).getName()).isEqualTo("이벤트 카드1");
        assertThat(result.get(1).getName()).isEqualTo("이벤트 카드2");
    }
    
    @Test
    @DisplayName("이벤트가 있는 카드들 조회 - 특정 회사")
    void getCardsWithEvents_ByCompany() {
        // given
        Card eventCard = new Card();
        eventCard.setName("신한 이벤트 카드");
        eventCard.setCompany("신한카드");
        eventCard.setEvent("5% 캐시백");
        
        List<Card> eventCards = Arrays.asList(eventCard);
        when(cardRepository.findByCompanyAndEventIsNotNullOrderByViewsDesc("신한카드")).thenReturn(eventCards);
        
        // when
        List<Card> result = cardService.getCardsWithEvents("신한카드");
        
        // then
        assertThat(result).hasSize(1);
        assertThat(result.get(0).getCompany()).isEqualTo("신한카드");
        assertThat(result.get(0).getEvent()).isEqualTo("5% 캐시백");
    }
    
    @Test
    @DisplayName("특정 혜택별 카드 조회")
    void getCardsByBenefit() {
        // given
        Card benefitCard = new Card();
        benefitCard.setName("쇼핑 혜택 카드");
        benefitCard.setCompany("현대카드");
        benefitCard.setBenefit1("쇼핑 5% 적립");
        
        List<Card> benefitCards = Arrays.asList(benefitCard);
        when(cardRepository.findByCompanyAndBenefit1ContainingOrBenefit2ContainingOrBenefit3ContainingOrderByViewsDesc(
            "현대카드", "쇼핑", "쇼핑", "쇼핑")).thenReturn(benefitCards);
        
        // when
        List<Card> result = cardService.getCardsByBenefit("현대카드", "쇼핑");
        
        // then
        assertThat(result).hasSize(1);
        assertThat(result.get(0).getName()).isEqualTo("쇼핑 혜택 카드");
        assertThat(result.get(0).getBenefit1()).contains("쇼핑");
    }
}