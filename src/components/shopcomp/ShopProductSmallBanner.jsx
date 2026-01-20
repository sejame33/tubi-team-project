import React from "react";
import "./ShopProductSmallBanner.css";

const ShopProductSmallBanner = ({
  title,
  subtitle,
  productImage,
  background,     // ✅ 추가
  onClick,
}) => {
  return (
    <section
      className="shop-promo-banner"
      style={{ background }}     // ✅ 적용
      onClick={onClick}
    >
      <div className="shop-promo-text">
        <p className="shop-promo-title">{title}</p>

        {subtitle?.type === "image" && (
          <img
            className="shop-promo-subtitle-img"
            src={subtitle.value}
            alt={subtitle.alt || "subtitle"}
          />
        )}

        {subtitle?.type === "text" && (
          <p className="shop-promo-subtitle-text">
            {subtitle.value}
          </p>
        )}
      </div>

      <div className="shop-promo-image">
        <img src={productImage} alt="product" />
      </div>
    </section>
  );
};

export default ShopProductSmallBanner;
