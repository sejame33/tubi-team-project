import React from "react";
import "./ShopTagList.css";

const ShopTagList = ({ tags = [] }) => {
  return (
    <div className="shop-tag-list">
      {tags.map((tag, idx) => (
        <span key={idx} className="shop-tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ShopTagList;
