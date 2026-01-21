import React, { useMemo, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import useWishlist from "../../hooks/useWishlist";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ArtistBrandDivide.css";

const MAIN_TABS = ["ALBUM", "TICKET", "KIT", "FASHION"];
const SUB_TABS = ["NOVA Only", "All", "New", "Best", "Limited"];

const products = [
  // ===== ALBUM =====
  {
    id: 601,
    title: "플레이브 홈 스위트 홈 시즌 그리팅 2025",
    price: "₩41,000원",
    img: "/img/shop-brand-plave-1.svg",
    badge2: "특전제공",
    category: "ALBUM",
    novaOnly: true,
    tag: "New",
  },
  {
    id: 605,
    title: "MMMM PLUSH ACCESSORY",
    price: "₩18,000원",
    img: "/img/shop-brand-plave-5.svg",
    badge4: "콜라보",
    category: "ALBUM",
    novaOnly: false,
    tag: "Best",
  },
  {
    id: 606,
    title: "PLAVE 2nd Mini Album (Limited)",
    price: "₩29,000원",
    img: "/img/shop-brand-plave-6.svg",
    badge1: "한정",
    category: "ALBUM",
    novaOnly: false,
    tag: "Limited",
  },
  {
    id: 607,
    title: "PLAVE 포토북 세트(NOVA only)",
    price: "₩35,000원",
    img: "/img/shop-brand-plave-7.svg",
    badge2: "특전제공",
    category: "ALBUM",
    novaOnly: true,
    tag: "Best",
  },

  // ===== TICKET =====
  {
    id: 602,
    title: "플레이브 1st CONCERT 스탠딩 티켓",
    price: "₩86,000원",
    img: "/img/shop-brand-plave-2.svg",
    badge4: "콜라보",
    badge3: "멤버쉽",
    category: "TICKET",
    novaOnly: false,
    tag: "Best",
  },
  {
    id: 608,
    title: "팬미팅 선예매 티켓(NOVA Only)",
    price: "₩99,000원",
    img: "/img/shop-brand-plave-8.svg",
    badge3: "멤버쉽",
    category: "TICKET",
    novaOnly: true,
    tag: "New",
  },
  {
    id: 609,
    title: "콘서트 VIP 패키지 (Limited)",
    price: "₩189,000원",
    img: "/img/shop-brand-plave-9.svg",
    badge1: "한정",
    category: "TICKET",
    novaOnly: false,
    tag: "Limited",
  },
  {
    id: 610,
    title: "투어 스탠딩 티켓",
    price: "₩129,000원",
    img: "/img/shop-brand-plave-10.svg",
    category: "TICKET",
    novaOnly: false,
    tag: "Best",
  },

  // ===== KIT =====
  {
    id: 603,
    title: "플레이브 시즌 그리팅 2026",
    price: "₩58,000원",
    img: "/img/shop-brand-plave-3.svg",
    badge1: "콜라보",
    badge2: "특전제공",
    category: "KIT",
    novaOnly: false,
    tag: "New",
  },
  {
    id: 611,
    title: "팬키트 (NOVA Only)",
    price: "₩49,000원",
    img: "/img/shop-brand-plave-11.svg",
    badge3: "멤버쉽",
    category: "KIT",
    novaOnly: true,
    tag: "Best",
  },
  {
    id: 612,
    title: "한정 팬키트 (Limited)",
    price: "₩79,000원",
    img: "/img/shop-brand-plave-12.svg",
    badge1: "한정",
    category: "KIT",
    novaOnly: false,
    tag: "Limited",
  },
  {
    id: 613,
    title: "응원봉 커스텀 키트",
    price: "₩22,000원",
    img: "/img/shop-brand-plave-4.svg",
    category: "KIT",
    novaOnly: false,
    tag: "Best",
  },

  // ===== FASHION =====
  {
    id: 604,
    title: "플레이브 공식 응원봉 백 블랙",
    price: "₩26,000원",
    img: "/img/shop-brand-plave-13.svg",
    badge1: "한정",
    category: "FASHION",
    novaOnly: false,
    tag: "New",
  },
  {
    id: 614,
    title: "플레이브 공식 후드 그레이(NOVA Only)",
    price: "₩39,900원",
    img: "/img/shop-brand-plave-14.svg",
    category: "FASHION",
    badge3: "멤버쉽",
    badge2: "특전제공",
    novaOnly: true,
    tag: "Best",
  },
  {
    id: 615,
    title: "플레이브 공식 후드 블랙 (Limited)",
    price: "₩39,900원",
    img: "/img/shop-brand-plave-15.svg",
    category: "FASHION",
    badge4: "콜라보",
    novaOnly: true,
    tag: "Limited",
  },
  {
    id: 616,
    title: "플레이브 공식 캡 모자",
    price: "₩25,000원",
    img: "/img/shop-brand-plave-16.svg",
    category: "FASHION",
    novaOnly: false,
    tag: "Best",
  },
];

export default function ArtistBrandDivide() {
  const navigate = useNavigate();
  const { isWished, toggleWish } = useWishlist();

  const [mainTab, setMainTab] = useState("ALBUM");
  const [subTab, setSubTab] = useState("All");
  const [excludeSoldOut, setExcludeSoldOut] = useState(false);

  // ✅ Swiper 인스턴스 저장
  const swiperRef = useRef(null);

  // ✅ 탭(main/sub) 바뀔 때마다 스와이퍼 위치 리셋
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // 맨 앞으로
    swiper.slideTo(0, 0);

    // 드래그 스크롤바 위치도 초기화(옵션)
    if (swiper.scrollbar && swiper.scrollbar.el) {
      swiper.scrollbar.el.scrollLeft = 0;
    }
  }, [mainTab, subTab]);

  const applySubTabFilter = (list) => {
    if (subTab === "All") return list;

    if (subTab === "NOVA Only") {
      return list.filter((p) => p.novaOnly);
    }

    return list.filter((p) => p.tag === subTab);
  };

  const filteredProducts = useMemo(() => {
    let list = products;

    // 1) 메인 탭 필터
    list = list.filter((p) => p.category === mainTab);

    // 2) 품절 제외
    if (excludeSoldOut) list = list.filter((p) => !p.soldOut);

    // 3) 서브 탭 필터
    list = applySubTabFilter(list);

    // 4) 각 탭에서 4개만
    return list.slice(0, 4);
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
              className={`artistbranddivide-tab impl-anchor ${
                mainTab === t ? "is-active" : ""
              }`}
              data-impl-alt
              style={{
                "--impl-alt-top": "7px",
                "--impl-alt-right": "-8px",
              }}
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
                className={`artistbranddivide-chip impl-anchor ${
                  isNova ? "is-nova" : ""
                } ${subTab === t ? "is-active" : ""}`}
                onClick={() => setSubTab(t)}
                data-impl-alt
                style={{
                  "--impl-alt-top": "0px",
                  "--impl-alt-right": "-6px",
                }}
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

          <label
            className="artistbranddivide-soldout impl-anchor"
            data-impl
            style={{
              "--impl-right": "-8px",
              "--impl-top": "-2px",
            }}
          >
            <input
              type="checkbox"
              checked={excludeSoldOut}
              onChange={(e) => setExcludeSoldOut(e.target.checked)}
            />
            <span>품절제외</span>
          </label>
        </div>

        <div className="artistbranddivide-box">
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
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
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
                    <article
                      className="artistbranddivide-card"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter")
                          navigate(`/home/shop/product/${p.id}`);
                      }}
                    >
                      <div className="artistbranddivide-thumb">
                        <img src={p.img} alt={p.title} />

                        <button
                          type="button"
                          className={`artistbranddivide-wish ${
                            wished ? "is-active" : ""
                          } impl-anchor`}
                          data-impl-alt
                          style={{
                            "--impl-alt-top": "4px",
                            "--impl-alt-right": "-2px",
                          }}
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

            <div
              className="artistbranddivide-products-controls impl-anchor"
              data-impl
              style={{
                "--impl-right": "-50px",
                "--impl-top": "-3px",
              }}
            >
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
