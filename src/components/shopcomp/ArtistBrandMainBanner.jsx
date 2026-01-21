import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ArtistBrandMainBanner.css";

const banners = [
  {
    id: 1,
    bg: "/img/artist-brand-banner-bg-1.svg", // ✅ 배경(그라디언트/이미지)
    productImg: "/img/artist-brand-banner-product-1.png", // ✅ 오른쪽 상품 PNG
    title: "PLAVE album",
    subtitle: ["지금 구매하고 시크릿 포토카드의", "주인공이 되어요"],
    productAlt: "PLAVE album goods",
  },
  {
    id: 2,
    bg: "/img/artist-brand-banner-bg-2.svg",
    productImg: "/img/artist-brand-banner-product-2.png",
    title: "ALL BLACK",
    subtitle: ["올블랙으로 멋지게 꾸미고", "PLAVE 콘서트 가자~!"],
    productAlt: "ALL BLACK goods",
  },
];

export default function ArtistBrandMainBanner({
  items = banners,
  onClickBanner,
}) {
  return (
    <section className="ab-mainbanner">
      <Swiper
        className="ab-mainbanner-swiper"
        modules={[Scrollbar, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        threshold={12} // ✅ 드래그 민감도 완화
        preventClicks
        preventClicksPropagation
        scrollbar={{
          draggable: true,
          el: ".ab-mainbanner-scrollbar",
          hide: false,
        }}
        pagination={{
          type: "fraction",
          el: ".ab-mainbanner-pagination",
        }}
      >
        {items.map((b) => (
          <SwiperSlide key={b.id} className="ab-mainbanner-slide">
            <div
              role="button"
              tabIndex={0}
              className="ab-mainbanner-card"
              style={{ backgroundImage: `url(${b.bg})` }}
              onClick={(e) => {
                const swiper = e.currentTarget.closest(".swiper")?.swiper;
                if (swiper && !swiper.clickAllowed) return; // ✅ 스와이프면 클릭 무시
                onClickBanner?.(b);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onClickBanner?.(b);
              }}
            >
              <span className="ab-mainbanner-badge">New</span>

              <div className="ab-mainbanner-text">
                <p className="ab-mainbanner-title">{b.title}</p>
                <p className="ab-mainbanner-subtitle">
                  <span>{b.subtitle[0]}</span>
                  <span>{b.subtitle[1]}</span>
                </p>
              </div>

              {b.productImg && (
                <img
                  className="ab-mainbanner-product"
                  src={b.productImg}
                  alt={b.productAlt || "product"}
                  draggable="false"
                />
              )}
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ ShopMainBanner와 동일한 컨트롤 */}
        <div
          className="ab-mainbanner-controls impl-anchor"
          data-impl
          style={{
            "--impl-right": "-36px",
            "--impl-top": "-3px",
          }}
        >
          <div className="ab-mainbanner-row">
            <div className="ab-mainbanner-scrollbar swiper-scrollbar" />
            <div className="ab-mainbanner-pagination swiper-pagination" />
          </div>
        </div>
      </Swiper>
    </section>
  );
}
