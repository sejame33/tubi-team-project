export default function FilterChips({ chips, active, onChange }) {
  return (
    <div className="chip-row">
      {chips.map((c) => (
        <button
          key={c}
          className={`chip ${active === c ? "is-active" : ""}`}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
