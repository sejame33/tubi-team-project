import "./SectionTitle.css";
import { useNickname } from "../../context/NicknameContext";
function SectionTitle({
  title,
  showMore = true,
  onMoreClick,
  useNicknameTitle = true,
  moreElement,
}) {
  const { nickname } = useNickname();

  return (
    <div className="section-title-wrap">
      <h2 className="section-title">
        {useNicknameTitle && nickname ? (
          <>
            <strong>{nickname}</strong>님의 {title}
          </>
        ) : (
          title
        )}
      </h2>

      {showMore && (
        <button className="section-more" onClick={onMoreClick}>
          {moreElement ? (
            moreElement
          ) : (
            <>
              전체보기
              <img src="/img/section-title-more-arrow.svg" alt="" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default SectionTitle;
