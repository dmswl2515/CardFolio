import React from "react";
import Carousel from '../Component/Swiper/Carousel';
import CardIntroduction from '../Component/CardIntroduction/CardIntroduction';
import Chart from '../Component/Chart/Chart';
import YouTube from '../Component/YouTube/YouTube';

function HomePage() {
    return (
        <div>
            {/* Carousel Component */}
            <Carousel />
            
            {/* CardIntroduction Component */}
            <CardIntroduction
                circleColorClass="gray-background"
                sectionTitle1="놓치지 마세요! 이달의 이벤트 카드"
                sectionTitle2="새해를 맞이하는 고정비 할인 카드!"
                
            />

            {/* Chart Component */}
            <Chart />

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