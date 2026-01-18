import "./ShopSlideBanner.css";

function ShopSlideBanner({
  variant = "text",
  background,
  title,
  logo,
  image,
  imageStyle = {},
  onMore,
  children,
}) {
  // 위치 관련만 div로, 크기는 img로 분리
  const { height, width, transform, ...posStyle } = imageStyle;

  return (
    <div
      className={`shop-slide-banner shop-slide-banner--${variant}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="shop-slide-banner-text-box">
        {variant === "logo" && logo && (
          <div className="shop-slide-banner-logo">
            <img src={logo} alt="logo" />
          </div>
        )}

        <p className="shop-slide-banner-title-top">
          {title?.topPrefix ? (
            <>
              <span>{title.topPrefix}</span>
              {title.topIcon && (
                <img
                  className="shop-slide-banner-title-icon"
                  src={title.topIcon}
                  alt=""
                />
              )}
              <span>{title.topSuffix}</span>
            </>
          ) : (
            title?.top
          )}
        </p>

        <p className="shop-slide-banner-title-bottom">{title?.bottom}</p>

        {variant === "text" && (
          <button className="shop-slide-banner-more" onClick={onMore}>
            지금 예매하기
          </button>
        )}
      </div>

      <div className="shop-slide-banner-image" style={posStyle}>
        <img
          src={image}
          alt=""
          style={{
            height: height ? `${height}px` : undefined,
            width: width ? `${width}px` : undefined,
            transform: transform ?? undefined,
          }}
        />
      </div>

      {children}
    </div>
  );
}

export default ShopSlideBanner;
