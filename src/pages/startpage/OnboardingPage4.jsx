import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingPage4.css";

function OnboardingPage4() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-4">
      <img
        className="onboarding-image"
        src="/img/onboarding-4.svg"
        alt="onboarding-4"
      />

      <div className="onboarding-text">
        <h2 className="title">이제 시작해볼까요?</h2>
        <p className="desc">로그인하고 모든 기능을 사용해보세요.</p>
      </div>
    </div>
  );
}

export default OnboardingPage4;
