import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({
  showBack = false,
  showLogo = true,
  title = "", // 좌측 정렬용 타이틀 (필요 시)
  centerTitle = "", // ✅ 중앙 정렬용 타이틀 (스티커 목록, 채팅방 등)
  showMenu = true,
  showCart = false,
  showAnCopy = false,
  showAnShare = false,
  showMore = false, // ✅ 채팅방 우측 점 세 개 버튼용
  isLive = false,
  showVerify = false,
}) => {
  const navigate = useNavigate();

  return (
    <header className={`header ${isLive ? "is-live" : ""}`}>
      {/* Left: back OR logo OR leftTitle */}
      <div className="header-left">
        {showBack ? (
          <button
            type="button"
            className="header-icon-btn"
            onClick={() => navigate(-1)}
            aria-label="뒤로가기"
          >
            <img src="/img/Arrow-left-icon.svg" alt="" aria-hidden="true" />
          </button>
        ) : showLogo ? (
          <Link to="/home" className="header-logo" aria-label="홈으로">
            <img src="/img/main-logo-icon.svg" alt="로고" />
          </Link>
        ) : null}

        {/* 좌측 정렬 타이틀이 필요한 경우 */}
        {title && <h1 className="header-title-left">{title}</h1>}
      </div>

      {/* ✅ Center: 중앙 집중형 타이틀 (스티커 목록/채팅방용) */}
      <div className="header-center">
        {centerTitle && (
          <div className="header-title-group">
            <h1 className="header-center-title">{centerTitle}</h1>
            {showVerify && (
              <img src="/img/verify.svg" alt="인증" className="verify-icon" />
            )}
          </div>
        )}
      </div>

      {/* Right: icons */}
      <div className="header-right">
        {showAnCopy && (
          <button
            type="button"
            className="header-icon-btn"
            onClick={() => console.log("copy")}
          >
            <img src="/img/announcement-copy-icon.svg" alt="복사" />
          </button>
        )}
        {showAnShare && (
          <button
            type="button"
            className="header-icon-btn"
            onClick={() => console.log("share")}
          >
            <img
              src="/img/announcement-share-icon.svg"
              alt="공유"
              className="sharebtn"
            />
          </button>
        )}
        {showCart && (
          <button
            type="button"
            className="header-icon-btn"
            onClick={() => console.log("cart")}
          >
            <img src="/img/header-cart-icon.svg" alt="장바구니" />
          </button>
        )}
        {/* ✅ 채팅방 더보기 버튼 */}
        {showMore && (
          <button
            type="button"
            className="header-icon-btn"
            onClick={() => console.log("more")}
          >
            <img src="/img/more-vertical-icon.svg" alt="더보기" />
          </button>
        )}
        {showMenu && (
          <button
            type="button"
            className="header-icon-btn"
            onClick={() => console.log("menu")}
          >
            <img src="/img/burger-menu-icon.svg" alt="메뉴" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
