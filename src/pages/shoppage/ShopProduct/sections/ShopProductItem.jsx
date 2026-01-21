import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./ShopProductItem.css";

import ShopProductList from "../../../../components/shopcomp/ShopProductList";

const ShopProductItem = () => {
  const navigate = useNavigate();

  const items = useMemo(
    () => [
      {
        id: 502,
        title:
          "하츠네 미쿠 보컬로이드 굿즈 moeyu 보이스 오브 스타 시리즈 아크릴 키링",
        price: "₩15,000원",
        img: "/img/shopproduct-item1.svg",
        badge1: "단독판매",
        badge2: "특전제공",
      },
      {
        id: 503,
        title: "하츠네 미쿠 x 시나모롤 공식 캔 뱃지 랜덤 단품",
        price: "₩22,000원",
        img: "/img/shopproduct-item2.svg",
        badge4: "콜라보",
        badge2: "특전제공",
      },
      {
        id: 504,
        title:
          "하츠네 미쿠 보컬로이드 굿즈 moeyu 보이스 오브 스타 시리즈 폴라로이드 카드",
        price: "₩2,000원",
        img: "/img/shopproduct-item3.svg",
      },
    ],
    [],
  );

  return (
    <section className="shop-item-section">
      <div className="sectionTit">하츠네 미쿠 추천 아이템</div>

      <ShopProductList
        items={items}
        onProductClick={(id) => {
          navigate(`/home/shop/ShopProduct/${id}`);
        }}
        enableBrandFilter={false}
      />
    </section>
  );
};

export default ShopProductItem;
