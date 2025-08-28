import React, { useState } from "react";
import "./cardDetail.css";

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
            <ul className="acc-ul">
              {details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          ) : (
            <p>{details}</p>
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
  feeDomestic, // 국내연회비
  feeInternational, // 해외연회비
  minSpend, // 전월실적
  brands = [], // VISA / Mastercard / AMEX 등
  onGoToIssuer, // "카드사 바로가기" 클릭 핸들러

  // Accordion 혜택 리스트
  benefits = [], // [{icon, title, subtitle, details}]
}) {
  const [compare, setCompare] = useState(false);

  return (
    <div className="cd-wrap">
      {/* HERO */}
      <section className="cd-hero">
        <div className="cd-hero-inner">
          <div className="cd-promo">
            {promoText && <span className="promo-pill">{promoText}</span>}
            {promoCta && <button className="promo-cta">{promoCta}</button>}
            <div className="hero-icons" aria-hidden>
              {/* 우상단 아이콘 자리 (공유/스크랩 등 필요시 채워 사용) */}
            </div>
          </div>

          <div className="cd-grid">
            {/* 이미지 */}
            <div className="cd-img-col">
              {imageUrl ? (
                <img className="cd-img" src={imageUrl} alt={`${title} 카드`} />
              ) : (
                <div className="cd-img ph" />
              )}
            </div>

            {/* 텍스트 */}
            <div className="cd-text-col">
              <div className="issuer">{issuer}</div>
              <h1 className="cd-title">{title}</h1>

              <ul className="cd-bullets">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="cd-actions">
                <label className="compare">
                  <input
                    type="checkbox"
                    checked={compare}
                    onChange={(e) => setCompare(e.target.checked)}
                  />
                  <span>비교함 담기</span>
                </label>

                <button className="cta" onClick={onGoToIssuer}>
                  카드사 바로가기 <span className="cta-arrow">→</span>
                </button>
              </div>

              <div className="cd-info-row">
                <InfoTag label="국내연회비" value={feeDomestic} />
                <InfoTag label="해외연회비" value={feeInternational} />
                <InfoTag label="" value={minSpend} />
                <div className="brand-row">
                  {brands.map((b) => (
                    <BrandChip key={b} label={b} />
                  ))}
                </div>
              </div>
            </div>
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
