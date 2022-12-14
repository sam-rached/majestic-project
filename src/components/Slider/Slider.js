import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 3500
        }}
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + `/imgs/Banner-Home-1.jpg`}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + `/imgs/Banner-Home-2.jpg`}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + `/imgs/Banner-Home-3.jpg`}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + `/imgs/Banner-Home-4.jpg`}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + `/imgs/Banner-Home-5.jpg`}
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + `/imgs/Banner-Home-6.jpg`}
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
