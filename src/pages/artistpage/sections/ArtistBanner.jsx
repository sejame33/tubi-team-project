import React from "react";

const ArtistBanner = () => {
  return (
    <div className="artist-page">
      <section className="artist-visual">
        <div className="visual-bg">
          <img src="/img/artist-banner.svg" alt="StelLive" />
        </div>
        <div className="visual-info">
          <span className="members-count">2.2만 Members • ✓ 가입 완료</span>
          <h1 className="artist-name">STELLIVE</h1>
          <div className="social-links">
            <i className="icon-instagram"></i>
            <i className="icon-x"></i>
            <i className="icon-facebook"></i>
            <i className="icon-youtube"></i>
            <i className="icon-tiktok"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistBanner;
