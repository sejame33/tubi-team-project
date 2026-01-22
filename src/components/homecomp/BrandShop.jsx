import React, { useMemo, useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

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
  // apoki
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

  // plave
  {
    id: 107,
    brand: "plave",
    type: "brand",
    titleTop: "PLAVE",
    interest: "9505+",
    img: "/img/brand-shop-plave-1.svg",
    badge1: "단독판매",
    badge3: "정규앨범",
  },
  {
    id: 108,
    brand: "plave",
    title: "PLAVE JP 1ST SINGLE(Hide and Seek) LIMITED EDITION",
    price: "₩21,400원",
    img: "/img/brand-shop-plave-2.svg",
    badge2: "특전제공",
    badge3: "정규앨범",
  },
  {
    id: 109,
    brand: "plave",
    title: "PLAVE JP 1ST SINGLE(Hide and Seek) STANDARD",
    price: "₩17,000원",
    img: "/img/brand-shop-plave-3.svg",
    badge4: "콜라보",
    badge1: "단독판매",
  },
  {
    id: 110,
    brand: "plave",
    title: "PLAVE 1st Mini Album 'Asterum : The Shape of Things to Come'",
    price: "₩17,800원",
    img: "/img/brand-shop-plave-4.svg",
    badge3: "정규앨범",
  },

  // luvdia
  {
    id: 111,
    brand: "luvdia",
    type: "brand",
    titleTop: "LUVDIA",
    interest: "2552+",
    img: "/img/brand-shop-luvdia-1.svg",
    badge1: "단독판매",
    badge3: "정규앨범",
  },
  {
    id: 112,
    brand: "luvdia",
    title: "LUVDIA Holiday season Party Main Poster",
    price: "₩23,000원",
    img: "/img/brand-shop-luvdia-2.svg",
    badge1: "단독판매",
    badge4: "콜라보",
  },
  {
    id: 113,
    brand: "luvdia",
    title: "LUVDIA Acrylic Stand",
    price: "₩17,500원",
    img: "/img/brand-shop-luvdia-3.svg",
    badge2: "특전제공",
  },
  {
    id: 114,
    brand: "luvdia",
    title: "LUVDIA Round Diatomaceous Earth Coaster",
    price: "₩15,800원",
    img: "/img/brand-shop-luvdia-4.svg",
    badge3: "정규앨범",
  },

  // hebi
  {
    id: 115,
    brand: "hebi",
    type: "brand",
    titleTop: "HEBI",
    interest: "8255+",
    img: "/img/brand-shop-hevi-1.svg",
    badge4: "콜라보",
    badge3: "정규앨범",
  },
  {
    id: 116,
    brand: "hebi",
    title: "HEBI Book Goods Album",
    price: "₩28,000원",
    img: "/img/brand-shop-hevi-2.svg",
    badge3: "정규앨범",
    badge4: "콜라보",
  },
  {
    id: 117,
    brand: "hebi",
    title: "GOOD NIGHT STICH PAJAMA SET",
    price: "₩16,500원",
    img: "/img/brand-shop-hevi-3.svg",
    badge2: "특전제공",
  },
  {
    id: 118,
    brand: "hebi",
    title: "HEBI 2nd mini-album (Random Ver.)",
    price: "₩12,800원",
    img: "/img/brand-shop-hevi-4.svg",
    badge3: "정규앨범",
  },

  // meechu
  {
    id: 119,
    brand: "meechu",
    type: "brand",
    titleTop: "MEECHU",
    interest: "8720+",
    img: "/img/brand-shop-meechu-1.svg",
    badge3: "정규앨범",
  },
  {
    id: 120,
    brand: "meechu",
    title: "MEECHU official light stick",
    price: "₩17,500원",
    img: "/img/brand-shop-meechu-2.svg",
    badge2: "특전제공",
    badge3: "정규앨범",
  },
  {
    id: 121,
    brand: "meechu",
    title: "MEECHU MD List",
    price: "₩23,000원",
    img: "/img/brand-shop-meechu-3.svg",
    badge4: "콜라보",
  },
  {
    id: 122,
    brand: "meechu",
    title: "MEECHU RIGHT SPECIAL KEYCAP SET",
    price: "₩15,800원",
    img: "/img/brand-shop-meechu-4.svg",
    badge3: "정규앨범",
  },
];

export default function BrandShop() {
  const [activeBrand, setActiveBrand] = useState("apoki");

  // ✅ 상품 swiper 인스턴스 ref (탭 바뀔 때 리셋용)
  const productsSwiperRef = useRef(null);
  const navigate = useNavigate();
  const filteredProducts = useMemo(
    () => products.filter((p) => p.brand === activeBrand),
    [activeBrand],
  );

  // ✅ 탭 변경 시 상품 스크롤(슬라이드 위치) 리셋
  useEffect(() => {
    const swiper = productsSwiperRef.current;
    if (!swiper) return;

    swiper.setProgress(0, 0);
    swiper.slideTo(0, 0);
    swiper.update();
  }, [activeBrand]);

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

        {/* 아티스트 탭 */}
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
                    className={`brandshop-tab impl-anchor ${isActive ? "is-active" : ""}`}
                    data-impl
                    onClick={() => setActiveBrand(a.id)}
                    style={{
                      "--impl-right": "-4px",
                      "--impl-top": "0px",
                    }}
                  >
                    <span className="brandshop-tab-text">{a.name}</span>
                    {a.dot && <span className="brandshop-tab-dot" />}
                  </button>
                </SwiperSlide>
              );
            })}
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
            onSwiper={(swiper) => (productsSwiperRef.current = swiper)} // ✅ 저장
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
              0: { spaceBetween: 12 },
              768: { spaceBetween: 16 },
              1024: { spaceBetween: 18 },
            }}
          >
            {filteredProducts.map((p) => {
              if (p.type === "brand") {
                return (
                  <SwiperSlide key={p.id} className="brandshop-product-slide">
                    <article
                      className="brandshop-card brand-card"
                      onClick={() => navigate("/home/shop/brand")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          navigate("/home/shop/brand");
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
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
                  <article
                    className="brandshop-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate("/home/shop/ShopProduct")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        navigate("/home/shop/ShopProduct");
                      }
                    }}
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
              );
            })}
          </Swiper>

          {/* 컨트롤 */}
          <div
            className="brandshop-products-controls impl-anchor"
            data-impl
            style={{
              "--impl-right": "-50px",
              "--impl-top": "-3px",
            }}
          >
            <div className="brandshop-products-row">
              <div className="brandshop-products-scrollbar swiper-scrollbar" />
              <div className="brandshop-products-pagination swiper-pagination" />
            </div>
          </div>
        </div>
      </div>

      <button
        className="brandshop-more impl-anchor"
        type="button"
        onClick={() => navigate("/home/shop")}
        data-impl
        style={{
          "--impl-right": "164px",
          "--impl-top": "16px",
        }}
      >
        더보기
      </button>
    </section>
  );
}
