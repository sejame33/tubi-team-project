export default function FilterChips({ chips, active, onChange }) {
  return (
    <div className="chip-row">
      {chips.map((c) => (
        <button
          key={c}
          className={`chip impl-anchor ${active === c ? "is-active" : ""}`}
          onClick={() => onChange(c)}
          data-impl-alt
          style={{
            "--impl-alt-top": "-2px",
            "--impl-alt-right": "-6px",
          }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
