import React from "react";
import CardDetail from "../components/CardDetail/CardDetail";

export default function CardDetailPage() {
  const cardData = {
    promoText: "최대 18만원 캐시백 지급 이벤트",
    promoCta: "상세보기",
    title: "LOCA 365 카드",
    issuer: "롯데카드",
    imageUrl:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1200&auto=format&fit=crop",
    bullets: [
      "아파트관리비, 공과금 10% 할인",
      "교통, 통신, 배달앱 10% 할인",
      "스트리밍 1,500원 할인",
    ],
    feeDomestic: "20,000원",
    feeInternational: "20,000원",
    minSpend: "전월실적 50만원 이상",
    brands: ["VISA", "Mastercard", "AMEX"],
    benefits: [
      {
        icon: "🧾",
        title: "공과금",
        subtitle: "[생활업종] 아파트관리비 10% 할인",
        details: ["아파트관리비 자동이체/납부 시 10% 청구할인"],
      },
      {
        icon: "🧾",
        title: "공과금",
        subtitle: "[생활업종] 공과금(도시가스비, 전기료) 10% 할인",
        details: ["도시가스/전기료 납부 시 10% 청구할인"],
      },
      {
        icon: "🚌",
        title: "대중교통",
        subtitle: "[생활업종] 대중교통 10% 할인",
        details: ["지하철/버스 이용금액 10% 청구할인"],
      },
      {
        icon: "📶",
        title: "통신",
        subtitle: "[생활업종] SKT, KT, LG U+ 10% 할인",
        details: ["이동통신 요금 자동이체 납부 시 10% 청구할인"],
      },
      {
        icon: "🍱",
        title: "배달앱",
        subtitle: "[생활업종] 배달의민족, 요기요, 쿠팡이츠 10% 할인",
        details: ["가맹점 결제 시 10% 청구할인"],
      },
      {
        icon: "🛡️",
        title: "보험사",
        subtitle: "[생활업종] 생명보험, 손해보험 10% 할인",
        details: ["보험료 자동이체 납부 시 10% 청구할인"],
      },
      {
        icon: "📚",
        title: "학습지",
        subtitle: "[생활업종] 학습지 10% 할인",
        details: ["학습지 자동이체 납부 시 10% 청구할인"],
      },
      {
        icon: "📺",
        title: "디지털구독",
        subtitle:
          "[생활업종] 넷플릭스, 유튜브, 왓챠, 멜론, 지니뮤직, 디즈니 플러스 1,500원 할인",
        details: ["스트리밍/음원 구독료 1,500원 청구할인"],
      },
      {
        icon: "💳",
        title: "무이자할부",
        subtitle: "국내 가맹점 2~3개월 무이자 할부",
        details: ["행사 가맹점 및 금액 조건에 따라 상이"],
      },
      {
        icon: "⚠️",
        title: "유의사항",
        subtitle: "꼭 확인하세요!",
        details: [
          "전월실적 및 적립/할인 제외 대상 확인 필수",
          "상세 약관은 카드사 페이지 참고",
        ],
      },
    ],
  };

  return (
    <main style={{ background: "#f4f5f6", minHeight: "100vh" }}>
      <CardDetail {...cardData} onGoToIssuer={handleGoToIssuer} />
    </main>
  );
}
