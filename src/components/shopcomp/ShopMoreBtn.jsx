import React from "react";
import "./ShopMoreBtn.css";

export default function ShopMoreBtn({
  title,
  subtitle,
  icon,
  variant = "primary",
  onClick,
}) {
  return (
    <div className="shop-more-wrap">
      <button
        className={`direct-btn is-${variant}`}
        type="button"
        onClick={onClick}
      >
        <div className="direct-btn-box">
          {/* ✅ 왼쪽 영역(타이틀+서브타이틀) */}
          <div className="direct-btn-left">
            <div className="direct-btn-title-row">
              {icon && (
                <img
                  className="direct-btn-icon"
                  src={icon}
                  alt=""
                  aria-hidden="true"
                />
              )}
              <p className="title">{title}</p>
            </div>

            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>

          {/* ✅ 오른쪽 영역(바로가기) */}
          <span className="direct-btn-link">
            바로가기
            <img src="/img/more-arrow-white-5x10.svg" alt="" />
          </span>
        </div>
      </button>
    </div>
  );
}
