import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ShopProductSmallBanner from "./ShopProductSmallBanner";

const ShopProductBannerSwiper = ({ banners = [] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={12}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {banners.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <ShopProductSmallBanner {...banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShopProductBannerSwiper;
