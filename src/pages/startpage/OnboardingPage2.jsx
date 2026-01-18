import React from "react";
import "./OnboardingPage2.css";

function OnboardingPage2() {
  return (
    <div className="onboarding-2">
      <img
        className="onboarding-image"
        src="/img/onboarding-2.svg"
        alt="onboarding-2"
      />

      <div className="onboarding-text">
        <h2 className="title">굿즈를 발견하고</h2>
        <p className="desc">원하는 아이템을 쉽게 찾아보세요.</p>
      </div>
    </div>
  );
}

export default OnboardingPage2;
