import React from "react";
import "./ArtistComment.css";

const ArtistComment = ({
  profileImg,
  nickname,
  text,
  image,
  commentCount = 0,
  likeCount = 0,
}) => {
  return (
    <div className="artist-comment">
      {/* 프로필 */}
      <div className="artist-comment__profile">
        <img src={profileImg} alt="profile" />
      </div>

      {/* 콘텐츠 */}
      <div className="artist-comment__content">
        <div className="artist-comment__name">{nickname}</div>
        <div className="imgBox">
          <div className="artist-comment__text">{text}</div>

          {/* 선택 이미지 */}
          {image && (
            <div className="artist-comment__image">
              <img src={image} alt="comment" />
            </div>
          )}
        </div>

        {/* 메타 정보 */}
        <div className="artist-comment__meta">
          <div className="artist-comment__meta-item">
            <img src="/img/comment.svg" alt="" />
            <span>{commentCount}</span>
          </div>

          <div className="artist-comment__meta-item">
            <img src="/img/good.svg" alt="" />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistComment;
