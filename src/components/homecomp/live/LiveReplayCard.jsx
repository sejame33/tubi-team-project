import React from "react";

export default function LiveReplayCard({ item, variant = "live" }) {
  const [artist, guest] = (item.subtitle || "").split(" · ");

  const META_ICON_MAP = {
    live: "/img/replay-artist.svg",
    content: "/img/replay-content-artist.svg",
    content2: "/img/replay-content-artist2.svg",
    stage: "/img/replay-stage.svg",
    stage2: "/img/replay-stage2.svg",
  };

  const badgeClass = item.badge
    ? `is-${item.badge.replace(/\s/g, "").toLowerCase()}`
    : "";

  return (
    <div className="replay-card">
      <div className="replay-thumb">
        <img src={item.thumb} alt={item.title} />

        {item.badge && (
          <span className={`replay-badge ${badgeClass}`}>{item.badge}</span>
        )}

        <div className="replay-meta">
          <img src={META_ICON_MAP[variant]} alt="" />

          <div className="replay-text-wrap">
            <p className="replay-title">{item.title}</p>

            <p className="replay-sub">
              <span>{artist}</span>
              <img
                src="/img/replay-artist-verified.svg"
                alt=""
                className="replay-sub-icon"
              />
              <span>{guest}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
