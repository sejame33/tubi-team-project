import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../../../components/common/Btn";
import "swiper/css";

const memberList = [
  {
    id: 1,
    name: "AOKUMO RIN",
    subName: "아오쿠모 린",
    img: "/img/member-rin.png",
  },
  {
    id: 2,
    name: "AKANE LIZE",
    subName: "아카네 리제",
    img: "/img/member-lize.png",
  },
  {
    id: 3,
    name: "SAKIHANE HUYA",
    subName: "사키하네 후야",
    img: "/img/member-huya.png",
  },
  {
    id: 4,
    name: "AYATSUNO YUNI",
    subName: "아야츠노 유니",
    img: "/img/member-yuni.png",
  },
  {
    id: 5,
    name: "SHIRAYUKI HINA",
    subName: "시라유키 히나",
    img: "/img/member-hina.png",
  },
  {
    id: 6,
    name: "NENEKO MASHIRO",
    subName: "네네코 마시로",
    img: "/img/member-mashiro.png",
  },
  {
    id: 7,
    name: "ARAHASHI TABI",
    subName: "아라하시 타비",
    img: "/img/member-tabi.png",
  },
  {
    id: 8,
    name: "TENKO SHIBUKI",
    subName: "텐코 시부키",
    img: "/img/member-shibuki.png",
  },
  {
    id: 9,
    name: "HANAKO NANA",
    subName: "하나코 나나",
    img: "/img/member-nana.png",
  },
  {
    id: 10,
    name: "YUZUHA RIKO",
    subName: "유즈하 리코",
    img: "/img/member-riko.png",
  },
];

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-footer">
        <p className="about-description">
          안녕하세요 스텔라이브입니다!
          <br />
          각자의 개성을 가진 멤버들이 모여 라이브와 다양한 콘텐츠로 여러분을
          만나고 있어요. 무대 위에서도, 일상 속에서도....
        </p>
        <Btn
          text="더보기"
          bgColor="linear-gradient(90deg, #A97EFF 0%, #11A4FF 100%)"
          onClick={() => console.log("더보기 클릭")}
        />
      </div>
    </section>
  );
};

export default AboutUs;
