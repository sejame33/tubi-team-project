import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import '../components/MainBanner.css'

function MainBanner() {
  return (
    <section className="main-banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
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
      </Swiper>
    </section>
  );
}

export default MainBanner;