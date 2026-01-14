import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./AlbumSlide.css";

const albumList = [
  {
    id: 1,
    cover: "/img/album-cover-1.svg",
    cd: "/img/album-cd-1.svg",
    desc: "1st Debut Album 《CHO》",
    artist: "Feverse",
  },
  {
    id: 2,
    cover: "/img/album-cover-2.svg",
    cd: "/img/album-cd-2.svg",
    desc: "Digital Single 두번째 지구《Planet B》",
    artist: "HADES",
  },
  {
    id: 3,
    cover: "/img/album-cover-3.svg",
    cd: "/img/album-cd-3.svg",
    desc: "1st Single Album《ASTERUM》",
    artist: "PLAVE",
  },
  {
    id: 4,
    cover: "/img/album-cover-4.svg",
    cd: "/img/album-cd-4.svg",
    desc: "1st Mini Album《Chroma》",
    artist: "HEBI",
  },
  {
    id: 5,
    cover: "/img/album-cover-5.svg",
    cd: "/img/album-cd-5.svg",
    desc: "The 1st Digital Single 《龍 : 미르》",
    artist: "MIR",
  },
];

export default function AlbumSlide() {
  return (
    <section className="album-slide">
      <div className="album-slide-inner">
        <Swiper
          observer={true}
          observeParents={true}
          resizeObserver={true}
          className="album-swiper"
          modules={[Scrollbar, Pagination]}
          grabCursor
          centeredSlides
          slidesPerView={1.5}
          spaceBetween={16}
          scrollbar={{
            draggable: true,
            el: ".album-swiper-scrollbar",
            hide: false,
          }}
          pagination={{
            type: "fraction",
            el: ".album-swiper-pagination",
          }}
          breakpointsBase="container"
          breakpoints={{
            768: { slidesPerView: 2.2, spaceBetween: 22 },
            1024: { slidesPerView: 3.2, spaceBetween: 26 },
          }}
        >
          {albumList.map((album) => (
            <SwiperSlide key={album.id} className="album-slide-item">
              <article className="album-card">
                <div className="album-visual">
                  <img className="album-cd" src={album.cd} alt="" />
                  <img
                    className="album-cover"
                    src={album.cover}
                    alt={album.artist}
                  />
                </div>

                <div className="album-meta">
                  <p className="album-desc">{album.desc}</p>
                  <p className="album-artist">{album.artist}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ 여기! 둘을 감싸는 컨트롤 박스 */}
        <div className="album-swiper-controls">
          <div className="album-swiper-row">
            <div className="album-swiper-scrollbar swiper-scrollbar" />
            <div className="album-swiper-pagination swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}
