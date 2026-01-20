import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({
  showBack = false,
  showLogo = true,
  title = "",
  showMenu = false,
  showCart = false,
  showAnCopy = false,
  showAnShare = false,
  isLive = false,
}) => {
  const navigate = useNavigate();

  return (
    <header className={`header ${isLive ? "is-live" : ""}`}>
      {/* Left: back OR logo */}
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
      </div>

      {/* Center: title */}
      <div className="header-center">
        {title && <h1 className="header-title">{title}</h1>}
      </div>

      {/* Right: icons */}
      <div className="header-right">
        {showCart && (
          <button
            type="button"
            className="header-icon-btn"
            aria-label="장바구니"
            onClick={() => console.log("go cart")}
          >
            <img src="/img/header-cart-icon.svg" alt="" aria-hidden="true" />
          </button>
        )}

        {showMenu && (
          <button
            type="button"
            className="header-icon-btn"
            aria-label="메뉴"
            onClick={() => console.log("open menu")}
          >
            <img src="/img/burger-menu-icon.svg" alt="" aria-hidden="true" />
          </button>
        )}

        {showAnCopy && (
          <button
            type="button"
            className="header-icon-btn"
            aria-label="복사"
            onClick={() => console.log("go copy")}
          >
            <img
              src="/img/announcement-copy-icon.svg"
              alt="복사버튼"
              aria-hidden="true"
            />
          </button>
        )}

        {showAnShare && (
          <button
            type="button"
            className="header-icon-btn"
            aria-label="공유"
            onClick={() => console.log("go share")}
          >
            <img
              src="/img/announcement-share-icon.svg"
              className="sharebtn"
              alt="공유 버튼"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
