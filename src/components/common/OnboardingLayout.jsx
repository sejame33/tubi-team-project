import React, { useLayoutEffect, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import OnboardingHeader from "./OnboardingHeader";
import OnboardingFooter from "./OnboardingFooter";
import "./Layout.css"; // 기존 app-wrapper/app/main 스타일 재사용

const OnboardingLayout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

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
    <div className="app-wrapper">
      <div className="app">
        <OnboardingHeader />
        <main className="main main--onboarding" ref={mainRef}>
          <Outlet />
        </main>
        <OnboardingFooter />
      </div>
    </div>
  );
};

export default OnboardingLayout;
