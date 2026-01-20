import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
import "./ArtistBrandNotice.css";

export default function ArtistBrandNotice({
  notices = [
    { id: 1, title: "플레이브 공식 런칭 기념 소식" },
    { id: 2, title: "Nova X Kakao pay 3/5/7 만원 프로모션" },
    { id: 3, title: "Hebi 이벤트 당첨자 발표!" },
    { id: 4, title: "IRISÉ 싱글 발매 기념 이벤트 참여 안내" },
  ],
  interval = 2500,
  icon = "/img/artist-brand-notice-icon.svg",
  onClickNotice,
}) {
  const navigate = useNavigate(); // ✅ 여기!

  const ITEM_HEIGHT = 20;
  const DURATION = 350;

  const loopItems = useMemo(() => {
    if (!notices?.length) return [];
    return [...notices, notices[0]];
  }, [notices]);

  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!loopItems.length) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setNoTransition(false);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [loopItems.length, interval]);

  useEffect(() => {
    const last = loopItems.length - 1;
    if (index === last) {
      const t = setTimeout(() => {
        setNoTransition(true);
        setIndex(0);
      }, DURATION);
      return () => clearTimeout(t);
    }
  }, [index, loopItems.length]);

  return (
    <div className="ab-notice">
      <div className="ab-notice-left">
        <img src={icon} alt="notice" className="ab-notice-icon" />
        <span className="ab-notice-label">Notice</span>
      </div>

      <div className="ab-notice-mid">
        <ul
          className={`ab-notice-roller ${noTransition ? "no-transition" : ""}`}
          style={{ transform: `translateY(-${index * ITEM_HEIGHT}px)` }}
        >
          {loopItems.map((item, i) => (
            <li key={`${item.id}-${i}`} className="ab-notice-item">
              <button
                className="ab-notice-title"
                onClick={() => onClickNotice?.(item)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ 정상 동작 */}
      <button
        type="button"
        className="ab-notice-more"
        onClick={() => navigate("/home/shop/announcement")}
      >
        더보기
      </button>
    </div>
  );
}
