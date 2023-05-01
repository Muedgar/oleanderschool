import React from "react";

import {Navigation, Pagination, Autoplay} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Slide2} from "./slide2";
import {Slide3} from "./slide3";

const Banner = () => {
    return (
        <div id="hero">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
                loop={true}
                pagination={{
                    clickable: true
                }}
                spaceBetween={10}
                navigation={true}
                scrollbar={{draggable: true}}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <Slide2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide3 />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;