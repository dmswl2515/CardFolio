/**
 * 고급 카드 랭킹 알고리즘 시스템
 * 포트폴리오용 종합 스코어링 알고리즘
 */

// 가중치 설정 (총합 100%)
const ALGORITHM_WEIGHTS = {
    popularity: 0.25,      // 25% - 인기도 (count 기반)
    benefits: 0.20,        // 20% - 혜택 만족도 
    satisfaction: 0.15,    // 15% - 사용자 만족도
    usageFrequency: 0.15,  // 15% - 사용 빈도
    trending: 0.10,        // 10% - 트렌딩 스코어
    costEfficiency: 0.10,  // 10% - 비용 효율성
    stability: 0.05        // 5% - 안정성 지수
};

// 시간 가중치 설정 (최근 데이터일수록 높은 가중치)
const TIME_WEIGHTS = {
    recent: 1.0,    // 최근 30일
    medium: 0.8,    // 31-90일
    old: 0.6        // 91일 이상
};

/**
 * 메인 종합 스코어 계산 (베스트셀러)
 * @param {Object} card - 카드 데이터
 * @param {Object} additionalMetrics - 추가 메트릭 데이터
 * @returns {number} 0-100 종합 스코어
 */
export const calculateComprehensiveScore = (card, additionalMetrics = {}) => {
    const {
        // 기존 데이터에서 추출
        count = 0,
        release = new Date().toISOString(),
        fee = "",
        
        // 추가 필요 데이터 (기본값 설정)
        userRating = 4.2,           // 사용자 평점 (1-5)
        monthlyUsage = 100,         // 월 사용 횟수
        benefitUsageRate = 0.7,     // 혜택 사용률 (0-1)
        clickThroughRate = 0.05,    // 클릭률 (0-1)
        conversionRate = 0.02,      // 전환율 (0-1)
        searchVolume = 1000,        // 검색량
        competitorComparison = 0.6, // 경쟁사 대비 우위 (0-1)
        stabilityIndex = 0.8,       // 안정성 지수 (0-1)
        
        // 시계열 데이터 (최근 6개월)
        monthlyStats = [
            { month: 6, users: count * 0.8, rating: userRating - 0.1 },
            { month: 5, users: count * 0.85, rating: userRating - 0.05 },
            { month: 4, users: count * 0.9, rating: userRating },
            { month: 3, users: count * 0.95, rating: userRating + 0.1 },
            { month: 2, users: count * 1.0, rating: userRating + 0.05 },
            { month: 1, users: count, rating: userRating }
        ]
    } = { ...card, ...additionalMetrics };

    // 1. 인기도 스코어 (25%)
    const popularityScore = calculatePopularityScore(count, searchVolume);
    
    // 2. 혜택 만족도 스코어 (20%)
    const benefitsScore = calculateBenefitsScore(card, benefitUsageRate, userRating);
    
    // 3. 사용자 만족도 스코어 (15%)
    const satisfactionScore = calculateSatisfactionScore(userRating, monthlyStats);
    
    // 4. 사용 빈도 스코어 (15%)
    const usageScore = calculateUsageFrequencyScore(monthlyUsage, clickThroughRate);
    
    // 5. 트렌딩 스코어 (10%)
    const trendingScore = calculateTrendingScore(monthlyStats, release);
    
    // 6. 비용 효율성 스코어 (10%)
    const costScore = calculateCostEfficiencyScore(fee, benefitUsageRate);
    
    // 7. 안정성 스코어 (5%)
    const stabilityScore = stabilityIndex * 100;

    // 가중 평균으로 최종 스코어 계산
    const comprehensiveScore = 
        popularityScore * ALGORITHM_WEIGHTS.popularity +
        benefitsScore * ALGORITHM_WEIGHTS.benefits +
        satisfactionScore * ALGORITHM_WEIGHTS.satisfaction +
        usageScore * ALGORITHM_WEIGHTS.usageFrequency +
        trendingScore * ALGORITHM_WEIGHTS.trending +
        costScore * ALGORITHM_WEIGHTS.costEfficiency +
        stabilityScore * ALGORITHM_WEIGHTS.stability;

    return Math.round(comprehensiveScore * 100) / 100; // 소수점 2자리로 반올림
};

/**
 * 스테디셀러 스코어 계산 (꾸준히 사랑받은)
 * 시간에 따른 일관성과 안정성 중심
 */
export const calculateSteadyScore = (card, additionalMetrics = {}) => {
    const {
        monthlyStats = [],
        stabilityIndex = 0.8,
        userRetentionRate = 0.85,   // 사용자 유지율
        volatilityIndex = 0.2,      // 변동성 지수 (낮을수록 좋음)
        consistencyScore = 0.9      // 일관성 점수
    } = { ...card, ...additionalMetrics };

    // 시계열 안정성 분석
    const timeSeriesStability = calculateTimeSeriesStability(monthlyStats);
    
    // 변동성 점수 (낮은 변동성일수록 높은 점수)
    const volatilityScore = (1 - volatilityIndex) * 100;
    
    // 유지율 점수
    const retentionScore = userRetentionRate * 100;
    
    // 일관성 점수
    const consistencyPoints = consistencyScore * 100;

    // 스테디셀러 가중치
    const steadyScore = 
        timeSeriesStability * 0.4 +     // 40% - 시계열 안정성
        volatilityScore * 0.25 +        // 25% - 낮은 변동성
        retentionScore * 0.20 +         // 20% - 사용자 유지
        consistencyPoints * 0.15;       // 15% - 일관성

    return Math.round(steadyScore * 100) / 100;
};

/**
 * 신카드 스코어 계산 (출시 기반)
 * 최신성과 트렌드 중심
 */
export const calculateNewCardScore = (card, additionalMetrics = {}) => {
    const {
        release = new Date().toISOString(),
        initialTraction = 0.3,      // 초기 견인력
        growthRate = 0.15,          // 성장률
        marketPenetration = 0.05,   // 시장 침투율
        innovationScore = 0.7,      // 혁신성 점수
        competitorAdvantage = 0.6   // 경쟁 우위
    } = { ...card, ...additionalMetrics };

    const releaseDate = new Date(release);
    const daysSinceRelease = (new Date() - releaseDate) / (1000 * 60 * 60 * 24);
    
    // 신카드 보너스 (출시 후 365일까지 감소하는 지수함수)
    const newCardBonus = Math.exp(-daysSinceRelease / 365) * 30;
    
    // 성장 모멘텀 점수
    const growthMomentum = (initialTraction + growthRate) * 50;
    
    // 혁신성 점수
    const innovationPoints = innovationScore * 40;
    
    // 시장 영향력
    const marketImpact = (marketPenetration + competitorAdvantage) * 30;

    const newCardScore = newCardBonus + growthMomentum + innovationPoints + marketImpact;
    
    return Math.min(Math.round(newCardScore * 100) / 100, 100); // 최대 100점
};

// ========== 보조 함수들 ==========

/**
 * 인기도 스코어 계산
 */
const calculatePopularityScore = (count, searchVolume) => {
    const normalizedCount = Math.log(count + 1) / Math.log(1000) * 50; // 로그 스케일
    const normalizedSearch = Math.log(searchVolume + 1) / Math.log(10000) * 50;
    return Math.min(normalizedCount + normalizedSearch, 100);
};

/**
 * 혜택 만족도 스코어 계산
 */
const calculateBenefitsScore = (card, benefitUsageRate, userRating) => {
    const benefitCount = [card.benefit1, card.benefit2, card.benefit3]
        .filter(benefit => benefit && benefit.trim()).length;
    
    const diversityScore = (benefitCount / 3) * 40; // 혜택 다양성
    const usageScore = benefitUsageRate * 40;       // 혜택 활용도
    const ratingScore = (userRating / 5) * 20;      // 사용자 평가
    
    return diversityScore + usageScore + ratingScore;
};

/**
 * 사용자 만족도 스코어 계산
 */
const calculateSatisfactionScore = (userRating, monthlyStats) => {
    const baseRating = (userRating / 5) * 70;
    
    // 평점 트렌드 분석
    const ratingTrend = monthlyStats.length > 1 ? 
        (monthlyStats[0].rating - monthlyStats[monthlyStats.length - 1].rating) * 30 : 0;
    
    return Math.min(Math.max(baseRating + ratingTrend, 0), 100);
};

/**
 * 사용 빈도 스코어 계산
 */
const calculateUsageFrequencyScore = (monthlyUsage, clickThroughRate) => {
    const usageNormalized = Math.log(monthlyUsage + 1) / Math.log(1000) * 70;
    const ctrScore = clickThroughRate * 1000; // CTR을 점수로 변환
    
    return Math.min(usageNormalized + ctrScore, 100);
};

/**
 * 트렌딩 스코어 계산
 */
const calculateTrendingScore = (monthlyStats, release) => {
    if (monthlyStats.length < 2) return 50; // 기본 점수
    
    // 최근 3개월 사용자 증가율
    const recent3Months = monthlyStats.slice(0, 3);
    const growthRate = recent3Months.length > 1 ? 
        (recent3Months[0].users - recent3Months[recent3Months.length - 1].users) / 
        recent3Months[recent3Months.length - 1].users : 0;
    
    const trendScore = Math.max(growthRate * 100 + 50, 0);
    return Math.min(trendScore, 100);
};

/**
 * 비용 효율성 스코어 계산
 */
const calculateCostEfficiencyScore = (fee, benefitUsageRate) => {
    // 연회비에서 숫자 추출
    const feeMatch = fee.match(/(\d+(?:,\d+)*)/);
    const annualFee = feeMatch ? parseInt(feeMatch[1].replace(/,/g, '')) : 0;
    
    // 수수료 역산 점수 (낮은 수수료일수록 높은 점수)
    const feeScore = Math.max(100 - (annualFee / 1000), 20);
    
    // 혜택 대비 비용 효율성
    const efficiencyScore = benefitUsageRate * 50;
    
    return (feeScore + efficiencyScore) / 2;
};

/**
 * 시계열 안정성 계산
 */
const calculateTimeSeriesStability = (monthlyStats) => {
    if (monthlyStats.length < 3) return 70; // 기본 안정성
    
    const values = monthlyStats.map(stat => stat.users);
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);
    const cv = stdDev / mean; // 변동계수
    
    // 변동계수가 낮을수록 높은 안정성 점수
    return Math.max(100 - (cv * 200), 0);
};

/**
 * 카드 랭킹 타입별 정렬 함수
 */
export const sortCardsByRanking = (cards, rankingType = 'comprehensive', additionalMetrics = {}) => {
    return cards.map(card => {
        let score;
        switch (rankingType) {
            case 'steady':
                score = calculateSteadyScore(card, additionalMetrics[card.id]);
                break;
            case 'new':
                score = calculateNewCardScore(card, additionalMetrics[card.id]);
                break;
            case 'comprehensive':
            default:
                score = calculateComprehensiveScore(card, additionalMetrics[card.id]);
                break;
        }
        return { ...card, algorithmScore: score };
    }).sort((a, b) => b.algorithmScore - a.algorithmScore);
};

/**
 * A/B 테스트용 알고리즘 성능 분석
 */
export const analyzeAlgorithmPerformance = (testResults) => {
    const {
        userEngagement = {},      // 사용자 참여도
        conversionMetrics = {},   // 전환 지표  
        satisfactionScores = {},  // 만족도 점수
        algorithmVersion = 'v1'   // 알고리즘 버전
    } = testResults;
    
    return {
        version: algorithmVersion,
        performanceScore: calculatePerformanceScore(testResults),
        recommendations: generateOptimizationRecommendations(testResults)
    };
};

// 성능 점수 계산 (A/B 테스트용)
const calculatePerformanceScore = (testResults) => {
    // A/B 테스트 결과 기반 성능 점수 계산 로직
    return 85.5; // 예시 점수
};

// 최적화 권장사항 생성
const generateOptimizationRecommendations = (testResults) => {
    return [
        "혜택 가중치를 5% 증가시켜 사용자 만족도 향상",
        "신카드 보너스 기간을 180일로 단축하여 정확도 개선",
        "지역별 선호도 데이터 추가로 개인화 강화"
    ];
};