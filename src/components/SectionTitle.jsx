import "./SectionTitle.css";
import { useNickname } from "../context/NicknameContext";

function SectionTitle({ title, showMore = true, onMoreClick }) {
  const { nickname } = useNickname();

  return (
    <div className="section-title-wrap">
      <h2 className="section-title">
        {nickname ? (
          <>
            <strong>{nickname}</strong>님의 {title}
          </>
        ) : (
          title
        )}
      </h2>

      {showMore && (
        <button className="section-more" onClick={onMoreClick}>
          전체보기
          <img src="/img/section-title-more-arrow.svg" alt="" />
        </button>
      )}
    </div>
  );
}

export default SectionTitle;
