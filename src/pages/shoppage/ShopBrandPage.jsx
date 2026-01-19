import React from "react";
import { useNavigate } from "react-router-dom";
import ArtistBrandNotice from "../../components/shopcomp/ArtistBrandNotice";
import ArtistBrandMainBanner from "../../components/shopcomp/ArtistBrandMainBanner";

export default function ShopBrandPage() {
  const navigate = useNavigate();

  return (
    <section className="artist-brand">
      <ArtistBrandNotice />
      <ArtistBrandMainBanner />
    </section>
  );
}
