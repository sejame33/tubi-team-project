export default function LiveArtistRow({ items }) {
  return (
    <div className="artist-row">
      {items.map((a) => (
        <div key={a.id} className="artist-item">
          <div className={`avatar ${a.live ? "is-live" : ""}`}>
            <img src={a.avatar} alt={a.name} />
          </div>
          <p className="artist-name">
            {a.name}

            {a.verified && (
              <img
                src="/img/live-artist-verified.svg"
                alt="verified"
                className="artist-check"
              />
            )}
          </p>

          <p className="artist-label">{a.label}</p>
        </div>
      ))}
    </div>
  );
}
