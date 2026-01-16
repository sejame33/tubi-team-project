import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    title: "1st Album: Earth, Space, Time",
    price: "₩23,000원",
    img: "/img/shop-new-product-4.svg",
    badge3: "정규앨범",
  },
  {
    id: 106,
    brand: "ALL",
    title: "[LUCKY DRAW] APOKI",
    price: "₩52,000원",
    img: "/img/shop-new-product-5.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
];

export default function ShopNewItem() {
  const [activeBrand, setActiveBrand] = useState("ALL");
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    if (activeBrand === "ALL") return products;
    return products.filter((p) => p.brand === activeBrand);
  }, [activeBrand]);

  // ✅ id 102만 ShopProduct로 이동
  const handleProductClick = (id) => {
    if (id === 102) {
      navigate("/home/shop/ShopProduct");
    }
  };

  return (
    <section className="brandshop">
      <div className="brandshop-box">
        <div className="brandshop-toprow">
          <button className="brandshop-link" type="button">
            <span className="brand-gray">상품</span> {filteredProducts.length}개
            <span aria-hidden="true">
              <img src="/img/brand-more-arrow.svg" alt="" />
            </span>
          </button>

          <button className="brandshop-sort" type="button">
            인기순
            <span aria-hidden="true">
              <img src="/img/brand-popular-arrow.svg" alt="" />
            </span>
          </button>
        </div>

        {/* 탭 */}
        <div className="brandshop-tabs">
          <Swiper
            modules={[FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={8}
            className="brandshop-tabs-swiper"
          >
            {artistTabs.map((tab) => (
              <SwiperSlide key={tab.id} className="brandshop-tab-slide">
                <button
                  type="button"
                  className={`brandshop-tab ${
                    activeBrand === tab.id ? "is-active" : ""
                  }`}
                  onClick={() => setActiveBrand(tab.id)}
                >
                  <span className="brandshop-tab-text">{tab.name}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 상품 리스트 */}
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
            }}
            pagination={{
              type: "fraction",
              el: ".brandshop-products-pagination",
            }}
          >
            {filteredProducts.map((p) => (
              <SwiperSlide key={p.id} className="brandshop-product-slide">
                <article
                  className="brandshop-card"
                  onClick={() => handleProductClick(p.id)}
                  style={{ cursor: "pointer" }}
                >
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
            ))}
          </Swiper>

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
