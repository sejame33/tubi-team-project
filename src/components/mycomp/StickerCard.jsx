import React from "react";

const StickerCard = ({ item, onItemClick }) => {
  return (
    <button
      type="button"
      className="stickerSwiper-card"
      onClick={() => onItemClick?.(item)}
    >
      <div className="stickerSwiper-thumb">
        {item.isNew && <span className="badge-new">NEW</span>}
        <img src={item.imageUrl} alt={item.name || ""} />
      </div>

      <div className="stickerSwiper-text">
        <div className="stickerSwiper-brand">
          <span>{item.brand}</span>
          {item.brandIcon && (
            <img
              src={item.brandIcon}
              alt=""
              className="stickerSwiper-brandIcon"
            />
          )}
        </div>
        <div className="stickerSwiper-name">{item.name}</div>
      </div>
    </button>
  );
};

export default StickerCard;
