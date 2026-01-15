export default function LiveTabs({ tabs, active, onChange }) {
  return (
    <div className="live-tabs">
      {tabs.map((t) => (
        <button
          key={t}
          className={`tab-btn ${active === t ? "is-active" : ""}`}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
