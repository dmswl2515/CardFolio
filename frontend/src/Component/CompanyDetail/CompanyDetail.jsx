import React, { useState } from 'react';
import CompanyNavigation from '@components/CompanyNavigation/CompanyNavigation';
import { Card } from '@components/CardIntroduction/CardIntroduction';
import './CompanyDetail.css';

const CompanyDetail = ({ companyName }) => {
  // 현재 선택된 카드를 관리하는 상태 (state management for selected card)
  const [selectedCard, setSelectedCard] = useState(null);

  // 카드사별 브랜드 컬러
  const companyColors = {
    "신한카드": "#4666C1",
    "삼성카드": "#006BD1", 
    "현대카드": "#444444",
    "롯데카드": "#6B4AAF",
    "KB국민카드": "#79684F",
    "우리카드": "#016795",
    "하나카드": "#007C72",
    "NH농협카드": "#1961A1",
    "IBK기업은행": "#2C70B9",
    "BC바로카드": "#BB464B",
    "전체": "#667eea"
  };

  const companyColor = companyColors[companyName] || companyColors["전체"];

  // 카드사별 연한 배경색 (투명도 적용)
  const companyLightColors = {
    "신한카드": "rgba(70, 102, 193, 0.1)",
    "삼성카드": "rgba(0, 107, 209, 0.1)", 
    "현대카드": "rgba(68, 68, 68, 0.1)",
    "롯데카드": "rgba(107, 74, 175, 0.1)",
    "KB국민카드": "rgba(121, 104, 79, 0.1)",
    "우리카드": "rgba(1, 103, 149, 0.1)",
    "하나카드": "rgba(0, 124, 114, 0.1)",
    "NH농협카드": "rgba(25, 97, 161, 0.1)",
    "IBK기업은행": "rgba(44, 112, 185, 0.1)",
    "BC바로카드": "rgba(187, 70, 75, 0.1)",
    "전체": "rgba(102, 126, 234, 0.1)"
  };

  const companyLightColor = companyLightColors[companyName] || companyLightColors["전체"];


  // 카드 상품 데이터 (card product data)
  const cardProducts = {
    bestSellers: [
      { id: 1, name: '신한카드 Mr.Life', description: '1위 베스트셀러', isMain: true },
      { id: 2, name: '신한카드 Discount Plan+', description: '2위', rank: 2 },
      { id: 3, name: '신한카드 처음(ANNIVERSARY)', description: '3위', rank: 3 },
      { id: 4, name: '신한카드 Deep Oil', description: '4위', rank: 4 },
      { id: 5, name: '신한카드 Air One', description: '5위', rank: 5 }
    ],
    featured: [
      { 
        id: 6, 
        name: '신한카드 처음(ANNIVERSE)', 
        category: '꾸준히 사랑받은', 
        subcategory: '스테디셀러',
        image: '/api/placeholder/200/300'
      },
      { 
        id: 7, 
        name: 'Haru(Hoshino Resorts)', 
        category: '세로 출시된', 
        subcategory: '신카드',
        image: '/api/placeholder/200/300'
      }
    ]
  };

  // 카드 클릭 핸들러 (card click handler)
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    console.log(`카드 ${cardId} 선택됨`);
  };

  return (
    <div className="shinhan-card-container">
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
                <span className="main-title">신한카드 Mr.Life</span>
              </h2>
              <button 
                className="detail-button"
                onClick={() => handleCardClick(1)}
              >
                자세히보기
              </button>
              <div className="ranking-list">
                {cardProducts.bestSellers.slice(1).map((card) => (
                  <div key={card.id} className="ranking-item">
                    <span className="company-rank">{card.rank}위</span>
                    <span className="card-name">{card.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mr.Life 카드 이미지 */}
            <div className="card-display">
              <Card
                imageUrl="https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png"
                circleColorClass="gray-background"
              />
              <div className="card-info">
                <span className="card-label">신한카드</span>
                <span className="top-ranking">인기순위 TOP10 &gt;</span>
              </div>
            </div>

            {/* 추천 카드 섹션 (Featured Cards Section) */}
            <div className="featured-section">
              {cardProducts.featured.map((card) => (
                <div key={card.id} className="featured-card">
                  {/* <div className="company-card-image">
                    <img 
                      src={card.image} 
                      alt={card.name}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzMzNzNkYyIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhcmQ8L3RleHQ+Cjwvc3ZnPg==';
                      }}
                    />
                  </div> */}
                  <div className="featured-card-content">
                    <div className="card-info-section">
                      <span className="card-category">
                        {card.category} <span className="card-subcategory">{card.subcategory}</span>
                      </span>
                      <h3 className="card-title">{card.name}</h3>
                      <button 
                        className="detail-button"
                        onClick={() => handleCardClick(card.id)}
                      >
                        자세히보기
                      </button>
                    </div>
                    <Card
                      // imageUrl={card.image}
                      imageUrl='https://d1c5n4ri2guedi.cloudfront.net/card/2759/card_img/37240/2759card.png'
                      circleColorClass="gray-background"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default CompanyDetail;