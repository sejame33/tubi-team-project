import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

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
            <button
              type="button"
              className="stickerSwiper-card"
              onClick={() => onItemClick?.(it)}
            >
              <div className="stickerSwiper-thumb">
                <img src={it.imageUrl} alt={it.name || ""} />
              </div>

              <div className="stickerSwiper-text">
                <div className="stickerSwiper-brand">
                  <span>{it.brand}</span>
                  {it.brandIcon && (
                    <img
                      src={it.brandIcon}
                      alt=""
                      className="stickerSwiper-brandIcon"
                    />
                  )}
                </div>

                <div className="stickerSwiper-name">{it.name}</div>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
