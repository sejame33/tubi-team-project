import React from "react";
import "./ShopProductItem.css";
import ShopproductList from "./ShopproductList";

const ShopProductItem = () => {
  return (
    <>
      <section className="shop-item-section">
        <div className="sectionTit">하츠네 미쿠 추천 아이템</div>
        <ShopproductList />
      </section>
    </>
  );
};

export default ShopProductItem;
