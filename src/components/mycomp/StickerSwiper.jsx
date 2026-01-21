import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import StickerCard from "./StickerCard";

export default function StickerSwiper({
  items = [],
  onItemClick,
  spaceBetween = 14,
  slidesPerView = "auto",
  className = "",
}) {
  return (
    <div className={`stickerSwiper ${className}`}>
      <Swiper
        className="stickerSwiper-swiper"
        modules={[FreeMode, Scrollbar]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        freeMode
        grabCursor
        scrollbar={{
          draggable: true,
          el: ".stickerSwiper-scrollbar",
        }}
      >
        {items.map((it) => (
          <SwiperSlide key={it.id} className="stickerSwiper-slide">
            <StickerCard
              item={it}
              onItemClick={(selectedItem) => console.log(selectedItem)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
