import React from "react";
import useWishlist from "../../hooks/useWishlist";
import "./ArtistBrandProduct.css";

const products = [
  {
    id: 701,
    title: "2026 SEASON'S GREET ING ...",
    price: "₩45,000원",
    img: "/img/artist-brand-product-1.png",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 702,
    title: "플레이브 홈 스위트 홈 ...",
    price: "₩41,000원",
    img: "/img/artist-brand-product-2.png",
    topBadge: "HOT",
    badge4: "콜라보",
  },
  {
    id: 703,
    title: "BBUU TURN-AROUND ...",
    price: "₩25,000원",
    img: "/img/artist-brand-product-3.png",
    topBadge: "NEW",
    badge2: "특전제공",
    badge3: "멤버쉽",
  },
  {
    id: 704,
    title: "플레이브 공식 응원봉 백 ...",
    price: "₩36,000원",
    img: "/img/artist-brand-product-4.png",
    badge3: "멤버쉽",
  },
  {
    id: 705,
    title: "BBUU TURN-AROUND ...",
    price: "₩25,000원",
    img: "/img/artist-brand-product-5.png",
    badge2: "특전제공",
    badge3: "멤버쉽",
  },
  {
    id: 706,
    title: "플레이브 공식 응원봉 백 ...",
    price: "₩36,000원",
    img: "/img/artist-brand-product-6.png",
    badge3: "멤버쉽",
  },
];

function getTopBadgeClass(label) {
  if (label === "HOT") return "is-hot";
  if (label === "NEW") return "is-new";
  return "";
}

export default function ArtistBrandProduct() {
  const { isWished, toggleWish } = useWishlist();

  return (
    <section className="artistbrandproduct">
      {/* 상단 타이틀/정렬 영역 (사진 느낌) */}
      <div className="artistbrandproduct-head">
        <h3 className="artistbrandproduct-title">Product</h3>

        <div className="artistbrandproduct-actions">
          <button type="button" className="artistbrandproduct-action">
            추천순{" "}
            <img
              src="/img/artist-brand-product-down-arrow.svg"
              alt=""
              className="down-arrow"
            />
          </button>
          <button type="button" className="artistbrandproduct-action">
            필터{" "}
            <span className="filter-icon">
              <img src="/img/artist-brand-product-filter.svg" alt="" />
            </span>
          </button>
        </div>
      </div>

      {/* 2열 그리드 */}
      <div className="artistbrandproduct-grid">
        {products.map((p) => {
          const wished = isWished(p.id);

          return (
            <article
              key={p.id}
              className="artistbrandproduct-card impl-anchor"
              data-impl
              style={{
                "--impl-right": "12px",
                "--impl-top": "146px",
              }}
            >
              <div className="artistbrandproduct-thumb">
                {/* ✅ 이미지 위 뱃지 (HOT/NEW) */}
                {p.topBadge && (
                  <span
                    className={`artistbrandproduct-topbadge ${getTopBadgeClass(
                      p.topBadge,
                    )}`}
                  >
                    {p.topBadge}
                  </span>
                )}

                <img src={p.img} alt={p.title} loading="lazy" />

                {/* ✅ 하트 */}
                <button
                  type="button"
                  className={`artistbrandproduct-wish ${
                    wished ? "is-active" : ""
                  }`}
                  aria-pressed={wished}
                  aria-label={wished ? "관심상품 해제" : "관심상품 추가"}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWish(p.id);
                  }}
                >
                  <img
                    src={wished ? "/img/heart-fill.svg" : "/img/heart-line.svg"}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </div>

              <p className="artistbrandproduct-name">{p.title}</p>
              <p className="artistbrandproduct-price">{p.price}</p>

              {/* ✅ 하단 뱃지 4종 */}
              <div className="artistbrandproduct-badges">
                {p.badge1 && <span className="badge">{p.badge1}</span>}
                {p.badge2 && <span className="badge is-blue">{p.badge2}</span>}
                {p.badge3 && <span className="badge is-gray">{p.badge3}</span>}
                {p.badge4 && <span className="badge is-red">{p.badge4}</span>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
