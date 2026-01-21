import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

import "./MainBanner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MainBanner() {
  return (
    <section className="main-banner">
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar]}
        slidesPerView={1}
        loop
        grabCursor
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
          el: ".banner-fraction",
        }}
        scrollbar={{
          el: ".banner-scrollbar",
          draggable: false,
        }}
        className="banner-swiper"
      >
        <SwiperSlide>
          <img src="/img/main-home-banner1.svg" alt="배너 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main-home-banner2.svg" alt="배너 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main-home-banner3.svg" alt="배너 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main-home-banner4.svg" alt="배너 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main-home-banner5.svg" alt="배너 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main-home-banner6.svg" alt="배너 6" />
        </SwiperSlide>
      </Swiper>

      {/* ⭐ 기준을 통일하기 위한 wrapper */}
      <div
        className="banner-controls impl-anchor"
        data-impl
        style={{
          "--impl-right": "-54px",
          "--impl-top": "0px",
        }}
      >
        <div className="banner-row">
          <div className="swiper-scrollbar banner-scrollbar"></div>
          <div className="banner-fraction"></div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
