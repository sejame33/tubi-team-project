import { useState, useEffect } from "react";
import ChatbotHeader from "./ChatbotHeader.jsx";
import ChatbotBody from "./ChatbotBody.jsx";
import ChatbotIntro from "./ChatbotIntro.jsx";
import ChatbotInput from "./ChatbotInput.jsx";
import { CHATBOT_RULES } from "../../data/chatbotRules";
import "./Chatbot.css";

const ChatbotContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("intro");
  const [topic, setTopic] = useState(null);
  const [messages, setMessages] = useState([]);

  /** ✅ 모달 열릴 때 배경 스크롤 차단 */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /** ✅ 완전 종료 (X / backdrop 공용) */
  const handleCloseChat = () => {
    setIsOpen(false);
    setMode("intro");
    setTopic(null);
    setMessages([]);
  };

  const handleStartChat = (selectedTopic) => {
    setTopic(selectedTopic);
    setTimeout(() => setMode("chat"), 200);
  };

  /** 처음으로 버튼 */
  const handleResetChat = () => {
    setTopic(null);
    setMode("intro");
    setMessages([]);
  };

  /** 입력 메시지 처리 (기존 로직 유지) */
  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const time = getTime();

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
      time,
    };

    setMessages((prev) => [...prev, userMessage]);

    await new Promise((r) => setTimeout(r, 1000));

    const matchedRule = CHATBOT_RULES.find((rule) =>
      rule.keywords.some((k) => text.includes(k)),
    );

    const answer = matchedRule
      ? matchedRule.answer
      : "해당 질문은 아직 준비되지 않았어요.";

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        role: "assistant",
        content: <div className="chatbot-bubble">{answer}</div>,
        time: getTime(),
      },
    ]);
  };

  return (
    <>
      <button
        className="chatbot-fab"
        onClick={() => setIsOpen(true)}
        aria-label="chatbot open"
      />

      {isOpen && (
        <>
          {/* 배경 블러 + 딤 */}
          <div className="chatbot-backdrop" onClick={handleCloseChat} />

          <section className="chatbot-wrapper" role="dialog" aria-modal="true">
            <ChatbotHeader
              onClose={handleCloseChat} // ✅ 여기
              onReset={handleResetChat}
            />

            <div className="chatbot-body">
              {mode === "intro" && (
                <ChatbotIntro onStartChat={handleStartChat} />
              )}

              {mode === "chat" && (
                <ChatbotBody topic={topic} messages={messages} />
              )}
            </div>

            <ChatbotInput onSend={handleSendMessage} />
          </section>
        </>
      )}
    </>
  );
};

const getTime = () =>
  new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });

export default ChatbotContainer;
