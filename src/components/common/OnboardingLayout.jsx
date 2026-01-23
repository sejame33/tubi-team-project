import React, { useLayoutEffect, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import OnboardingHeader from "./OnboardingHeader";
import OnboardingFooter from "./OnboardingFooter";
import "./Layout.css"; // 기존 app-wrapper/app/main 스타일 재사용

const OnboardingLayout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  const disableImplDot = () => {
    document.body.classList.add("impl-off");
  };

  const enableImplDot = () => {
    document.body.classList.remove("impl-off");
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    el.scrollTop = 0;
  }, [location.key]);

  return (
    <>
      <div className="all">
        <div className="apptit">
          <img src="/img/background-light.png" alt="" className="light" />
          <p className="appTit">라이브부터 소통까지,</p>
          <p className="appSubTit">당신과 아이돌을 이어주는</p>
          <img src="/img/background-logo.png" alt="" className="logo" />
          <div className="btn">
            <button onClick={enableImplDot}>가이드 ON</button>
            <button onClick={disableImplDot}>가이드 OFF</button>
          </div>
        </div>
      </div>
      <div className="app-wrapper">
        <div className="app">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default OnboardingLayout;
