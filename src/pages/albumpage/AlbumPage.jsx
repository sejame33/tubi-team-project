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
        image="/img/album-list-1.svg"
        title="Feverse"
        subtitle="1st Debut Album 《CHO》"
        defaultLiked={false}
        onLikeChange={(liked) =>
          console.log("앨범 좋아요 상태:", liked)
        }
      />
      <AlbumList
        image="/img/album-list-2.svg"
        title="HADES"
        subtitle="Digital Single 두번째 지구 《Planet B》"
        defaultLiked={false}
        onLikeChange={(liked) =>
          console.log("앨범 좋아요 상태:", liked)
        }
      />
      <AlbumList
        image="/img/album-list-3.svg"
        title="PLAVE"
        subtitle="1st Single Album 《ASTERUM》"
        defaultLiked={false}
        onLikeChange={(liked) =>
          console.log("앨범 좋아요 상태:", liked)
        }
      />
      <AlbumList
        image="/img/album-list-4.svg"
        title="HEBI"
        subtitle="1st Mini Album 《Chroma》"
        defaultLiked={false}
        onLikeChange={(liked) =>
          console.log("앨범 좋아요 상태:", liked)
        }
      />
      <AlbumList
        image="/img/album-list-5.svg"
        title="MIR"
        subtitle="The 1st Digital Single 《龍 : 미르》"
        defaultLiked={false}
        onLikeChange={(liked) =>
          console.log("앨범 좋아요 상태:", liked)
        }
      />
      </div>
    </div>
  );
};

export default AlbumPage;
