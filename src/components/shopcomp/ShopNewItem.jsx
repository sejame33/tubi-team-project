import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination } from "swiper/modules";

import useWishlist from "../../hooks/useWishlist"; // ✅ 경로 수정 필요할 수 있음

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

  // ALBUM
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

  // STAND
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

  // DIGITAL
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
  const navigate = useNavigate();
  const [activeBrand, setActiveBrand] = useState("ALL");
  const { isWished, toggleWish } = useWishlist();

  const filteredProducts = useMemo(() => {
    if (activeBrand === "ALL") return products;
    return products.filter((p) => p.brand === activeBrand);
  }, [activeBrand]);

  const handleProductClick = (id) => {
    if (id === 102) {
      navigate("/home/shop/ShopProduct");
    }
  };

  return (
    <section className="shop-new">
      <div className="shop-new-box">
        <div className="shop-new-toprow">
          <button className="shop-new-link" type="button">
            <span className="shop-new-gray">상품</span>{" "}
            {filteredProducts.length}개
            <span aria-hidden="true">
              <img src="/img/brand-more-arrow.svg" alt="" />
            </span>
          </button>

          <button className="shop-new-sort" type="button">
            인기순
            <span aria-hidden="true">
              <img src="/img/brand-popular-arrow.svg" alt="" />
            </span>
          </button>
        </div>

        {/* 탭 */}
        <div className="shop-new-tabs">
          <Swiper
            modules={[FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={8}
            className="shop-new-tabs-swiper"
          >
            {artistTabs.map((a) => {
              const isActive = a.id === activeBrand;
              return (
                <SwiperSlide key={a.id} className="shop-new-tab-slide">
                  <button
                    type="button"
                    className={`shop-new-tab ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveBrand(a.id)}
                  >
                    <span className="shop-new-tab-text">{a.name}</span>
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* 상품 Swiper */}
        <div className="shop-new-products">
          <Swiper
            className="shop-new-products-swiper"
            modules={[Scrollbar, Pagination]}
            slidesPerView="auto"
            spaceBetween={18}
            grabCursor
            scrollbar={{
              draggable: true,
              el: ".shop-new-products-scrollbar",
              hide: false,
            }}
            pagination={{
              type: "fraction",
              el: ".shop-new-products-pagination",
            }}
            breakpoints={{
              0: { spaceBetween: 12 },
              768: { spaceBetween: 16 },
              1024: { spaceBetween: 18 },
            }}
          >
            {filteredProducts.map((p) => {
              const wished = isWished(p.id);

              return (
                <SwiperSlide key={p.id} className="shop-new-product-slide">
                  <article
                    className="shop-new-card"
                    onClick={() => handleProductClick(p.id)}
                  >
                    <div className="shop-new-thumb">
                      <img src={p.img} alt={p.title} />

                      {/* ✅ 썸네일 오른쪽 아래 하트 */}
                      <button
                        type="button"
                        className={`shop-new-wish ${wished ? "is-active" : ""}`}
                        aria-pressed={wished}
                        aria-label={wished ? "관심상품 해제" : "관심상품 추가"}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWish(p.id);
                        }}
                      >
                        <img
                          src={
                            wished
                              ? "/img/heart-fill.svg"
                              : "/img/heart-line.svg"
                          }
                          alt=""
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    <p className="shop-new-title">{p.title}</p>
                    <p className="shop-new-price">{p.price}</p>

                    <div className="shop-new-badges">
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

          <div className="shop-new-products-controls">
            <div className="shop-new-products-row">
              <div className="shop-new-products-scrollbar swiper-scrollbar" />
              <div className="shop-new-products-pagination swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
