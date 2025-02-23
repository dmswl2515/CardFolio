package com.cardfolio.springboot.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cardfolio.springboot.dto.CardDto;

@Repository	
public interface CardRepository extends JpaRepository<CardDto, Long> {
	
	List<CardDto> findByType(String type);
	

}
