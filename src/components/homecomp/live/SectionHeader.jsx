function SectionHeader({ title, showMore = true, onMoreClick }) {
  return (
    <div className="section-title-wrap live">
      <h2 className="section-live-title">실시간 Live!</h2>

      {showMore && (
        <button
          className="section-live-more impl-anchor"
          onClick={onMoreClick}
          data-impl
          style={{
            "--impl-right": "-8px",
            "--impl-top": "-2px",
          }}
        >
          전체보기
          <img src="/img/section-title-more-arrow.svg" alt="" />
        </button>
      )}
    </div>
  );
}

export default SectionHeader;
