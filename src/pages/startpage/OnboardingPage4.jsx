import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingPage4.css";

function OnboardingPage4() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/follow-artist", {
      state: { from: "onboarding" },
    });
  };

  return (
    <div className="onboarding-4" onClick={handleNext}>
      <div className="onboarding-text">
        <h2 className="title">
          스티커와 튜비를
          <br />한 눈에 확인할 수 있어요
        </h2>
        <p className="desc">나만의 튜비를 만들어 가요!</p>
      </div>

      <img
        className="onboarding-4-Frame"
        src="/img/onboarding-4-Frame2.svg"
        alt="onboarding-4-Frame"
      />
      <img
        className="onboarding-4-myitem"
        src="/img/onboarding-4-myitem.svg"
        alt="onboarding-4-myitem"
      />
      <img
        className="onboarding-4-tubi"
        src="/img/onboarding-4-tubi.svg"
        alt="onboarding-4-tubi"
      />
    </div>
  );
}

export default OnboardingPage4;
