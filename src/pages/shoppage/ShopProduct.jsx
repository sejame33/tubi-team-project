import React, { useState } from "react";
import ShopProductBanner from "../../components/shopcomp/ShopProductBanner";
import ShopTag from "../../components/shopcomp/ShopTag";
import ShopProductItem from "../../components/shopcomp/ShopProductItem";
import ShopProductSmallBanner from "../../components/shopcomp/ShopProductSmallBanner";
import ShopBrand from "../../components/shopcomp/ShopBrand";
import ShopMiku from "../../components/shopcomp/ShopMiku";

export default function ShopProduct() {
  const [liked, setLiked] = useState(true);

  return (
    <div className="shop-product">
      <ShopProductBanner />
      <ShopTag />
      <ShopProductItem />
      <ShopProductSmallBanner />
      <ShopBrand />
      <ShopMiku />
    </div>
  );
}
