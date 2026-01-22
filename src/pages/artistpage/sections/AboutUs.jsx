import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../../../components/common/Btn";
import StickerSwiper from "../../../components/mycomp/StickerSwiper";
import SectionTitle from "../../../components/homecomp/SectionTitle";
import "swiper/css";

const memberList = [
  {
    id: 1,
    artist2: "AOKUMO RIN",
    subartist2: "아오쿠모 린",
    img: "/img/artist1.svg",
  },
  {
    id: 2,
    artist2: "AKANE LIZE",
    subartist2: "아카네 리제",
    img: "/img/artist2.svg",
  },
  {
    id: 3,
    artist2: "SAKIHANE HUYA",
    subartist2: "사키하네 후야",
    img: "/img/artist3.svg",
  },
  {
    id: 4,
    artist2: "AYATSUNO YUNI",
    subartist2: "아야츠노 유니",
    img: "/img/artist4.svg",
  },
  {
    id: 5,
    artist2: "SHIRAYUKI HINA",
    subartist2: "시라유키 히나",
    img: "/img/artist5.svg",
  },
  {
    id: 6,
    artist2: "NENEKO MASHIRO",
    subartist2: "네네코 마시로",
    img: "/img/artist6.svg",
  },
  {
    id: 7,
    artist2: "ARAHASHI TABI",
    subartist2: "아라하시 타비",
    img: "/img/artist7.svg",
  },
  {
    id: 8,
    artist2: "TENKO SHIBUKI",
    subartist2: "텐코 시부키",
    img: "/img/artist8.svg",
  },
  {
    id: 9,
    artist2: "HANAKO NANA",
    subartist2: "하나코 나나",
    img: "/img/artist9.svg",
  },
  {
    id: 10,
    artist2: "YUZUHA RIKO",
    subartist2: "유즈하 리코",
    img: "/img/artist10.svg",
  },
];

const AboutUs = () => {
  const swiperItems = memberList.map((member) => ({
    id: member.id,
    imageUrl: member.img,
    brand: member.artist2,
    name: member.subartist2,
    brandIcon: `/img/icon-${member.id}.svg`,
  }));

  return (
    <>
      <div className="Us">
        <div className="Ustit">
          <SectionTitle
            title="About US"
            showMore={true}
            useNicknameTitle={false}
          />
        </div>

        <section
          className="about-us impl-anchor"
          data-impl
          style={{
            "--impl-right": "12px",
            "--impl-top": "12px",
          }}
        >
          <StickerSwiper
            items={swiperItems}
            onItemClick={(item) => console.log("멤버 클릭:", item)}
          />

          <div className="about-footer">
            <p className="about-description">
              안녕하세요 스텔라이브입니다!
              <br />
              각자의 개성을 가진 멤버들이 모여 라이브와 다양한 콘텐츠로 여러분을
              만나고 있어요.
            </p>

            <Btn
              text="더보기"
              bgColor="linear-gradient(90deg, #A97EFF 0%, #11A4FF 100%)"
              onClick={() => console.log("더보기 클릭")}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
