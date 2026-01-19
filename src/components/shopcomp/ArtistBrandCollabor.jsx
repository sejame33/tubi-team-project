import React from "react";
import "./ArtistBrandCollabor.css";

export default function ArtistBrandCollabor() {
  return (
    <section className="artistbrandcollabor">
      {/* 섹션 타이틀 */}
      <h3 className="artistbrandcollabor-section-title">새로운 소식</h3>

      {/* 카드 */}
      <article className="artistbrandcollabor-card">
        {/* 이미지 영역 */}
        <div className="artistbrandcollabor-image">
          {/* 로고 (이미지) */}
          <img
            src="/img/artist-brand-collabor-logo.svg"
            alt="PLAVE x Sanrio"
            className="artistbrandcollabor-logo"
          />

          {/* 타이틀 (두 줄) */}
          <p className="artistbrandcollabor-title">
            지금만 만날 수 있는
            <br />
            플레이브 한정 콜라보 굿즈
          </p>

          {/* 배경 이미지 */}
          <img
            src="/img/artist-brand-collabor-bg.png"
            alt=""
            className="artistbrandcollabor-bg"
          />
        </div>

        {/* 이미지 아래 텍스트 (위/아래 동일 구조) */}
        <div className="artistbrandcollabor-text">
          <span className="artistbrandcollabor-sub">한정수량 이벤트</span>
          <p className="artistbrandcollabor-desc">
            PLAVE X 산리오 기간 한정 콜라보!
          </p>
        </div>
      </article>
    </section>
  );
}
