import React from "react";
import "./ShopTag.css";
import ShopTagList from "../../../../components/shopcomp/ShopTagList";

const ShopTag = () => {
  return (
    <>
      <section className="shop-tag-section">
        <div className="sectionTit">이 상품의 연관태그</div>
        <ShopTagList
          tags={[
            "#하츠네 미쿠",
            "#아크릴 스탠드",
            "#스파오",
            "#콜라보",
            "#단독판매",
            "#PRINT",
          ]}
        />
      </section>
    </>
  );
};

export default ShopTag;
