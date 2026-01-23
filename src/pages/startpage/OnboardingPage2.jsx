import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OnboardingPage2.css";
import "./OnboardingPages.css";

function OnboardingPage2({ arrowImg = "/img/onboarding-next-arrow.svg",
}) {

  const cards = [
    "/img/onboardingPage2-spin01.png",
    "/img/onboardingPage2-spin02.png",
    "/img/onboardingPage2-spin03.png",
    "/img/onboardingPage2-spin04.png",
  ];
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
    <>
      <div className="ob1">
        <header className="ob1-header">
          <div className="ob1-header-left" />
          <button type="button" className="ob1-skip" onClick={() => navigate("/login")}>
            Skip
          </button>
        </header>
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
        <footer className="ob1-footer">
          <button type="button" className="ob1-next" onClick={handleNext}>
            <span className="ob1-next-text">NEXT</span>
            <img className="ob1-next-arrow" src={arrowImg} alt="" aria-hidden="true" />
          </button>
        </footer>
      </div>
    </>
  );
}

export default OnboardingPage2;
