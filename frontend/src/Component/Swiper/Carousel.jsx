import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slide from "./Slide"
import "./Swiper.css"


const Carousel = () => {
    const slides = [
        { src: "https://cardfolio.s3.ap-southeast-2.amazonaws.com/slider/slider2.png", alt: "Slide 2" },
        { src: "https://cardfolio.s3.ap-southeast-2.amazonaws.com/slider/slider2.png", alt: "Slide 2" },
        { src: "https://cardfolio.s3.ap-southeast-2.amazonaws.com/slider/slider2.png", alt: "Slide 2" },
        { src: "https://cardfolio.s3.ap-southeast-2.amazonaws.com/slider/slider2.png", alt: "Slide 2" },
        { src: "https://cardfolio.s3.ap-southeast-2.amazonaws.com/slider/slider2.png", alt: "Slide 2" }
    ];
    
    return (
        <div className="slider">
            <Swiper       
                modules={[Navigation, Pagination]}
                spaceBetween={50} 
                slidesPerView={1} 
                navigation 
                pagination={{ clickable: true }}
                loop={true}
                style={{ 
                    position: "relative", 
                    minWidth: "400px", 
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Slide src={slide.src} alt={slide.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;