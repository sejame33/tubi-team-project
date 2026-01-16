import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DmHeader from "./DmHeader";
import DmItem from "./DmItem";
import "./Dm.css";
import MyArtist from "../../components/homecomp/MyArtist";
import SmallBanner from "../../components/homecomp/SmallBanner";

function DmSection({ items, onClickItem }) {
  const fractionRefs = useRef([]);

  // ✅ 현재 슬라이드의 fraction el로 pagination을 연결하는 함수
  const bindFractionEl = (swiper) => {
    const active = swiper.realIndex; // loop일 때 realIndex가 안전
    const el = fractionRefs.current[active];
    if (!el) return;

    swiper.pagination.el = el;
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  };

  return (
    <section className="dm-section">
      <MyArtist />
      <div className="DmListBox">
        <DmHeader />
        <ul className="dm-list">
          {items.map((item) => (
            <DmItem
              key={item.id}
              {...item}
              onClick={() => onClickItem(item.id)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DmSection;
