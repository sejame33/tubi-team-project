import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShopProductSmallBanner.css";

const ShopProductSmallBanner = ({
  title,
  subtitle,
  productImage,
  background,
  url,
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!url) return;
    e.stopPropagation();
    navigate(url);
  };

  return (
    <section
      className="shop-promo-banner"
      style={{
        background,
        cursor: url ? "pointer" : "default",
      }}
      onClick={handleClick}
    >
      <div className="shop-promo-text">
        {subtitle?.type === "image" && (
          <img
            className="shop-promo-subtitle-img"
            src={subtitle.value}
            alt={subtitle.alt || "subtitle"}
          />
        )}

        {subtitle?.type === "text" && (
          <p className="shop-promo-subtitle-text">{subtitle.value}</p>
        )}

        <p className="shop-promo-title">{title}</p>
      </div>

      <div className="shop-promo-image">
        <img src={productImage} alt="product" />
      </div>
    </section>
  );
};

export default ShopProductSmallBanner;
