import React from "react";
import "./ShopTodayOffer.css";

export default function ShopTodayOffer({
  badgeText = "단독판매",
  heroImg = "/img/today-offer-hero.png",
  productThumb = "/img/today-offer-thumb.png",
  productArtist = "이세계 아이돌",
  productTitle = "2주년 스페셜 랜덤 박스 패키지",
  price = "₩39,500원",
  onClick,
}) {
  return (
    <section className="today-offer">
      <div className="today-offer-card">
        {/* 상단 이벤트 영역 */}
        <div className="today-offer-hero">
          <span className="today-offer-badge">{badgeText}</span>

          <img
            className="today-offer-hero-img"
            src={heroImg}
            alt="2주년 이벤트"
          />
        </div>

        {/* 하단 상품 정보 */}
        <div className="today-offer-body">
          <p className="today-offer-label">한정수량 이벤트</p>

          <p className="today-offer-title">
            이세계 아이돌 <span>2주년</span> 기간 한정!
          </p>

          <div className="today-offer-product">
            <img
              className="today-offer-thumb"
              src={productThumb}
              alt="상품 이미지"
            />

            <div className="today-offer-info">
              <p className="product-artist">{productArtist}</p>
              <p className="product-title">{productTitle}</p>
              <p className="product-price">{price}</p>
            </div>
          </div>

          <button className="today-offer-btn" onClick={onClick}>
            지금 바로 구매하기
          </button>
        </div>
      </div>
    </section>
  );
}
