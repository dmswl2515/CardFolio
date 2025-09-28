import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../Component/CardDetail/CardDetail";
import { fetchCardById } from "../../api/cardApi";
import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import { getIconByMainCategory } from "../../constants/benefitIcons";

export default function CardDetailPage() {
  const { cardId } = useParams();
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCardData = async () => {
      try {
        setLoading(true);
        const card = await fetchCardById(cardId);
        
        // API 데이터를 CardDetail 컴포넌트에 맞는 형식으로 변환
        const transformedData = {
          promoText: card.event || "",
          title: card.name || "",
          issuer: card.company || "",
          imageUrl: card.img || "",
          bullets: [
            { benefit: card.benefit1, content: card.benefitcontent1 },
            { benefit: card.benefit2, content: card.benefitcontent2 },
            { benefit: card.benefit3, content: card.benefitcontent3 }
          ].filter(item => item.benefit),
          annualFee: card.annualfee || "",
          minSpend: card.condition || "",
          brands: ["Mastercard"], // 기본값
          issueType: [card.issueType || ""],
          
          // 실제 혜택 데이터를 benefits 배열로 변환
          benefits: card.benefits?.map(benefit => ({
            icon: getIconByMainCategory(benefit.mainCategory),
            title: benefit.category,
            subtitle: benefit.summary,
            details: benefit.detailHtml ? [benefit.detailHtml] : [],
            defaultOpen: false
          })) || []
        };

        setCardData(transformedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (cardId) {
      loadCardData();
    }
  }, [cardId]);

  const handleGoToIssuer = () => {
    // 카드사별 URL 매핑
    const issuerUrls = {
      '롯데카드': 'https://www.lottecard.co.kr',
      '삼성카드': 'https://www.samsungcard.com',
      '현대카드': 'https://www.hyundaicard.com',
      'KB국민카드': 'https://www.kbcard.com',
      '신한카드': 'https://www.shinhancard.com'
    };
    
    const url = issuerUrls[cardData?.issuer] || 'https://www.card.go.kr';
    window.open(url, '_blank');
  };

  if (loading) {
    return <LoadingSpinner message="카드 정보를 불러오는 중입니다" />;
  }

  if (error) {
    return (
      <main style={{ background: "#f4f5f6", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2>카드 정보를 불러오는데 실패했습니다</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  if (!cardData) {
    return (
      <main style={{ background: "#f4f5f6", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2>카드 정보를 찾을 수 없습니다</h2>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: "#f4f5f6", minHeight: "100vh" }}>
      <CardDetail {...cardData} onGoToIssuer={handleGoToIssuer} />
    </main>
  );
}