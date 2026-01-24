import "./ChatBot.css";
import ChatbotChip from "./ChatbotChip";
import { useNickname } from "../../../context/NicknameContext";

const QUICK_TOPICS = [
  ["마이아티스트", "설정", "굿즈샵"],
  ["이벤트", "가챠아이템"],
];

const ChatbotIntro = ({ onStartChat }) => {
  const { nickname } = useNickname();

  return (
    <div className="chatbot-intro">
      <div className="chatbot-avatar">
        <img src="/img/chatbot-tubi.svg" alt="" />
      </div>

      <div className="chatbot-member-box">
        <p className="chatbot-greeting">
          <span className="chatbot-nickname">{nickname || "고객"}</span>
          님, 안녕하세요.
        </p>
        <p className="chatbot-question">튜비 이용 중 궁금한 점이 생기셨나요?</p>
      </div>

      <div className="chatbot-quick">
        {QUICK_TOPICS.map((row, rowIdx) => (
          <div className="chatbot-quick-row" key={rowIdx}>
            {row.map((topic, idx) => (
              <ChatbotChip key={idx} label={topic} onClick={onStartChat} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotIntro;
