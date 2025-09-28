import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import FilterButtons from "../../Component/FilterButtons/FilterButtons";
import CardEventList from "@components/CardEventList/CardEventList";
import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import { fetchCardsWithEvents } from "../../api/cardApi";
import "./CashbackPage.css";
import "../../Styles/Style.css"


const CashbackPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    // URL을 단일 진실 소스로 사용
    const activeCard = searchParams.get('company');

    // 필터 변경 시 URL 업데이트
    const handleFilterChange = (company) => {
        if (company) {
            setSearchParams({ company });
        } else {
            setSearchParams({});
        }
    };

    // React Query로 캐싱된 API 호출
    const {
        data: cards = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['eventCards', activeCard],
        queryFn: () => fetchCardsWithEvents(activeCard),
        staleTime: 60 * 60 * 1000, // 1시간 fresh (재요청 X)
        cacheTime: 60 * 60 * 1000, // 1시간 캐시 보관
        retry: 2,
    });

    const handleCardClick = (card) => {
        // 카드 클릭 시 상세 페이지로 이동하거나 다른 액션 수행
        console.log('Card clicked:', card);
    };

    if (isLoading) {
        return (
            <div className="page-background">
                <div className="common-container">
                    <LoadingSpinner message="이벤트 카드를 불러오는 중입니다" />
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="page-background">
                <div className="common-container">
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <h2>이벤트 카드를 불러오는데 실패했습니다</h2>
                        <p>{error?.message}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-background">
            <div className="common-container">
                <FilterButtons 
                    activeCard={activeCard} 
                    setActiveCard={handleFilterChange} 
                    showFaq={true} 
                />

                <CardEventList
                    cards={cards}
                    onCardClick={handleCardClick}
                    eventButtonColor="#ff6000"
                    eventButtonBackground="#ffefe5"
                />
            </div>
        </div>
    );
};

export default CashbackPage;