import React from "react";
import ShopMainBanner from "../../components/shopcomp/ShopMainBanner";
import ShopSectionTitle from "../../components/shopcomp/ShopSectionTitle";
import ShopNewItem from "../../components/shopcomp/ShopNewItem";
import ShopImportant from "../../components/shopcomp/ShopImportant";
import ShopMyArtist from "../../components/shopcomp/ShopMyArtist";
import ShopMoreBtn from "../../components/shopcomp/ShopMoreBtn";
import ShopBrand from "../../components/shopcomp/ShopBrand";
import ShopBrand2 from "../../components/shopcomp/ShopBrand2";

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
      <ShopBrand />
      <ShopBrand2 />
      <ShopSectionTitle
        title="오늘 단 하루만"
        showMore={false}
        useNicknameTitle={false}
        onMoreClick={() => console.log("/newitem")}
      />
    </div>
  );
}
