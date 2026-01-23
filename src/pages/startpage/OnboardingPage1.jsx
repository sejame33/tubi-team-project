import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OnboardingPage1.css";
import "./OnboardingPages.css";

export default function OnboardingPage1({
  arrowImg = "/img/onboarding-next-arrow.svg",
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const nextMap = {
    "/onboarding/1": "/onboarding/2",
    "/onboarding/2": "/onboarding/3",
    "/onboarding/3": "/onboarding/4",
  };

  const handleNext = () => {
    const nextPath = nextMap[pathname] || "/onboarding/2";
    navigate(nextPath);
  };

  return (
    <div className="ob1">
      {/* ✅ Header: Skip */}
      <header className="ob1-header">
        <div className="ob1-header-left" />
        <button type="button" className="ob1-skip" onClick={() => navigate("/login")}>
          Skip
        </button>
      </header>

      {/* ✅ Content */}
      <main className="ob1-main">
        <p className="ob1-eyebrow">만나서 반가워요!</p>

        <h1 className="ob1-title">
          당신을 도와줄
          <br />
          덕질메이트 <span className="ob1-point">튜비</span>에요!
        </h1>

        <div className="ob1-hero">
          <img src="/img/onboarding-1.png" alt="튜비" className="ob1-hero-img" />
        </div>
      </main>

      {/* ✅ Footer: NEXT */}
      <footer className="ob1-footer">
        <button type="button" className="ob1-next" onClick={handleNext}>
          <span className="ob1-next-text">NEXT</span>
          <img className="ob1-next-arrow" src={arrowImg} alt="" aria-hidden="true" />
        </button>
      </footer>
    </div>
  );
}
