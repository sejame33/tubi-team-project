import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DmHeader from "./DmHeader";
import DmItem from "./DmItem";
import "./Dm.css";
import MyArtist from "../../components/homecomp/MyArtist";
import DmSlideBanner from "./DmSlideBanner";

function DmSection({ items, onClickItem }) {
  const swiperBanners = [
    {
      variant: "logo",
      background: "/img/dm-slide-banner-1.svg",
      title: {
        top: "지금 구독하면 혜택이 팡팡!",
        bottom: "아티스트 첫 구독 대상 할인 적용",
      },
    },
    {
      variant: "logo",
      background: "/img/dm-slide-banner-2.svg",
      title: {
        top: "새로운 아티스트 등록",
        bottom: "이제 더 다양한 아티스트를 만나보세요",
      },
    },
    {
      variant: "logo",
      background: "/img/dm-slide-banner-3.svg",
      title: {
        top: "월 5,000원 구독으로",
        bottom: "좋아하는 아티스트와 대화해보세요!",
      },
    },
  ];

  const fractionRefs = useRef([]);

  const bindFractionEl = (swiper) => {
    const active = swiper.realIndex;
    const el = fractionRefs.current[active];
    if (!el) return;

    swiper.pagination.el = el;
  };

  return (
    <section className="dm-section">
      <MyArtist />

      <div className="dm-slide-banner-wrap">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={12}
          grabCursor
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            type: "fraction",
            renderFraction: (currentClass, totalClass) =>
              `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`,
          }}
          onSwiper={bindFractionEl}
          onSlideChange={bindFractionEl}
        >
          {swiperBanners.map((banner, index) => (
            <SwiperSlide key={index} className="shop-slide-banner-slide">
              <DmSlideBanner {...banner}>
                <div
                  className="shop-slide-banner-fraction swiper-pagination-fraction"
                  ref={(el) => (fractionRefs.current[index] = el)}
                />
              </DmSlideBanner>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
