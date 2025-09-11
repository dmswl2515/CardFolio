package com.cardfolio.springboot.entity;

import java.util.Date;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "CARD_BENEFITS")
public class CardBenefit {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDX")
	private Long id;
	
	@Column(name = "CARD_ID")
	private String cardId;
	
	@Column(name = "BENEFIT_SEQ")
	private Integer benefitSeq;

	@Column(name = "MAIN_CATEGORY")
	private String mainCategory;

	@Column(name = "CATEGORY")
	private String category;

	@Column(name = "SUMMARY")
	private String summary;
	
	@Lob
	@Column(name = "DETAIL_HTML")
	private String detailHtml;
	
	@Column(name = "CREATED_BY")
	private String createdBy;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CREATED_DATE")
	private Date createdDate;
	
	@Column(name = "MODIFIED_BY")
	private String modifiedBy;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "MODIFIED_DATE")
	private Date modifiedDate;
}