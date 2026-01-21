import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import MvSection from "../../components/homecomp/MvSection";
import MainBanner from "../../components/homecomp/MainBanner";
import MyArtist from "../../components/homecomp/MyArtist";
import SectionTitle from "../../components/homecomp/SectionTitle";
import Gacha from "../../components/homecomp/Gacha";
import SmallBanner from "../../components/homecomp/SmallBanner";
import { useNickname } from "../../context/NicknameContext";
import LiveSection from "../../components/homecomp/live/LiveSection";
import AlbumSlide from "../../components/homecomp/AlbumSlide";
import BrandShop from "../../components/homecomp/BrandShop";

function Home() {
  const { nickname } = useNickname();
  const fractionRefs = useRef([]); // ✅ 슬라이드별 fraction 자리 저장
  const navigate = useNavigate();

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
      imageStyle: {
        height: 100,
        right: "0%",
        bottom: "0%",
      },
    },
    {
      variant: "logo",
      background: "/img/small-banner-bg-3.svg",
      logo: "/img/small-banner-logo-3.svg",
      title: {
        topPrefix: "2/22일 오늘은",
        topIcon: "/img/small-banner-text-img-3.svg", // ✅ 여기!
        topSuffix: "의 날!",
        bottom: "IRISÉ의 헤드셋을 만나보세요!",
      },
      image: "/img/small-banner-char-3.png",
      imageStyle: {
        height: 120,
        right: "0%",
        bottom: "0%",
      },
    },
    {
      variant: "text",
      background: "/img/small-banner-bg-4.svg",
      title: {
        top: "IRISÉ 첫 1:1 팬사인회",
        bottom: "지금 바로 참여하세요",
      },
      image: "/img/small-banner-char-4.png",
      imageStyle: {
        height: 135,
        right: "0%",
        bottom: "0%",
      },
    },
  ];

  // ✅ 현재 슬라이드의 fraction el로 pagination을 연결하는 함수
  const bindFractionEl = (swiper) => {
    const active = swiper.realIndex; // loop일 때 realIndex가 안전
    const el = fractionRefs.current[active];
    if (!el) return;

    swiper.pagination.el = el;
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  };

  return (
    <div className="home">
      <MainBanner />
      <MyArtist />
      <Gacha />

      <div className="small-banner-wrap a">
        <SmallBanner
          background="/img/small-banner-bg-1.svg"
          title={{
            top: "HEBI FAN MEETING",
            bottom: "헤비의 세계로 지금 바로 초대합니다",
          }}
          image="/img/small-banner-char-1.png"
          variant="text"
          imageStyle={{
            height: 130,
            right: "0%",
            bottom: "0%",
          }}
          onMore={() => console.log("single banner")}
        />
      </div>

      <LiveSection />

      <div className="small-banner-wrap b">
        <Swiper
          modules={[Autoplay, Pagination]} // ✅ 한번에!
          slidesPerView={1}
          spaceBetween={12}
          grabCursor
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
            // 01 / 03 같이 0 붙이고 싶으면 아래 두 줄 추가 가능
            // formatFractionCurrent: (n) => String(n).padStart(2, "0"),
            // formatFractionTotal: (n) => String(n).padStart(2, "0"),
            renderFraction: (currentClass, totalClass) =>
              `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`,
          }}
          onSwiper={(swiper) => bindFractionEl(swiper)}
          onSlideChange={(swiper) => bindFractionEl(swiper)}
        >
          {swiperBanners.map((banner, index) => (
            <SwiperSlide key={index} className="small-banner-slide">
              {/* ✅ fraction div를 "카드 내부"에 넣기 */}
              <SmallBanner {...banner}>
                <div
                  className="small-banner-fraction swiper-pagination-fraction impl-anchor"
                  data-impl
                  ref={(el) => (fractionRefs.current[index] = el)}
                  style={{
                    "--impl-right": "-12px",
                    "--impl-top": "20px",
                  }}
                />
              </SmallBanner>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SectionTitle
        title="이달의 ALBUM"
        showMore={true}
        useNicknameTitle={false}
        onMoreClick={() => console.log("/album")}
      />
      <AlbumSlide />

      <SectionTitle
        title="추천 MV"
        showMore={true}
        onMoreClick={() => console.log("/recommend")}
      />
      <MvSection />

      <SectionTitle
        title="브랜드관"
        showMore={true}
        useNicknameTitle={false}
        onMoreClick={() => navigate("/home/shop/brand")}
      />
      <BrandShop />
    </div>
  );
}

export default Home;
