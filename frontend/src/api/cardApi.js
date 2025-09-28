import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 카드 타입별 데이터 가져오기(페이지네이션 지원)
export const fetchCardsByType = async (type, page = 0, size = 10) => {
  const response = await axios.get(`${API_BASE_URL}/api/cards/type/${type}`, {
    params: { page, size }
  });
  return response.data;
};

// 카드 단일 조회 (혜택 정보 포함)
export const fetchCardById = async (cardId) => {
  const response = await axios.get(`${API_BASE_URL}/api/cards/${cardId}`);
  return response.data;
};

// 이벤트가 있는 카드들 조회
export const fetchCardsWithEvents = async (company = null) => {
  const params = company ? { company } : {};
  const response = await axios.get(`${API_BASE_URL}/api/cards/events`, { params });
  return response.data;
};

// 특정 회사의 특정 혜택별 카드 조회
export const fetchCardsByBenefit = async (company, benefit) => {
  const response = await axios.get(`${API_BASE_URL}/api/cards/company/${company}/benefit/${benefit}`);
  return response.data;
};