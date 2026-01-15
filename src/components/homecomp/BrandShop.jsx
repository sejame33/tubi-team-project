import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./BrandShop.css";

const artistTabs = [
  { id: "apoki", name: "APOKI", dot: true },
  { id: "plave", name: "PLAVE" },
  { id: "luvdia", name: "LUVDIA", dot: true },
  { id: "hebi", name: "HEBI" },
  { id: "meechu", name: "MEECHU" },
];

const products = [
  {
    id: 101,
    brand: "apoki",
    type: "brand",
    titleTop: "APOKI",
    interest: "7505+",
    img: "/img/brand-shop-product-1.svg",
  },
  {
    id: 102,
    brand: "apoki",
    title: "[LUCKY DRAW] APOKI HOOD",
    price: "₩33,000원",
    img: "/img/brand-shop-product-2.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 103,
    brand: "apoki",
    title: "1st Album: Earth, Space,",
    price: "₩33,000원",
    img: "/img/brand-shop-product-3.svg",
    badge3: "정규앨범",
  },
  {
    id: 104,
    brand: "apoki",
    title: "APOKI X BALANSA Hat Collaboration",
    price: "₩36,000원",
    img: "/img/brand-shop-product-4.svg",
    badge4: "콜라보",
    badge2: "특전제공",
  },
  {
    id: 105,
    brand: "apoki",
    title: "APOKI X BALANSA Keyring",
    price: "₩15,000원",
    img: "/img/brand-shop-product-5.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 106,
    brand: "apoki",
    title: "홀로그램 엽서 세트 / 202...",
    price: "₩23,000원",
    img: "/img/brand-shop-product-6.svg",
  },
];

export default function BrandShop() {
  const [activeBrand, setActiveBrand] = useState("apoki");

  const filteredProducts = useMemo(
    () => products.filter((p) => p.brand === activeBrand),
    [activeBrand]
  );

  return (
    <section className="brandshop">
      <div className="brandshop-box">
        <div className="brandshop-toprow">
          <button className="brandshop-link" type="button">
            <span className="brand-gray">상품</span> 235개
            <span aria-hidden="true">
              <img src="/img/brand-more-arrow.svg" alt="" />
            </span>
          </button>

          <button className="brandshop-sort" type="button">
            인기순{" "}
            <span aria-hidden="true">
              <img src="/img/brand-popular-arrow.svg" alt="" />
            </span>
          </button>
        </div>

        {/* 아티스트 탭 (그대로) */}
        <div className="brandshop-tabs">
          <Swiper
            modules={[FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={8}
            className="brandshop-tabs-swiper"
          >
            {artistTabs.map((a) => {
              const isActive = a.id === activeBrand;
              return (
                <SwiperSlide key={a.id} className="brandshop-tab-slide">
                  <button
                    type="button"
                    className={`brandshop-tab ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveBrand(a.id)}
                  >
                    <span className="brandshop-tab-text">{a.name}</span>
                    {a.dot && <span className="brandshop-tab-dot" />}
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* ✅ 상품 리스트 (Scrollbar + Fraction 추가) */}
        <div className="brandshop-products">
          <Swiper
            className="brandshop-products-swiper"
            modules={[Scrollbar, Pagination]}
            slidesPerView="auto"
            spaceBetween={18}
            grabCursor
            scrollbar={{
              draggable: true,
              el: ".brandshop-products-scrollbar",
              hide: false,
            }}
            pagination={{
              type: "fraction",
              el: ".brandshop-products-pagination",
            }}
            breakpoints={{
              0: {
                spaceBetween: 12,
              },
              768: {
                spaceBetween: 16,
              },
              1024: {
                spaceBetween: 18,
              },
            }}
          >
            {filteredProducts.map((p) => {
              if (p.type === "brand") {
                return (
                  <SwiperSlide key={p.id} className="brandshop-product-slide">
                    <article className="brandshop-card brand-card">
                      <div className="brandshop-thumb">
                        <img src={p.img} alt={p.titleTop} />
                      </div>

                      <p className="brand-card-title">{p.titleTop}</p>

                      <div className="brand-card-interest">
                        <span>관심</span>
                        <img src="/img/brand-star.svg" alt="" />
                        <span>{p.interest}</span>
                      </div>
                    </article>
                  </SwiperSlide>
                );
              }

              return (
                <SwiperSlide key={p.id} className="brandshop-product-slide">
                  <article className="brandshop-card">
                    <div className="brandshop-thumb">
                      <img src={p.img} alt={p.title} />
                    </div>

                    <p className="brandshop-title">{p.title}</p>
                    <p className="brandshop-price">{p.price}</p>

                    <div className="brandshop-badges">
                      {p.badge1 && <span className="badge">{p.badge1}</span>}
                      {p.badge2 && (
                        <span className="badge is-blue">{p.badge2}</span>
                      )}
                      {p.badge3 && (
                        <span className="badge is-gray">{p.badge3}</span>
                      )}
                      {p.badge4 && (
                        <span className="badge is-red">{p.badge4}</span>
                      )}
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* ✅ AlbumSlide처럼 바깥에 컨트롤 박스 */}
          <div className="brandshop-products-controls">
            <div className="brandshop-products-row">
              <div className="brandshop-products-scrollbar swiper-scrollbar" />
              <div className="brandshop-products-pagination swiper-pagination" />
            </div>
          </div>
        </div>
      </div>

      <button className="brandshop-more" type="button">
        더보기
      </button>
    </section>
  );
}
