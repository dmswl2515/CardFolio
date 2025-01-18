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
            <CardIntroduction />

            {/* Chart Component */}
            <Chart />

            {/* YouTube Component */}
            <YouTube />

            {/* CardIntroduction Component(2) */}
            <CardIntroduction />
        </div>
    )
}

export default HomePage;