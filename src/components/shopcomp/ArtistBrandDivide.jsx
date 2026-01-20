import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import useWishlist from "../../hooks/useWishlist";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ArtistBrandDivide.css";

const MAIN_TABS = ["ALBUM", "TICKET", "KIT", "DIGITAL"];
const SUB_TABS = ["NOVA Only", "All", "New", "Best", "Limited"];

const products = [
  {
    id: 601,
    title: "플레이브 홈 스위트 홈 시즌 그리팅 2025",
    price: "₩41,000원",
    img: "/img/shop-brand-plave-1.svg",
    badge2: "특전제공",
    // category: "ALBUM",
  },
  {
    id: 602,
    title: "플레이브 공식 응원봉 백 블랙",
    price: "₩36,000원",
    img: "/img/shop-brand-plave-2.svg",
    badge4: "콜라보",
    badge3: "멤버쉽",
    // category: "TICKET",
  },
  {
    id: 603,
    title: "플레이브 시즌 그리팅 2026",
    price: "₩58,000원",
    img: "/img/shop-brand-plave-3.svg",
    badge1: "콜라보",
    badge2: "특전제공",
    // category: "KIT",
  },
  {
    id: 604,
    title: "2026 TOUR ENCORE PHOTOCARD PACK_DASH",
    price: "₩26,000원",
    img: "/img/shop-brand-plave-4.svg",
    // category: "DIGITAL",
  },
  {
    id: 605,
    title: "MMMM PLUSH ACCESSORY",
    price: "₩18,000원",
    img: "/img/shop-brand-plave-5.svg",
    badge4: "콜라보",
    // category: "ALBUM",
  },
];

export default function ArtistBrandDivide() {
  const navigate = useNavigate();
  const { isWished, toggleWish } = useWishlist();

  const [mainTab, setMainTab] = useState("ALBUM");
  const [subTab, setSubTab] = useState("All");
  const [excludeSoldOut, setExcludeSoldOut] = useState(false);

  // ✅ (선택) 탭별 상품 필터링을 나중에 쓰고 싶으면 category 추가 후 아래 주석 해제
  const filteredProducts = useMemo(() => {
    let list = products;

    // 예: category가 붙었을 때만 적용
    // list = list.filter((p) => p.category === mainTab);

    // 품절 제외 로직은 실제 품절 데이터가 있어야 적용 가능
    // if (excludeSoldOut) list = list.filter((p) => !p.soldOut);

    // subTab도 실제 데이터/정렬 규칙에 맞춰 적용
    return list;
  }, [mainTab, subTab, excludeSoldOut]);

  return (
    <section className="artistbranddivide">
      {/* ✅ 탭 2줄 */}
      <div className="artistbranddivide-tabs">
        <div
          className="artistbranddivide-tabs-main"
          role="tablist"
          aria-label="카테고리"
        >
          {MAIN_TABS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={mainTab === t}
              className={`artistbranddivide-tab ${mainTab === t ? "is-active" : ""}`}
              onClick={() => setMainTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="artistbranddivide-tabs-sub" aria-label="필터">
          {SUB_TABS.map((t) => {
            const isNova = t === "NOVA Only";

            return (
              <button
                key={t}
                type="button"
                className={`artistbranddivide-chip ${isNova ? "is-nova" : ""} ${
                  subTab === t ? "is-active" : ""
                }`}
                onClick={() => setSubTab(t)}
              >
                <span className="artistbranddivide-chip-text">{t}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ✅ 카드/스와이퍼 본문 */}
      <div className="artistbranddivide-body">
        <div className="artistbranddivide-sectionhead">
          <h3 className="artistbranddivide-sectiontitle">{mainTab}</h3>

          <label className="artistbranddivide-soldout">
            <input
              type="checkbox"
              checked={excludeSoldOut}
              onChange={(e) => setExcludeSoldOut(e.target.checked)}
            />
            <span>품절제외</span>
          </label>
        </div>
        <div className="artistbranddivide-box">
          {/* ✅ ALBUM 타이틀 + 품절제외 */}

          <div className="artistbranddivide-toprow">
            <button className="artistbranddivide-link" type="button">
              <span className="artistbranddivide-gray">상품</span> {"235"}개
              <span aria-hidden="true">
                <img src="/img/brand-more-arrow.svg" alt="" />
              </span>
            </button>

            <button className="artistbranddivide-sort" type="button">
              인기순
              <span aria-hidden="true">
                <img src="/img/brand-popular-arrow.svg" alt="" />
              </span>
            </button>
          </div>

          <div className="artistbranddivide-products">
            <Swiper
              className="artistbranddivide-products-swiper"
              modules={[Scrollbar, Pagination]}
              slidesPerView="auto"
              spaceBetween={16}
              grabCursor
              scrollbar={{
                draggable: true,
                el: ".artistbranddivide-products-scrollbar",
                hide: false,
              }}
              pagination={{
                type: "fraction",
                el: ".artistbranddivide-products-pagination",
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
                  <SwiperSlide
                    key={p.id}
                    className="artistbranddivide-product-slide"
                  >
                    <article className="artistbranddivide-card">
                      <div className="artistbranddivide-thumb">
                        <img src={p.img} alt={p.title} />

                        <button
                          type="button"
                          className={`artistbranddivide-wish ${wished ? "is-active" : ""}`}
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

                      <p className="artistbranddivide-title">{p.title}</p>
                      <p className="artistbranddivide-price">{p.price}</p>

                      <div className="artistbranddivide-badges">
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

            <div className="artistbranddivide-products-controls">
              <div className="artistbranddivide-products-row">
                <div className="artistbranddivide-products-scrollbar swiper-scrollbar" />
                <div className="artistbranddivide-products-pagination swiper-pagination" />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="artistbranddivide-direct-btn"
            onClick={() => navigate("/home/shop/brand")}
          >
            <div className="artistbranddivide-direct-box">더보기</div>
          </button>
        </div>
      </div>
    </section>
  );
}
