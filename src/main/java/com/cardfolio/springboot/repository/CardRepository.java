package com.cardfolio.springboot.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cardfolio.springboot.dto.CardDto;

@Repository	
public interface CardRepository extends JpaRepository<CardDto, Long> {
	
	@Query(value = "SELECT * FROM (SELECT c.*, ROW_NUMBER() OVER (ORDER BY c.id) rn FROM cards c WHERE c.type = :type) WHERE rn BETWEEN :offset + 1 AND :offset + :size", 
	       nativeQuery = true)
	List<CardDto> findByTypeWithPagination(@Param("type") String type, 
	                                       @Param("offset") int offset, 
	                                       @Param("size") int size);
	
	@Query(value = "SELECT COUNT(*) FROM cards WHERE type = :type", nativeQuery = true)
	long countByType(@Param("type") String type);

}
