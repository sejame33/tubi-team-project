import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import useWishlist from "../../hooks/useWishlist";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ShopBrand2.css";

const products = [
  {
    id: 601,
    title: "Hebi : 아크릴 눈 키링",
    price: "₩13,000원",
    img: "/img/shop-brand-hevi-1.svg",
    badge4: "콜라보",
  },
  {
    id: 602,
    title: "Hebi : The Moonlight Memory 엽서set",
    price: "₩25,000원",
    img: "/img/shop-brand-hevi-2.svg",
    badge2: "특전제공",
  },
  {
    id: 603,
    title: "Memory 녹음실 디오라마",
    price: "₩58,000원",
    img: "/img/shop-brand-hevi-3.svg",
  },
  {
    id: 604,
    title: "The Moonlight Memory 머그컵",
    price: "₩26,000원",
    img: "/img/shop-brand-hevi-4.svg",
  },
];

export default function ShopBrand2() {
  const { isWished, toggleWish } = useWishlist();

  return (
    <section className="shopbrand2 b">
      <div className="shopbrand2-hero" aria-hidden="true" />

      <div className="shopbrand2-header">
        <div className="shopbrand2-header-left">
          <p className="shopbrand2-header-sub">3Y CORPORATION</p>
          <h2 className="shopbrand2-header-title">HEVI</h2>
        </div>

        <img
          className="shopbrand2-header-art"
          src="/img/shop-brand-hevi-logo.png"
          alt=""
        />
      </div>

      <div className="shopbrand2-body">
        <div className="shopbrand2-box">
          <div className="shopbrand2-toprow">
            <button className="shopbrand2-link" type="button">
              <span className="shopbrand2-gray">상품</span> {"105"}개
              <span aria-hidden="true">
                <img src="/img/brand-more-arrow.svg" alt="" />
              </span>
            </button>

            <button className="shopbrand2-sort" type="button">
              인기순
              <span aria-hidden="true">
                <img src="/img/brand-popular-arrow.svg" alt="" />
              </span>
            </button>
          </div>

          <div className="shopbrand2-products">
            <Swiper
              className="shopbrand2-products-swiper"
              modules={[Scrollbar, Pagination]}
              slidesPerView="auto"
              spaceBetween={18}
              grabCursor
              scrollbar={{
                draggable: true,
                el: ".shopbrand2-products-scrollbar",
                hide: false,
              }}
              pagination={{
                type: "fraction",
                el: ".shopbrand2-products-pagination",
              }}
              breakpoints={{
                0: { spaceBetween: 12 },
                768: { spaceBetween: 16 },
                1024: { spaceBetween: 18 },
              }}
            >
              {products.map((p) => {
                const wished = isWished(p.id);

                return (
                  <SwiperSlide key={p.id} className="shopbrand2-product-slide">
                    <article className="shopbrand2-card">
                      <div className="shopbrand2-thumb">
                        <img src={p.img} alt={p.title} />

                        <button
                          type="button"
                          className={`shopbrand2-wish ${
                            wished ? "is-active" : ""
                          }`}
                          aria-pressed={wished}
                          aria-label={
                            wished ? "관심상품 해제" : "관심상품 추가"
                          }
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

                      <p className="shopbrand2-title">{p.title}</p>
                      <p className="shopbrand2-price">{p.price}</p>

                      <div className="shopbrand2-badges">
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

            {/* ✅ shopbrand2 컨트롤 DOM 추가 */}
            <div className="shopbrand2-products-controls">
              <div className="shopbrand2-products-row">
                <div className="shopbrand2-products-scrollbar swiper-scrollbar" />
                <div className="shopbrand2-products-pagination swiper-pagination" />
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="brand-direct-btn">
          <div className="direct-box">
            <h2 className="direct-left">HEVI 브랜드관 입점</h2>
            <span className="direct-right">
              바로가기 <img src="/img/more-arrow-white-5x10.svg" alt="" />
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
