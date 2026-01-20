import React from "react";
import "./MyOption.css";

const MyOption = ({
  baseBg,
  activeBg,
  label,
  imgSrc,
  selected,
  onClick,
  borderColor = "#fff",
}) => {
  return (
    <button
      type="button"
      className={`coloropt ${selected ? "is-selected" : ""}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <div
        className="coloropt__circle"
        style={{
          background: baseBg,
          borderColor: selected ? borderColor : "transparent",
        }}
      >
        <img className="coloropt__img" src={imgSrc} alt={label} />
      </div>

      <div className="coloropt__label">
        {label}
        {selected && <span className="coloropt__check">✓</span>}
      </div>
    </button>
  );
};

export default MyOption;
