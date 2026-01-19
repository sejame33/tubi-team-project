import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingPage1.css";

function OnboardingPage1() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-1">
      <div className="onboarding-text">
        <h2 className="title">만나서 반가워요!</h2>
        <p className="desc">
          당신을 도와줄 <br />
          덕질메이트 <span className="point-color">튜비</span>에요!
        </p>
      </div>

      <img
        className="onboarding-image"
        src="/img/onboarding-1.png"
        alt="onboarding-1"
      />
    </div>
  );
}

export default OnboardingPage1;
