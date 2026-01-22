import React, { useState, useEffect } from "react";
import heartLine from "/img/heart-line.svg";
import heartFill from "/img/heart-fill.svg";

import "./AlbumList.css";

const AlbumList = ({
  id, // ⭐️ 고유 id 꼭 필요
  image,
  title,
  subtitle,
  defaultLiked = false,
  onLikeChange,
}) => {
  const storageKey = `album-like-${id}`;

  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved !== null ? JSON.parse(saved) : defaultLiked;
  });

  const handleLike = () => {
    const next = !liked;
    setLiked(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    onLikeChange?.(next);
  };

  return (
    <div className="album-list">
      <img src={image} alt={title} className="album-list__img" />

      <div className="album-list__text">
        <p className="album-list__title">{title}</p>
        <p className="album-list__subtitle">{subtitle}</p>
      </div>

      <button
        className="album-list__heart impl-anchor"
        onClick={handleLike}
        data-impl
        style={{
          "--impl-right": "-4px",
          "--impl-top": "2px",
        }}
      >
        <img src={liked ? heartFill : heartLine} alt="like" />
      </button>
    </div>
  );
};

export default AlbumList;
