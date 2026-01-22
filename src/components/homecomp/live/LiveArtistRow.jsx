import React, { useEffect, useRef } from "react";

export default function LiveArtistRow({ items = [], onItemClick }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    const onDown = (e) => {
      if (e.button !== 0) return; // 왼쪽 클릭만

      isDown = true;
      moved = false;
      el.dataset.moved = "0";
      el.classList.add("is-dragging");

      startX = e.pageX - el.getBoundingClientRect().left;
      startScrollLeft = el.scrollLeft;
    };

    const onMove = (e) => {
      if (!isDown) return;

      e.preventDefault(); // 드래그 중 텍스트 선택 방지

      const x = e.pageX - el.getBoundingClientRect().left;
      const walk = x - startX;

      if (Math.abs(walk) > 6) {
        moved = true;
        el.dataset.moved = "1";
      }

      el.scrollLeft = startScrollLeft - walk;
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("is-dragging");
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
    };
  }, []);

  return (
    <div className="artist-row " ref={rowRef}>
      {items.map((a) => (
        <button
          key={a.id}
          type="button"
          className="live-artist-item impl-anchor"
          data-impl
          style={{
            "--impl-right": "-8px",
            "--impl-top": "0px",
          }}
          onClick={() => {
            const movedNow = rowRef.current?.dataset?.moved === "1";
            if (movedNow) return; // ✅ 드래그였다면 이동 금지
            onItemClick?.(a); // ✅ 진짜 클릭이면 이동
          }}
        >
          <div className="artist-item">
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
        </button>
      ))}
    </div>
  );
}
