import React, { useEffect } from "react";

import "./OnboardingPage4.css";

function OnboardingPage4() {
  useEffect(() => {
    const main = document.querySelector(".main");
    if (!main) return;

    // 원하는 값으로 덮기
    main.style.padding = "0";

    // 페이지 벗어나면 원복
    return () => {
      main.style.padding = "";
    };
  }, []);

  
  return (
    <div className="onboarding-4" role="button" tabIndex={0}>
      {/* ✅ TOP */}
      <div className="ob4-top">
        <div className="onboarding-text">
          <h2 className="title">
            스티커와 튜비를
            <br />한 눈에 확인할 수 있어요
          </h2>
          <p className="desc">나만의 튜비를 만들어 가요!</p>
        </div>
      </div>

      {/* ✅ CENTER (기준) */}
      <div className="bg-wrap" aria-hidden="true">
        <img
          className="onboarding-4-frame"
          src="/img/onboarding-4-Frame2.svg"
          alt=""
          draggable="false"
        />

        <div className="inner-wrap">
          <img
            className="onboarding-4-myitem"
            src="/img/onboarding-4-myitem.svg"
            alt=""
            draggable="false"
          />
        </div>

        <img
          className="onboarding-4-tubi"
          src="/img/onboarding-4-tubi.svg"
          alt=""
          draggable="false"
        />
      </div>

      {/* ✅ BOTTOM: (필요하면 다음 버튼 같은거 넣을 자리)
          지금은 비워둬도 grid가 꽉 채워줌 */}
      <div className="ob4-bottom" />
    </div>
  );
}

export default OnboardingPage4;
