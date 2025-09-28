import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyNavigation from '@components/CompanyNavigation/CompanyNavigation';
import { Card } from '@components/CardIntroduction/CardIntroduction';
import { getCompanyColor, getCompanyLightColor, cardProducts } from '../../utils/companyUtils';
import useImageAspectRatio from '../../hooks/useImageAspectRatio';
import './CompanyDetail.css';

const CompanyDetail = ({ companyName, bestSellers = [], steadySellers = [], trending = [] }) => {
  // 현재 선택된 카드를 관리하는 상태 (state management for selected card)
  const [selectedCard, setSelectedCard] = useState(null);
  const cardDisplayRef = useRef(null);
  const navigate = useNavigate();
  const { handleImageLoad } = useImageAspectRatio();

  const companyColor = getCompanyColor(companyName);
  const companyLightColor = getCompanyLightColor(companyName);
  
  // 1위 베스트셀러 카드 (알고리즘 결과 또는 기본값)
  const topCard = bestSellers[0] || { name: `${companyName} 대표카드`, img: '' };


  // 카드 디테일 페이지로 이동
  const handleCardDetailClick = (cardId) => {
    navigate(`/card/${cardId}`);

  };


  return (
    <>
      {/* 카드사 네비게이션 (Company Navigation) */}
      <CompanyNavigation selectedCompany={companyName} />

      {/* 메인 콘텐츠 (Main Content) */}
      <main className="main-content">
        <div className="content-wrapper">
          
          {/* 베스트셀러 섹션 (Best Seller Section) */}
          <section 
            className="best-seller-section"
            style={{
              '--company-color': companyColor,
              '--company-light-color': companyLightColor
            }}
          >
            <div className="main-card">
              <h2 className="section-title">
                1위 <span className="bestseller-text">베스트셀러</span>
                <br />
                <span className="main-title">{topCard.name}</span>
              </h2>
              <button 
                className="detail-button"
                onClick={() => handleCardDetailClick(topCard.cardId)}
              >
                자세히보기
              </button>
              <div className="ranking-list">
                {bestSellers.slice(1, 5).map((card, index) => (
                  <div 
                    key={card.cardId} 
                    className="ranking-item"
                    onClick={() => handleCardDetailClick(card.cardId)}
                  >
                    <span className="company-rank">{index + 2}위</span>
                    <span className="card-name">{card.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1위 카드 이미지 (알고리즘 결과) */}
            <div className="card-display" ref={cardDisplayRef}>
              <div className="card gray-background">
                <img 
                  src={topCard.img || "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png"} 
                  alt={topCard.name}
                  className="card-image-main"
                  onLoad={(e) => handleImageLoad(e, cardDisplayRef.current)}
                />
              </div>
              <div className="card-info">
                <span className="card-label">{companyName}</span>
                <span 
                  className="top-ranking"
                  onClick={() => navigate(`/chart/${companyName}`)}
                >
                  인기순위 TOP10 &gt;
                </span>
              </div>
            </div>

            {/* 추천 카드 섹션 - 스테디셀러 & 트렌딩 (Algorithm-based Featured Cards) */}
            <div className="featured-section">
              {/* 스테디셀러 1위 */}
              {steadySellers[0] && (
                <div className="featured-card">
                  <div className="featured-card-content">
                    <div className="card-info-section">
                      <span className="card-category">
                        꾸준히 사랑받은 <span className="card-subcategory">스테디셀러</span>
                      </span>
                      <h3 className="card-title">{steadySellers[0].name}</h3>
                      <button 
                        className="detail-button"
                        onClick={() => handleCardDetailClick(steadySellers[0].cardId)}
                      >
                        자세히보기
                      </button>
                    </div>
                    <div className="card gray-background">
                      <img 
                        src={steadySellers[0].img || 'https://d1c5n4ri2guedi.cloudfront.net/card/2759/card_img/37240/2759card.png'}
                        alt={steadySellers[0].name}
                        className="card-image-main"
                        onLoad={(e) => handleImageLoad(e, e.target.closest('.card'))}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* 트렌딩 1위 */}
              {trending[0] && (
                <div className="featured-card">
                  <div className="featured-card-content">
                    <div className="card-info-section">
                      <span className="card-category">
                        새로 출시된 <span className="card-subcategory">신규카드</span>
                      </span>
                      <h3 className="card-title">{trending[0].name}</h3>
                      <button 
                        className="detail-button"
                        onClick={() => handleCardDetailClick(trending[0].cardId)}
                      >
                        자세히보기
                      </button>
                    </div>
                    <div className="card gray-background">
                      <img 
                        src={trending[0].img || 'https://d1c5n4ri2guedi.cloudfront.net/card/2759/card_img/37240/2759card.png'}
                        alt={trending[0].name}
                        className="card-image-main"
                        onLoad={(e) => handleImageLoad(e, e.target.closest('.card'))}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default CompanyDetail;