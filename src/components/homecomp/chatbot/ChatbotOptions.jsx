const ChatbotOptions = ({ options, onSelect }) => {
  return (
    <div className="chatbot-options">
      {options.map((opt, idx) => (
        <button
          key={idx}
          className="chatbot-option"
          onClick={() => onSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default ChatbotOptions;
