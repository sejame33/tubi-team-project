import React from "react";
import "./ShopProductSmallBanner.css";

const ShopProductSmallBanner = ({
  title = "하츠네 미쿠 에디션 출시",
  subtitleImage = "/img/shopbanner-logo.svg",
  productImage = "/img/shopbanner-img.svg",
  onClick,
}) => {
  return (
    <section className="shop-promo-banner" onClick={onClick}>
      <div className="shop-promo-text">
        <p className="shop-promo-title">{title}</p>
        <img
          className="shop-promo-subtitle-img"
          src={subtitleImage}
          alt="subtitle"
        />
      </div>

      <div className="shop-promo-image">
        <img src={productImage} alt="product" />
      </div>
    </section>
  );
};

export default ShopProductSmallBanner;
