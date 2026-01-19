const GatchaVisual = ({ setOpen }) => {
  return (
    <section className="gatcha-visual">
      <div className="gatcha-overlay">
        <p className="gatcha-sub-text">
          <span>마이 튜비</span>를 꾸며보세요!
        </p>
        <p className="gatcha-title-text">튜비 스티커 뽑기</p>

        <button className="gatcha-main-button" onClick={() => setOpen(true)} />

        <span className="gatcha-caption-text">
          10회 조합권 <span>1회</span> 무료
        </span>

        <div className="gatcha-count-buttons">
          <button className="gatcha-count-btn">
            보관 뽑기권 <span>3</span> <span className="gatchanum">개</span>
          </button>
          <button className="gatcha-count-btn">
            보유 조각 <span>7</span> <span className="gatchanum">개</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GatchaVisual;
