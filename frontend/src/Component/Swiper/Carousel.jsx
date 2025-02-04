import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slide from "./Slide"
import "./Swiper.css"


const Carousel = () => {
    const slides = [
        { src: "https://d1c5n4ri2guedi.cloudfront.net/display/5003/pc_img/39365/CardGorilla_Main_Selection_PC2501.png", alt: "Slide 1" },
        { src: "https://cardfolio.s3.ap-southeast-2.amazonaws.com/slider/slider2.png", alt: "Slide 2" },
        { src: "https://d1c5n4ri2guedi.cloudfront.net/display/4926/pc_img/39328/%28%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC%29-%E1%84%92%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A2%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3_860x340_PC.jpg", alt: "Slide 3" },
        { src: "https://d1c5n4ri2guedi.cloudfront.net/display/5001/pc_img/39299/%E1%84%8E%E1%85%A9%E1%86%BC%E1%84%80%E1%85%A7%E1%86%AF%E1%84%89%E1%85%A1%E1%86%AB_CardGorilla_Main_Selection_PC.jpg", alt: "Slide 4" },
        { src: "https://d1c5n4ri2guedi.cloudfront.net/display/5003/pc_img/39365/CardGorilla_Main_Selection_PC2501.png", alt: "Slide 5" },
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