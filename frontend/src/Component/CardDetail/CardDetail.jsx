import React, { useState } from "react";
import { Card } from "../CardIntroduction/CardIntroduction";
import "./CardDetail.css";

const BrandChip = ({ label }) => <span className="brand-chip">{label}</span>;

const InfoTag = ({ label, value }) => (
  <div className="info-tag">
    <span className="info-label">{label}</span>
    <span className="info-value">{value}</span>
  </div>
);

const Chevron = ({ open }) => (
  <svg
    className={`chev ${open ? "open" : ""}`}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

function AccordionItem({ icon, title, subtitle, details, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`acc-item ${open ? "is-open" : ""}`}>
      <button className="acc-head" onClick={() => setOpen((v) => !v)}>
        <div className="acc-left">
          <div className="acc-icon" aria-hidden>
            {typeof icon === "string" ? <span>{icon}</span> : icon}
          </div>
          <div className="acc-texts">
            <div className="acc-title">{title}</div>
            {subtitle && <div className="acc-sub">{subtitle}</div>}
          </div>
        </div>
        <Chevron open={open} />
      </button>

      {open && (
        <div className="acc-body">
          {Array.isArray(details) ? (
            <div className="acc-details">
              {details.map((d, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: d }} />
              ))}
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: details }} />
          )}
        </div>
      )}
    </div>
  );
}

export default function CardDetail({
  // Hero 영역
  promoText, // 상단 배지 문구
  promoCta, // 배지 오른쪽 버튼 문구(예: 상세보기)
  title, // 카드명
  issuer, // 카드사
  imageUrl, // 카드 이미지
  bullets = [], // 핵심 혜택 bullet 3~4줄
  annualFee, // 국내연회비
  minSpend, // 전월실적
  brands = [], // VISA / Mastercard / AMEX 등
  issueType = [], // 온라인발급 전용 카드
  onGoToIssuer, // "카드사 바로가기" 클릭 핸들러

  // Accordion 혜택 리스트
  benefits = [], // [{icon, title, subtitle, details}]
}) {
  const [compare, setCompare] = useState(false);

  const handleCompareChange = (e) => {
    const isChecked = e.target.checked;
    setCompare(isChecked);
    
    if (isChecked) {
      // 장바구니에 추가
      const cartItem = {
        cardId: title, // 임시로 title을 cardId로 사용
        title,
        company: issuer,
        image: imageUrl,
        benefit: promoText,
        fee: annualFee,
        requirement: minSpend,
        details: benefits.filter(benefit => 
          benefit.title && 
          !benefit.title.includes('유의사항') && 
          !benefit.title.includes('주의사항')
        ).map(benefit => ({
          label: benefit.title,
          desc: benefit.subtitle
        }))
      };
      
      const existingCart = JSON.parse(localStorage.getItem('cardfolio_cart') || '[]');
      const isAlreadyInCart = existingCart.some(item => item.cardId === cartItem.cardId);
      
      if (!isAlreadyInCart) {
        const updatedCart = [...existingCart, cartItem];
        localStorage.setItem('cardfolio_cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
        alert('비교함에 추가되었습니다!');
      } else {
        alert('이미 비교함에 있는 카드입니다.');
        setCompare(false);
      }
    } else {
      // 장바구니에서 제거
      const existingCart = JSON.parse(localStorage.getItem('cardfolio_cart') || '[]');
      const updatedCart = existingCart.filter(item => item.cardId !== title);
      localStorage.setItem('cardfolio_cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new Event('cartUpdated'));
      alert('비교함에서 제거되었습니다.');
    }
  };

  return (
    <div className="cd-wrap">
      {/* HERO */}
      <section className="cd-hero">
        <div className="cd-hero-inner">
          <div className="cd-grid">
            {/* 이미지 */}
            <div className="cd-img-col">
              {imageUrl ? (
                <Card
                  title=""
                  imageUrl={imageUrl}
                  subtitle=""
                  circleColorClass="gray-background"
                />
              ) : (
                <div className="cd-img ph" />
              )}
              
              <div className="cd-actions">
                <label className="compare">
                  <input
                    type="checkbox"
                    checked={compare}
                    onChange={handleCompareChange}
                  />
                  <span>비교함 담기</span>
                </label>
              </div>
            </div>

            {/* 텍스트 */}
            <div className="cd-text-col">
              <div className="cd-promo">
                {promoText && <span className="promo-pill">{promoText}</span>}
                {/* {promoCta && <button className="promo-cta">{promoCta}</button>} */}
              </div>
              <h1 className="cd-title">{title}</h1>
              <div className="issuer">{issuer}</div>

              <ul className="cd-bullets">
                {bullets.map((b, i) => (
                  <li key={i}>
                    <div className="benefit-text">{b.benefit}</div>
                    {b.content && <div className="benefit-content">{b.content}</div>}
                  </li>
                ))}
              </ul>

              <button className="cta" onClick={onGoToIssuer}>
                카드사 바로가기 <span className="cta-arrow">→</span>
              </button>
            </div>    
          </div>
          <div className="cd-info-row">
                <InfoTag label="" value={`${annualFee}`} />
                <InfoTag label="" value={minSpend} />
                <InfoTag label="" value={brands} />
                <InfoTag label="" value={issueType} />
          </div>      
        </div>
      </section>

      {/* BENEFITS */}
      <section className="cd-benefit">
        <div className="cd-benefit-inner">
          <h2 className="benefit-title">주요혜택</h2>

          <div className="acc-wrap">
            {benefits.map((bf, i) => (
              <AccordionItem
                key={i}
                icon={bf.icon}
                title={bf.title}
                subtitle={bf.subtitle}
                details={bf.details}
                defaultOpen={bf.defaultOpen}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
