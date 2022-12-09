import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css"

// import required modules
import { Autoplay, Pagination, Navigation, Zoom } from "swiper";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        zoom={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Zoom, Autoplay, Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src={
                process.env.PUBLIC_URL + `/imgs/Balmain-Paris-1-1536x864.jpeg`
              }
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={process.env.PUBLIC_URL + `/imgs/1.jpg`} alt="img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src={process.env.PUBLIC_URL + `/imgs/majestic_angels_store.jpg`}
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img
              src={process.env.PUBLIC_URL + `/imgs/rucoline_store.jpg`}
              alt="img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider
