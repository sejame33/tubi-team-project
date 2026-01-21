import React from 'react';

import SectionTitle from '../../components/homecomp/SectionTitle';


import "./MvPage.css";
import MvCard from '../../components/homecomp/MvCard';

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
            mainTitle="'STARGAZERS' Official MV"
            badge="NEW"
            badgeType="yellow"
            image="/img/mv2.svg"
            cover="MV"
            coverType="yellow"
            title="이세계아이돌 (ISEGYE IDOL)"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
          <MvCard
            mainTitle="IRISÉ (아이리제) 'LOVEGAME' M/V"
            image="/img/mv3.svg"
            cover="MV"
            coverType="yellow"
            title="IRISÉ (아이리제)"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
          <MvCard
            mainTitle="PLAVE 'BBUU!' M/V"
            image="/img/mv4.svg"
            cover="MV"
            coverType="yellow"
            title="PLAVE"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
          <MvCard
            mainTitle="Snow Halation"
            image="/img/mv5.svg"
            cover="Special"
            coverType="green"
            title="이오몽 X 미녕이 X 부쿠키 X 희지"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
          <MvCard
            mainTitle="IRISÉ (아이리제) 'LOVEGAME' M/V"
            image="/img/mv6.svg"
            cover="MV"
            coverType="yellow"
            title="IRISÉ (아이리제)"
            desc="이세계아이돌 'STARGAZERS' Official MV 최초공개!"
          />
          </div>
    </div>
  );
};

export default MvPage;
