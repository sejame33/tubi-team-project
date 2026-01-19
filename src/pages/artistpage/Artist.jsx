import React from "react";
import "./Artist.css";
import ArtistBanner from "./sections/ArtistBanner";
import ShopImportant from "../../components/shopcomp/ShopImportant";
import SectionTitle from "../../components/homecomp/SectionTitle";

const Artist = () => {
  return (
    <>
      <ArtistBanner />
      <ShopImportant />
      <SectionTitle title="About US" showMore={true} useNicknameTitle={false} />
    </>
  );
};

export default Artist;
