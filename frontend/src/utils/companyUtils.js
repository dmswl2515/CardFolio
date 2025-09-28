// 카드사별 브랜드 컬러
export const companyColors = {
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

// 카드사별 연한 배경색 (투명도 적용)
export const companyLightColors = {
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

// 카드사 컬러 가져오기
export const getCompanyColor = (companyName) => {
  return companyColors[companyName] || companyColors["전체"];
};

// 카드사 연한 컬러 가져오기
export const getCompanyLightColor = (companyName) => {
  return companyLightColors[companyName] || companyLightColors["전체"];
};

// 카드 상품 데이터 (임시)
export const cardProducts = {
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

// 카드 이벤트 클릭 핸들러
export const handleCardEventClick = (card) => {
  console.log('Event card clicked:', card);
};

// 카드사 색상별 hue-rotate 매핑 (노란색 베이스 아이콘 기준 조정)
export const companyHueRotates = {
  "#4666C1": "190deg", // 신한카드 - 파란색
  "#006BD1": "180deg", // 삼성카드 - 블루 
  "#444444": "0deg",   // 현대카드 - 회색 (변화없음)
  "#6B4AAF": "220deg", // 롯데카드 - 보라색
  "#79684F": "350deg", // KB국민카드 - 갈색
  "#016795": "170deg", // 우리카드 - 파란색
  "#007C72": "120deg", // 하나카드 - 청록색
  "#1961A1": "170deg", // NH농협카드 - 파란색
  "#2C70B9": "175deg", // IBK기업은행 - 파란색
  "#BB464B": "300deg", // BC바로카드 - 빨간색
  "#667eea": "190deg"  // 기본 - 보라파랑
};

// 카드사별 추가 필터 설정
export const companyExtraFilters = {
  "#007C72": "grayscale(0.3) brightness(0.9)", // 하나카드 전용
};

// 색상으로 hue-rotate 값 가져오기
export const getHueRotateFromColor = (color) => {
  return companyHueRotates[color] || "0deg";
};

// 색상으로 추가 필터 가져오기
export const getExtraFilterFromColor = (color) => {
  return companyExtraFilters[color] || "";
};