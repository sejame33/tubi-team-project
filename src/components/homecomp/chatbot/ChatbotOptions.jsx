import { IMPLEMENTED_OPTIONS } from "../../data/chatbotData";

const ChatbotOptions = ({ options, onSelect, topic }) => {
  return (
    <div className="chatbot-options">
      {options.map((opt, idx) => {
        const isImplemented = IMPLEMENTED_OPTIONS[topic]?.includes(opt);

        return (
          <button
            key={idx}
            className="chatbot-option impl-anchor"
            onClick={() => onSelect(opt)}
            {...(isImplemented && { "data-impl": true })}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};

export default ChatbotOptions;
