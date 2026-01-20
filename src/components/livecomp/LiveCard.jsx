import React from "react";
import "./LiveCard.css";

const LiveCard = ({
  topText,
  topTextColor,
  category,
  image,
  label,
  labelColor,
  smallImage,
  subTitle,
  group,
  member,
}) => {
  return (
    <div className="hot-issue-container">
      <h2 className="top-text" style={{ color: topTextColor }}>
        {topText}
      </h2>

      <div className="card-content">
        <img src={image} alt="main-issue" className="main-image" />

        <div className="card-top-info">
          {label && (
            <span
              className="card-label"
              style={{ backgroundColor: labelColor }}
            >
              {label}
            </span>
          )}
          {category && <span className="card-category">{category}</span>}
        </div>

        <div className="card-overlay">
          <div className="info-wrap">
            <img src={smallImage} alt="profile" className="small-image" />
            <div className="text-group">
              <h3 className="sub-title">{subTitle}</h3>
              <p className="artist-info">
                <span className="group-name">{group}</span>
                <span className="check-icon">
                  <img src="/img/livecheck.svg" alt="" />
                </span>
                <span className="divider">• </span>
                <span className="member-name">{member}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
