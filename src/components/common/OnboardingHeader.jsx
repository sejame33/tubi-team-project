import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OnboardingHeader.css";

const OnboardingHeader = ({ backImg = "/img/left-arrow-dark-8x16.svg" }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 온보딩 페이지 번호 구하기: /onboarding/1~4
  const match = pathname.match(/^\/onboarding\/([1-4])\/?$/);
  const step = match ? Number(match[1]) : null;

  const showProgress = step && step >= 2; // 2,3,4에서만 progress
  const filledCount = step ? Math.max(0, step - 1) : 0; // 2->1, 3->2, 4->3
  const showSkip = step && step <= 3; // ✅ 1~3에서만 skip, 4에서는 숨김

  const handleBack = () => {
    if (!step) return;

    if (step === 1) {
      navigate("/"); // ✅ 첫 온보딩에서 뒤로가기면 StartPage로
      return;
    }

    navigate(`/onboarding/${step - 1}`);
  };

  return (
    <header className="ob-header">
      <div className="ob-header-inner">
        {/* ✅ Left: Back */}
        <button
          type="button"
          className="ob-back impl-anchor"
          data-impl
          onClick={handleBack}
          aria-label="뒤로가기"
          style={{
            "--impl-right": "20px",
            "--impl-top": "5px",
          }}
        >
          <img src={backImg} alt="" aria-hidden="true" />
        </button>

        {/* ✅ Right: Skip (1~3 only) */}
        {showSkip ? (
          <button
            type="button"
            className="ob-skip impl-anchor"
            data-impl
            onClick={() => navigate("/login")}
            style={{
              "--impl-right": "-8px",
              "--impl-top": "0px",
            }}
          >
            Skip
          </button>
        ) : (
          <div className="ob-right-space" />
        )}
      </div>

      {/* ✅ 2~4에서만 진행바 표시 */}
      {showProgress && (
        <div className="ob-progress" aria-label="onboarding progress">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={`ob-seg ${i < filledCount ? "is-filled" : ""}`}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default OnboardingHeader;
