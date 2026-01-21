import { useParams, useLocation } from "react-router-dom";
import { artistData } from "./ArtistData";

const ArtistBanner = () => {
  const { artistId } = useParams();
  const artist = artistData[artistId];

  if (!artist) {
    console.error("해당 아티스트 데이터를 찾을 수 없습니다:", artistId);
    return (
      <div style={{ height: "300px", background: "#eee" }}>
        데이터를 불러올 수 없습니다.
      </div>
    );
  }
  return (
    <div className="artist-page">
      <section className="artist-visual">
        <div className="visual-bg">
          <img src={artist.bannerImg} alt={artist.name} />
        </div>

        <div className="visual-info">
          <span className="members-count">
            2.2만 Members{artist.members} • ✓ 가입 완료
          </span>
          <h1 className="artist-name">{artist.name}</h1>
        </div>
        <ul className="social-links">
          <li className="icon-instagram">
            <img src="/img/sns1.svg" alt="" />
          </li>
          <li className="icon-x">
            <img src="/img/sns2.svg" alt="" />
          </li>
          <li className="icon-facebook">
            <img src="/img/sns3.svg" alt="" />
          </li>
          <li className="icon-youtube">
            <img src="/img/sns4.svg" alt="" />
          </li>
          <li className="icon-tiktok">
            <img src="/img/sns5.svg" alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ArtistBanner;
