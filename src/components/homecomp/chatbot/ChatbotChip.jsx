const ChatbotChip = ({ label, onClick, impl }) => {
  return (
    <button
      className="chatbot-chip impl-anchor"
      data-impl
      onClick={() => onClick(label)}
      {...(impl && { "data-impl": true })}
    >
      {label}
    </button>
  );
};

export default ChatbotChip;
