import "./Artist.css";
import ArtistBanner from "./sections/ArtistBanner";
import ShopImportant from "../../components/shopcomp/ShopImportant";
import SectionTitle from "../../components/homecomp/SectionTitle";
import AboutUs from "./sections/AboutUs";
import ArtistLive from "./sections/ArtistLive";
import ShopProductSmallBanner from "../../components/shopcomp/ShopProductSmallBanner";
import Goods from "./sections/Goods";
import EndPost from "../../components/common/EndPost";
import Comment from "./sections/Comment";
import From from "./sections/From";

const Artist = () => {
  return (
    <>
      <ArtistBanner />
      <ShopImportant />
      <AboutUs />
      <From />
      <ArtistLive />
      <div className="dm-banner">
        <ShopProductSmallBanner
          title="지금 바로 가기 >"
          subtitle={{ type: "text", value: "NOVA DM" }}
          background="linear-gradient(90deg, #695EFF 0%, #575DC8 100%)"
          productImage="/img/dmbanner.svg"
        />
      </div>
      <Comment />
      <Goods />
      <EndPost />
    </>
  );
};

export default Artist;
