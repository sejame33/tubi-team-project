import "./Artist.css";
import ArtistBanner from "./sections/ArtistBanner";
import ShopImportant from "../../components/shopcomp/ShopImportant";
import SectionTitle from "../../components/homecomp/SectionTitle";
import AboutUs from "./sections/AboutUs";
import ArtistLive from "./sections/ArtistLive";
import Goods from "./sections/Goods";
import EndPost from "../../components/common/EndPost";
import Comment from "./sections/Comment";
import From from "./sections/From";

const Artist = () => {
  return (
    <>
      <ArtistBanner />
      <div className="artistImportant">
        <ShopImportant />
      </div>
      <AboutUs />
      <From />
      <ArtistLive />
      <Comment />
      <Goods />
      <EndPost />
    </>
  );
};

export default Artist;
