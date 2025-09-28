import React from "react";
import { getHueRotateFromColor, getExtraFilterFromColor } from "../../utils/companyUtils";
import "./CardBenefitsSelector.css";

const BENEFIT_CATEGORIES = [
  {
    id: 'mobile',
    name: '통신',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29728/tips_team_icon_mobile.png'
  },
  {
    id: 'mart',
    name: '마트/편의점',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29726/tips_team_icon_mart.png'
  },
  {
    id: 'traffic',
    name: '교통',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29752/tips_team_icon_traffic.png'
  },
  {
    id: 'oil',
    name: '주유',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29731/tips_team_icon_oil.png'
  },
  {
    id: 'shopping',
    name: '쇼핑',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29736/tips_team_icon_shopping.png'
  },
  {
    id: 'all',
    name: '모든가맹점',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29724/tips_team_icon_all.png'
  },
  {
    id: 'no',
    name: '무실적',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29730/tips_team_icon_no.png'
  },
  {
    id: 'plcc',
    name: 'PLCC',
    imageUrl: 'https://api.card-gorilla.com:8080/storage/corp/2/tips/29734/tips_team_icon_plcc.png'
  }
];

// 개별 혜택 아이템 컴포넌트
const BenefitItem = ({ benefit, onClick, companyColor }) => {
  return (
    <div 
      className="benefit-item"
      onClick={() => onClick && onClick(benefit)}
      style={{
        '--hue-rotate': getHueRotateFromColor(companyColor),
        '--extra-filter': getExtraFilterFromColor(companyColor)
      }}
    >
      {/* 아이콘 이미지 */}
      <div className="benefit-item__icon">
        <img 
          src={benefit.imageUrl}
          alt={benefit.name}
          className="benefit-item__image"
        />
      </div>
      
      {/* 혜택 이름 */}
      <span className="benefit-item__name">
        {benefit.name}
      </span>
    </div>
  );
};

// 메인 컴포넌트
const CardBenefitsSelector = ({ 
  onBenefitSelect = null,
  companyColor = '#0066cc'
}) => {
  return (
    <div className="card-benefits-selector">
      {BENEFIT_CATEGORIES.map((benefit) => (
        <BenefitItem
          key={benefit.id}
          benefit={benefit}
          onClick={onBenefitSelect}
          companyColor={companyColor}
        />
      ))}
    </div>
  );
};

export default CardBenefitsSelector;