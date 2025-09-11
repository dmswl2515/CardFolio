package com.cardfolio.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cardfolio.springboot.entity.CardBenefit;

@Repository
public interface CardBenefitRepository extends JpaRepository<CardBenefit, Long> {
	
	// 카드 ID로 혜택 리스트 조회 (순서대로)
	@Query(value = "SELECT * FROM CARD_BENEFITS WHERE CARD_ID = :cardId ORDER BY BENEFIT_SEQ ASC", 
	       nativeQuery = true)
	List<CardBenefit> findByCardIdOrderByBenefitSeq(@Param("cardId") String cardId);
}