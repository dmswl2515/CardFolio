import React, { useState, useEffect } from 'react';
import { 
    calculateComprehensiveScore, 
    calculateSteadyScore, 
    calculateNewCardScore,
    sortCardsByRanking 
} from '../../utils/cardRankingAlgorithm';
import EnhancedCardData from '../EnhancedCardData';
import './AlgorithmTest.css';

const AlgorithmTest = () => {
    const [rankingType, setRankingType] = useState('comprehensive');
    const [sortedCards, setSortedCards] = useState([]);
    const [algorithmMetrics, setAlgorithmMetrics] = useState({});

    useEffect(() => {
        // 각 카드의 알고리즘 메트릭을 추출하여 별도 객체로 구성
        const metrics = {};
        EnhancedCardData.forEach(card => {
            metrics[card.id] = {
                userRating: card.userRating,
                monthlyUsage: card.monthlyUsage,
                benefitUsageRate: card.benefitUsageRate,
                clickThroughRate: card.clickThroughRate,
                conversionRate: card.conversionRate,
                searchVolume: card.searchVolume,
                competitorComparison: card.competitorComparison,
                stabilityIndex: card.stabilityIndex,
                userRetentionRate: card.userRetentionRate,
                volatilityIndex: card.volatilityIndex,
                consistencyScore: card.consistencyScore,
                initialTraction: card.initialTraction,
                growthRate: card.growthRate,
                marketPenetration: card.marketPenetration,
                innovationScore: card.innovationScore,
                competitorAdvantage: card.competitorAdvantage,
                monthlyStats: card.monthlyStats
            };
        });
        setAlgorithmMetrics(metrics);
    }, []);

    useEffect(() => {
        if (Object.keys(algorithmMetrics).length > 0) {
            const sorted = sortCardsByRanking(EnhancedCardData, rankingType, algorithmMetrics);
            setSortedCards(sorted);
        }
    }, [rankingType, algorithmMetrics]);

    const getRankingTitle = () => {
        switch (rankingType) {
            case 'comprehensive': return '베스트셀러 (종합 점수)';
            case 'steady': return '스테디셀러 (꾸준한 인기)';
            case 'new': return '신카드 (최신 트렌드)';
            default: return '베스트셀러';
        }
    };

    const getRankingDescription = () => {
        switch (rankingType) {
            case 'comprehensive': 
                return '인기도, 혜택, 만족도, 사용빈도, 트렌드, 비용효율성, 안정성을 종합한 점수';
            case 'steady': 
                return '시간에 따른 일관성과 안정성, 사용자 유지율을 중심으로 한 점수';
            case 'new': 
                return '출시일, 성장률, 혁신성, 시장 침투력을 기반으로 한 점수';
            default: return '';
        }
    };

    return (
        <div className="algorithm-test-container">
            <div className="algorithm-header">
                <h1>🎯 고급 카드 랭킹 알고리즘 테스트</h1>
                <p className="algorithm-subtitle">
                    머신러닝 기반 다차원 스코어링 시스템으로 카드를 분석합니다
                </p>
            </div>

            <div className="ranking-controls">
                <div className="algorithm-buttons">
                    <button 
                        className={`algorithm-btn ${rankingType === 'comprehensive' ? 'active' : ''}`}
                        onClick={() => setRankingType('comprehensive')}
                    >
                        🏆 베스트셀러
                    </button>
                    <button 
                        className={`algorithm-btn ${rankingType === 'steady' ? 'active' : ''}`}
                        onClick={() => setRankingType('steady')}
                    >
                        📈 스테디셀러
                    </button>
                    <button 
                        className={`algorithm-btn ${rankingType === 'new' ? 'active' : ''}`}
                        onClick={() => setRankingType('new')}
                    >
                        ✨ 신카드
                    </button>
                </div>
                
                <div className="ranking-info">
                    <h3>{getRankingTitle()}</h3>
                    <p>{getRankingDescription()}</p>
                </div>
            </div>

            <div className="algorithm-results">
                {sortedCards.length > 0 && (
                    <div className="cards-ranking-list">
                        {sortedCards.map((card, index) => (
                            <div key={card.id} className="ranking-card-item">
                                <div className="ranking-position">
                                    <span className="rank-number">#{index + 1}</span>
                                    <span className="algorithm-score">
                                        {card.algorithmScore}점
                                    </span>
                                </div>
                                
                                <div className="card-image-section">
                                    <img src={card.img} alt={card.name} className="ranking-card-image" />
                                </div>
                                
                                <div className="card-info-section">
                                    <h4 className="card-name-ranking">{card.name}</h4>
                                    <p className="card-company-ranking">{card.company}</p>
                                    
                                    <div className="algorithm-metrics">
                                        {rankingType === 'comprehensive' && (
                                            <>
                                                <div className="metric-item">
                                                    <span>👥 인기도:</span> 
                                                    <span>{card.count}명</span>
                                                </div>
                                                <div className="metric-item">
                                                    <span>⭐ 평점:</span> 
                                                    <span>{algorithmMetrics[card.id]?.userRating}/5.0</span>
                                                </div>
                                                <div className="metric-item">
                                                    <span>💳 월 사용:</span> 
                                                    <span>{algorithmMetrics[card.id]?.monthlyUsage}회</span>
                                                </div>
                                            </>
                                        )}
                                        
                                        {rankingType === 'steady' && (
                                            <>
                                                <div className="metric-item">
                                                    <span>📊 안정성:</span> 
                                                    <span>{Math.round((algorithmMetrics[card.id]?.stabilityIndex || 0) * 100)}%</span>
                                                </div>
                                                <div className="metric-item">
                                                    <span>🔄 유지율:</span> 
                                                    <span>{Math.round((algorithmMetrics[card.id]?.userRetentionRate || 0) * 100)}%</span>
                                                </div>
                                                <div className="metric-item">
                                                    <span>📉 변동성:</span> 
                                                    <span>{Math.round((algorithmMetrics[card.id]?.volatilityIndex || 0) * 100)}%</span>
                                                </div>
                                            </>
                                        )}
                                        
                                        {rankingType === 'new' && (
                                            <>
                                                <div className="metric-item">
                                                    <span>📅 출시일:</span> 
                                                    <span>{card.release}</span>
                                                </div>
                                                <div className="metric-item">
                                                    <span>🚀 성장률:</span> 
                                                    <span>{Math.round((algorithmMetrics[card.id]?.growthRate || 0) * 100)}%</span>
                                                </div>
                                                <div className="metric-item">
                                                    <span>💡 혁신성:</span> 
                                                    <span>{Math.round((algorithmMetrics[card.id]?.innovationScore || 0) * 100)}%</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="card-benefits-section">
                                    <div className="benefit-list">
                                        {card.benefit1 && (
                                            <div className="benefit-item">
                                                <span className="benefit-name">{card.benefit1}</span>
                                                <span className="benefit-content">{card.benefitcontent1}</span>
                                            </div>
                                        )}
                                        {card.benefit2 && (
                                            <div className="benefit-item">
                                                <span className="benefit-name">{card.benefit2}</span>
                                                <span className="benefit-content">{card.benefitcontent2}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="algorithm-explanation">
                <h3>🔬 알고리즘 상세 분석</h3>
                <div className="algorithm-details">
                    {rankingType === 'comprehensive' && (
                        <div className="algorithm-breakdown">
                            <h4>종합 점수 구성요소</h4>
                            <ul>
                                <li><strong>인기도 (25%):</strong> 로그 스케일 사용자 수 + 검색량</li>
                                <li><strong>혜택 만족도 (20%):</strong> 혜택 다양성 + 활용도 + 사용자 평가</li>
                                <li><strong>사용자 만족도 (15%):</strong> 평점 + 평점 트렌드 분석</li>
                                <li><strong>사용 빈도 (15%):</strong> 월간 사용량 + 클릭률</li>
                                <li><strong>트렌딩 (10%):</strong> 최근 3개월 성장률</li>
                                <li><strong>비용 효율성 (10%):</strong> 연회비 대비 혜택 활용도</li>
                                <li><strong>안정성 (5%):</strong> 변동성 지수 기반</li>
                            </ul>
                        </div>
                    )}
                    
                    {rankingType === 'steady' && (
                        <div className="algorithm-breakdown">
                            <h4>스테디셀러 점수 구성요소</h4>
                            <ul>
                                <li><strong>시계열 안정성 (40%):</strong> 변동계수 기반 일관성 측정</li>
                                <li><strong>낮은 변동성 (25%):</strong> 월별 사용자 변동 최소화</li>
                                <li><strong>사용자 유지 (20%):</strong> 지속적 이용률</li>
                                <li><strong>일관성 점수 (15%):</strong> 서비스 품질 일관성</li>
                            </ul>
                        </div>
                    )}
                    
                    {rankingType === 'new' && (
                        <div className="algorithm-breakdown">
                            <h4>신카드 점수 구성요소</h4>
                            <ul>
                                <li><strong>신카드 보너스:</strong> 출시 후 365일까지 지수함수 감소</li>
                                <li><strong>성장 모멘텀:</strong> 초기 견인력 + 성장률</li>
                                <li><strong>혁신성:</strong> 기술/서비스 혁신 요소</li>
                                <li><strong>시장 영향력:</strong> 시장 침투력 + 경쟁 우위</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlgorithmTest;