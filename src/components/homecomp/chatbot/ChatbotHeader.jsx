import "./Chatbot.css";

const ChatbotHeader = ({ onClose, onReset }) => {
  const now = new Date();
  const today = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(
    2,
    "0",
  )}.${String(now.getDate()).padStart(2, "0")}`;

  return (
    <>
      {/* 상단 보라색 헤더 */}
      <header className="chatbot-header">
        <button className="chatbot-reset" onClick={onReset}>
          처음으로
          <img src="/img/chatbot-return-icon.svg" alt="" />
        </button>

        <button className="chatbot-close" onClick={onClose}>
          <img src="/img/chatbot-close-icon.svg" alt="" />
        </button>
      </header>

      {/* 날짜 구분선 */}
      <div className="chatbot-date-box">
        <span className="chatbot-line" />
        <p className="chatbot-date">{today}</p>
        <span className="chatbot-line" />
      </div>

      {/* 시스템 메시지 */}
      <p className="chatbot-system">
        <span>AI</span> 챗봇과 연결되었습니다
      </p>
    </>
  );
};

export default ChatbotHeader;
