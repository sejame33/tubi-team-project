import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ShopNewItem.css";

const artistTabs = [
  { id: "ALL", name: "ALL" },
  { id: "ALBUM", name: "ALBUM" },
  { id: "STAND", name: "STAND" },
  { id: "DIGITAL", name: "DIGITAL" },
];

const products = [
  {
    id: 102,
    brand: "ALL",
    title: "스파오 x 하츠네미쿠 아크릴 스탠드 프린트",
    price: "₩67,000원",
    img: "/img/shop-new-product-1.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 103,
    brand: "ALL",
    title: "이세계 아이돌 아크릴 디오라마",
    price: "₩43,000원",
    img: "/img/shop-new-product-2.svg",
    badge4: "콜라보",
    badge2: "특전제공",
  },
  {
    id: 104,
    brand: "ALL",
    title: "이세계 아이돌 포토카드 세트 A Ver.",
    price: "₩38,000원",
    img: "/img/shop-new-product-3.svg",
  },
  {
    id: 105,
    brand: "ALL",
    title: "1st Album: Earth, Space, Timesfdsfcdsc",
    price: "₩23,000원",
    img: "/img/shop-new-product-4.svg",
    badge3: "정규앨범",
  },
  {
    id: 106,
    brand: "ALL",
    title: "[LUCKY DRAW] APOKIdsfdsfcdsc",
    price: "₩52,000원",
    img: "/img/shop-new-product-5.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  // ✅ ALBUM 탭
  {
    id: 201,
    brand: "ALBUM",
    title: "1st Album: Earth, Space, Time",
    price: "₩23,000원",
    img: "/img/shop-new-product-4.svg",
    badge3: "정규앨범",
  },
  {
    id: 202,
    brand: "ALBUM",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-5.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 203,
    brand: "ALBUM",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-1.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  // ✅ STAND 탭
  {
    id: 301,
    brand: "STAND",
    title: "1st Album: Earth, Space, Time",
    price: "₩23,000원",
    img: "/img/shop-new-product-1.svg",
    badge3: "정규앨범",
  },
  {
    id: 302,
    brand: "STAND",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-3.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 303,
    brand: "STAND",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-2.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  // ✅ STAND 탭
  {
    id: 401,
    brand: "DIGITAL",
    title: "1st Album: Earth, Space, Time",
    price: "₩23,000원",
    img: "/img/shop-new-product-4.svg",
    badge3: "정규앨범",
  },
  {
    id: 402,
    brand: "DIGITAL",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-5.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 403,
    brand: "DIGITAL",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-3.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
];

export default function ShopNewItem() {
  const [activeBrand, setActiveBrand] = useState("ALL");

  const filteredProducts = useMemo(() => {
    if (activeBrand === "ALL") return products; // ✅ 전체 보여주기
    return products.filter((p) => p.brand === activeBrand);
  }, [activeBrand]);

  return (
    <section className="brandshop">
      <div className="brandshop-box">
        <div className="brandshop-toprow">
          <button className="brandshop-link" type="button">
            <span className="brand-gray">상품</span> 35개
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
    </section>
  );
}
