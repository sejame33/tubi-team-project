function DmItem({ name, time, group, image, verified, check, onClick }) {
  return (
    <section className="dmItemBox">
      <li
        className="dm-item impl-anchor"
        onClick={onClick}
        data-impl
        style={{
          "--impl-right": "384px",
          "--impl-top": "0px",
        }}
      >
        <div className={`avatar ${verified ? "verified" : ""}`}>
          <img src={image} alt={name} />
        </div>

        <div className="dm-info">
          <div className="dm-name">
            {name}
            {check && <img src={check} alt="verified" className="dm-check" />}
          </div>
          <div className="dm-meta">
            <span className="dm-time">{time}</span>
            <span className="dm-dot">·</span>
            <span className="dm-group">{group}</span>
          </div>
        </div>
      </li>
    </section>
  );
}

export default DmItem;
