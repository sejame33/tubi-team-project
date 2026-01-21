import { useState, useRef } from "react";

const ChatbotInput = ({ onSend }) => {
  const [value, setValue] = useState("");
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  /** + 버튼 클릭 */
  const handleClickPlus = () => {
    fileInputRef.current?.click();
  };

  /** 파일 선택 */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 지금은 콘솔 확인용
    console.log("첨부 파일:", file);

    // TODO: 파일 메시지로 보내고 싶으면 여기서 처리
    // onSend({ type: "file", file });

    e.target.value = ""; // 같은 파일 재선택 가능하게
  };

  return (
    <div className="chatbot-input">
      <div className="chatbot-input-wrap">
        {/* 숨겨진 파일 input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.pdf,.doc,.docx,.zip"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <button
          className="chatbot-plus"
          data-impl
          type="button"
          onClick={handleClickPlus}
          style={{
            "--impl-right": "-2px",
            "--impl-top": "-8px",
          }}
        >
          +
        </button>

        <input
          type="text"
          value={value}
          placeholder=""
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
      </div>

      <button
        className="chatbot-send impl-anchor"
        data-impl
        type="button"
        onClick={handleSend}
        style={{
          "--impl-right": "-5px",
          "--impl-top": "0px",
        }}
      >
        <img src="/img/chatbot-send-icon.svg" alt="전송" />
      </button>
    </div>
  );
};

export default ChatbotInput;
