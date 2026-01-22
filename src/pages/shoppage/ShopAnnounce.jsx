import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import AnnouncementList from "../../components/shopcomp/AnnouncementList";
import ShopSmallBanner from "../../components/shopcomp/ShopSmallBanner";

const ShopAnnounce = () => {
  const fractionRefs = useRef([]); // 슬라이드별 fraction 자리 저장

  const swiperBanners = [
    {
      variant: "logo",
      background: "/img/small-banner-bg-2.svg",
      logo: "/img/small-banner-logo-2.svg",
      title: {
        top: "지금만 만날 수 있는",
        bottom: "플레이브 한정 콜라보 굿즈",
      },
      image: "/img/small-banner-char-2.png",
      imageStyle: { height: "clamp(80px, 22vw, 100px)", right: "0%", bottom: "0%" },
    },
    {
      variant: "logo",
      background: "/img/small-banner-bg-3.svg",
      logo: "/img/small-banner-logo-3.svg",
      title: {
        topPrefix: "2/22일 오늘은",
        topIcon: "/img/small-banner-text-img-3.svg",
        topSuffix: "의 날!",
        bottom: "IRISÉ의 헤드셋을 만나보세요!",
      },
      image: "/img/small-banner-char-3.png",
      imageStyle: { height: "clamp(100px, 22vw, 120px)", right: "0%", bottom: "0%" },
    },
    {
      variant: "text",
      background: "/img/small-banner-bg-4.svg",
      title: {
        top: "IRISÉ 첫 1:1 팬사인회",
        bottom: "지금 바로 참여하세요",
      },
      image: "/img/small-banner-char-4.png",
      imageStyle: { height: "clamp(120px, 22vw, 135px)", right: "0%", bottom: "0%" },
    },
  ];

  // ✅ fraction el + impl 표시 주입
  const bindFractionEl = (swiper) => {
    const active = swiper.realIndex; // loop 대응
    const el = fractionRefs.current[active];
    if (!el) return;

    swiper.pagination.el = el;

    /* 🔴 impl 점 추가 */
    el.classList.add("impl-anchor");
    el.setAttribute("data-impl", "true");
    el.style.setProperty("--impl-top", "18px");
    el.style.setProperty("--impl-right", "-12px");
    /* 🔴 여기까지 */

    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  };

  return (
    <div className="announcement-page">
      <div className="small-banner-wrap c">
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
            <SwiperSlide key={index} className="small-banner-slide">
              <ShopSmallBanner {...banner}>
                <div
                  className="small-banner-fraction swiper-pagination-fraction"
                  ref={(el) => (fractionRefs.current[index] = el)}
                />
              </ShopSmallBanner>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="announcement-layout">
        <AnnouncementList />
      </div>
    </div>
  );
};

export default ShopAnnounce;
