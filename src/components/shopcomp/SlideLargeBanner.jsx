import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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

  // ✅ pagination(fraction)에 impl 표시 주입
  const bindFractionEl = (swiper) => {
    const paginationEl = swiper.pagination?.el;
    if (!paginationEl) return;

    // 🔴 impl 시스템 연결
    paginationEl.classList.add("impl-anchor");
    paginationEl.setAttribute("data-impl", "true");

    // 위치 미세 조정 (필요 없으면 지워도 됨)
    paginationEl.style.setProperty("--impl-top", "-6px");
    paginationEl.style.setProperty("--impl-right", "-8px");

    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  };

  return (
    <section className="large-banner">
      <Swiper
        className="large-banner-swiper"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        grabCursor
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
