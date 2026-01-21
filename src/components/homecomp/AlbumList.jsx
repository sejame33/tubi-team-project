import React, { useState } from "react";
import heartLine from "/img/heart-line.svg";
import heartFill from "/img/heart-fill.svg";

import "./AlbumList.css";

const AlbumList = ({
  image,
  title,
  subtitle,
  defaultLiked = false,
  onLikeChange,
}) => {
  const [liked, setLiked] = useState(defaultLiked);

  const handleLike = () => {
    const next = !liked;
    setLiked(next);
    onLikeChange?.(next);
  };

  return (
    <div className="album-list">
      <img src={image} alt={title} className="album-list__img" />

      <div className="album-list__text">
        <p className="album-list__title">{title}</p>
        <p className="album-list__subtitle">{subtitle}</p>
      </div>

      <button className="album-list__heart" onClick={handleLike}>
        <img
          src={liked ? heartFill : heartLine}
          alt="like"
        />
      </button>
    </div>
  );
};

export default AlbumList;