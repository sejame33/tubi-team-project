import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Home.css";

import MvSection from "../components/MvSection";
import MainBanner from "../components/MainBanner";
import MyArtist from "../components/MyArtist";
import SectionTitle from "../components/SectionTitle";
import Gacha from "../components/gacha";
import SmallBanner from "../components/SmallBanner";
import { useNickname } from "../context/NicknameContext";
import LiveSection from "../components/live/LiveSection";

function Home() {
  const { nickname } = useNickname(); // 나중에 context로

  /* 🔹 Swiper용 SmallBanner 데이터 */
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
        top: "2/22일 오늘은 의 날!",
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

  return (
    <div className="home">
      <MainBanner />
      <MyArtist />
      <Gacha />

      {/* ✅ 단일 배너도 wrapper로 감싸서 Swiper와 동일한 폭/여백 적용 */}
      <div className="small-banner-wrap">
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
      <div className="small-banner-wrap">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // 터치해도 다시 자동 재생
          }}
        >
          {swiperBanners.map((banner, index) => (
            <SwiperSlide key={index} className="small-banner-slide">
              <SmallBanner {...banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SectionTitle
        title="추천 MV"
        showMore={true}
        onMoreClick={() => console.log("/recommend")}
      />

      <MvSection />
    </div>
  );
}

export default Home;
