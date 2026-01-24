import { useState, useEffect, useRef } from "react";
import ChatbotMessage from "./ChatbotMessage";
import ChatbotOptions from "./ChatbotOptions";
import { TOPIC_OPTIONS, TOPIC_ACTIONS } from "../../data/chatbotData.jsx";
import { CHATBOT_RULES } from "../../data/chatbotRules";
import "./ChatBot.css";

const ChatbotBody = ({ topic, messages: externalMessages = [] }) => {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  /** 자유 텍스트용: 룰 → 기본 */
  const findRuleAnswer = (text) => {
    const rule = CHATBOT_RULES.find((r) =>
      r.keywords.some((k) => text.includes(k)),
    );
    return rule ? rule.answer : "해당 질문은 아직 준비되지 않았어요.";
  };

  /** 옵션 클릭용 */
  const createOptionMessages = (text) => {
    const action = TOPIC_ACTIONS[topic]?.[text];

    if (action) {
      if (action.type === "text") {
        return [
          {
            role: "assistant",
            content: <div className="chatbot-bubble">{action.answer}</div>,
            time: getTime(),
          },
        ];
      }

      if (action.type === "link") {
        return [
          {
            role: "assistant",
            content: <div className="chatbot-bubble">{action.answer.text}</div>,
            time: getTime(),
          },
          {
            role: "assistant",
            isCta: true,
            content: action.answer.url,
            ctaLabel: action.answer.ctaLabel,
            time: getTime(),
          },
        ];
      }
    }

    const fallback = findRuleAnswer(text);
    return [
      {
        role: "assistant",
        content: <div className="chatbot-bubble">{fallback}</div>,
        time: getTime(),
      },
    ];
  };

  /** topic 최초 진입 */
  useEffect(() => {
    if (!topic) return;

    setMessages([
      {
        id: Date.now(),
        role: "assistant",
        content: (
          <>
            <p className="chatbot-text">
              <span className="chatbot-topic">“{topic}”</span>에 대해 문의
              주셨군요!
            </p>
            <div className="chatbot-bubble">
              {topic}에 대해 무엇이 궁금하신가요?
            </div>
          </>
        ),
        time: getTime(),
      },
    ]);

    setOptions(TOPIC_OPTIONS[topic] || []);
  }, [topic]);

  /** 외부 메시지 append */
  useEffect(() => {
    if (externalMessages.length === 0) return;

    setMessages((prev) => {
      const ids = new Set(prev.map((m) => m.id));
      const next = externalMessages.filter((m) => !ids.has(m.id));
      return [...prev, ...next];
    });
  }, [externalMessages]);

  /** 자동 스크롤 */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, options, isTyping]);

  /** 옵션 클릭 */
  const onSelectOption = async (text) => {
    const time = getTime();

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", content: text, time },
    ]);

    setOptions([]);
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 1000));

    const newMessages = createOptionMessages(text);

    setMessages((prev) => [
      ...prev,
      ...newMessages.map((m, idx) => ({
        ...m,
        id: Date.now() + idx + 1,
      })),
    ]);

    setIsTyping(false);
  };

  return (
    <>
      <div className="chatbot-chatlist">
        {messages.map((msg) => (
          <ChatbotMessage key={msg.id} message={msg} />
        ))}

        {isTyping && (
          <ChatbotMessage message={{ role: "assistant", isTyping: true }} />
        )}

        <div ref={bottomRef} />
      </div>

      {options.length > 0 && (
        <ChatbotOptions
          topic={topic}
          options={options}
          onSelect={onSelectOption}
        />
      )}
    </>
  );
};

const getTime = () =>
  new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });

export default ChatbotBody;
