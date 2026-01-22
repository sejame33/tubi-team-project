import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OnboardingFooter.css";

const OnboardingFooter = ({
  lastCtaText = "로그인으로 시작하기", // ✅ 4페이지 큰 버튼 텍스트 커스텀
  lastCtaTo = "/login", // ✅ 4페이지 큰 버튼 이동 경로 커스텀
  arrowImg = "/img/onboarding-next-arrow.svg", // ✅ 화살표 이미지 경로
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const nextMap = {
    "/onboarding/1": "/onboarding/2",
    "/onboarding/2": "/onboarding/3",
    "/onboarding/3": "/onboarding/4",
    "/onboarding/4": lastCtaTo,
  };

  const isOnboarding = pathname.startsWith("/onboarding/");
  if (!isOnboarding) return null; // ✅ 온보딩이 아니면 푸터 자체 안 보이게

  const nextPath = nextMap[pathname];
  const isLast = pathname === "/onboarding/4";

  const handleNext = () => {
    if (!nextPath) return;
    navigate(nextPath);
  };

  return (
    <footer className="ob-footer">
      {!isLast ? (
        // ✅ 1~3 페이지: 작은 NEXT + 화살표
        <button
          className="ob-next-icon impl-anchor"
          onClick={handleNext}
          type="button"
          data-impl
          style={{
            "--impl-right": "20px",
            "--impl-top": "-3px",
          }}
        >
          <span className="ob-next-text">NEXT</span>
          <img
            className="ob-next-arrow"
            src={arrowImg}
            alt=""
            aria-hidden="true"
          />
        </button>
      ) : (
        // ✅ 4 페이지: 큰 CTA 버튼 (텍스트 커스텀 가능)
        <button
          className="ob-cta impl-anchor"
          onClick={handleNext}
          type="button"
          data-impl
        >
          {lastCtaText}
        </button>
      )}
    </footer>
  );
};

export default OnboardingFooter;
