import React from "react";
import "./ShopProductSmallBanner.css";

const ShopProductSmallBanner = ({
  title,
  subtitle,
  productImage,
  background,
  onClick,
}) => {
  return (
    <section
      className="shop-promo-banner"
      style={{ background }}
      onClick={onClick}
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
