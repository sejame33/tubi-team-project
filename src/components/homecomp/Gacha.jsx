import { useNavigate } from "react-router-dom";
import "./Gacha.css";

function Gacha() {
  const navigate = useNavigate();

  return (
    <section className="gacha-banner">
      {/* 오버레이 컨텐츠 */}
      <div className="gacha-content">
        <div className="gacha-left">
          <div className="gacha-text-box">
            <p className="gacha-top">Customize</p>
            <h2 className="gacha-title">튜비 랜덤가챠</h2>
            <p className="gacha-desc">
              자신만의 튜비를 꾸며요!
              <br />첫 구독 시 뽑기 <span>티켓 3개 지급</span>
            </p>
          </div>
          <button
            className="gacha-btn"
            onClick={() => navigate("/gacha/detail")}
          >
            바로가기
            <img src="/img/gacha-more-arrow.svg" alt="" />
          </button>
        </div>
        <img src="/img/gacha-banner-char.png" alt="" className="char" />
      </div>
    </section>
  );
}

export default Gacha;
