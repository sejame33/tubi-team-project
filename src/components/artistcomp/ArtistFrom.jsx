import React from "react";
import "./ArtistFrom.css";

const ArtistFrom = ({
  profileImg,
  name,
  time,
  content,
  badgeImg,
  emogjiImg,
}) => {
  return (
    <div className="artist-from">
      <div className="artist-from__header">
        <div className="artist-from__profile">
          <img src={profileImg} alt="artist profile" />
        </div>

        <div className="artist-from__info">
          <div className="artist-from__name">
            {name}
            {badgeImg && <img src="/img/blue-badge.svg" alt="" />}
          </div>
          <div className="artist-from__time">{time}</div>
        </div>
      </div>

      <div className="artist-from__content">
        {content}
        {emogjiImg && (
          <img src="/img/Balloon.svg" alt="" className="artist-from__balloon" />
        )}
      </div>
    </div>
  );
};

export default ArtistFrom;
