import React, { useEffect, useRef } from "react";

export default function LiveArtistRow({ items = [] }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    const onDown = (e) => {
      // 왼쪽 클릭만
      if (e.button !== 0) return;

      isDown = true;
      moved = false;
      el.classList.add("is-dragging");
      startX = e.pageX - el.getBoundingClientRect().left;
      startScrollLeft = el.scrollLeft;
    };

    const onMove = (e) => {
      if (!isDown) return;

      e.preventDefault(); // 드래그 중 텍스트 선택 방지
      const x = e.pageX - el.getBoundingClientRect().left;
      const walk = x - startX;

      if (Math.abs(walk) > 5) moved = true; // 약간 움직였으면 드래그로 간주
      el.scrollLeft = startScrollLeft - walk;
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("is-dragging");
    };

    // 드래그로 움직였을 때 클릭이 “실수로” 발생하는 거 방지
    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div className="artist-row" ref={rowRef}>
      {items.map((a) => (
        <div key={a.id} className="artist-item">
          <div className={`avatar ${a.live ? "is-live" : ""}`}>
            <img src={a.avatar} alt={a.name} />
          </div>

          <p className="artist-name">
            {a.name}
            {a.verified && (
              <img
                src="/img/live-artist-verified.svg"
                alt="verified"
                className="artist-check"
              />
            )}
          </p>

          <p className="artist-label">{a.label}</p>
        </div>
      ))}
    </div>
  );
}
