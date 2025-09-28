package com.cardfolio.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching  // Spring Cache 활성화
public class CardFolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(CardFolioApplication.class, args);
	}

}
