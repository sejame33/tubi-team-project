import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNickname } from "../../context/NicknameContext";
import "./NicknamePage.css"; // 스타일 파일 있으면

function NicknamePage() {
  const { setNickname } = useNickname();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setInput("");
  }, []);

  const handleSubmit = () => {
    const value = input.trim();
    if (!value) return;

    setNickname(value);
    navigate("/home");
  };

  return (
    <div className="app-wrapper">
      <div className="app">
        {/* ✅ 헤더/푸터 없이 내용만 중앙 */}
        <main className="main nickname-main">
          <div className="nickname-page">
            <h1 className="logo">NOVA</h1>

            <h2 className="title">닉네임을 입력해주세요</h2>
            <p className="desc">입력한 닉네임으로 맞춤 추천을 해드릴게요</p>

            <input
              type="text"
              placeholder="닉네임 입력"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={10}
            />

            <button
              className="start-btn"
              onClick={handleSubmit}
              disabled={!input.trim()}
            >
              시작하기
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NicknamePage;
