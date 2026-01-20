import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./ShopproductList.css";

export default function ShopproductList({
  items = [],

  onProductClick,

  activeBrand: controlledBrand,
  onBrandChange,

  enableBrandFilter = false,
}) {
  const [internalBrand, setInternalBrand] = useState("ALL");

  const activeBrand = controlledBrand ?? internalBrand;

  const filteredProducts = useMemo(() => {
    if (!enableBrandFilter) return items;
    if (activeBrand === "ALL") return items;
    return items.filter((p) => p.brand === activeBrand);
  }, [items, activeBrand, enableBrandFilter]);

  const handleBrand = (next) => {
    if (onBrandChange) onBrandChange(next);
    else setInternalBrand(next);
  };

  const handleProductClick = (id, product) => {
    onProductClick?.(id, product);
  };

  return (
    <section className="shopproduct">
      <div className="shopproduct-products">
        <Swiper
          className="shopproduct-products-swiper"
          modules={[Scrollbar, Pagination, FreeMode]}
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
          freeMode
        >
          {filteredProducts.map((p) => (
            <SwiperSlide key={p.id} className="shopproduct-product-slide">
              <article
                className="shopproduct-card"
                onClick={() => handleProductClick(p.id, p)}
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
