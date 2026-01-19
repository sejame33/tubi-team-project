import "./SmallBanner.css";

function SmallBanner({
  variant = "text",
  background,
  title,
  logo,
  image,
  imageStyle = {},
  onMore,
  children,
}) {
  // 위치 관련만 div로, 크기는 img로 분리하는 게 깔끔
  const { height, width, transform, ...posStyle } = imageStyle;

  return (
    <div
      className={`small-banner small-banner--${variant}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="small-banner-text-box">
        {variant === "logo" && logo && (
          <div className="small-banner-logo">
            <img src={logo} alt="logo" />
          </div>
        )}

        <p className="small-banner-title-top">
          {title?.topPrefix ? (
            <>
              <span>{title.topPrefix}</span>
              {title.topIcon && (
                <img
                  className="small-banner-title-icon"
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
        <p className="small-banner-title-bottom">{title.bottom}</p>

        {variant === "text" && (
          <button className="small-banner-more" onClick={onMore}>
            지금 예매하기
          </button>
        )}
      </div>

      <div className="small-banner-image" style={posStyle}>
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

export default SmallBanner;
