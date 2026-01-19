export default function LiveReplayCard({ item }) {
  const [artist, guest] = item.subtitle.split(" · ");

  return (
    <div className="replay-card">
      <div className="replay-thumb">
        <img src={item.thumb} alt={item.title} />
        {item.badge && <span className="replay-badge">{item.badge}</span>}

        <div className="replay-meta">
          <img src="/img/replay-artist.svg" alt="" />

          <div className="replay-text-wrap">
            <p className="replay-title">{item.title}</p>

            <p className="replay-sub">
              <span>{artist}</span>
              <img
                src="/img/replay-artist-verified.svg" // 👉 가운데 아이콘
                alt=""
                className="replay-sub-icon"
              />
              <span>{guest}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
