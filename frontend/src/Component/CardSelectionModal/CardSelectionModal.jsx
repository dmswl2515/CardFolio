import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCardsByType } from '../../api/cardApi';
import useImageAspectRatio from '../../hooks/useImageAspectRatio';
import './CardSelectionModal.css';

const CardSelectionModal = ({ isOpen, onClose, onSelectCard }) => {
  const [activeTab, setActiveTab] = useState('신용카드');
  const [searchText, setSearchText] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('전체');
  const { handleImageLoad } = useImageAspectRatio();

  const companies = [
    '전체', '신한카드', '삼성카드', '현대카드', '롯데카드', 'KB국민카드', 
    '우리카드', '하나카드', 'NH농협카드', 'IBK기업은행', 'BC바로카드'
  ];

  // 카드 데이터 조회
  const {
    data: cardsResponse = { content: [] },
    isLoading,
    isError
  } = useQuery({
    queryKey: ['cards', activeTab],
    queryFn: () => {
      const type = activeTab === '신용카드' ? 'credit' : 'debit';
      return fetchCardsByType(type, 0, 100); // 페이지네이션으로 많이 가져오기
    },
    staleTime: 30 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    retry: 2,
    enabled: isOpen
  });

  const cardsData = cardsResponse?.content || [];

  // 검색 및 회사 필터링
  const filteredCards = cardsData.filter(card => {
    const matchesSearch = card.name?.toLowerCase().includes(searchText.toLowerCase());
    const matchesCompany = selectedCompany === '전체' || card.company === selectedCompany;
    return matchesSearch && matchesCompany;
  });

  const handleCardSelect = (card) => {
    // 카드 선택 시 장바구니에 추가할 데이터 형식으로 변환
    const cartItem = {
      cardId: card.cardId,
      title: card.name,
      company: card.company,
      image: card.img,
      benefit: card.event || '혜택 정보',
      fee: card.annualfee || '연회비 정보',
      requirement: card.condition || '조건 정보',
      details: [{ label: '혜택', desc: card.benefit1 || '상세 혜택 정보' }]
    };

    onSelectCard(cartItem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="card-modal-overlay" onClick={onClose}>
      <div className="card-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="card-modal-header">
          <div className="card-modal-tabs">
            <button 
              className={`card-modal-tab ${activeTab === '신용카드' ? 'active' : ''}`}
              onClick={() => setActiveTab('신용카드')}
            >
              신용카드
            </button>
            <button 
              className={`card-modal-tab ${activeTab === '체크카드' ? 'active' : ''}`}
              onClick={() => setActiveTab('체크카드')}
            >
              체크카드
            </button>
          </div>
          <button className="card-modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="card-modal-companies">
          {companies.map((company, index) => (
            <button 
              key={index}
              className={`company-chip ${selectedCompany === company ? 'active' : ''}`}
              onClick={() => setSelectedCompany(company)}
            >
              {company}
            </button>
          ))}
        </div>

        <div className="card-modal-search">
          <input 
            type="text"
            placeholder="카드명 검색"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <svg className="cart-search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="#999" strokeWidth="2"/>
            <path d="M14 14L18 18" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="card-modal-content">
          <div className="card-modal-content-header">
            <h3 className="card-modal-title">{activeTab} 리스트</h3>
            <span className="card-modal-count">총 {filteredCards.length}개</span>
          </div>

          <div className="card-modal-list">
            {isLoading ? (
              <div className="card-modal-loading">카드 목록을 불러오는 중...</div>
            ) : isError ? (
              <div className="card-modal-error">카드 목록을 불러오는데 실패했습니다.</div>
            ) : filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <div 
                  key={card.cardId} 
                  className="card-modal-item"
                  onClick={() => handleCardSelect(card)}
                >
                  <div className="card-modal-thumbnail" ref={el => card.thumbnailRef = el}>
                    <img 
                      src={card.img} 
                      alt={card.name}
                      onLoad={(e) => handleImageLoad(e, card.thumbnailRef)}
                    />
                  </div>
                  <div className="card-modal-info">
                    <span className="card-modal-name">{card.name}</span>
                    <span className="card-modal-company">{card.company}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="card-modal-empty">검색 결과가 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSelectionModal;