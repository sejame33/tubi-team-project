import React from "react";
import { useNavigate } from "react-router-dom";
import ArtistBrandNotice from "../../components/shopcomp/ArtistBrandNotice";
import ArtistBrandMainBanner from "../../components/shopcomp/ArtistBrandMainBanner";
import ArtistBrandDivide from "../../components/shopcomp/ArtistBrandDivide";
import ShopSectionTitle from "../../components/shopcomp/ShopSectionTitle";
import ShopMoreBtn from "../../components/shopcomp/ShopMoreBtn";
import ArtistBrandProduct from "../../components/shopcomp/ArtistBrandProduct";
import ArtistBrandCollabor from "../../components/shopcomp/ArtistBrandCollabor";
import EndPost from "../../components/common/EndPost";

export default function ShopBrandPage() {
  const navigate = useNavigate();

  return (
    <section className="artist-brand">
      <ArtistBrandNotice />
      <ArtistBrandMainBanner />
      <ArtistBrandDivide />
      <ShopMoreBtn
        title="품절 상품 재입고 30% OFF"
        variant="dark"
        icon="/img/shop-more-btn-coupon.svg"
      />
      <ArtistBrandProduct />
      <ArtistBrandCollabor />
      <EndPost />
    </section>
  );
}
