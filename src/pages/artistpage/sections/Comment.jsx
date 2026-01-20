import React from "react";
import SectionTitle from "../../../components/homecomp/SectionTitle";
import ArtistComment from "../../../components/artistcomp/ArtistComment";
import Btn from "../../../components/common/Btn";

const Comment = () => {
  return (
    <>
      <div className="commentpage">
        <SectionTitle
          title="To. StelLive"
          useNicknameTitle={false}
          moreElement={
            <img
              src="/img/reset.svg"
              alt="refresh"
              style={{ width: "24px", height: "24px" }}
            />
          }
          onMoreClick={() => console.log("새로고침 클릭!")}
        />
        <div className="comment">
          <ArtistComment
            profileImg="/img/profile01.svg"
            nickname="_후야마누라"
            text="지금 시간은 네코시~"
          />
          <ArtistComment
            profileImg="/img/profile02.svg"
            nickname="명예파스텔@"
            text="스텔라이브 2주년 축하해!! 
              2주년 손편지 써주는 리제 
              ㅠㅠ 앞으로도 파스텔이랑...."
            image="/img/comment-img.svg"
          />
          <ArtistComment
            profileImg="/img/profile03.svg"
            nickname="Nana"
            text="This song has been on repeat all day. It’s
              so comforting and warm. Hope you get a good rest tonight. Sweet dreams 🌙"
          />

          <Btn text="더보기" bgColor="black" />
        </div>
      </div>
    </>
  );
};

export default Comment;
