import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ShopMainBanner.css";

const bannerList = [
  {
    id: 1,
    bg: "/img/shop-main-banner-1.png",
    link: "/event/1",
    ctaBg: "rgba(163, 12, 118, 0.54)",
  },
  {
    id: 2,
    bg: "/img/shop-main-banner-2.svg",
    link: "/event/2",
    ctaBg: "rgba(234, 54, 54, 0.42)",
  },
  {
    id: 3,
    bg: "/img/shop-main-banner-3.svg",
    link: "/event/3",
    ctaBg: "rgba(201, 120, 255, 0.54)",
  },
  {
    id: 4,
    bg: "/img/shop-main-banner-4.svg",
    link: "/event/4",
    ctaBg: "rgba(43, 0, 30, 0.54)",
  },
];
export default function ShopMainBanner() {
  return (
    <section className="shop-main-banner">
      <Swiper
        className="shop-banner-swiper"
        modules={[Scrollbar, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        grabCursor
        scrollbar={{
          draggable: true,
          el: ".shop-banner-scrollbar",
          hide: false,
        }}
        pagination={{
          type: "fraction",
          el: ".shop-banner-pagination",
        }}
      >
        {bannerList.map((banner) => (
          <SwiperSlide key={banner.id} className="shop-banner-slide">
            <div
              className="shop-banner-card"
              style={{ backgroundImage: `url(${banner.bg})` }}
            >
              {/* 버튼 absolute 고정 */}
              <a
                className="shop-banner-cta"
                href={banner.link}
                style={{ background: banner.ctaBg }}
              >
                이벤트 상세 설명 보러가기{" "}
                <img src="/img/shop-main-banner-arrow.svg" alt="" />
              </a>
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ Swiper 밖이 아니라 Swiper 안에 두되, el로 연결 */}
        <div
          className="shop-banner-controls impl-anchor"
          data-impl
          style={{
            "--impl-right": "-54px",
            "--impl-top": "-3px",
          }}
        >
          <div className="shop-banner-row">
            <div className="shop-banner-scrollbar swiper-scrollbar" />
            <div className="shop-banner-pagination swiper-pagination" />
          </div>
        </div>
      </Swiper>
    </section>
  );
}
