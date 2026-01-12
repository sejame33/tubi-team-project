import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./MyArtist.css";

const artistList = [
  { id: "more", type: "more", name: "More Artists", img: "/img/my-artist-list1.svg" },
  { id: 1, type: "artist", name: "Plave", img: "/img/my-artist-list2.svg" },
  { id: 2, type: "artist", name: "MEECHU", img: "/img/my-artist-list3.svg" },
  { id: 3, type: "artist", name: "APOKI", img: "/img/my-artist-list4.svg" },
  { id: 4, type: "artist", name: "HEBI", img: "/img/my-artist-list5.svg" },
  { id: 5, type: "artist", name: "HONEYZ", img: "/img/my-artist-list6.svg" },
  { id: 6, type: "artist", name: "이세계아이돌", img: "/img/my-artist-list7.svg" },
  { id: 7, type: "artist", name: "IRISE", img: "/img/my-artist-list8.svg" },
  { id: 8, type: "artist", name: "StelLive", img: "/img/my-artist-list9.svg" },
];

const MyArtist = () => {
  return (
    <section className="my-artist" aria-label="My Artists">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        className="artist-swiper"
      >
        {artistList.map((item) => (
          <SwiperSlide key={item.id} className="artist-slide">
            {item.type === "more" ? (
              <button
                type="button"
                className="artist-more"
                aria-label="More Artists"
              >
                <img src={item.img} alt="" aria-hidden="true" />
                <span className="artist-name">{item.name}</span>
              </button>
            ) : (
              <button
                type="button"
                className="artist-card"
                aria-label={item.name}
              >
                <div className="artist-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <span className="artist-name">{item.name}</span>
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MyArtist;