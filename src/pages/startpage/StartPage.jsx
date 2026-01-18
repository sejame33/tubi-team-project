import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/1");
    }, 1800); // ✅ 1.8초 (원하면 1200~2500 정도로 바꾸면 자연스러움)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="app-wrapper">
      <div className="app">
        <main className="main start-main">
          <div className="start-page">
            {/* 로고/스플래시 이미지 */}
            <img className="start-logo" src="/img/start-logo.svg" alt="logo" />
            <p className="start-sub">잠시만요, 시작할게요!</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StartPage;
