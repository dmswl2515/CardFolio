import React, { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchTypeRanking, fetchBenefitTypeRanking, fetchCompanyRanking, fetchBenefitRanking, fetchPreviousPerformanceRanking } from '../../api/rankingApi';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import useImageAspectRatio from '../../hooks/useImageAspectRatio';
import "./Chart.css";

const Chart = () => {
    const [activeTab, setActiveTab] = useState('종합순위');
    const navigate = useNavigate();
    const { handleImageLoad } = useImageAspectRatio();

    // 차트별 라우트 매핑 (성능 최적화)
    const chartRoutes = {
        '종합순위': {
            '신용카드 TOP100': '/chart/top100',
            '마일리지형 TOP30': '/CardFolio/benefit-type/마일리지',
            '포인트형 TOP30': '/CardFolio/benefit-type/포인트',
            '체크카드 TOP100': '/chart/check100'
        },
        '카드사별 순위': {
            '현대카드 TOP10': '/chart/현대카드',
            '롯데카드 TOP10': '/chart/롯데카드',
            '삼성카드 TOP10': '/chart/삼성카드',
            '신한카드 TOP10': '/chart/신한카드'
        },
        '혜택별 순위': {
            '통신 혜택 TOP10': '/chart/benefit/통신',
            '항공마일리지 TOP10': '/chart/benefit/항공',
            '주유+차량정비 TOP10': '/chart/benefit/주유',
            '쇼핑 혜택 TOP10': '/chart/benefit/쇼핑'
        },
        '기타 순위': {
            '전월실적 조건없음 TOP30': '/CardFolio/performance/0',
            '할인형 TOP30': '/CardFolio/benefit-type/할인',
            '포인트형 TOP30': '/CardFolio/benefit-type/포인트',
            '마일리지형 TOP30': '/CardFolio/benefit-type/마일리지'
        }
    };

    // 차트 더보기 클릭 핸들러 (O(1) 조회)
    const handleMoreClick = (chart) => {
        const route = chartRoutes[activeTab]?.[chart.title];
        if (route) {
            navigate(route);
        }
    };
    // 신용카드 TOP 4 조회
    const {
        data: creditCards = [],
        isLoading: isCreditLoading,
        isError: isCreditError
    } = useQuery({
        queryKey: ['creditCardRanking'],
        queryFn: () => fetchTypeRanking('credit', 4),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
    });

    // 마일리지형 TOP 4 조회
    const {
        data: mileageCards = [],
        isLoading: isMileageLoading,
        isError: isMileageError
    } = useQuery({
        queryKey: ['mileageCardRanking'],
        queryFn: () => fetchBenefitTypeRanking('마일리지', 4),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
    });

    // 포인트형 TOP 4 조회
    const {
        data: pointCards = [],
        isLoading: isPointLoading,
        isError: isPointError
    } = useQuery({
        queryKey: ['pointCardRanking'],
        queryFn: () => fetchBenefitTypeRanking('포인트', 4),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
    });

    // 체크카드 TOP 4 조회
    const {
        data: checkCards = [],
        isLoading: isCheckLoading,
        isError: isCheckError
    } = useQuery({
        queryKey: ['checkCardRanking'],
        queryFn: () => fetchTypeRanking('debit', 4),
        staleTime: 30 * 60 * 1000, // 30분 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시
        retry: 2,
    });

    // 카드사별 랭킹 조회 (현대, 롯데, 삼성, 신한)
    const {
        data: hyundaiCards = [],
        isLoading: isHyundaiLoading,
        isError: isHyundaiError
    } = useQuery({
        queryKey: ['hyundaiCardRanking'],
        queryFn: () => fetchCompanyRanking('현대카드', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '카드사별 순위',
    });

    const {
        data: lotteCards = [],
        isLoading: isLotteLoading,
        isError: isLotteError
    } = useQuery({
        queryKey: ['lotteCardRanking'],
        queryFn: () => fetchCompanyRanking('롯데카드', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '카드사별 순위',
    });

    const {
        data: samsungCards = [],
        isLoading: isSamsungLoading,
        isError: isSamsungError
    } = useQuery({
        queryKey: ['samsungCardRanking'],
        queryFn: () => fetchCompanyRanking('삼성카드', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '카드사별 순위',
    });

    const {
        data: shinhanCards = [],
        isLoading: isShinhanLoading,
        isError: isShinhanError
    } = useQuery({
        queryKey: ['shinhanCardRanking'],
        queryFn: () => fetchCompanyRanking('신한카드', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '카드사별 순위',
    });

    // 혜택별 랭킹 조회 (통신, 항공마일리지, 주유+차량정비, 쇼핑)
    const {
        data: telecomCards = [],
        isLoading: isTelecomLoading,
        isError: isTelecomError
    } = useQuery({
        queryKey: ['telecomBenefitRanking'],
        queryFn: () => fetchBenefitRanking('통신', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '혜택별 순위',
    });

    const {
        data: airlineCards = [],
        isLoading: isAirlineLoading,
        isError: isAirlineError
    } = useQuery({
        queryKey: ['airlineBenefitRanking'],
        queryFn: () => fetchBenefitRanking('항공', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '혜택별 순위',
    });

    const {
        data: gasCards = [],
        isLoading: isGasLoading,
        isError: isGasError
    } = useQuery({
        queryKey: ['gasBenefitRanking'],
        queryFn: () => fetchBenefitRanking('주유', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '혜택별 순위',
    });

    const {
        data: shoppingCards = [],
        isLoading: isShoppingLoading,
        isError: isShoppingError
    } = useQuery({
        queryKey: ['shoppingBenefitRanking'],
        queryFn: () => fetchBenefitRanking('쇼핑', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '혜택별 순위',
    });

    // 기타 순위 조회 (전월실적 조건없음, 할인형/포인트형/마일리지형)
    const {
        data: noConditionCards = [],
        isLoading: isNoConditionLoading,
        isError: isNoConditionError
    } = useQuery({
        queryKey: ['noConditionRanking'],
        queryFn: () => fetchPreviousPerformanceRanking('0', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '기타 순위',
    });

    const {
        data: discountTypeCards = [],
        isLoading: isDiscountTypeLoading,
        isError: isDiscountTypeError
    } = useQuery({
        queryKey: ['discountTypeBenefitRanking'],
        queryFn: () => fetchBenefitTypeRanking('할인', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '기타 순위',
    });

    const {
        data: pointTypeCards = [],
        isLoading: isPointTypeLoading,
        isError: isPointTypeError
    } = useQuery({
        queryKey: ['pointTypeBenefitRanking'],
        queryFn: () => fetchBenefitTypeRanking('포인트', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '기타 순위',
    });

    const {
        data: mileageTypeCards = [],
        isLoading: isMileageTypeLoading,
        isError: isMileageTypeError
    } = useQuery({
        queryKey: ['mileageTypeBenefitRanking'],
        queryFn: () => fetchBenefitTypeRanking('마일리지', 4),
        staleTime: 30 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 2,
        enabled: activeTab === '기타 순위',
    });

    // 데이터를 Chart 포맷에 맞게 변환
    const formatChartData = (cards, title) => {
        return {
            title,
            items: cards.slice(0, 4).map((card, index) => ({
                rank: index + 1,
                name: card.name,
                image: card.img
            }))
        };
    };

    // 탭별 차트 데이터 구성
    const getChartData = () => {
        switch (activeTab) {
            case '종합순위':
                return [
                    formatChartData(creditCards, '신용카드 TOP100'),
                    formatChartData(mileageCards, '마일리지형 TOP30'),
                    formatChartData(pointCards, '포인트형 TOP30'),
                    formatChartData(checkCards, '체크카드 TOP100'),
                ];
            case '카드사별 순위':
                return [
                    formatChartData(hyundaiCards, '현대카드 TOP10'),
                    formatChartData(lotteCards, '롯데카드 TOP10'),
                    formatChartData(samsungCards, '삼성카드 TOP10'),
                    formatChartData(shinhanCards, '신한카드 TOP10'),
                ];
            case '혜택별 순위':
                return [
                    formatChartData(telecomCards, '통신 혜택 TOP10'),
                    formatChartData(airlineCards, '항공마일리지 TOP10'),
                    formatChartData(gasCards, '주유+차량정비 TOP10'),
                    formatChartData(shoppingCards, '쇼핑 혜택 TOP10'),
                ];
            case '기타 순위':
                return [
                    formatChartData(noConditionCards, '전월실적 조건없음 TOP30'),
                    formatChartData(discountTypeCards, '할인형 TOP30'),
                    formatChartData(pointTypeCards, '포인트형 TOP30'),
                    formatChartData(mileageTypeCards, '마일리지형 TOP30'),
                ];
            default:
                return [];
        }
    };

    const chartData = getChartData();

    // 탭별 로딩 상태 확인
    const isLoading = () => {
        if (activeTab === '종합순위') {
            return isCreditLoading || isMileageLoading || isPointLoading || isCheckLoading;
        }
        if (activeTab === '카드사별 순위') {
            return isHyundaiLoading || isLotteLoading || isSamsungLoading || isShinhanLoading;
        }
        if (activeTab === '혜택별 순위') {
            return isTelecomLoading || isAirlineLoading || isGasLoading || isShoppingLoading;
        }
        if (activeTab === '기타 순위') {
            return isNoConditionLoading || isDiscountTypeLoading || isPointTypeLoading || isMileageTypeLoading;
        }
        return false;
    };

    if (isLoading()) {
        return (
            <div className="chart">
                <LoadingSpinner message="차트 데이터를 불러오는 중입니다" />
            </div>
        );
    }

    if (isCreditError || isMileageError || isPointError || isCheckError || 
        isHyundaiError || isLotteError || isSamsungError || isShinhanError ||
        isTelecomError || isAirlineError || isGasError || isShoppingError ||
        isNoConditionError || isDiscountTypeError || isPointTypeError || isMileageTypeError) {
        console.error('차트 데이터 로드 실패');
    }

    return (
        <div className="chart">
            <div className="chart-container">
                <div className="chart-header">
                    <h2 className="chart-title">인기 차트</h2>
                    <div>
                        <nav className="chart-nav">
                            <span 
                                className={activeTab === '종합순위' ? 'active' : ''} 
                                onClick={() => setActiveTab('종합순위')}
                                style={{ cursor: 'pointer' }}
                            >
                                종합순위
                            </span>
                            <span 
                                className={activeTab === '카드사별 순위' ? 'active' : ''} 
                                onClick={() => setActiveTab('카드사별 순위')}
                                style={{ cursor: 'pointer' }}
                            >
                                카드사별 순위
                            </span>
                            <span 
                                className={activeTab === '혜택별 순위' ? 'active' : ''} 
                                onClick={() => setActiveTab('혜택별 순위')}
                                style={{ cursor: 'pointer' }}
                            >
                                혜택별 순위
                            </span>
                            <span 
                                className={activeTab === '기타 순위' ? 'active' : ''} 
                                onClick={() => setActiveTab('기타 순위')}
                                style={{ cursor: 'pointer' }}
                            >
                                기타 순위
                            </span>
                        </nav>
                    </div>
                </div>
                <div className="chart-list">
                    {chartData.map((chart, index) => (
                        <div className="chart-item" key={index}>
                            <h3 className="chart-item-title">{chart.title}</h3>
                            <ul className="chart-item-list">
                                {chart.items.map((item, idx) => (
                                    <li key={idx} className="chart-item-entry">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="chart-item-image"
                                            onLoad={(e) => handleImageLoad(e, e.target)}
                                        />
                                        <span className="chart-rank">{item.rank}</span>
                                        <span className="name">{item.name}</span>
                                        <i className="fa-solid fa-caret-up chart-icon"></i>
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className="more-button" 
                                onClick={() => handleMoreClick(chart)}
                            >
                                차트 더보기
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chart;