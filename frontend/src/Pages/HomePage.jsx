import React from "react";
import { Link } from "react-router-dom";
import Carousel from '../Component/Swiper/Carousel';
import CardIntroduction from '../Component/CardIntroduction/CardIntroduction';
import Chart from '../Component/Chart/Chart';
import YouTube from '../Component/YouTube/YouTube';
import PopularContent from "../Component/PopularContent/PopularContent";

function HomePage() {
    const popularContents = [
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/post/3498/post_top_img/38686/card_1494_0.jpg", 
            title: "단종 주의! 에디터가<br /> 주목한 알짜카드",
            posts: 79,
        },
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/display/4907/pc_img/38966/brand.jpg",
            title: "모르면 손해!<br /> 브랜드별 할인 꿀팁<br /> 총집합",
            posts: 144,
        },
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/post/3900/post_top_img/43387/card_1569_0.jpg",
            title: "출국 D-7,<br /> 해외여행 결제카드<br /> 준비!",
            posts: 90,
        },
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/post/2028/post_top_img/19598/card_1061_0.jpg",
            title: "1 vs 1,<br /> 에디터가 깐깐하게<br /> 비교한 카드혜택",
            posts: 59,
        },
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/post/2480/post_top_img/28607/card_1247_0.jpg",
            title: "월 200을 위한 알짜<br /> 신용·체크카드 추천",
            posts: 75,
        },
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/post/2585/post_top_img/29548/card_1283_0.jpg",
            title: "NO 카드값 폭탄!<br /> 나만 안다고 했던<br /> 카드 꿀팁",
            posts: 105,
        },
    ];

    return (
        <div>
            {/* Carousel Component */}
            <Carousel />
            
            {/* CardIntroduction Component */}
            <CardIntroduction
                circleColorClass="gray-background"
                sectionTitle1="놓치지 마세요! 이달의 이벤트 카드"
                sectionTitle2="꾸준히 사랑받는 베스트셀러 카드!"
                showEventCards={true}
                showBestSellerCards={true}
                showUtilityCards={false}
                showCustomCards={false}
            />

            {/* Chart Component */}
            <Chart />

            {/* PopularContent Component */}
            <PopularContent contents={popularContents} />

            {/* YouTube Component */}
            <YouTube />

            {/* 알고리즘 테스트 링크 */}
            {/* <div style={{ 
                textAlign: 'center', 
                padding: '40px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '40px 0'
            }}>
                <h2 style={{ color: 'white', marginBottom: '20px' }}>🎯 포트폴리오 - 고급 카드 랭킹 알고리즘</h2>
                <p style={{ color: 'white', marginBottom: '30px', fontSize: '1.1em' }}>
                    머신러닝 기반 다차원 스코어링 시스템으로 카드를 분석합니다
                </p>
                <Link 
                    to="/algorithm-test" 
                    style={{
                        display: 'inline-block',
                        padding: '15px 30px',
                        background: 'white',
                        color: '#764ba2',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '1.1em',
                        transition: 'transform 0.3s ease'
                    }}
                >
                    알고리즘 테스트 시작하기 →
                </Link>
            </div> */}

            {/* CardIntroduction Component(2) */}
            <CardIntroduction 
                backgroundColor="#f4f2f2"
                buttonColor="white"
                circleColorClass="white-background"
                sectionTitle1="올 연휴에 여행하면서 쓰기 좋은 카드 추천!"
                sectionTitle2="올 여름 전기세는 공과금 혜택 카드로"
                showEventCards={false}
                showBestSellerCards={false}
                showUtilityCards={true}
                showTravelCards={true}
                showCustomCards={false}
            />
        </div>
    )
}

export default HomePage;