import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ShopproductList.css";

const products = [
  {
    id: 102,
    title:
      "하츠네 미쿠 보컬로이드 굿즈 moeyu 모에유 보이스 오브 스타 시리즈 아크릴 키링 키체인 랜덤 단품",
    price: "₩15,000원",
    img: "/img/shopproduct-item1.svg",
    badge1: "단독판매",
    badge2: "특전제공",
  },
  {
    id: 103,
    title: "하츠네 미쿠 x 시나모롤 공식 캔 뱃지 랜덤 단품",
    price: "₩22,000원",
    img: "/img/shopproduct-item2.svg",
    badge4: "콜라보",
    badge2: "특전제공",
  },
  {
    id: 104,
    title:
      "하츠네 미쿠 보컬로이드 굿즈 moeyu 모에유 보이스 오브 스타 시리즈 폴라로이드 카드 랜덤 단품",
    price: "₩2,000원",
    img: "/img/shopproduct-item3.svg",
  },
];

export default function ShopproductList() {
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
    <section className="shopproduct">
      <div className="shopproduct-products">
        <Swiper
          className="shopproduct-products-swiper"
          modules={[Scrollbar, Pagination]}
          slidesPerView="auto"
          spaceBetween={18}
          grabCursor
          scrollbar={{
            draggable: true,
            el: ".shopproduct-products-scrollbar",
          }}
          pagination={{
            type: "fraction",
            el: ".shopproduct-products-pagination",
          }}
        >
          {filteredProducts.map((p) => (
            <SwiperSlide key={p.id} className="shopproduct-product-slide">
              <article
                className="shopproduct-card"
                onClick={() => handleProductClick(p.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="shopproduct-thumb">
                  <img src={p.img} alt={p.title} />
                </div>

                <p className="shopproduct-title2">{p.title}</p>
                <p className="shopproduct-price2">{p.price}</p>

                <div className="shopproduct-badges">
                  {p.badge1 && <span className="badge">{p.badge1}</span>}
                  {p.badge2 && (
                    <span className="badge is-blue">{p.badge2}</span>
                  )}
                  {p.badge3 && (
                    <span className="badge is-gray">{p.badge3}</span>
                  )}
                  {p.badge4 && <span className="badge is-red">{p.badge4}</span>}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
