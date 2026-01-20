import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingPage3.css";

function OnboardingPage3() {
  const navigate = useNavigate();

  // ✅ 이 페이지에서만 main padding 제어
  useEffect(() => {
    const main = document.querySelector(".main");
    if (!main) return;

    // 원하는 값으로 덮기
    main.style.padding = "80px 0 0";

    // 페이지 벗어나면 원복
    return () => {
      main.style.padding = "";
    };
  }, []);

  return (
    <div className="onboarding-3">
      <div className="text-area">
        <h1 className="title">
          카테고리에 따라
          <br />
          다양한 상품을 볼 수 있어요
        </h1>
        <p className="sub-title">버츄얼 아이돌을 선택하고 함께 소통해요!</p>
      </div>

      {/* 필터 버튼 */}
      <ul className="filter-area">
        <li>
          <button className="filter-btn outline">
            <span className="filter-btn-chip-text">NOVA Only</span>
          </button>
        </li>
        <li>
          <button className="filter-btn active">All</button>
        </li>
        <li>
          <button className="filter-btn">
            New
            <span className="dot" />
          </button>
        </li>
        <li>
          <button className="filter-btn">Best</button>
        </li>
        <li>
          <button className="filter-btn">
            Limited
            <span className="dot" />
          </button>
        </li>
      </ul>

      {/* 중앙 배경 */}
      <div className="center-bg-layer">
        <img
          src="/img/onboarding-3-background2.svg"
          alt=""
          className="center-bg-img"
        />
      </div>

      {/* 상품 리스트 */}
      <ul className="product-area">
        <li className="product-card">
          <div className="img-box">
            <img
              src="/img/onboarding-3-album-1.svg"
              alt="album"
              className="product-img"
            />
            <img
              src="/img/onboarding-3-heart.svg"
              alt=""
              className="product-heart"
            />
          </div>
          <p className="product-name">PLAVE JP 1ST SINGLE...</p>
          <p className="price">₩21,400원</p>
        </li>

        <li className="product-card">
          <div className="img-box">
            <img
              src="/img/onboarding-3-album-2.svg"
              alt="album"
              className="product-img"
            />
            <img
              src="/img/onboarding-3-heart.svg"
              alt=""
              className="product-heart"
            />
          </div>
          <p className="product-name">PLAVE JP 1ST SINGLE...</p>
          <p className="price">₩17,000원</p>
        </li>

        <li className="product-card">
          <div className="img-box">
            <img
              src="/img/onboarding-3-album-3.svg"
              alt="album"
              className="product-img a"
            />
          </div>
          <p className="product-name">PLAVE 3rd Mini...</p>
          <p className="price">₩13,400원</p>
        </li>
      </ul>

      <img
        src="/img/onboarding-3-tubi.svg"
        alt="character"
        className="tubi-img"
      />
    </div>
  );
}

export default OnboardingPage3;
