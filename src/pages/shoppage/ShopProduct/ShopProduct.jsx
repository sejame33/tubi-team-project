import React, { useState } from "react";
import ShopProductBanner from "./sections/ShopProductBanner";
import ShopTag from "./sections/ShopTag";
import ShopProductItem from "./sections/ShopProductItem";
import ShopProductSmallBanner from "../../../components/shopcomp/ShopProductSmallBanner";
import ShopBrandLink from "./sections/ShopBrandLink";
import ShopMiku from "./sections/ShopMiku";
import EndPost from "../../../components/common/EndPost";

export default function ShopProduct() {

  return (
    <div className="shop-product">
      <ShopProductBanner />
      <ShopTag />
      <ShopProductItem />
      <ShopProductSmallBanner
        title="하츠네 미쿠 에디션 출시"
        subtitle={{ type: "image", value: "/img/shopbanner-logo.svg" }}
        background= "linear-gradient(90deg, #3b82f6 0%, #22d3ee 50%, #2dd4bf 100%)"
        productImage="/img/shopbanner-img.svg"
      />
      <ShopBrandLink />
      <ShopMiku />
      <EndPost />
    </div>
  );
}
