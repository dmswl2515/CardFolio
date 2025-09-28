import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import CompanyDetail from "../../Component/CompanyDetail/CompanyDetail";
import CardEventList from "@components/CardEventList/CardEventList";
import EventList from "@components/EventList/EventList";
import MoreButton from '@components/MoreButton/MoreButton';
import CardBenefitsSelector from '@components/CardBenefitsSelector/CardBenefitsSelector';
import { getCompanyColor, getCompanyLightColor, cardProducts, handleCardEventClick } from '../../utils/companyUtils';
import EventData from "../../Component/EventData";
import { fetchCompanyAdvancedRanking } from "../../api/rankingApi";
import { fetchCardsWithEvents } from "../../api/cardApi";
import CardInformation from "@/Component/CardInformation/CardInformation";
import CardData from "../../Component/CardData";
import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import './CompanyDetailPage.css';

const CompanyDetailPage = () => {
    const { companyName } = useParams();
    const navigate = useNavigate();
    
    const companyColor = getCompanyColor(companyName);
    const companyLightColor = getCompanyLightColor(companyName);

    // React Query로 스피너 없는 캐싱 (1시간)
    const {
        data: advancedRanking,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['advancedRanking', companyName],
        queryFn: () => fetchCompanyAdvancedRanking(companyName, 6),
        staleTime: 60 * 60 * 1000, // 1시간 fresh (재요청 X)
        cacheTime: 60 * 60 * 1000, // 1시간 캐시 보관
        enabled: !!companyName,
        retry: 2,
    });

    // 회사별 이벤트 카드 조회
    const {
        data: eventCards = [],
        isLoading: isEventLoading,
        isError: isEventError
    } = useQuery({
        queryKey: ['companyEventCards', companyName],
        queryFn: () => fetchCardsWithEvents(companyName),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시 보관
        enabled: !!companyName,
        retry: 2,
    });

    const handleBenefitSelect = (benefit) => {
        console.log('Selected benefit:', benefit);
        navigate(`/company/${companyName}/benefit?benefit=${encodeURIComponent(benefit.name)}`);
    };

    const handleEventMoreClick = () => {
        navigate(`/cashback?company=${encodeURIComponent(companyName)}`);
    };

    // 회사별 이벤트 데이터 필터링 및 존재 여부 확인
    const companyEvents = useMemo(() => {
        return EventData.filter(event => event.company === companyName);
    }, [companyName]);

    const hasEventData = companyEvents && companyEvents.length > 0;

    // 첫 로딩시만 스피너 (캐시 없을 때만)
    if (isLoading) {
        return (
            <div className="company-detail-page">
                <LoadingSpinner message={`${companyName}의 정보를 불러오는 중입니다`} />
            </div>
        );
    }

    // 에러시 상세 로그 (페이지는 정상 표시)
    if (isError) {
        console.error('고급 랭킹 로드 실패 - 상세 에러:', error);
        console.error('API URL:', `${process.env.REACT_APP_API_BASE_URL}/api/advanced-ranking/company/${companyName}`);
        console.error('companyName:', companyName);
    }

    // 고급 랭킹 데이터
    const bestSellers = advancedRanking?.bestSellers || [];
    const steadySellers = advancedRanking?.steadySellers || [];
    const trending = advancedRanking?.trending || [];

    return (
        <div className="company-detail-page">
            <div className="page-background">
                <div className="common-container">
                    {/* 카드사 베스트 셀러 섹션 (CompanyDetial Section) */}
                    <section>
                    <CompanyDetail 
                        companyName={companyName}
                        bestSellers={bestSellers}
                        steadySellers={steadySellers}
                        trending={trending}
                    />
                    </section>

                    {/* 카드 이벤트 섹션 (Card Event Section) */}
                    <section>
                        <h2>{companyName} 캐시백 이벤트</h2>
                        {isEventLoading ? (
                            <LoadingSpinner message="이벤트 카드를 불러오는 중입니다" />
                        ) : (
                            <CardEventList 
                                cards={(eventCards.length > 0 ? eventCards : cardProducts.featured).slice(0, 2)}
                                onCardClick={handleCardEventClick}
                                eventButtonColor={companyColor}
                                eventButtonBackground={companyLightColor}
                            />
                        )}
                        <MoreButton text="이벤트 더보기" onClick={handleEventMoreClick}/>
                    </section>
                </div>
            </div>

            <div className="page-background-white">
                <div className="common-container">
                    {/* 이벤트 목록 섹션 (Event List Section) - 데이터가 있을 때만 표시 */}
                    {hasEventData && (
                        <section>
                            <h2>{companyName}로 지금 받을 수 있는 혜택</h2>
                            <EventList companyName={companyName} initialLimit={2} />
                        </section>
                    )}

                    {/* 혜택별 추천카드 (CardBenefitsSelector Section) */}
                    <section>
                        <h2>혜택별 추천 {companyName}</h2>
                        <CardBenefitsSelector
                            onBenefitSelect={handleBenefitSelect}
                            companyColor={companyColor}
                        />
                    </section>
                </div>
            </div>

            <div className="page-background">
                <div className="common-container">
                    {/* 카드사별 전체보기 (CardInformation Section) */}
                    <h2>{companyName} 카드 전체보기</h2>
                    <div className="cards-grid">
                        {bestSellers.map((card) => (
                            <CardInformation key={card.cardId} card={card} />
                        ))}
                        <MoreButton text="카드 더보기"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetailPage;