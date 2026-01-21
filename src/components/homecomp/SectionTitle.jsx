import "./SectionTitle.css";
import { useNickname } from "../../context/NicknameContext";

function SectionTitle({
  title,
  showMore = true,
  onMoreClick,
  useNicknameTitle = true,
  moreElement,
  showSort = false,
  showSort2 = false,
  currentSort = "최신순",
  currentSort2 = "인기순",
  onSortChange,
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

      <div className="section-right-area">
        {showSort && (
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#333",
              display: "flex",
              alignItems: "center",
            }}
          >
            최신순
            <img src="/img/sticker-arrow.svg" alt="" className="sort-icon" />
          </button>
        )}

        {showSort2 && (
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#333",
              display: "flex",
              alignItems: "center",
              
            }}
          >
            인기순
            <img src="/img/brand-popular-arrow.svg" alt="" className="sort-icon" style={{marginLeft: "4px"}}/>
          </button>
        )}

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
    </div>
  );
}

export default SectionTitle;
