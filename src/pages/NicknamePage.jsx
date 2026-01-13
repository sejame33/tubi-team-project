import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNickname } from "../context/NicknameContext";

function NicknamePage() {
  const { setNickname } = useNickname();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // ✅ 페이지 진입할 때마다 input 초기화
  useEffect(() => {
    setInput("");
  }, []);

  const handleSubmit = () => {
    if (!input.trim()) return;

    setNickname(input.trim());
    navigate("/home");
  };

  return (
    <div className="nickname-page">
      <h1 className="logo">LIVE STAGE</h1>

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
  );
}

export default NicknamePage;
