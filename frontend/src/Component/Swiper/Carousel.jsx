import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Slide from "./Slide";


const Carousel = () => {
    const slides = [
        { src: "/assets/slider1.png", alt: "Slide 1" },
        { src: "/assets/slider2.png", alt: "Slide 2" },
        { src: "/assets/slider3.png", alt: "Slide 3" },
        { src: "/assets/slider4.png", alt: "Slide 4" },
        { src: "/assets/slider5.png", alt: "Slide 5" },
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
                    minWidth: "1300px", 
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