import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingPage4.css";

export default function OnboardingPage4() {
  const navigate = useNavigate();

  // ✅ 이 페이지에서만 main padding 제어
  useEffect(() => {
    const main = document.querySelector(".main");
    if (!main) return;

    main.style.padding = "0";
    return () => {
      main.style.padding = "";
    };
  }, []);

  return (
    <div className="ob4-wrap">
      {/* ✅ Header: progress + skip */}
      <header className="obhs-header">
        <div className="obhs-progress" aria-label="onboarding progress">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className={`obhs-seg is-filled`} />
          ))}
        </div>

        <button
          type="button"
          className="obhs-skip"
          onClick={() => navigate("/login")}
        >
          Skip
        </button>
      </header>

      {/* ✅ Body */}
      <main className="ob4">
        {/* 상단 한 줄 */}
        <p className="ob4-topline">
          노바랑 같이 <span className="ob4-point">점을</span> 따라가봐요
        </p>

        {/* 가운데 튜비 */}
        <div className="ob4-hero">
          <img src="/img/tubicommon.png" alt="tubi" className="ob4-tubi" />
        </div>

        {/* 하단 문구 */}
        <div className="ob4-text">
          <h1 className="ob4-title">
            지금 로그인하고
            <br />
            다양한 콘텐츠를 만나보세요!
          </h1>
          <p className="ob4-desc">팬덤 일정부터 굿즈까지 한번에</p>
        </div>

        {/* 말풍선 CTA */}
        <button type="button" className="ob4-bubble" onClick={() => navigate("/login")}>
          <span className="ob4-bubble-icon" aria-hidden="true">⚡</span>
          3초만에 빠른 가입하기
          <span className="ob4-bubble-tail" aria-hidden="true" />
        </button>

        {/* 소셜 버튼 */}
        <div className="ob4-social">
          <button type="button" className="ob4-social-btn kakao" aria-label="Kakao">
            <span className="ob4-social-text">TALK</span>
          </button>

          <button type="button" className="ob4-social-btn naver" aria-label="Naver">
            <span className="ob4-social-text">N</span>
          </button>

          <button type="button" className="ob4-social-btn google" aria-label="Google">
            <span className="ob4-social-text">G</span>
          </button>

          <button type="button" className="ob4-social-btn apple" aria-label="Apple">
            <span className="ob4-social-text"></span>
          </button>
        </div>
      </main>
    </div>
  );
}
