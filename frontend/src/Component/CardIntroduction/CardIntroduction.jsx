import React from "react";
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchCardsWithEvents } from '../../api/cardApi';
import { fetchCompanyAdvancedRanking, fetchBenefitRanking } from '../../api/rankingApi';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import "./CardIntroduction.css";
import "../../Styles/Style.css";

{/* individual card component */}
const Card = ({ title, imageUrl, subtitle, circleColorClass, cardId, onClick }) => {
    return (
        <div className={`card ${circleColorClass}`} onClick={() => onClick(cardId)} style={{ cursor: 'pointer' }}>
            <img src={imageUrl} alt={title} className="card-image-main" />
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">{subtitle}</p>
        </div>
    );
};

{/* cardlist component */}
const CardList = ({ cards, backgroundColor, circleColorClass, onCardClick }) => {
    return (
        <div className="card-list" style={{ backgroundColor: backgroundColor }}>
            <div className="cards">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        subtitle={card.subtitle}
                        cardId={card.cardId}
                        circleColorClass={circleColorClass}
                        onClick={onCardClick}
                    />
                ))}
            </div>
        </div>
    );
};

// 이벤트 텍스트에서 금액 파싱하는 함수
const parseAmount = (eventText) => {
    if (!eventText) return 0;
    
    // "7만원", "1.6만원", "5천원", "3000원" 등의 패턴 매칭
    const match = eventText.match(/(\d+(?:\.\d+)?)\s*(만원|천원|원)/);
    if (!match) return 0;
    
    const amount = parseFloat(match[1]);
    const unit = match[2];
    
    if (unit === '만원') return amount * 10000;
    if (unit === '천원') return amount * 1000;
    return amount;
};

const CardIntroduction = ({ 
    backgroundColor, 
    buttonColor, 
    circleColorClass, 
    sectionTitle1, 
    sectionTitle2,
    showEventCards = true,
    showBestSellerCards = true,
    showUtilityCards = false,
    showTravelCards = false,
    showCustomCards = false,
    customCardsData = []
}) => {
    const navigate = useNavigate();

    const handleCardClick = (cardId) => {
        navigate(`/card/${cardId}`);
    };
    // 이벤트 카드 조회
    const {
        data: eventCardsData = [],
        isLoading: isEventLoading,
        isError: isEventError
    } = useQuery({
        queryKey: ['eventCards'],
        queryFn: () => fetchCardsWithEvents(),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
        enabled: showEventCards
    });

    // 베스트셀러 카드 조회 (고급 알고리즘 적용)
    const {
        data: bestSellerData = {},
        isLoading: isBestSellerLoading,
        isError: isBestSellerError
    } = useQuery({
        queryKey: ['bestSellerCards'],
        queryFn: () => fetchCompanyAdvancedRanking('', 6),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
        enabled: showBestSellerCards
    });

    // 공과금 혜택 카드 조회
    const {
        data: utilityBenefitData = [],
        isLoading: isUtilityLoading,
        isError: isUtilityError
    } = useQuery({
        queryKey: ['utilityBenefitCards'],
        queryFn: () => fetchBenefitRanking('공과금', 6),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
        enabled: showUtilityCards
    });

    // 여행+바우처 혜택 카드 조회
    const {
        data: travelBenefitData = [],
        isLoading: isTravelLoading,
        isError: isTravelError
    } = useQuery({
        queryKey: ['travelBenefitCards'],
        queryFn: () => fetchBenefitRanking('여행', 6),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
        enabled: showTravelCards
    });

    // 금액 기준으로 이벤트 카드 정렬 (높은 금액순)
    const eventCards = showEventCards ? eventCardsData
        .map(card => ({ ...card, parsedAmount: parseAmount(card.event) }))
        .sort((a, b) => b.parsedAmount - a.parsedAmount)
        .slice(0, 6)
        .map(card => ({
            title: card.name,
            imageUrl: card.img,
            subtitle: card.company,
            cardId: card.cardId
        })) : [];

    // 베스트셀러 카드 데이터 (고급 알고리즘 적용)
    const bestSellerCards = showBestSellerCards && bestSellerData?.bestSellers ? 
        bestSellerData.bestSellers
            .slice(0, 6)
            .map(card => ({
                title: card.name,
                imageUrl: card.img,
                subtitle: card.company,
                cardId: card.cardId
            })) : [];

    // 공과금 혜택 카드 데이터
    const utilityCards = showUtilityCards ? utilityBenefitData
        .slice(0, 6)
        .map(card => ({
            title: card.name,
            imageUrl: card.img,
            subtitle: card.company,
            cardId: card.cardId
        })) : [];

    // 여행 혜택 카드 데이터
    const travelCards = showTravelCards ? travelBenefitData
        .slice(0, 6)
        .map(card => ({
            title: card.name,
            imageUrl: card.img,
            subtitle: card.company,
            cardId: card.cardId
        })) : [];

    // 커스텀 카드 데이터
    const customCards = showCustomCards ? customCardsData : [];

    // 로딩 상태 확인 (활성화된 쿼리만)
    const isLoading = (showEventCards && isEventLoading) || 
                     (showBestSellerCards && isBestSellerLoading) || 
                     (showUtilityCards && isUtilityLoading) ||
                     (showTravelCards && isTravelLoading);

    if (isLoading) {
        return (
            <div className="card-intro-container" style={{ backgroundColor }}>
                <div className="card-introduction">
                    {sectionTitle1 && <SkeletonLoader type="section" title={sectionTitle1} cardCount={6} backgroundClass={circleColorClass} />}
                    {sectionTitle2 && <SkeletonLoader type="section" title={sectionTitle2} cardCount={6} backgroundClass={circleColorClass} />}
                </div>
            </div>
        );
    }

    // 에러 처리 (에러 시에도 컴포넌트는 렌더링)
    if (isEventError || isBestSellerError || isUtilityError || isTravelError) {
        console.error('카드 데이터 로드 실패');
    }

    return (
        <div className="card-intro-container" style={{ backgroundColor }} >
            <div className="card-introduction">
                {/* 첫 번째 섹션 */}
                {sectionTitle1 && (
                    (showEventCards && eventCards.length > 0) ||
                    (showUtilityCards && utilityCards.length > 0) ||
                    (showTravelCards && travelCards.length > 0) ||
                    (showCustomCards && customCards.length > 0)
                ) && (
                    <>
                        <div className="section-header">
                            <hr2>{sectionTitle1}</hr2>
                        </div>
                        <CardList 
                            cards={showEventCards && eventCards.length > 0 ? eventCards : 
                                   showTravelCards && travelCards.length > 0 ? travelCards :
                                   showUtilityCards && utilityCards.length > 0 ? utilityCards : customCards} 
                            backgroundColor={backgroundColor}
                            circleColorClass={circleColorClass}
                            onCardClick={handleCardClick}
                        />
                    </>
                )}
                
                {/* 두 번째 섹션 */}
                {sectionTitle2 && (
                    (showBestSellerCards && bestSellerCards.length > 0) ||
                    (showUtilityCards && utilityCards.length > 0) ||
                    (showTravelCards && travelCards.length > 0) ||
                    (showCustomCards && customCards.length > 0)
                ) && (
                    <>
                        <div className="section-header">
                            <hr2>{sectionTitle2}</hr2>
                        </div>
                        <CardList 
                            cards={showBestSellerCards && bestSellerCards.length > 0 ? bestSellerCards : 
                                   showUtilityCards && utilityCards.length > 0 ? utilityCards : 
                                   showTravelCards && travelCards.length > 0 ? travelCards : customCards} 
                            backgroundColor={backgroundColor} 
                            circleColorClass={circleColorClass}
                            onCardClick={handleCardClick}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default CardIntroduction;
export { Card };