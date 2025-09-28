import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import CardRanking from "../../Component/CardRanking/CardRanking";
import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import { fetchCardsByBenefit } from "../../api/cardApi";
import "./CompanyBenefitPage.css";

const CompanyBenefitPage = () => {
    const { companyName } = useParams();
    const [searchParams] = useSearchParams();
    const benefit = searchParams.get('benefit');
    
    // 혜택별 카드 조회
    const {
        data: cards = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['companyBenefitCards', companyName, benefit],
        queryFn: () => fetchCardsByBenefit(companyName, benefit),
        staleTime: 60 * 60 * 1000, // 1시간 fresh
        cacheTime: 60 * 60 * 1000, // 1시간 캐시 보관
        enabled: !!(companyName && benefit),
        retry: 2,
    });

    if (isLoading) {
        return (
            <div className="company-benefit-page">
                <LoadingSpinner message={`${companyName} ${benefit} 혜택 카드를 불러오는 중입니다`} />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="company-benefit-page">
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h2>카드를 불러오는데 실패했습니다</h2>
                    <p>{error?.message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="company-benefit-page">
            <div className="common-container">
                <div className="page-header">
                    <h1>{companyName} {benefit} 혜택 카드</h1>
                    <p>총 {cards.length}개의 카드가 있습니다</p>
                </div>
                
                <CardRanking 
                    cards={cards}
                    title={`${companyName} ${benefit} 혜택 랭킹`}
                    showRanking={true}
                />
            </div>
        </div>
    );
};

export default CompanyBenefitPage;