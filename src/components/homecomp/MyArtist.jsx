import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";

import "./MyArtist.css";
import { useFollowArtist } from "../../context/FollowArtistContext";

import { artistData } from "../../pages/artistpage/sections/ArtistData";

const MyArtist = () => {
  const navigate = useNavigate();
  const { artistList, followedArtists } = useFollowArtist();

  // ✅ MyArtist는 "팔로우된 아티스트"만 보여주고, 마지막에 more 버튼 붙이기
  const moreItem = artistList.find((a) => a.type === "more");

  const renderList = [
    ...(moreItem ? [moreItem] : []),
    ...(followedArtists || []),
  ];

  const findArtistKeyByName = (name) => {
    return Object.keys(artistData).find((key) => artistData[key].name === name);
  };

  const handleArtistClick = (item) => {
    if (item.type === "more") {
      navigate("/follow-artist", { state: { from: "myartist" } });
      return;
    }

    // 이제 위에서 선언되었으므로 정상 작동합니다.
    const artistKey = findArtistKeyByName(item.name);

    if (!artistKey) {
      console.warn("아티스트 데이터 없음:", item.name);
      return;
    }

    navigate(`/home/artist/${artistKey}`, {
      state: { artist: artistData[artistKey] },
    });
  };

  return (
    <section className="my-artist" aria-label="My Artists">
      <Swiper slidesPerView="auto" spaceBetween={20} className="artist-swiper">
        {renderList.map((item) => (
          <SwiperSlide key={`${item.type}-${item.id}`} className="artist-slide">
            {item.type === "more" ? (
              <button
                type="button"
                className="artist-more impl-anchor"
                aria-label="More Artists"
                data-impl
                onClick={() => handleArtistClick(item)}
                style={{ "--impl-right": "-8px", "--impl-top": "0px" }}
              >
                <img src={item.img} alt="" aria-hidden="true" />
                <span className="my-artist-name">{item.name}</span>
              </button>
            ) : (
              <button
                type="button"
                className="artist-card impl-anchor"
                aria-label={item.name}
                data-impl
                onClick={() => handleArtistClick(item)}
                style={{
                  "--impl-right": "-8px",
                  "--impl-top": "0px",
                }}
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

export default MyArtist;
