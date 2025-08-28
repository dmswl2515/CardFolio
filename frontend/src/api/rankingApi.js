import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 전체 랭킹 조회
export const fetchOverallRanking = async (limit = 100) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/overall`, {
    params: { limit }
  });
  return response.data;
};

// 카드타입별 랭킹 조회 (신용카드/체크카드)
export const fetchTypeRanking = async (cardType, limit = 100) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/type/${cardType}`, {
    params: { limit }
  });
  return response.data;
};

// 카드사별 랭킹 조회
export const fetchCompanyRanking = async (company, limit = 10) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/company/${company}`, {
    params: { limit }
  });
  return response.data;
};

// 혜택별 랭킹 조회 (통신사, 영화, 쇼핑 등)
export const fetchBenefitRanking = async (category, limit = 10) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/benefit/${category}`, {
    params: { limit }
  });
  return response.data;
};

// 신규카드 랭킹 조회
export const fetchNewReleaseRanking = async (limit = 30) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/new-release`, {
    params: { limit }
  });
  return response.data;
};

// 전월실적별 랭킹 조회
export const fetchPreviousPerformanceRanking = async (amount, limit = 30) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/previous-performance/${amount}`, {
    params: { limit }
  });
  return response.data;
};

// 카드사별 캐시백 Top5 조회
export const fetchEventRanking = async (keyword, limit = 5) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/event/${keyword}`, {
    params: { limit }
  });
  return response.data;
};

// 카드 타입별 랭킹 조회 (할인형/포인트형/마일리지형)
export const fetchBenefitTypeRanking = async (typeKeyword, limit = 30) => {
  const response = await axios.get(`${API_BASE_URL}/api/ranking/benefit-type/${typeKeyword}`, {
    params: { limit }
  });
  return response.data;
};
