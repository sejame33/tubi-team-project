import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/free-mode";

import ShopProductSmallBanner from "../../../components/shopcomp/ShopProductSmallBanner";
import ArtistFrom from "../../../components/artistcomp/ArtistFrom";
import "./From.css";

const From = () => {
  return (
    <>
      <div className="artistswiper impl-anchor" data-impl>
        <Swiper
          modules={[FreeMode, Scrollbar]}
          // 3. scrollbar 설정을 활성화합니다.
          scrollbar={{
            draggable: true,
            dragSize: 24, // 스크롤바 핸들 크기 조절 (선택 사항)
          }}
          spaceBetween={16}
          slidesPerView="auto"
          freeMode={true}
          className="artist-from-swiper"
        >
          <SwiperSlide>
            <ArtistFrom
              profileImg="/img/post-profile01.svg"
              name="아라하시 타비"
              time="02. 19. 11:51"
              content="파스텔~ 점메추 해주세요!"
              emogjiImg="/img/Balloon.svg"
              badgeImg="/img/blue-badge.svg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ArtistFrom
              profileImg="/img/post-profile02.svg"
              name="텐코 시부키"
              time="02. 19. 11:51"
              content="내일 미공개 라방 올릴게!! 들어와!!"
              badgeImg="/img/blue-badge.svg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="crown-banner">
        <ShopProductSmallBanner
          title="특별해진 쿠크다스를 만나보세요!"
          subtitle={{ type: "image", value: "/img/crownbanner.svg" }}
          background="linear-gradient(90deg, #00B2FF 0%,#CA03FC 100%)"
          productImage="/img/crownimg.svg"
        />
      </div>
    </>
  );
};

export default From;
