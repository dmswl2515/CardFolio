package com.cardfolio.springboot.entity;

import java.util.Date;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "CARDS")
public class Card {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
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
	
	// 알고리즘으로 계산된 점수 (DB에 저장되지 않는 런타임 필드)
	@Transient
	private Double algorithmScore;

}
