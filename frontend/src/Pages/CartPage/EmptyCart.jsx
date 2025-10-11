import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmptyCart.css';

const EmptyCart = ({ onAddCard }) => {

  return (
    <div className="empty-cart-container">
      <div className="empty-cart-header">
        <div className="compare-icon">
          <img 
            src="https://d1c5n4ri2guedi.cloudfront.net/corp/2/tips/36821/tips_img_compare.png" 
            alt="카드 비교 아이콘" 
            className="compare-icon-image"
          />
        </div>
        <h1 className="empty-cart-title">카드 선택 후 비교할 수 있어요.</h1>
        <p className="empty-cart-subtitle">아래 상자를 클릭하여 비교할 카드 상품을 선택해주세요.</p>
      </div>

      <div className="empty-cart-slots">
        {[0, 1, 2].map((index) => (
          <div key={index} className="cart-slot-empty" onClick={onAddCard}>
            <div className="cart-slot-placeholder">
              <div className="slot-plus-icon">+</div>
            </div>
            <p className="cart-slot-text">카드를 선택해 주세요.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmptyCart;