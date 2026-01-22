import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import MyOptionSwiper from "../../components/mycomp/MyOptionSwiper";
import ProductCategory from "../../components/shopcomp/ProductCategory";
import { STICKER_CATEGORIES, STICKERS, COLOR_OPTIONS } from "./sticker";
import "./MyTubi.css";

const MyTubi = () => {
  const navigate = useNavigate();
  const stickerOptions = useMemo(() => {
    return STICKERS.map((s) => ({
      id: s.id,
      label: s.label,
      imgSrc: s.imgSrc,
      baseBg: "rgba(255,255,255,0.06)",
      activeBg: "rgba(255,255,255,0.18)",
    }));
  }, []);

  const history = [
    {
      id: 1,
      imgSrc: "/img/history1.svg",
    },
    {
      id: 2,
      imgSrc: "/img/history2.svg",
    },
    {
      id: 3,
      imgSrc: "/img/history3.svg",
    },
  ];

  return (
    <div className="mytubipg">
      <div className="top impl-anchor" data-impl>
        <img
          src="/img/cancel.svg"
          alt="back"
          role="button"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <p className="topmy">My</p>
        <img src="/img/check.svg" alt="" />
      </div>

      <img src="/img/my-nova.svg" className="tubi" alt="" />
      <span className="circle" />

      <section className="topBox">
        <p className="tit">색상 변경</p>
        <MyOptionSwiper
          options={COLOR_OPTIONS}
          selectedId={COLOR_OPTIONS[0]?.id}
          onSelect={() => {}}
        />
      </section>

      <section className="section stickerSec">
        <div className="stickerHead">
          <div>
            <p className="stickerTitle">스티커</p>
            <p className="stickerDesc">스티커는 최대 5개까지 선택 가능해요.</p>
          </div>

          <button type="button" className="stickerListBtn">
            목록 <span aria-hidden="true">›</span>
          </button>
        </div>
        <div className="my-dot-erase">
          <ProductCategory
            categories={STICKER_CATEGORIES}
            active="ALL"
            onChange={() => {}}
            className="stickerCategory"
          />
        </div>

        <MyOptionSwiper
          options={stickerOptions}
          selectedId={STICKERS[0]?.id}
          onSelect={() => {}}
        />
      </section>

      <section className="picture">
        <div className="stickerHead">
          <p className="stickerTitle">사진 선택</p>
        </div>
        <div className="picslect">
          <img src="/img/my-picture.svg" alt="" />
          <div className="right">
            <p>사진 선택</p>
            <p className="txt">
              갤러리에서 사용자의 사진을 가져와 프로필 사진으로 변경 할 수
              있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="history">
        <div className="stickerHead">
          <p className="stickerTitle">History</p>
        </div>
        <MyOptionSwiper options={history} />
      </section>
    </div>
  );
};

export default MyTubi;
