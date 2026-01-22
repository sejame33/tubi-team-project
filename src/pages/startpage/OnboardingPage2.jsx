import React from "react";
import "./OnboardingPage2.css";

function OnboardingPage2() {
  const cards = [
    "/img/onboardingPage2-spin01.png",
    "/img/onboardingPage2-spin02.png",
    "/img/onboardingPage2-spin03.png",
    "/img/onboardingPage2-spin04.png",
  ];

  return (
    <div className="onboarding-2">
      <div className="text-box">
        <h1 className="title">
          당신 마음 속 <br /> 최애 버츄얼 아이돌은?
        </h1>

        <p className="sub-title">버츄얼 아이돌을 선택하고 함께 소통해요!</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...cards, ...cards, ...cards, ...cards].map((src, idx) => (
            <div key={idx} className={`marquee-item wave-${idx % 4}`}>
              <img src={src} alt="card" />
            </div>
          ))}
        </div>
      </div>

      <img src="/img/tubicommon.png" alt="tubi" className="tubi-img" />
    </div>
  );
}

export default OnboardingPage2;
