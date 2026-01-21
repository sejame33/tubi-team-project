import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";

function LogInPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const socialButtons = [
    { src: "/img/login-kakaotalk.svg", className: "kakao" },
    { src: "/img/login-naver.svg", className: "naver" },
    { src: "/img/login-google.svg", className: "google" },
    { src: "/img/login-apple.svg", className: "apple" },
  ];

  const handleLogin = () => {
    // ✅ 로딩 딜레이 없이 바로 다음 페이지로 이동
    navigate("/nickname");
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        <main className="main login-main">
          <div className="login-page">
            <p className="desc">
              노바랑 같이 <span>점</span>을 따라가봐요
            </p>

            <img
              className="login-movetubi"
              src="/img/login-movetubi.gif"
              alt="tubi"
            />
            <div className="textBox">
              <h3 className="title">
                지금 로그인하고
                <br />
                다양한 콘텐츠를 만나보세요!
              </h3>
              <p className="text">팬덤 일정부터 굿즈까지 한번에</p>
            </div>

            <div className="textballonBox">
              <img
                className="login-jointextballon"
                src="/img/login-jointextballon.png"
                alt="login-jointextballon"
              />
              <div className="inner">
                <img
                  className="login-innertext-img"
                  src="/img/login-innertext-img.svg"
                  alt="login-innertext-img"
                />
                <p className="innertext">3초만에 빠른 가입하기</p>
              </div>
            </div>

            {/* ✅ 수정됨: 중복된 div 제거하고 조건문 추가 */}
            <div className="buttonBox">
              {socialButtons.map((btn, index) => (
                <button
                  key={index}
                  className={`social-btn ${btn.className} impl-anchor`}
                  onClick={handleLogin}
                  data-impl
                  style={{
                    "--impl-right": "-8px",
                    "--impl-top": "0px",
                  }}
                >
                  {/* 이미지가 있으면(src) 이미지를 보여주고, 없으면 글자(label)를 보여줘! */}
                  {btn.src ? <img src={btn.src} alt={btn.alt} /> : btn.label}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LogInPage;
