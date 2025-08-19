import React from "react";
import Carousel from '../Component/Swiper/Carousel';
import CardIntroduction from '../Component/CardIntroduction/CardIntroduction';
import Chart from '../Component/Chart/Chart';
import YouTube from '../Component/YouTube/YouTube';
import PopularContent from "../Component/PopularContent/PopularContent";

function HomePage() {
    const popularContents = [
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/post/3439/post_top_img/38006/card_1482_0.jpg", 
            title: "2024 귀속 연말정산<br /> 준비 꿀팁 모음",
            posts: 79,
        },
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/display/4907/pc_img/38966/brand.jpg",
            title: "모르면 손해!<br /> 브랜드별 할인 꿀팁<br /> 총집합",
            posts: 144,
        },
        {
            image: "https://d1c5n4ri2guedi.cloudfront.net/post/2966/post_top_img/33892/card_1401_0.jpg",
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
                sectionTitle1="놓치지 마세요!>< 이달의 이벤트 카드"
                sectionTitle2="새해를 맞이하는 고정비 할인 카드!"
                
            />

            {/* Chart Component */}
            <Chart />

            {/* PopularContent Component */}
            <PopularContent contents={popularContents} />

            {/* YouTube Component */}
            <YouTube />

            {/* CardIntroduction Component(2) */}
            <CardIntroduction 
                backgroundColor="#f4f2f2"
                buttonColor="white"
                circleColorClass="white-background"
                sectionTitle1="내가 선택하는 올해 받을 혜택!"
                sectionTitle2="올 겨울 난방비는 공과금 혜택 카드로"
            />
        </div>
    )
}

export default HomePage;