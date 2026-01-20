import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";

import "./ShopMyArtist.css";
import { useFollowArtist } from "../../context/FollowArtistContext";

const ShopMyArtist = () => {
  const navigate = useNavigate();
  const { artistList, followedArtists } = useFollowArtist();

  // ✅ MyArtist는 "팔로우된 아티스트"만 보여주고, 마지막에 more 버튼 붙이기
  const moreItem = artistList.find((a) => a.type === "more");

  const renderList = [
    ...(moreItem ? [moreItem] : []),
    ...(followedArtists || []),
  ];
  const handleArtistClick = (item) => {
    if (item.type === "more") {
      navigate("/follow-artist");
      return;
    }

    // 기존 로직 유지 (예: StelLive(8) 누르면 artist 페이지)
    if (String(item.id) === "8") {
      navigate("/home/artist");
    } else {
      console.log(`${item.name} 클릭됨`);
    }
  };

  return (
    <section className="my-artist" aria-label="My Artists">
      <Swiper slidesPerView="auto" spaceBetween={20} className="artist-swiper">
        {renderList.map((item) => (
          <SwiperSlide key={`${item.type}-${item.id}`} className="artist-slide">
            {item.type === "more" ? (
              <button
                type="button"
                className="artist-more"
                aria-label="More Artists"
                onClick={() => handleArtistClick(item)}
              >
                <img src={item.img} alt="" aria-hidden="true" />
                <span className="my-artist-name">{item.name}</span>
              </button>
            ) : (
              <button
                type="button"
                className="artist-card"
                aria-label={item.name}
                onClick={() => handleArtistClick(item)}
              >
                <div className="artist-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <span className="my-artist-name">{item.name}</span>
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ShopMyArtist;
