import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCardsByType } from "../../api/cardApi";
import CardInformation from "../../Component/CardInformation/CardInformation";
import CardData from "../../Component/CardData";
import ServicePrepModal from "../../Component/ServicePrepModal/ServicePrepModal";
import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import "../../Styles/Style.css";
import "./CardPage.css";

const CardPage = () => {
    const [activeTab, setActiveTab] = useState("credit"); //basic card type
    const [isModalOpen, setIsModalOpen] = useState(false);

    // useInfiniteQuery로 무한스크롤링 구현
    const { 
        data,
        isLoading, 
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage 
    } = useInfiniteQuery({
        queryKey: ['cards', activeTab],
        queryFn: ({ pageParam = 0 }) => fetchCardsByType(activeTab, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            // 마지막 페이지인지 확인
            if (lastPage.last) return undefined;
            return allPages.length; // 다음 페이지 번호
        }
    });

    // 모든 페이지의 카드들을 하나의 배열로 합치기
    const cards = data?.pages?.flatMap(page => page.content) || [];

    // 서비스 준비 중 모달 핸들러
    const handleServicePrepClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="page-background">
            <div className="common-container">
                {/* Card Search Section */}
                <section className="card-search-section">
                    <h2 className="card-search-title">
                        국내최대규모! 총 <span className="highlight">1519</span>개 중
                        <br />
                        내게 꼭 맞는 카드만 찾아보세요!
                    </h2>
                    <div className="card-search-options">
                        <div className="search-option-box">
                            <p className="option-description1">맞춤 혜택으로 직접 찾기</p>
                            <img 
                                src="https://api.card-gorilla.com:8080/storage/corp/2/tips/34146/tips_card_img_01.png"
                                alt="카드 검색"
                                className="search-option-icon"
                            />
                            <p className="option-description2">100가지 상세혜택으로</p>
                            <button className="option-button" onClick={handleServicePrepClick}>맞춤 카드 검색</button>
                        </div>
                        <div className="search-option-box">
                            <p className="option-description1">1분 테스트로 추천 받기</p>
                            <img 
                                src="https://api.card-gorilla.com:8080/storage/corp/2/tips/34147/tips_card_img_02.png"
                                alt="카드 추천 테스트"
                                className="search-option-icon"
                            />
                            <p className="option-description2">소비성향으로 알아보는</p>
                            <button className="option-button" onClick={handleServicePrepClick}>카드추천 테스트</button>
                        </div>
                    </div>
                </section>

                {/* Card List Section */}
                <section className="card-list-section">
                    <div className="tab-container">
                        <button
                            className={activeTab === "credit" ? "active-tab" : ""}
                            onClick={() => setActiveTab("credit")}
                        >
                            신용카드
                        </button>
                        <button
                            className={activeTab === "debit" ? "active-tab" : ""}
                            onClick={() => setActiveTab("debit")}
                        >
                            체크카드
                        </button>
                    </div>

                    {/* show loading state */}
                    {isLoading ? (
                        <LoadingSpinner message={`${activeTab === 'credit' ? '신용카드' : '체크카드'}를 불러오는 중입니다`} />
                    ) : error ? (
                        <div style={{ 
                            textAlign: 'center', 
                            padding: '40px', 
                            color: '#666',
                            fontSize: '16px' 
                        }}>
                            데이터를 불러오는데 실패했습니다: {error.message}
                        </div>
                    ) : (
                        cards.map((card, index) => <CardInformation key={index} card={card} />)
                    )}
                    
                    <div className="button-container">
                        {hasNextPage && (
                            <button
                                className="more-cards-btn"
                                onClick={fetchNextPage}
                                disabled={isFetchingNextPage}
                            >
                                {isFetchingNextPage ? '로딩 중' : '카드 더보기'}
                                <i class="fa-solid fa-angle-down"></i>
                            </button>
                        )}
                        <button className="search-benefits-btn">
                            <i class="fa-solid fa-magnifying-glass benefits-search-icon"> 원하는 혜택만 검색</i>
                        </button>
                    </div>
                </section>
            </div>
            
            <ServicePrepModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            />
        </div>
    );
};

export default CardPage;