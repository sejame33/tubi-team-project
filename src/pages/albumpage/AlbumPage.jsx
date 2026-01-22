import React from 'react';
import AlbumSlide from '../../components/homecomp/AlbumSlide';
import SectionTitle from '../../components/homecomp/SectionTitle';
import AlbumList from '../../components/homecomp/AlbumList';

import "./AlbumPage.css";

const AlbumPage = () => {
  return (
    <div className="album-page">
        <SectionTitle
        title="이달의 ALBUM"
        showMore={false}
        useNicknameTitle={false}
        onMoreClick={() => navigate("/home/album")}
      />
        <AlbumSlide/>
      <SectionTitle
        title="Chart"
        showMore={false}
        showSort2={true}
        useNicknameTitle={false}
        onMoreClick={() => navigate("/home/album")}
      />
      <div className="album-list-wrap">
        <AlbumList
        id="feverse-cho"
        image="/img/album-list-1.svg"
        title="Feverse"
        subtitle="1st Debut Album 《CHO》"
      />
      <AlbumList
        id="hades-planet-b"
        image="/img/album-list-2.svg"
        title="HADES"
        subtitle="Digital Single 두번째 지구 《Planet B》"
      />
      <AlbumList
        id="plave-asterum"
        image="/img/album-list-3.svg"
        title="PLAVE"
        subtitle="1st Single Album 《ASTERUM》"
      />
      <AlbumList
        id="hebi-chroma"
        image="/img/album-list-4.svg"
        title="HEBI"
        subtitle="1st Mini Album 《Chroma》"
      />
      <AlbumList
        id="mir-yong"
        image="/img/album-list-5.svg"
        title="MIR"
        subtitle="The 1st Digital Single 《龍 : 미르》"
      />
      </div>
    </div>
  );
};

export default AlbumPage;
