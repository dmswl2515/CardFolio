package com.cardfolio.springboot.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.cardfolio.springboot.entity.Card;

@DataJpaTest
@DisplayName("CardRepository 통합 테스트")
class CardRepositoryTest {
    
    // H2 인메모리 DB를 사용하여 테스트

    @Autowired
    private TestEntityManager entityManager;
    
    @Autowired
    private CardRepository cardRepository;
    
    private Card testCard1;
    private Card testCard2;
    
    @BeforeEach
    void setUp() {
        // 테스트 데이터 준비
        testCard1 = new Card();
        testCard1.setCardId("TEST001");
        testCard1.setName("신한 플래티넘 카드");
        testCard1.setCompany("신한카드");
        testCard1.setType("credit");
        testCard1.setEvent("5% 캐시백 이벤트");
        testCard1.setViews(1000);
        testCard1.setUserRating(4.5);
        testCard1.setBenefit1("쇼핑 5% 적립");
        testCard1.setBenefit2("주유 3% 적립");
        
        testCard2 = new Card();
        testCard2.setCardId("TEST002");
        testCard2.setName("현대 골드 카드");
        testCard2.setCompany("현대카드");
        testCard2.setType("credit");
        testCard2.setViews(800);
        testCard2.setUserRating(4.2);
        testCard2.setBenefit1("쇼핑 3% 적립");
        testCard2.setBenefit2("카페 2% 적립");
        
        // 데이터 저장
        entityManager.persist(testCard1);
        entityManager.persist(testCard2);
        entityManager.flush();
    }
    
    @Test
    @DisplayName("카드 ID로 조회 - JPA 기본 메서드")
    void findById_Success() {
        // when
        Optional<Card> found = cardRepository.findById(testCard1.getId());
        
        // then
        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("신한 플래티넘 카드");
        assertThat(found.get().getCompany()).isEqualTo("신한카드");
    }
    
    @Test
    @DisplayName("존재하지 않는 ID로 조회")
    void findById_NotFound() {
        // when
        Optional<Card> found = cardRepository.findById(999L);
        
        // then
        assertThat(found).isEmpty();
    }
    
    @Test
    @DisplayName("전체 카드 조회")
    void findAll() {
        // when
        List<Card> cards = cardRepository.findAll();
        
        // then
        assertThat(cards).hasSize(2);
        assertThat(cards).extracting(Card::getName)
                        .contains("신한 플래티넘 카드", "현대 골드 카드");
    }
    
    @Test
    @DisplayName("카드 저장 및 조회")
    void saveAndFind() {
        // given
        Card newCard = new Card();
        newCard.setCardId("NEW001");
        newCard.setName("새로운 카드");
        newCard.setCompany("새로운카드사");
        newCard.setType("credit");
        
        // when
        Card saved = cardRepository.save(newCard);
        Optional<Card> found = cardRepository.findById(saved.getId());
        
        // then
        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("새로운 카드");
        assertThat(found.get().getCompany()).isEqualTo("새로운카드사");
        assertThat(found.get().getCardId()).isEqualTo("NEW001");
    }
}