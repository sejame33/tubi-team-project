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
            <h2 className="title">닉네임을 입력해주세요.</h2>

            <div className="input-row">
              <input
                type="text"
                placeholder="닉네임 입력"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={9}
              />

              <button
                className="clear-btn"
                onClick={() => setInput("")}
                disabled={!input}
              >
                <img src="/img/nickname-x-btn.svg" alt="" />
              </button>
            </div>

            <div className="input-line"></div>

            <div className="desc-row">
              <p className="desc">닉네임은 추후에 수정할 수 있어요.</p>
              <span className="count">{input.length}/10</span>
            </div>

            <button
              className="start-btn"
              onClick={handleSubmit}
              disabled={!input.trim()}
            >
              다음
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NicknamePage;
