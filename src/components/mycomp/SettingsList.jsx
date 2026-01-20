import React from "react";

export default function SettingsList({
  items = [],
  onItemClick,
  className = "",
}) {
  return (
    <div className={`mp-settings ${className}`}>
      {items.map((it) => (
        <button
          key={it.key}
          type="button"
          className="mp-settingsRow"
          onClick={() => onItemClick?.(it)}
        >
          <div className="mp-settingsLeft">
            {it.icon && <img className="mp-settingsIcon" src={it.icon} alt="" />}
            <span className="mp-settingsLabel">{it.label}</span>
          </div>

          <div className="mp-settingsRight">
            <span className="mp-chevron">›</span>
          </div>
        </button>
      ))}
    </div>
  );
}
