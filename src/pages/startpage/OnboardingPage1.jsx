import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingPage1.css";

function OnboardingPage1() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-1">
      <img
        className="onboarding-image"
        src="/img/onboarding-1.svg"
        alt="onboarding-1"
      />

      <div className="onboarding-text">
        <h2 className="title">만나서 반가워요</h2>
        <p className="desc">당신을 도와줄 덕질 메이트 튜비예요.</p>
      </div>
    </div>
  );
}

export default OnboardingPage1;
