import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNickname } from "../../../context/NicknameContext";
import MySticker from "./MySticker";

import "../My.css";

const MyPage = () => {
  const navigate = useNavigate();

  const { nickname, setNickname } = useNickname();
  const [isEditing, setIsEditing] = useState(false);
  const [tempNickname, setTempNickname] = useState("");

  useEffect(() => {
    if (nickname) {
      setTempNickname(nickname);
    }
  }, [nickname]);

  return (
    <div className="myTubi">
      <div className="titleRow">
        {isEditing ? (
          <input
            className="nameInput"
            value={tempNickname}
            autoFocus
            onChange={(e) => setTempNickname(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (tempNickname.trim()) {
                  setNickname(tempNickname.trim());
                }
                setIsEditing(false);
              }

              if (e.key === "Escape") {
                setTempNickname(nickname);
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <>
            <h1 className="name">{nickname || "닉네임"}</h1>
            <button
              className="editBtn impl-anchor"
              data-impl
              style={{
                "--impl-right": "-8px",
                "--impl-top": "-4px",
              }}
              type="button"
              onClick={() => {
                console.log("edit click");
                setIsEditing(true);
              }}
            >
              <img src="/img/my-edit.svg" alt="" />
            </button>
          </>
        )}
      </div>

      <p className="email">j.youngsopretty@gmail.com</p>

      <section className="characterArea">
        <div className="glow">
          <img src="/img/my-blur.png" alt="" />
        </div>
        <div className="characterCard">
          <img
            src="/img/my-nova.svg"
            alt="tubi character"
            className="characterImg"
          />
        </div>
      </section>

      <section className="statusList sheetSection">
        <button className="statusRow" type="button">
          <span className="statusLabel">보유 뽑기권</span>
          <span className="statusRight">
            3개 <img src="/img/shop-main-banner-arrow.svg" alt="" />
          </span>
        </button>

        <button className="statusRow" type="button">
          <span className="statusLabel">보유 뽑기조각</span>
          <span className="statusRight">
            7개 <img src="/img/shop-main-banner-arrow.svg" alt="" />
          </span>
        </button>
      </section>

      <section className="actionButtons sheetSection">
        <button
          className="actionBtn impl-anchor"
          data-impl
          type="button"
          onClick={() => navigate("/home/my/tubi")}
        >
          <img src="/img/my-tubi.svg" alt="" />
          <span>My TUBI</span>
        </button>

        <button
          className="actionBtn impl-anchor"
          data-impl
          type="button"
          onClick={() => navigate("/home/gatcha/stickercollection")}
        >
          <img src="/img/my-gacha.svg" alt="" />
          <span>스티커 가챠실</span>
        </button>
      </section>
    </div>
  );
};

export default MyPage;
