package com.cardfolio.springboot.dto;

import com.cardfolio.springboot.entity.Card;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CardScoreDto {

    private Card card;
    private Double score;
}
