import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import "./ProductCategory.css";

export default function ProductCategory({
  categories = [],
  active,
  onChange,
  className = "",
}) {
  return (
    <div className={`productCategory ${className}`}>
      <Swiper
        className="productCategory-swiper"
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={10}
        freeMode
        grabCursor
      >
        {categories.map((c) => {
          const isActive = c.value === active;
          return (
            <SwiperSlide
              key={c.value}
              className="productCategory-slide impl-anchor"
              data-impl
              style={{ "--impl-right": "-4px", "--impl-top": "0px" }}
            >
              <button
                type="button"
                className={`productCategory-chip ${isActive ? "is-active" : ""}`}
                onClick={() => onChange?.(c.value)}
              >
                {c.label}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
