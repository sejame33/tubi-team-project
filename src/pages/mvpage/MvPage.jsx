import React from "react";

import SectionTitle from "../../components/homecomp/SectionTitle";

import "./MvPage.css";
import MvCard from "../../components/homecomp/MvCard";

const MvPage = () => {
  return (
    <div className="mv-page">
      <SectionTitle
        title="뮤직비디오"
        showMore={false}
        showSort2={true}
        useNicknameTitle={false}
        onMoreClick={() => navigate("/home/album")}
      />
      <div className="mv-card-wrap">
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
        <MvCard
          mainTitle="플레이브 미니 앨범 'ASTERUM'"
          image="/img/mv2.svg"
          cover="MV"
          coverType="yellow"
          title="PLAVE"
          desc="팬들의 성원에 힘입어 선보인 앨범 로그 스페셜 무대 영상"
        />
        <MvCard
          mainTitle="'Nameless' 공식 뮤직비디오 영상"
          image="/img/mv3.svg"
          cover="MV"
          coverType="yellow"
          title="이세계아이돌 (ISEGYE IDOL)"
          desc="현장감 넘치는 라이브로 진행된 스페셜 무대 영상"
        />
        <MvCard
          mainTitle="'STARGAZERS' 이벤트 무대"
          badge="BEST"
          badgeType="yellow"
          image="/img/mv4.svg"
          cover="MV"
          coverType="yellow"
          title="스텔라이브 (STELLIVE)"
          desc="이벤트 한정으로 공개된 스페셜 퍼포먼스 무대 영상"
        />
        <MvCard
          mainTitle="'BBUU!' M/V 선공개"
          image="/img/mv5.svg"
          cover="MV"
          coverType="yellow"
          title="PLAVE"
          desc="멤버들이 함께 선보인 특별한 공연 무대 영상"
        />
        <MvCard
          mainTitle="아이리제 'LOVEGAME' 곡 컴백"
          image="/img/mv6.svg"
          cover="SPECIAL"
          coverType="green"
          title="IRISÉ (아이리제)"
          desc="컴백을 기념한 콘셉트와 무대가 돋보이는 공연 영상"
        />
      </div>
    </div>
  );
};

export default MvPage;
