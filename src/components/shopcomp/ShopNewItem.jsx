import React, { useMemo, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination } from "swiper/modules";

import useWishlist from "../../hooks/useWishlist";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ShopNewItem.css";

const artistTabs = [
  { id: "ALL", name: "ALL" },
  { id: "ALBUM", name: "ALBUM" },
  { id: "STAND", name: "STAND" },
  { id: "FASHION", name: "FASHION" },
];

const products = [
  // STAND
  {
    id: 202,
    brand: "STAND",
    title: "스파오 x 하츠네미쿠 아크릴 스탠드 프린트",
    price: "₩23,000원",
    img: "/img/shop-new-product-stand-1.svg",
    badge3: "정규앨범",
    impl: true,
  },
  {
    id: 203,
    brand: "STAND",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-stand-2.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 204,
    brand: "STAND",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-stand-3.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },

  // ALBUM
  {
    id: 301,
    brand: "ALBUM",
    title: "1st Album: Earth, Space, Time",
    price: "₩23,000원",
    img: "/img/shop-new-product-album-1.svg",
    badge3: "정규앨범",
  },
  {
    id: 302,
    brand: "ALBUM",
    title: "PLAVE JP 1ST SINGLE(Hide and Seek) LIMITED EDITION",
    price: "₩21,400원",
    img: "/img/shop-new-product-album-2.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 303,
    brand: "ALBUM",
    title: "PLAVE JP 1ST SINGLE(Hide and Seek) STANDARD EDITION",
    price: "₩17,000원",
    img: "/img/shop-new-product-album-3.svg",
  },

  // FASHION
  {
    id: 401,
    brand: "FASHION",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-fashion-1.svg",
    badge3: "정규앨범",
  },
  {
    id: 402,
    brand: "FASHION",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-fashion-2.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 403,
    brand: "FASHION",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-fashion-3.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
];

export default function ShopNewItem() {
  const navigate = useNavigate();
  const [activeBrand, setActiveBrand] = useState("ALL");
  const { isWished, toggleWish } = useWishlist();

  // ✅ 상품 swiper 인스턴스 ref
  const productsSwiperRef = useRef(null);

  const filteredProducts = useMemo(() => {
    if (activeBrand === "ALL") return products;
    return products.filter((p) => p.brand === activeBrand);
  }, [activeBrand]);

  // ✅ 탭 변경 시 상품 스크롤 위치 리셋
  useEffect(() => {
    const swiper = productsSwiperRef.current;
    if (!swiper) return;

    swiper.setProgress(0, 0);
    swiper.slideTo(0, 0);
    swiper.update();
  }, [activeBrand]);

  const handleProductClick = (id) => {
    if (id === 202) {
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
                    className={`shop-new-tab ${isActive ? "is-active" : ""} impl-anchor`}
                    data-impl
                    onClick={() => setActiveBrand(a.id)}
                    style={{
                      "--impl-right": "-4px",
                      "--impl-top": "0px",
                    }}
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
            onSwiper={(swiper) => (productsSwiperRef.current = swiper)} // ✅ 저장
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
                    <div
                      className={`shop-new-thumb ${p.impl ? "impl-anchor" : ""}`}
                      {...(p.impl ? { "data-impl": true } : {})}
                      style={
                        p.impl
                          ? {
                              "--impl-right": "8px",
                              "--impl-top": "8px",
                            }
                          : undefined
                      }
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => productsSwiperRef.current?.update()}
                      />

                      {/* 하트는 그대로 */}
                      <button
                        type="button"
                        className={`shop-new-wish ${wished ? "is-active" : ""}`}
                        data-impl
                        style={{
                          "--impl-right": "-4px",
                          "--impl-top": "4px",
                        }}
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

          <div
            className="shop-new-products-controls impl-anchor"
            data-impl
            style={{
              "--impl-right": "-50px",
              "--impl-top": "-3px",
            }}
          >
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
