import React from "react";
import ShopMainBanner from "../../components/shopPage/ShopMainBanner";
import ShopSectionTitle from "../../components/shopPage/ShopSectionTitle";
import ShopNewItem from "../../components/shopPage/ShopNewItem";
import ShopImportant from "../../components/shopPage/ShopImportant";
import ShopMyArtist from "../../components/shopPage/ShopMyArtist";
import ShopMoreBtn from "../../components/shopPage/ShopMoreBtn";

export default function Shop() {
  return (
    <div className="shop">
      <ShopMainBanner />
      <ShopSectionTitle
        title="New Item"
        showMore={true}
        useNicknameTitle={false}
        onMoreClick={() => console.log("/newitem")}
      />
      <ShopNewItem />
      <ShopMoreBtn title="품절 상품 재입고 30% OFF" variant="primary" />
      <ShopImportant />
      <ShopSectionTitle
        title="아티스트"
        showMore={true}
        onMoreClick={() => console.log("/recommend")}
      />
      <ShopMyArtist />
    </div>
  );
}
