import React from "react";
import styled from "styled-components";
import CardData from "../CardData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 10px 20px;
  background-color: #212529;
  color: #ffffff;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubInfo = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

const CardItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f9f9f9;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 15px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CardCompany = styled.div`
  font-size: 14px;
  color: #757575;
`;

const CardRank = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: auto;
  color: #333;
`;

const CardRanking = () => {
    const sortedData = CardData.sort((a, b) => b.count - a.count);

    return (
        <Container>
            <TitleSection>
                <Title>고릴라 TOP 100</Title>
                <SubInfo>
                <span>WEEKLY</span>
                <span>2025.1.27 ~ 2025.2.2</span>
                <span role="img" aria-label="calendar">
                    📅
                </span>
                </SubInfo>
            </TitleSection>
            

            <CardWrapper>
                {sortedData.map((card, index) => (
                <CardItem key={card.id}>
                    <CardImage src={card.img} alt={card.name} />
                    <CardContent>
                    <CardName>{card.name}</CardName>
                    <CardCompany>{card.company}</CardCompany>
                    </CardContent>
                    <CardRank>{index + 1}</CardRank>
                </CardItem>
                ))}
            </CardWrapper>
        </Container>
    );
}

export default CardRanking;