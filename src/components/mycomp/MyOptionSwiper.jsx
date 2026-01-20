import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import MyOption from "./MyOption";

const MyOptionSwiper = ({ options = [], selectedId, onSelect }) => {
  return (
    <Swiper
      slidesPerView="auto"  
      spaceBetween={20}
      grabCursor={true}      
    >
      {options.map((o) => (
        <SwiperSlide key={o.id} style={{ width: "auto" }}>
          <MyOption
            baseBg={o.baseBg}
            activeBg={o.activeBg}
            label={o.label}
            imgSrc={o.imgSrc}
            selected={selectedId === o.id}
            onClick={() => onSelect(o.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyOptionSwiper;
