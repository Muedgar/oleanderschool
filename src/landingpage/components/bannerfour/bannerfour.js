import React, {useEffect, useState} from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";


import './bannerfour.css';

// import assets
import slideImageOne from "./assets/slideImageOne.png";
import slideImageTwo from "./assets/slideImageTwo.jpeg";
import slideImageThree from "./assets/slideImageThree.gif";
import slideImageFour from "./assets/slideImageFour.jpeg";
import slideImageFive from "./assets/slideImageFive.webp";
import slideImageSix from "./assets/slideImageSix.jpeg";

function BannerFour() {
    const [bannerImgFour, setBannerImgFour] = useState([]);
    
    useEffect(() => {
        setBannerImgFour([slideImageOne,slideImageTwo,slideImageThree,slideImageFour,slideImageFive,slideImageSix,slideImageSix]);
        console.log("called use effect");
    },[])

    return(
        <div className="bannerFourContainer">
            <h1>Our Popular Classes</h1>
            <div className="contentSlider">
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
          }}
      >
        {bannerImgFour.map((img,i) => (
            <SwiperSlide key={`bannerFourImgContainer${i}`}>
                <div>
                    <img src={img} alt={`bannerfouralt${i}`} />
                    <h4>08:00 am - 10:00 am</h4>
                    <h3>Education Programs System</h3>
                    <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit.

                    Lorem ipsum dolor sit amet, consecteur adipiscing elit.
                    
                    </p>
                    <div>
                        <p>Students: 30</p>
                        <p>Fee: $150</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
            </div>
        </div>
    )
}

export default BannerFour;