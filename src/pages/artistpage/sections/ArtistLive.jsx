import React from "react";
import SectionTitle from "../../../components/homecomp/SectionTitle";
import { useNavigate } from "react-router-dom";
import LiveCard from "../../../components/livecomp/LiveCard";
import MvCard from "../../../components/homecomp/MvCard";
import ShopProductSmallBanner from "../../../components/shopcomp/ShopProductSmallBanner";

const ArtistLive = () => {
  const navigate = useNavigate();

  return (
    <div className="artistpage">
      {/* =======================
          1) 실시간 라이브
         ======================= */}
      <section className="artistlive">
        <SectionTitle
          title="실시간 라이브!"
          showMore={true}
          useNicknameTitle={false}
          onMoreClick={() => navigate("/home/live")}
        />

        <div className="live-content-box">
          <LiveCard
            topText="Live Replay"
            topTextColor="#fff" // 필요 없으면 빼도 됨
            category="Live Replay"
            image="/img/artistlive1.svg"
            label="HOT"
            labelColor="#FF3B7A" // 원하는 뱃지색
            smallImage="/img/my-artist-2.png"
            subTitle="[스텔라도감] 다섯 번째! 스텔라이브 2기생..."
            group="StelLive"
            member="아라하시 타비"
            onClick={() => navigate("/home/live")} // ✅ 클릭 시 이동
          />
        </div>
      </section>

      {/* =======================
          2) 인기 MV
         ======================= */}
      <section className="mv">
        <SectionTitle
          title="인기 MV"
          showMore={true}
          useNicknameTitle={false}
          onMoreClick={() => navigate("/home/mv")}
        />

        <div className="live-content-box">

          <MvCard
            mainTitle="스텔라이브 (StelLive) - Stars Align M/V "
            image="/img/artistlive2.svg"
            cover="HOT"
            coverType="yellow"
            title="스텔라이브 (StelLive)"
            desc="스텔라이브  Universe  <Stars Align> 뮤비 최고 공개!"
            url="https://www.youtube.com/watch?v=LHTijE7Wuic&list=RDLHTijE7Wuic&start_radio=1"
          />
        </div>
      </section>
      <div className="dm-banner">
        <ShopProductSmallBanner
          title="지금 바로 가기 >"
          subtitle={{ type: "text", value: "NOVA DM" }}
          background="linear-gradient(90deg, #695EFF 0%, #575DC8 100%)"
          productImage="/img/dmbanner.svg"
        />
      </div>
    </div>
  );
};

export default ArtistLive;
