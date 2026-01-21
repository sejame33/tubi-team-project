import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";

import "./ShopImportant.css";

const badgeTypes = {
  ALL: { label: "ALL", type: "all" },
  PLAVE: { label: "PLAVE", type: "plave" },
  HEBI: { label: "HEBI", type: "hebi" },
  IRISE: { label: "IRISE", type: "irise" },
};

const notices = [
  {
    id: 1,
    badge: "ALL",
    bgType: "all",
    title: "Nova X Kakao pay 3/5/7만원 결제시\n추가 적립 프로모션",
    date: "2026.01.07",
    to: "/home/shop/notice/1",
  },
  {
    id: 2,
    badge: "PLAVE",
    bgType: "plave",
    title:
      "플레이브 데뷔 2주년 기념 한정 굿즈 예약\n판매 사전예약! 선착순 (200명) 특전 제공",
    date: "2026.01.07",
    to: "/home/shop/notice/1",
  },
  {
    id: 3,
    badge: "HEBI",
    bgType: "hebi",
    title: "Hebi 싱글 앨범 '늘 (EVER)' 구매자 이벤트 당첨자 발표!",
    date: "2026.01.07",
    to: "/home/shop/notice/1",
  },
  {
    id: 4,
    badge: "IRISE",
    bgType: "irise",
    title: "IRISE 싱글 '날개 (WINGS)' 발매 기념\n스페셜 이벤트 참여 안내",
    date: "2026.01.07",
    to: "/home/shop/notice/1",
  },
];

export default function ShopImportant({ onScheduleClick }) {
  const navigate = useNavigate();

  return (
    <section className="shop-important">
      <div className="shop-important-box">
        <h2 className="shop-important-title">공지사항</h2>

        <div className="shop-important-swiper-wrap">
          <Swiper
            className="shop-important-swiper"
            slidesPerView="auto"
            spaceBetween={16}
            slidesOffsetBefore={24}
            slidesOffsetAfter={24}
            grabCursor
          >
            {notices.map((n) => {
              const b = badgeTypes[n.badge];
              return (
                <SwiperSlide
                  key={n.id}
                  className="shop-important-slide impl-anchor"
                  data-impl
                  style={{
                    "--impl-right": "8px",
                    "--impl-top": "8px",
                  }}
                >
                  <article
                    className={`notice-card is-${n.bgType}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate("/home/shop/announcement")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate("/home/shop/announcement");
                      }
                    }}
                  >
                    <span className={`notice-badge is-${b.type}`}>
                      {b.label}
                    </span>
                    <p className="notice-title">{n.title}</p>
                    <p className="notice-date">{n.date}</p>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <button
          type="button"
          className="shop-important-cta"
          onClick={onScheduleClick}
        >
          <span className="shop-important-cta-text">
            <img src="/img/shop-important-fire.svg" alt="" />
            아티스트의 일정을 확인해보세요
          </span>
          <span className="shop-important-cta-arrow" aria-hidden="true">
            <img src="/img/more-arrow-333-5x10.svg" alt="" />
          </span>
        </button>
      </div>
    </section>
  );
}
