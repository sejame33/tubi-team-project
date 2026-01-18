import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingPage3.css";

function OnboardingPage3() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-3">
      <img
        className="onboarding-image"
        src="/img/onboarding-3.svg"
        alt="onboarding-3"
      />

      <div className="onboarding-text">
        <h2 className="title">DM으로 소통하고</h2>
        <p className="desc">나만의 공간에서 대화를 이어가요.</p>
      </div>
    </div>
  );
}

export default OnboardingPage3;
