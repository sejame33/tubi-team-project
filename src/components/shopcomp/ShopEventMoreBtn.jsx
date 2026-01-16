import React from "react";
import "./ShopEventMoreBtn.css";

const ShopEventMoreBtn = ({
  highlightContent,
  text,
  extra,
  onClick,
  bgColor,
}) => {
  return (
    <button
      className="event-banner"
      onClick={onClick}
      type="button"
      style={{ backgroundColor: bgColor }}
    >
      <span className="event-banner-text">
        {highlightContent}
        {text}
      </span>

      {extra && <span className="event-banner-extra">{extra}</span>}

      <img
        src="/img/shopevent-arrow.svg"
        alt=""
        className="event-banner-arrow"
      />
    </button>
  );
};

export default ShopEventMoreBtn;
