import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "./SlideLargeBanner.css";

export default function SlideLargeBanner() {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      img: "/img/slide-large-banner-1.png",
      onClick: () => navigate("/home/shop"),
    },
    { id: 2, img: "/img/slide-large-banner-2.svg" },
    { id: 3, img: "/img/slide-large-banner-3.png" },
  ];

  // ✅ ShopSlideBanner랑 동일한 fraction 바인딩
  const bindFractionEl = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const el = activeSlide?.querySelector(".large-banner-fraction");

    if (el && swiper.pagination) {
      swiper.pagination.el = el;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  };

  return (
    <section className="large-banner">
      <Swiper
        className="large-banner-swiper"
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        grabCursor
        loop={false}
        pagination={{
          type: "fraction",
          renderFraction: (currentClass, totalClass) =>
            `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`,
        }}
        onSwiper={bindFractionEl}
        onSlideChange={bindFractionEl}
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={s.id} className="large-banner-slide-swiper">
            <div className="large-banner-slide">
              <img
                className="large-banner-img"
                src={s.img}
                alt={`banner-${s.id}`}
              />

              {/* ✅ 첫 번째 슬라이드만 버튼 */}
              {idx === 0 && (
                <button
                  type="button"
                  className="large-banner-btn"
                  onClick={s.onClick}
                >
                  바로가기
                  <img src="/img/more-arrow-white-5x10.svg" alt="" />
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
