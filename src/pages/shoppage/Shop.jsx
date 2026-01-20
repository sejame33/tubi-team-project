import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ShopMainBanner from "../../components/shopcomp/ShopMainBanner";
import ShopSectionTitle from "../../components/shopcomp/ShopSectionTitle";
import ShopNewItem from "../../components/shopcomp/ShopNewItem";
import ShopImportant from "../../components/shopcomp/ShopImportant";
import MyArtist from "../../components/homecomp/MyArtist";
import ShopMoreBtn from "../../components/shopcomp/ShopMoreBtn";
import ShopBrand from "../../components/shopcomp/ShopBrand";
import ShopBrand2 from "../../components/shopcomp/ShopBrand2";
import ShopSlideBanner from "../../components/shopcomp/ShopSlideBanner";
import ShopTodayOffer from "../../components/shopcomp/ShopTodayOffer";
import SlideLargeBanner from "../../components/shopcomp/SlideLargeBanner";

export default function Shop() {
  /* =========================
     ✅ 1. 배너 데이터
     ========================= */
  const swiperBanners = [
    {
      variant: "logo",
      background: "/img/shop-slide-banner-1.svg",
      title: {
        top: "지금 굿즈를 구매하면",
        bottom: "내 NOVA를 꾸밀 수 있어요!",
      },
    },
    {
      variant: "logo",
      background: "/img/shop-slide-banner-2.svg",
      logo: "/img/shop-slide-banner-logo-2.svg",
      title: {
        top: "플레이브와 함께",
        bottom: (
          <>
            <span className="is-blue">트레블 GO</span> 체크카드
          </>
        ),
      },
    },
    {
      variant: "logo",
      background: "/img/shop-slide-banner-3.svg",
      logo: "/img/shop-slide-banner-logo-3.svg",
      title: {
        top: "발렌타인데이 기념",
        bottom: "이세돌과 허쉬의 달콤한 만남!",
      },
    },
    {
      variant: "logo",
      background: "/img/shop-slide-banner-4.svg",
      logo: "/img/shop-slide-banner-logo-4.svg",
      title: {
        top: (
          <>
            <span className="is-last">싱글 2집 기념 굿즈 오픈</span>
          </>
        ),
        bottom: (
          <>
            <span className="is-last">Photo Card 3종 (버전별 이미지 상이)</span>
          </>
        ),
      },
    },
  ];

  /* =========================
     ✅ 2. fraction ref & binder
     ========================= */

  const bindFractionEl = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const el = activeSlide?.querySelector(".shop-slide-banner-fraction");

    if (el && swiper.pagination) {
      swiper.pagination.el = el;

      // ✅ loop에서 가끔 init이 필요함
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  };

  return (
    <div className="shop">
      <ShopMainBanner />

      <ShopSectionTitle
        title="New Item"
        showMore={true}
        useNicknameTitle={false}
        onMoreClick={() => console.log("/album")}
      />
      <ShopNewItem />

      <ShopMoreBtn title="품절 상품 재입고 30% OFF" variant="primary" />
      <ShopImportant />

      <ShopSectionTitle title="아티스트" showMore />
      <MyArtist />

      <ShopBrand />
      <ShopBrand2 />

      {/* =========================
         ✅ ShopSlideBanner Swiper
         ========================= */}
      <div className="shop-slide-banner-wrap b">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={12}
          grabCursor
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            type: "fraction",
            renderFraction: (currentClass, totalClass) =>
              `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`,
          }}
          onSwiper={bindFractionEl}
          onSlideChange={bindFractionEl}
        >
          {swiperBanners.map((banner, index) => (
            <SwiperSlide key={index} className="shop-slide-banner-slide">
              <ShopSlideBanner {...banner}>
                <div className="shop-slide-banner-fraction swiper-pagination-fraction" />
              </ShopSlideBanner>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ShopSectionTitle
        title="오늘 단 하루만"
        showMore={false}
        useNicknameTitle={false}
        onMoreClick={() => console.log("/album")}
      />
      <ShopTodayOffer />
      <ShopSectionTitle
        title="Coming Soon"
        showMore={false}
        useNicknameTitle={false}
        onMoreClick={() => console.log("/album")}
      />
      <SlideLargeBanner />
    </div>
  );
}
