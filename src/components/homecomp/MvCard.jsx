import React from "react";
import "./MvCard.css";

function MvCard({
  mainTitle,
  badge,
  badgeType = "default",
  title,
  image,
  cover,
  coverType = "default",
  desc,
  url,
}) {
  const handleClick = () => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="mv-card impl-anchor"
      data-impl
      style={{
        "--impl-right": "12px",
        "--impl-top": "12px",
      }}
      onClick={handleClick}
    >
      {/* 카드 상단 메인 타이틀 */}
      {mainTitle && <h2 className="mv-card-main-title">{mainTitle}</h2>}

      {/* 이미지 영역 */}
      <div className="mv-card-img">
        {badge && <span className={`badge badge-${badgeType}`}>{badge}</span>}
        <img src={image} alt={title} />
      </div>

      {/* 텍스트 영역 */}
      <div className="mv-card-body">
        <p className={`cover cover-${coverType}`}>{cover}</p>
        <h3 className="title">{title}</h3>
      </div>

      <p className="desc">{desc}</p>
    </div>
  );
}

export default MvCard;
