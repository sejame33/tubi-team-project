import React from "react";
import "./Btn.css";

const Btn = ({ text, bgColor, onClick }) => {
  return (
    <button
      className="btnBox"
      onClick={onClick}
      type="button"
      style={{ background: bgColor }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Btn;
