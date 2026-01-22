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
            <div className="start-text-group">
              <p className="start-subtitle">당신과 아이돌을 이어주는</p>

              <img
                className="start-logo"
                src="/img/start-page-logo.svg"
                alt="NOVA Start logo"
              />

              <img
                className="startpage-image"
                src="/img/tubicommon.png"
                alt="NOVA Start Background"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StartPage;
