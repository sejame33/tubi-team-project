import "./DmSlideBanner.css";

function DmSlideBanner({
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
      className={`dm-slide-banner dm-slide-banner--${variant}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="dm-slide-banner-text-box">
        {variant === "logo" && logo && (
          <div className="dm-slide-banner-logo">
            <img src={logo} alt="logo" />
          </div>
        )}

        <p className="dm-slide-banner-title-top">
          {title?.topPrefix ? (
            <>
              <span>{title.topPrefix}</span>
              {title.topIcon && (
                <img
                  className="dm-slide-banner-title-icon"
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

        <p className="dm-slide-banner-title-bottom">{title?.bottom}</p>

        {variant === "text" && (
          <button className="dm-slide-banner-more" onClick={onMore}>
            지금 예매하기
          </button>
        )}
      </div>

      <div className="dm-slide-banner-image" style={posStyle}>
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

export default DmSlideBanner;
