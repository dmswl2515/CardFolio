import React, { useState, useEffect } from "react";
import { Card } from "../../Component/CardIntroduction/CardIntroduction";
import EmptyCart from "./EmptyCart";
import CardSelectionModal from "../../Component/CardSelectionModal/CardSelectionModal";
import "./CartPage.css";

const CartPage = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxCards = 3; // 최대 비교 가능한 카드 수

  useEffect(() => {
    // localStorage에서 장바구니 데이터 로드
    const cartData = JSON.parse(localStorage.getItem('cardfolio_cart') || '[]');
    setCards(cartData);
  }, []);

  const handleRemoveCard = (cardId) => {
    const updatedCards = cards.filter(card => card.cardId !== cardId);
    setCards(updatedCards);
    localStorage.setItem('cardfolio_cart', JSON.stringify(updatedCards));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleAddCard = () => {
    setIsModalOpen(true);
  };

  const handleSelectCard = (cardItem) => {
    // 이미 있는 카드인지 확인
    const isAlreadyInCart = cards.some(card => card.cardId === cardItem.cardId);
    
    if (!isAlreadyInCart && cards.length < maxCards) {
      const updatedCards = [...cards, cardItem];
      setCards(updatedCards);
      localStorage.setItem('cardfolio_cart', JSON.stringify(updatedCards));
      window.dispatchEvent(new Event('cartUpdated'));
    } else if (isAlreadyInCart) {
      alert('이미 비교함에 있는 카드입니다.');
    } else {
      alert('최대 3개까지만 비교할 수 있습니다.');
    }
  };

  // 빈 슬롯 개수 계산
  const emptySlots = maxCards - cards.length;

  const staticCards = [
    {
      title: "신한카드 Mr.Life",
      image: "https://d1c5n4ri2guedi.cloudfront.net/card/51/card_img/37691/51card.png",
      company: "신한카드",
      benefit: "최대 35만원 캐시백",
      fee: "해외겸용 15,000원",
      requirement: "30만원 이상",
      details: [
        { label: "공과금", desc: "빌딩관리공과금 10% 할인서비스" },
        { label: "편의점", desc: "편의점 10% 할인" },
        { label: "병원/약국", desc: "병원/약국/동물병원 10% 할인" },
        { label: "생활", desc: "생활용품점 10% 할인" },
        { label: "온라인쇼핑", desc: "온라인쇼핑몰 10% 할인" },
        { label: "대중교통", desc: "대중교통 10% 할인" },
        { label: "푸드", desc: "식음료 10% 할인" },
        { label: "커피", desc: "커피 30% 할인" },
        { label: "통신", desc: "이동통신요금 자동납부 10% 할인" },
        { label: "온라인결제", desc: "인터넷결제금액 20% 할인" }
      ]
    },
    {
      title: "삼성 iD SELECT ALL 카드",
      image: "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png",
      company: "삼성카드",
      benefit: "최대 52.9만원 혜택",
      fee: "국내전용 20,000원 / 해외겸용 20,000원",
      requirement: "40만원 이상",
      details: [
        { label: "선택형", desc: "[SELECT 1] 선택 옵션에 따른 할인 혜택 제공 (택1)" },
        { label: "할인", desc: "[SELECT 1] 국내 가맹점 0.7% 할인" },
        { label: "할인", desc: "[SELECT 1] 아파트 관리비/통신비 10% 할인" },
        { label: "할인", desc: "[SELECT 1] 교통 10% 할인" },
        { label: "선택형", desc: "[SELECT 2] 온라인쇼핑몰 할인 혜택 제공 (택1)" },
        { label: "할인", desc: "[SELECT 2] 온라인쇼핑몰/간편결제 7% 할인" },
        { label: "할인", desc: "[SELECT 2] 음식점/편의점/병원/약국 7% 할인" },
        { label: "생활", desc: "생활가맹점 5% 할인" },
        { label: "디지털구독", desc: "디지털 구독서비스 50% 할인" },
        { label: "해외", desc: "해외 2% 할인" }
      ]
    },
    {
      title: "KB국민 My WE:SH 카드",
      image: "https://d1c5n4ri2guedi.cloudfront.net/card/49/card_img/42288/49card.png",
      company: "KB국민카드",
      benefit: "최대 25만원 캐시백",
      fee: "국내전용 15,000원 / 해외겸용 15,000원",
      requirement: "40만원 이상",
      details: [
        { label: "간편결제", desc: "KB Pay 10% 할인" },
        { label: "푸드", desc: "나머지 간편결제 서비스 시 음식점, 편의점 10% 할인" },
        { label: "통신", desc: "이동통신요금 10% 할인" },
        { label: "스트리밍", desc: "OTT 30% 할인" },
        { label: "생활", desc: "주유소, 학원, 대형마트/백화점 5% 할인" },
        { label: "선택형", desc: "여행, 온라인쇼핑 5% 할인" },
        { label: "선택형", desc: "병원/약국, 골프, 스포츠, 문화시설 5% 할인" },
        { label: "기타", desc: "WE:SH 혜택 제공" },
        { label: "선택형", desc: "카드 혜택 선택 가능" }
      ]
    }
  ];

  // 장바구니가 비어있으면 EmptyCart 컴포넌트 표시
  if (cards.length === 0) {
    return (
      <>
        <EmptyCart onAddCard={handleAddCard} />
        <CardSelectionModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onSelectCard={handleSelectCard}
        />
      </>
    );
  }

  return (
    <div className="cart-page-background">
        <div className="card-cart-container">
        {/* 기존 카드들 */}
        {cards.map((card, index) => (
            <div key={index} className="card-cart">
            <div className="card-cart-header">
                <Card 
                  title={card.title}
                  imageUrl={card.image}
                  subtitle={card.company}
                  cardId={card.title}
                  circleColorClass="white-background"
                  onClick={() => {}}
                />
                <button className="cart-close-btn" onClick={() => handleRemoveCard(card.cardId || card.title)}>×</button>
            </div>
            <button className="cart-detail-btn">자세히 보기</button>

            <div className="card-cart-info">
                <div className="cart-detail-row">
                <span className="cart-detail-label">이벤트</span>
                <span className="cart-detail-desc">{card.benefit}</span>
                </div>
                <div className="cart-detail-row">
                <span className="cart-detail-label">연회비</span>
                <span className="cart-detail-desc">{card.fee}</span>
                </div>
                <div className="cart-detail-row">
                <span className="cart-detail-label">전월실적</span>
                <span className="cart-detail-desc">{card.requirement}</span>
                </div>
                {card.details && card.details.length > 0 ? (
                  card.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="cart-detail-row">
                      {detailIndex === 0 && <span className="cart-detail-label">주요혜택</span>}
                      {detailIndex > 0 && <span className="cart-detail-label"></span>}
                      <div className="cart-detail-content">
                        <span className="cart-detail-benefit-label">{detail.label}</span>
                        <span className="cart-detail-desc">{detail.desc}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="cart-detail-row">
                    <span className="cart-detail-label">주요혜택</span>
                    <div className="cart-detail-content">
                      <span className="cart-detail-benefit-label">혜택</span>
                      <span className="cart-detail-desc">상세 혜택 정보</span>
                    </div>
                  </div>
                )}
            </div>
            </div>
        ))}
        
        {/* 빈 슬롯들 */}
        {emptySlots > 0 && Array.from({ length: emptySlots }).map((_, index) => (
          <div key={`empty-${index}`} className="card-cart cart-slot-empty" onClick={handleAddCard}>
            <div className="cart-slot-placeholder">
              <div className="slot-plus-icon">+</div>
            </div>
            <p className="cart-slot-text">카드를 선택해 주세요.</p>
          </div>
        ))}
        </div>
        
        <CardSelectionModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onSelectCard={handleSelectCard}
        />
    </div>
  );
};

export default CartPage;
