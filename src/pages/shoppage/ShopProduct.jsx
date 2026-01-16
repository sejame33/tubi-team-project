import React, { useState } from "react";
import ShopProductBanner from "../../components/shopcomp/ShopProductBanner";
import ShopTag from "../../components/shopcomp/ShopTag";
import ShopProductItem from "../../components/shopcomp/ShopProductItem";
import ShopProductSmallBanner from "../../components/shopcomp/ShopProductSmallBanner";
import ShopBrandLink from "../../components/shopcomp/ShopBrandLink";
import ShopMiku from "../../components/shopcomp/ShopMiku";

export default function ShopProduct() {
  const [liked, setLiked] = useState(true);

  return (
    <div className="shop-product">
      <ShopProductBanner />
      <ShopTag />
      <ShopProductItem />
      <ShopProductSmallBanner />
      <ShopBrandLink />
      <ShopMiku />
    </div>
  );
}
