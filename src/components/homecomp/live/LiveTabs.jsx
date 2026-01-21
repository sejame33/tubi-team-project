export default function LiveTabs({ tabs, active, onChange }) {
  return (
    <div className="live-tabs">
      {tabs.map((t) => (
        <button
          key={t}
          className={`tab-btn impl-anchor ${active === t ? "is-active" : ""}`}
          onClick={() => onChange(t)}
          data-impl-alt
          style={{
            "--impl-alt-top": "7px",
            "--impl-alt-right": "0px",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
