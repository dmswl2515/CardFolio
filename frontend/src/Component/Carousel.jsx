import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {

    };

    return (
        <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
            <Slider {...settings}>
                {/* 슬라이드 아이템 */}
                <div>
                    <img>
                        src=""
                    </img>
                </div>

            </Slider>

        </div>
    )
}

export default Carousel;