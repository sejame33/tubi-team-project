import { useNavigate } from "react-router-dom";
import MySticker from "./MySticker";

import "../My.css";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="myTubi">
      <div className="header">
        <div className="titleRow">
          <h1 className="name">상부3조</h1>
          <a className="editBtn" href="#edit" aria-label="edit">
            <img src="/img/my-edit.svg" alt="" />
          </a>
        </div>
        <p className="email">j.youngsopretty@gmail.com</p>
      </div>

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
          className="actionBtn"
          type="button"
          onClick={() => navigate("/home/my/tubi")}
        >
          <img src="/img/my-tubi.svg" alt="" />
          <span>My TUBI</span>
        </button>

        <button className="actionBtn" type="button">
          <img src="/img/my-gacha.svg" alt="" />
          <span>스티커 가챠실</span>
        </button>
      </section>
      <MySticker />
    </div>
  );
};

export default MyPage;
