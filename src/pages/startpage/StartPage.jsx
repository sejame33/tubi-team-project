import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

function StartPage() {
  const navigate = useNavigate();

  const disableImplDot = () => {
    document.body.classList.add("impl-off");
  };

  const enableImplDot = () => {
    document.body.classList.remove("impl-off");
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/1");
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
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
                  src="/img/tubistart.png"
                  alt="NOVA Start Background"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
