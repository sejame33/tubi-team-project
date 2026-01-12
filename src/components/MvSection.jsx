import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import MvCard from "./MvCard";
import './MvSection.css';

function MvSection() {
  return (
    <section className="mv-section">
      <h2 className="section-title">실시간 Live!</h2>

      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        grabCursor
        freeMode
        freeModeMomentumVelocityRatio={0.38}  // 속도 조절
        freeModeMomentumRatio={0.65}
        freeModeMomentumBounce={false}
        className="mv-swiper"
      >
        <SwiperSlide style={{ width: "376px" }}>
          <MvCard
            mainTitle="'포지티브 러브 타임' 커버 무대"
            badge="HOT"
            badgeType="default"
            image="/img/mv1.svg"
            cover="Cover"
            coverType="default"
            title="미녕이 X 희지"
            desc="AGF 행사에서 진행했던 포지티브 댄스 타임 커버 무대"
          />
        </SwiperSlide>

        <SwiperSlide style={{ width: "376px" }}>
          <MvCard
            mainTitle="'STARGAZERS' Official MV"
            badge="NEW"
            badgeType="yellow"
            image="/img/mv2.svg"
            cover="MV"
            coverType="yellow"
            title="이세계아이돌 (ISEGYE IDOL)"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
        </SwiperSlide>

        <SwiperSlide style={{ width: "376px" }}>
          <MvCard
            mainTitle="IRISÉ (아이리제) 'LOVEGAME' M/V"
            image="/img/mv3.svg"
            cover="MV"
            coverType="yellow"
            title="IRISÉ (아이리제)"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
        </SwiperSlide>

        <SwiperSlide style={{ width: "376px" }}>
          <MvCard
            mainTitle="PLAVE 'BBUU!' M/V"
            image="/img/mv4.svg"
            cover="MV"
            coverType="yellow"
            title="PLAVE"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
        </SwiperSlide>

        <SwiperSlide style={{ width: "376px" }}>
          <MvCard
            mainTitle="Snow Halation"
            image="/img/mv5.svg"
            cover="Special"
            coverType="green"
            title="이오몽 X 미녕이 X 부쿠키 X 희지"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
        </SwiperSlide>

        <SwiperSlide style={{ width: "376px" }}>
          <MvCard
            mainTitle="IRISÉ (아이리제) 'LOVEGAME' M/V"
            image="/img/mv6.svg"
            cover="MV"
            coverType="yellow"
            title="IRISÉ (아이리제)"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MvSection;