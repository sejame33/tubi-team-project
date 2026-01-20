import React from "react";
import SectionTitle from "../../../components/homecomp/SectionTitle";

const ArtistLive = () => {
  return (
    <>
      <div className="artistpage">
        <section className="artistlive">
          <SectionTitle
            title="실시간 라이브!"
            showMore={true}
            useNicknameTitle={false}
          />

          <div className="live-content-box">
            <h3 className="category-label">Live Replay</h3>

            <div className="main-card">
              <div className="thumbnail-wrap">
                <img
                  src="/img/artistlive1.svg"
                  alt="Live Thumbnail"
                  className="thumb-img"
                />
                <span className="hot-badge">HOT</span>
              </div>

              <div className="card-footer">
                <div className="profile-circle">
                  <img src="/img/artistlive1.svg" alt="profile" />
                </div>
                <div className="text-info">
                  <p className="stitle">
                    [스텔라도감] 다섯 번째! 스텔라이브 2기생...
                  </p>
                  <p className="sartist">
                    StelLive <span className="check-v">✓</span> • 아라하시 타비
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mv">
          <SectionTitle
            title="인기 MV"
            showMore={true}
            useNicknameTitle={false}
          />
          <div className="live-content-box">
            <h3 className="category-label">Live Replay</h3>

            <div className="main-card">
              <div className="thumbnail-wrap">
                <img
                  src="/img/artistlive1.svg"
                  alt="Live Thumbnail"
                  className="thumb-img"
                />
                <span className="hot-badge">HOT</span>
              </div>

              <div className="card-footer">
                <div className="profile-circle">
                  <img src="/img/artistlive1.svg" alt="profile" />
                </div>
                <div className="text-info">
                  <p className="stitle">
                    [스텔라도감] 다섯 번째! 스텔라이브 2기생...
                  </p>
                  <p className="sartist">
                    StelLive <span className="check-v">✓</span> • 아라하시 타비
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArtistLive;
