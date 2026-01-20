import { useNavigate } from "react-router-dom";

const ChatbotMessage = ({ message }) => {
  const navigate = useNavigate();

  const isAssistant = message.role === "assistant";
  const isTyping = message.isTyping === true;
  const isCta = message.isCta === true;

  /** ✅ CTA 버튼 메시지 (SPA 이동) */
  if (isAssistant && isCta) {
    return (
      <div className="chatbot-row assistant cta">
        <button
          type="button"
          className="chatbot-cta-btn"
          onClick={() => navigate(message.content)}
        >
          {message.ctaLabel || "바로가기"}
        </button>
      </div>
    );
  }

  /** 기존 메시지 */
  return (
    <div className={`chatbot-row ${message.role}`}>
      {isAssistant ? (
        <div className="chatbot-assistant-stack">
          <div className="chatbot-avatar-small">
            <img src="/img/chatbot-tubi-chat.png" alt="" />
          </div>

          {isTyping ? (
            <div className="chatbot-bubble loading">
              <div className="typing-indicator">
                <span />
                <span />
                <span />
              </div>
            </div>
          ) : (
            message.content
          )}
        </div>
      ) : (
        <div className="chatbot-user-wrap">
          <div className="chatbot-bubble">{message.content}</div>
          <span className="chatbot-time">{message.time}</span>
        </div>
      )}
    </div>
  );
};

export default ChatbotMessage;
