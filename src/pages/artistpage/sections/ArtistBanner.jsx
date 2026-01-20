import React from "react";

const ArtistBanner = () => {
  return (
    <div className="artist-page">
      <section className="artist-visual">
        <div className="visual-bg">
          <img src="/img/artist-banner.png" alt="StelLive" />
        </div>
        <div className="visual-info">
          <span className="members-count">2.2만 Members • ✓ 가입 완료</span>
          <h1 className="artist-name">STELLIVE</h1>
        </div>
        <ul className="social-links">
          <li className="icon-instagram">
            <img src="/img/sns1.svg" alt="" />
          </li>
          <li className="icon-x">
            <img src="/img/sns2.svg" alt="" />
          </li>
          <li className="icon-facebook">
            <img src="/img/sns3.svg" alt="" />
          </li>
          <li className="icon-youtube">
            <img src="/img/sns4.svg" alt="" />
          </li>
          <li className="icon-tiktok">
            <img src="/img/sns5.svg" alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ArtistBanner;
