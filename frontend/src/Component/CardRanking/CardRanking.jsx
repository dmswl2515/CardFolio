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
    position: relative;
    width: 80%;
    max-width: 1200px;
    min-width: 440px;
    padding: 10px 20px;
    background-image: url(https://api.card-gorilla.com:8080/storage/corp/2/tips/29097/tips_card_top_bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #ffffff;
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.5);
        pointer-events: none;
    }

    &::before {
        content: "";
        position: absolute;
        left: 61%;
        bottom: 8%;
        width: 130px;
        height: 200px;
        transform: skew(0, 2deg);
        -webkit-filter: blur(1px);
        filter: blur(1px);
        z-index: 0;
        border-radius: 10px;
        background-image: url(${({ bgImage }) => bgImage});
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    z-index: 2;
`;

const CheckButton = styled.div`
    background: #ffac00;
    padding: 1px 8px;
    border-radius: 15px;
    color : black;
    z-index: 2;
    cursor: pointer;
    margin-left: 10px;
`;

const AllChartBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-right: 40px;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    background: #ffffff40;
    cursor: pointer;
    z-index: 2;
    margin-left: auto;
`;

const SubInfo = styled.div`
    position: relative;
    z-index: 2;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 25px;
    margin-right: 25px;
    padding: 0 0 15px 0;
    border-bottom: 0.1px solid hsla(0, 0%, 100%, 0.2);

    span: nth-child(1),
    span:nth-child(2) {
    color: ${({ showTabs }) => (showTabs ? "gray" : "white")};
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
    position: relative;
    margin-top: 20px;
    padding: 15px 0;
    backgorund-color: black;
    color: black;
    z-index: 2;
`;

const QuestionMark = styled.div`
    position: absolute;
    top: 80%;
    left: 92.5%;
    font-size: 20px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
`;

const TopListBtn = styled.div`
    display: ${({ isTop }) => (isTop ? 'none' : 'flex')};
    align-items: center;
    color: #ccc;
    margin-left: auto;
`;

const CardItem = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 35px 15px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: ${({ isTop }) => (isTop ? 'none' : '#fff')};
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
        color: #ffac00;

        ${TopListBtn} {
            color: #ffac00;
        }
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`;

const CardName = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${({ isTop }) => (isTop ? '#fff' : '#333' )};

    &:hover {
        color : #ffac00;
    }
`;

const CardCompany = styled.div`
    font-size: 14px;
    color: ${({ isTop }) => (isTop ? '#ffffff99' : '#757575')};
`;

const CardRank = styled.div`
    font-size: ${({ isTop }) => (isTop ? '36px' : '24px')};
    font-weight: ${({ rank }) => (rank <= 3 ? 'bold' : 'normal')};
    margin: ${({ isTop }) => (isTop ? '0 15px 0 5px' : '0 20px')};
    color: ${({ isTop }) => (isTop ? '#fff' : '#333' )};
    width: 40px;
    text-align: center;
`;

const RankingNum = styled.div`
    margin-left: 20px;
    margin-right: 50px;
    color: #7FCCF0;

    i {
        margin-right: 5px;
    }
`;

const Card = ({ card, rank, isTop }) => (
    <CardItem isTop={isTop}>
        <CardRank rank={rank} isTop={isTop}>{rank}</CardRank>
        <RankingNum>
            <i class="fa-solid fa-caret-up"></i>
            1
        </RankingNum>
        <TopImgContainer isTop={isTop}>
            <CircleBackground isTop={isTop} />
            <TopItemImg src={card.img} alt={card.name} />
        </TopImgContainer>
        <CardContent>
            <CardName isTop={isTop}>{card.name}</CardName>
            <CardCompany isTop={isTop}>{card.company}</CardCompany>
        </CardContent>
        <TopListBtn isTop={isTop}>
            <i class="fa-solid fa-chevron-right"></i>
        </TopListBtn>
    </CardItem>
);

/* Card Event Top5 */
const extractNumber = (str) => {
    const match = str.match(/[\d.]+/g);
    return match ? parseFloat(match[0]) : 0;
};

/* Card Chart Period */
const getDateRange = (isNewRelease) => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);
    
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const formatDate = (date) => `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
    const formattedFirstDay = formatDate(firstDayOfYear);
    const formattedToday = formatDate(today);
    const formattedMonday = formatDate(monday);
    const formattedSunday = formatDate(sunday);

    return isNewRelease ? `${formattedFirstDay} ~ ${formattedToday}` : `${formattedMonday} ~ ${formattedSunday}`;
};

const CardRanking = ({ title, isNewRelease, cardCompany, cardType = null, showTabs = true }) => {
    const dateRange = getDateRange(isNewRelease);

    /* For Filtering Release */
    const filteredData = useMemo(() => {
        let data = [...CardData];
        
        /* For Filtering Release(2025) */
        if (isNewRelease) {
            data = data.filter(card => card.release.startsWith("2025"));
        }

        /* Filtering cardType */
        if (cardType) {
            data = data.filter(card => card.type === cardType);
        }

        /* Filtering Card Company */
        if (cardCompany) {
            data = data.filter(card => card.company === cardCompany);
        }

        return data;
    }, [isNewRelease, cardType, cardCompany]);
    
    /* For Filtering Count */
    const sortedData = useMemo(() => [...filteredData].sort((a, b) => b.count - a.count), [filteredData]);

    const topCard = sortedData.length > 0 ? sortedData[0] : null;
    const otherCards = sortedData.slice(1);

    const sortedEvents = [...CardData].sort((a, b) => {
        const numA = extractNumber(a.event);
        const numB = extractNumber(b.event);
        return numB - numA;
    });
    const topFiveEvents = sortedEvents.slice(0, 5);

    return (
        <Container>
            {topCard ? ( 
                <TitleSection bgImage={topCard.img}>
                    <TitleContainer>
                        <Title>{title}</Title>
                        <CheckButton><i class="fa-solid fa-check"></i></CheckButton>
                        <AllChartBtn>
                            <i class="fa-solid fa-chevron-left"></i>
                            전체 차트
                        </AllChartBtn>
                    </TitleContainer>
                    <SubInfo showTabs={showTabs}>
                        {showTabs && (
                            <>
                                <span>WEEKLY</span> 
                                <span>MONTHLY</span> &nbsp;&nbsp;&nbsp;    
                            </>
                        )}
                        <span>{dateRange}</span>
                        <span role="img" aria-label="calendar">
                            📅
                        </span>
                    </SubInfo>
                    <TopCardWrapper>
                        <Card card={topCard} rank={1} isTop={true} />
                    </TopCardWrapper>
                    <QuestionMark>
                        <i class="fa-sharp fa-regular fa-circle-question"></i>
                    </QuestionMark>
                </TitleSection>
            ) : (
                <div>카드 데이터가 없습니다.</div>
            )}
            <SectionContainer>
                <LeftSection>
                    <CardWrapper>
                        {otherCards.map((card, index) => (
                            <Card 
                                key={card.id} 
                                card={card} 
                                rank={index + 2} 
                                isTop={false} 
                            />
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
                                <h3>카드사 별 캐시백</h3>
                                <span>TOP 5</span>
                            </TopListTitle>
                            <TopListItem>
                                {topFiveEvents.map((card, index) => (
                                <TopListItemWrapperContainer>    
                                    <TopListItemWrapper key={index}>
                                        <TopImgContainer>
                                            <CircleBackground />
                                            <TopItemImg src={card.img} alt={`${card.company} 로고`} />
                                        </TopImgContainer>
                                        <TopTextContainer>
                                            <TopItemCompany>{card.company}</TopItemCompany>
                                            <TopItemEvent>
                                                {card.event.replace(/^최대\s*/, '').split(' ').map((part, index) => {
                                                    if (index == 0) {
                                                        return <span key={index} style={{ fontWeight: 'bold', marginRight: '5px' }}>{part}</span>
                                                    } else {
                                                        return <span key={index} style={{ fontWeight: 'normal' }}>{part}</span>
                                                    }
                                                })}
                                            </TopItemEvent>
                                        </TopTextContainer>
                                        <TopListBtn>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </TopListBtn>
                                    </TopListItemWrapper>
                                    <Hr />
                                </TopListItemWrapperContainer>
                                ))}

                                <MoreEventButton>
                                    이벤트 더 보기
                                </MoreEventButton>
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
    padding: 30px 0;
    border-radius: 40px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 25%; 
        left: 0;
        width: 100%;
        height: 100%; 
        background: black;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        z-index: 0;
    }
`;

const TopListContainer = styled.div`   
    position: relative;
    z-index: 1;
`;

const TopListTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-right: 15px;
    margin-top: -15px;

    img {
        width: 45px;
        height: 45px;
    }

    h3 {
        font-size: 22px;
        font-weight: 600;
    }
    
    span {
        margin-left: -4px;
        font-size: 26px;
        font-weight: 700;
    }
`;

const TopListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 40px;
    margin: 0 25px;
    background: #fff;
    border-radius: 30px;
    cursor: pointer;
`;

const TopItemEvent = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: #000;
`;

const TopListItemWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-last-child(2) hr {
        display: none;
    }
`;

const TopListItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
    transition: color 0.3s ease;

    &:hover ${TopItemEvent}, &:hover ${TopListBtn} {
        color: #01630a; 
    }
`;

const TopImgContainer =styled.div`
    position: relative;
    width: ${({ isTop }) => (isTop ? '60px' : '40px')};
    height: ${({ isTop }) => (isTop ? '90px' : '60px')};
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ isTop }) => (isTop ? '90px' : '65px')};
    height: ${({ isTop }) => (isTop ? '90px' : '65px')};
    background-color: ${({isTop}) => (isTop ? '#383734' : '#f5f5f5')};
    border-radius: 50%;
    z-index: 2;
`;

const TopTextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const TopItemCompany = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #888;
`;

const Hr = styled.hr`
    width: 100%;
    border: 0.5px solid #eee;
`;

const MoreEventButton = styled.div`
    font-weight: 600;
    text-align: center;
    border-radius: 30px;
    background: #EEE;
    padding: 13px 20px;

    &:hover {
        background: #ddd;
    }
`;


export default CardRanking;