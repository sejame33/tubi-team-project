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
    <section className="shopbrand b">
      {/* 1) 배경(그라디언트+블러)은 여기서만 잘라냄 */}
      <div className="shopbrand-hero" aria-hidden="true" />

      {/* 2) 배경 위에 올라갈 헤더(텍스트/이미지) */}
      <div className="shopbrand-header">
        <div className="shopbrand-header-left">
          <p className="shopbrand-header-sub">3Y CORPORATION</p>
          <h2 className="shopbrand-header-title">HEVI</h2>
        </div>

        {/* 라인아트/캐릭터 이미지 등 */}
        <img
          className="shopbrand-header-art"
          src="/img/shop-brand-hevi-logo.png"
          alt=""
        />
      </div>

      {/* 3) 카드/스와이퍼 본문 (위로 살짝 겹쳐지게 CSS에서 margin-top: -값) */}
      <div className="shopbrand-body">
        <div className="shopbrand-box">
          <div className="shopbrand-toprow">
            <button className="shopbrand-link" type="button">
              <span className="shopbrand-gray">상품</span> {"105"}개
              <span aria-hidden="true">
                <img src="/img/brand-more-arrow.svg" alt="" />
              </span>
            </button>

            <button className="shopbrand-sort" type="button">
              인기순
              <span aria-hidden="true">
                <img src="/img/brand-popular-arrow.svg" alt="" />
              </span>
            </button>
          </div>

          <div className="shopbrand-products">
            <Swiper
              className="shopbrand-products-swiper"
              modules={[Scrollbar, Pagination]}
              slidesPerView="auto"
              spaceBetween={18}
              grabCursor
              scrollbar={{
                draggable: true,
                el: ".shopbrand-products-scrollbar",
                hide: false,
              }}
              pagination={{
                type: "fraction",
                el: ".shopbrand-products-pagination",
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
                  <SwiperSlide key={p.id} className="shopbrand-product-slide">
                    <article className="shopbrand-card">
                      <div className="shopbrand-thumb">
                        <img src={p.img} alt={p.title} />

                        <button
                          type="button"
                          className={`shopbrand-wish ${
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

                      <p className="shopbrand-title">{p.title}</p>
                      <p className="shopbrand-price">{p.price}</p>

                      <div className="shopbrand-badges">
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

            <div className="shopbrand-products-controls">
              <div className="shopbrand-products-row">
                <div className="shopbrand-products-scrollbar swiper-scrollbar" />
                <div className="shopbrand-products-pagination swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="brand-direct-btn">
          <div className="direct-box">
            <h2 className="direct-left">PLAVE 브랜드관 입점</h2>
            <span className="direct-right">
              바로가기 <img src="/img/more-arrow-white-5x10.svg" alt="" />
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
