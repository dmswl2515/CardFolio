import React, { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchTypeRanking } from '../../api/rankingApi';

function RankCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Top 100 카드 데이터 조회
    const {
        data: topCards = [],
        isLoading,
        isError
    } = useQuery({
        queryKey: ['top100Cards'],
        queryFn: () => fetchTypeRanking('credit', 10), // Top 10개만 가져오기
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
    });

    // 5초마다 카드 변경
    useEffect(() => {
        if (topCards.length === 0) return;

        const interval = setInterval(() => {
            setIsAnimating(true);
            
            setTimeout(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === topCards.length - 1 ? 0 : prevIndex + 1
                );
                setIsAnimating(false);
            }, 300); // 애니메이션 지속 시간의 절반
        }, 5000);

        return () => clearInterval(interval);
    }, [topCards.length]);

    if (isLoading || topCards.length === 0) {
        return (
            <div className="rank">
                <span className="rank-number">-</span>
                <div className="card-image-placeholder"></div>
                <span className="card-info">로딩 중...</span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="rank">
                <span className="rank-number">1</span>
                <img 
                    src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAUAARH.png" 
                    alt="카드이미지" 
                    className="card-image"
                />
                <span className="card-info">신한카드 Mr.Life</span>
            </div>
        );
    }

    const currentCard = topCards[currentIndex];

    return (
        <div className="rankWrapper">
            <div className={`rank ${isAnimating ? 'slide-up' : ''}`}>
                <span className="rank-number">{currentIndex + 1}</span>
                <img 
                    src={currentCard.img} 
                    alt={currentCard.name} 
                    className="card-image"
                />
                <span className="card-info">{currentCard.name}</span>
                <i className="fas fa-caret-up"></i>
            </div>
        </div>
    );
}

export default RankCard;