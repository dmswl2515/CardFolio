import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 카드 타입별 데이터 가져오기
export const fetchCardsByType = async (type) => {
  const response = await axios.get(`${API_BASE_URL}/api/cards/type/${type}`);
  return response.data;
};