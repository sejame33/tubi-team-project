import "./Gatcha.css";
const GatchaExtraList = () => {
  return (
    <div className="gatcha-extra-box">
      <h3 className="gatcha-extra-title">뽑기권을 더 받고 싶다면?</h3>

      <ul className="gatcha-extra-list">
        <li className="gatcha-extra-item">
          <div className="gatcha-extra-minibox">
            <p className="gatcha-extra-text">친구에게 공유하기</p>
            <span className="gatcha-extra-sub">뽑기 조각 1개</span>
          </div>
          <button className="gatcha-extra-btn">받기</button>
        </li>

        <li className="gatcha-extra-item">
          <div className="gatcha-extra-minibox">
            <p className="gatcha-extra-text">신곡 MV 영상 보기</p>
            <span className="gatcha-extra-sub">뽑기 조각 2개</span>
          </div>
          <button className="gatcha-extra-btn">받기</button>
        </li>

        <li className="gatcha-extra-item">
          <div className="gatcha-extra-minibox">
            <p className="gatcha-extra-text">굿즈 5만원 이상 구매하기</p>
            <span className="gatcha-extra-sub">뽑기권 1개</span>
          </div>
          <button className="gatcha-extra-btn">받기</button>
        </li>
      </ul>
    </div>
  );
};

export default GatchaExtraList;
