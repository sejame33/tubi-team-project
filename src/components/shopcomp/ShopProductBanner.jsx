import React from "react";
import "./ShopProductBanner.css";
import ShopMoreBtn from "./ShopMoreBtn";
import ShopEventMoreBtn from "./ShopEventMoreBtn";
import Btn from "../common/Btn";

const ShopProductBanner = () => {
  return (
    <>
      <section className="shopproduct-banner-wrap">
        <div className="shopproduct-banner">
          <img
            src="/img/shopproduct-banner.svg"
            alt="하츠네 미쿠 아크릴 스탠드"
          />

          <img
            className="shopproduct-banner-smallImg"
            src="/img/shopproduct-banner-smallImg.svg"
            alt="하츠네 미쿠 아크릴 스탠드 상세 이미지"
          />
        </div>

        <a href="#" className="shopproduct-link">
          주 7일 언제나 당일발송, 전상품 무료배송
          <img src="/img/shop-main-banner-arrow.svg" alt="" />
        </a>
      </section>

      <section className="shopproduct-info">
        <div className="shopproduct-brandBox">
          <div className="shopproduct-brand">
            하츠네 미쿠 <img src="/img/shopproduct-brand-arrow.svg" alt="" />
          </div>

          <div className="shopproduct-heart">
            <img src="/img/shopproduct-heart.svg" alt="" />
            11,062
          </div>
        </div>

        <div className="shopproduct-title-row">
          <p className="shoproute">
            shop <img src="/img/shopproduct-brand-arrow.svg" alt="" /> New Item
          </p>
          <h1 className="shopproduct-title">
            [하츠네미쿠] 아크릴 스탠드 (PRINT)
          </h1>
          <div className="shopproduct-badge">
            <div className="brandshop-badges">
              <span className="badge">단독판매</span>
              <span className="badge is-blue">특전제공</span>
            </div>
          </div>
          <div className="shopproduct-price">
            67,000원
            <div className="shopproduct-share">
              <img src="/img/shareBtn.svg" alt="" />
              공유하기
            </div>
          </div>
          <ShopEventMoreBtn
            bgColor="#eef3ff"
            highlightContent={<span className="highlight">첫 구매 30%</span>}
            text=" 쿠폰 받으러 가기"
          />
          <div className="shopproduct-shopMoreBtn">
            <ShopMoreBtn
              title="굿즈 구매 시 디바 뽑기권 1매 증정"
              subtitle="5만 원 이상 구매 시 증정"
              variant="primary"
            />
          </div>
          <Btn bgColor="#333333" text="구매하기" />
        </div>
      </section>
    </>
  );
};

export default ShopProductBanner;
