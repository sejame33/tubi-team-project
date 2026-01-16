import React from "react";
import ShopTagList from "./ShopTagList"; // 작성하신 파일 임포트
import "./ShopBrandLink.css";

const ShopBrand = () => {
  const tags = [
    "트랙자켓",
    "아크릴 키링",
    "반팔 티셔츠",
    "경량 백팩",
    "캔뱃지",
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info-group">
          <img src="/img/shopbrand-logo.svg" alt="logo" />

          <div className="profile-text">
            <div className="name-row">
              <span className="main-name">하츠네 미쿠</span>
              <span className="badge-n">N</span>
            </div>
            <div className="sub-name">후지타 사키</div>
          </div>
        </div>

        <div className="follower-count">
          <img src="/img/shopbrand-star.svg" alt="" />
          <p>13.2만</p>
        </div>
      </div>

      <div className="tag-section">
        <ShopTagList tags={tags} />
      </div>
    </div>
  );
};

export default ShopBrand;
