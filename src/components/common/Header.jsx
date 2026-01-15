import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({
  showBack = false,
  showLogo = true,
  title = "",
  showMenu = false,
  showCart = false, // ✅ 장바구니 옵션 추가
}) => {
  const navigate = useNavigate();

  return (
    <header className="header">
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
      </div>
    </header>
  );
};

export default Header;
