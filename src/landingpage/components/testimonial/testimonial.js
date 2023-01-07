import React, {useState, useEffect} from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";


import './testimonial.css';

// import assets

import professional from "./assets/professional.jpeg";
import professionalTwo from "./assets/professional2.jpg";

// import other components
import Testimony from "./testimony";

function Testimonial() {
  const [rate1, setRate1] = useState([]);

  useEffect(() => {
    let rate = [1, 2, 3, 4, 5];
    setRate1(rate);
  },[])

  return(
      <div className="testimonialContainer">
          <h1>What Parents Say</h1>
          <div className="testimonials">
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
        className="testimonialsSwiper"
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
            }
          }}
      >
        <SwiperSlide>
        <Testimony author="David Malan" content="Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit" profile={professional} stars={rate1} />
        </SwiperSlide>
        <SwiperSlide>
        <Testimony author="David Malan" content="Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit" profile={professionalTwo} stars={rate1} />
        </SwiperSlide>  
        <SwiperSlide>
        <Testimony author="David Malan" content="Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit" profile={professional} stars={rate1} />
        </SwiperSlide>
        <SwiperSlide>
        <Testimony author="David Malan" content="Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit" profile={professionalTwo} stars={rate1} />
        </SwiperSlide>    
        </Swiper>
          </div>
      </div>
  )
}

export default Testimonial;