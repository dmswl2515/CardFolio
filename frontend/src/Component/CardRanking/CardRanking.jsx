import { useMemo } from "react";
import styled from "styled-components";
import CardData from "../CardData";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f4f2f2;
`;

const TitleSection = styled.div`
    width: 80%;
    max-width: 1200px;
    min-width: 440px;
    padding: 10px 20px;
    background-color: #212529;
    color: #ffffff;
    border-radius: 8px;
    margin-bottom: 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    position: relative;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const CheckButton = styled.div`
    position: absolute;
    top: 31%;
    left: 22%;
    background: #ffac00;
    padding: 3px 10px;
    border-radius: 15px;
    color : black;
`;

const SubInfo = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 20px;

    span: nth-child(1),
    span:nth-child(2) {
    color: gray;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
        color : #fff;
    }

    &:active {
        color : #FFAC00;
    }
    }
`;

const TopCardWrapper = styled.div`
    margin-top: 20px;
    padding: 15px 0;
    backgorund-color: black;
    color: black;
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
    transition: color 0.2s ease;

    &:hover {
    color: #ffac00;
    }
`;

const CardImage = styled.img`
    width: 40px;
    height: 60px;
    object-fit: contain;
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

const Card = ({ card, rank, isTop }) => (
    <CardItem isTop={isTop}>
        <CardImage src={card.img} alt={card.name} />
        <CardContent>
            <CardName>{card.name}</CardName>
            <CardCompany>{card.company}</CardCompany>
        </CardContent>
        <CardRank>{rank}</CardRank>
    </CardItem>
);

const CardRanking = () => {
    const sortedData = useMemo(() => [...CardData].sort((a, b) => b.count - a.count), [CardData]);

    const topCard = sortedData[0];
    const otherCards = sortedData.slice(1);

    const sortedEvents = CardData.sort((a, b) => {
        const numA = extractNumber(a.event);
        const numB = extractNumber(b.event);
        return numB - numA;
    });
    const topFiveEvents = sortedEvents.slice(0, 5);

    return (
        <Container>
            <TitleSection>
                <TitleContainer>
                    <Title>고릴라 TOP 100</Title>
                    <CheckButton><i class="fa-solid fa-check"></i></CheckButton>
                </TitleContainer>
                <SubInfo>
                    <span>WEEKLY</span> 
                    <span>MONTHLY</span> &nbsp;&nbsp;&nbsp;
                    <span>2025.1.27 ~ 2025.2.2</span>
                    <span role="img" aria-label="calendar">
                        📅
                    </span>
                    <hr/>
                </SubInfo>
                <TopCardWrapper>
                    <Card card={topCard} rank={1} isTop={true} />
                </TopCardWrapper>
            </TitleSection>
            
            <SectionContainer>
                <LeftSection>
                    <CardWrapper>
                        {otherCards.map((card, index) => (
                            <Card key={card.id} card={card} rank={index + 2} isTop={false} />
                        ))}
                    </CardWrapper>
                </LeftSection>

                <RightSection>
                    <Banner>
                        <a href ="#">
                            <BannerImage 
                                src="https://d1c5n4ri2guedi.cloudfront.net/display/3774/pc_img/28996/PC_%EC%84%9C%EB%B8%8C%EC%9A%B0%EC%B8%A1_340x340.jpg" 
                                alt="배너 이미지"
                                />
                        </a>    
                    </Banner>

                    <PollSection>
                        <PollTitle>
                            <h3>POLL</h3>
                            <span>투표 진행 중</span>
                        </PollTitle>
                        <PollContent>
                            <h2>2025년, 가장 절약하고 싶은 비용은?</h2>
                            <p>계속되는 불경기, 2025년에 가장 절약하고 싶은 비용은 무엇인가요?</p>
                        </PollContent>
                        <PollOption>
                           <p>여행비</p>
                           <p>주유비/차량 관련 비용</p>
                           <p>반려동물 관련 비용</p>
                           <p>쇼핑비</p>
                           <p>렌탈비</p>
                           <p>교육/자기개발비</p>
                           <p>병원비</p>
                           <p>교통비</p>
                           <p>외식/배달비</p>
                           <p>구독비 (멤버십, OTT 등)</p>
                           <p>장보기 비용</p>
                           <p>공과금/아파트관리비</p>
                           <p>통신비</p>
                           <p>문화생활비 (영화, 공연, 도서 등)</p>
                           <span>투표수 1,475</span>
                        </PollOption>
                    </PollSection>

                    <TopList>
                        <TopListContainer>
                            <TopListTitle>
                                <img src="https://api.card-gorilla.com:8080/storage/corp/2/tips/29197/tips_img_promo.png" alt="세종대왕 로고" />
                                <h3>카드사 별 캐시백 TOP 5</h3>
                            </TopListTitle>
                            <TopListItem>
                                {topFiveEvents.map((card, index) => (
                                <TopListItemWrapper key={index}>
                                    <TopImgContainer>
                                        <CircleBackground />
                                        <TopItemImg src={card.img} alt={`${card.company} 로고`} />
                                    </TopImgContainer>
                                    <TopTextContainer>
                                        <TopItemCompany>{card.company}</TopItemCompany>
                                        <TopItemEvent>{card.event}</TopItemEvent>
                                    </TopTextContainer>
                                </TopListItemWrapper>
                                ))}
                            </TopListItem>
                        </TopListContainer>
                    </TopList>
                </RightSection>
            </SectionContainer>    
        </Container>
    );
}

const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 83%;
`; 

const LeftSection = styled.div`
    width: 70%;
    margin-right: 20px;
`;

const RightSection = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Banner = styled.div`
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
`;

const PollSection = styled.div`
    background-color: #fff;
    padding: 0 25px 20px 25px;
    border-radius: 15px;
`;

const PollTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    h3 {
        font-size: 24px;
    }

    span {
        font-size: 15px;
        color: #777;
        margin-top: 5px;
    }
`;

const PollContent = styled.div`
    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: -5px;
    }

    p {
        font-size: 16px;
        color: #888;
        margin-bottom: 20px;
    }
`;

const PollOption = styled.div`
    p {
        font-size: 15px;
        background: #ddd;
        padding: 12px 20px;
        border-radius: 25px;
        background: linear-gradient(to right, #fff7e3, #f2f2f2);
    }
    
    span {
        display: flex;
        justify-content: flex-end;
        font-size: 14px;
        padding-top: 10px;
    }
    
    & p:hover {
        background: #f7e1b5;
    }
`;

const TopList = styled.div`
    position: relative;
    background: #8cde94;
    padding: 20px 0;
    border-radius: 20px;
`;

const TopListContainer = styled.div`   

`;

const TopListTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
        width: 45px;
        height: 45px;
    }
`;

const TopListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 20px;
    padding: 20px 0px;
`;

/* Card Event Top5 */
const extractNumber = (str) => {
    const match = str.match(/[\d.]+/g);
    return match ? parseFloat(match[0]) : 0;
};

const TopListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const TopImgContainer =styled.div`
    position: relative;
    width: 40px;
    height: 60px;
`;

const TopItemImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
`;

const CircleBackground = styled.div`
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50% - 50%);
    width: 65px;
    height: 65px;
    background-color: #f5f5f5;
    border-radius: 50%;
    z-index: 1;
`;

const TopTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const TopItemCompany = styled.span`
    font-size: 14px;
    color: #333;
`;

const TopItemEvent = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;


export default CardRanking;