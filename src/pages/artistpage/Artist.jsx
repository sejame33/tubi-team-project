import React from "react";
import "./Artist.css";
import ArtistBanner from "./sections/ArtistBanner";
import ShopImportant from "../../components/shopcomp/ShopImportant";
import SectionTitle from "../../components/homecomp/SectionTitle";
import AboutUs from "./sections/AboutUs";
import ArtistLive from "./sections/ArtistLive";

const Artist = () => {
  return (
    <>
      <ArtistBanner />
      <ShopImportant />
      <SectionTitle title="About US" showMore={true} useNicknameTitle={false} />
      <AboutUs />
      <SectionTitle
        title="From StelLive"
        useNicknameTitle={false}
        moreElement={
          <img
            src="/img/reset.svg"
            alt="refresh"
            style={{ width: "24px", height: "24px" }}
          />
        }
        onMoreClick={() => console.log("새로고침 클릭!")}
      />
      <ArtistLive />
      <SectionTitle
        title="To. StelLive"
        useNicknameTitle={false}
        moreElement={
          <img
            src="/img/reset.svg"
            alt="refresh"
            style={{ width: "24px", height: "24px" }}
          />
        }
        onMoreClick={() => console.log("새로고침 클릭!")}
      />
    </>
  );
};

export default Artist;
