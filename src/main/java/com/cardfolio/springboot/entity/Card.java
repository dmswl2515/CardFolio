package com.cardfolio.springboot.entity;

import java.util.Date;
import java.util.List;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "CARDS")
public class Card {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDX")
	private Long id;
	
	@Column(name = "CARD_ID")
	private String cardId;
	
	private String img;
	
	private String name;
	
	private String type;
	
	private String event;
	
	private String company;
	
	private String benefit1;
	
	private String benefit2;
	
	private String benefit3;
	
	private String benefitcontent1;
	
	private String benefitcontent2;
	
	private String benefitcontent3;
	
	private String annualfee;
	
	private String condition;
	
	@Column(name = "ISSUETYPE")
	private String issueType;
	
	private Integer views;
	
	@Temporal(TemporalType.DATE)
	private Date release;
	
	// 랭킹 알고리즘용 추가 필드
	@Column(name = "USER_RATING")
	private Double userRating = 4.2; // 사용자 평점 (1-5), 기본값 4.2
	
	@Column(name = "IS_SPONSORED")
	private Boolean isSponsored = false; // 광고/제휴 카드 여부
	
	// 알고리즘으로 계산된 점수 (DB에 저장되지 않는 런타임 필드)
	@Transient
	private Double algorithmScore;
	
	// 카드 혜택 리스트 (DB에 저장되지 않는 런타임 필드)
	@Transient
	private List<CardBenefit> benefits;

}
