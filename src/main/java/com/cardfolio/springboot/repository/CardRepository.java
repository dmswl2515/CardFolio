package com.cardfolio.springboot.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cardfolio.springboot.entity.Card;

@Repository	
public interface CardRepository extends JpaRepository<Card, Long> {
	
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.id) rn FROM cards c WHERE c.type = :type) WHERE rn BETWEEN :offset + 1 AND :offset + :size", 
	       nativeQuery = true)
	List<Card> findByTypeWithPagination(@Param("type") String type, 
	                                       @Param("offset") int offset, 
	                                       @Param("size") int size);
	
	@Query(value = "SELECT COUNT(*) FROM cards WHERE type = :type", nativeQuery = true)
	long countByType(@Param("type") String type);
	
	// ===== 랭킹용 메소드들 =====
	
	// 카드타입별 랭킹 (신용/체크)
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.views DESC NULLS LAST) rn FROM cards c WHERE c.type = :type) WHERE rn <= :limit", 
	       nativeQuery = true)
	List<Card> findByTypeOrderByScoreDesc(@Param("type") String type, @Param("limit") int limit);
	
	// 카드사별 랭킹
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.views DESC NULLS LAST) rn FROM cards c WHERE c.company = :company) WHERE rn <= :limit", 
	       nativeQuery = true)
	List<Card> findByCompanyOrderByScoreDesc(@Param("company") String company, @Param("limit") int limit);
	
	// 혜택별 랭킹 (benefit1, benefit2, benefit3 컬럼에서 키워드 검색)
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.views DESC NULLS LAST) rn FROM cards c WHERE LOWER(c.benefit1) LIKE LOWER('%' || :benefitCategory || '%') OR LOWER(c.benefit2) LIKE LOWER('%' || :benefitCategory || '%') OR LOWER(c.benefit3) LIKE LOWER('%' || :benefitCategory || '%')) WHERE rn <= :limit", 
	       nativeQuery = true)
	List<Card> findByBenefitCategoryOrderByScoreDesc(@Param("benefitCategory") String benefitCategory, @Param("limit") int limit);
	
	// 신규카드별 랭킹 (30일 이내)
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.release DESC, c.views DESC NULLS LAST) rn FROM cards c WHERE c.release >= SYSDATE - 30) WHERE rn <= :limit", 
	       nativeQuery = true)
	List<Card> findNewReleaseCardsOrderByScoreDesc(@Param("limit") int limit);
	
	// 전월실적별 랭킹 (condition 컬럼 사용)
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.views DESC NULLS LAST) rn FROM cards c WHERE LOWER(c.condition) LIKE LOWER('%' || :amount || '%')) WHERE rn <= :limit", 
	       nativeQuery = true)
	List<Card> findByPreviousPerformanceOrderByScoreDesc(@Param("amount") String amount, @Param("limit") int limit);
	
	// 전체 랭킹
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.views DESC NULLS LAST) rn FROM cards c) WHERE rn <= :limit", 
	       nativeQuery = true)
	List<Card> findAllOrderByCalculatedScore(@Param("limit") int limit);

	// 카드사별 캐시백 Top5
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (PARTITION BY c.company ORDER BY c.views DESC NULLS LAST) rn FROM cards c WHERE LOWER(c.event) LIKE LOWER('%' || :keyword || '%')) WHERE rn = 1 AND ROWNUM <= :limit", 
	       nativeQuery = true)
	List<Card> findByEventKeywordOrderByScoreDesc(@Param("keyword") String keyword, @Param("limit") int limit);

	// 카드 타입별 랭킹 (benefitcontent 기준 분류)
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.views DESC NULLS LAST) rn FROM cards c WHERE (LOWER(c.benefitcontent1) LIKE LOWER('%' || :typeKeyword || '%') OR LOWER(c.benefitcontent2) LIKE LOWER('%' || :typeKeyword || '%') OR LOWER(c.benefitcontent3) LIKE LOWER('%' || :typeKeyword || '%'))) WHERE rn <= :limit", 
	       nativeQuery = true)
	List<Card> findByBenefitTypeOrderByScoreDesc(@Param("typeKeyword") String typeKeyword, @Param("limit") int limit);


}
