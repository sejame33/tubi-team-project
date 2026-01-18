import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";

function LogInPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);

    // ✅ 여기에 실제 로그인 로직 붙일 수 있음
    // 지금은 데모로 500ms 뒤 이동
    setTimeout(() => {
      navigate("/nickname");
      setLoading(false);
    }, 500);
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        <main className="main login-main">
          <div className="login-page">
            <h2 className="title">로그인</h2>
            <p className="desc">계정을 연결하고 시작해요.</p>

            <button
              className="login-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "처리중..." : "로그인하고 시작하기"}
            </button>

            <button
              className="back-btn"
              onClick={() => navigate("/onboarding/1")}
            >
              온보딩 다시보기
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LogInPage;
