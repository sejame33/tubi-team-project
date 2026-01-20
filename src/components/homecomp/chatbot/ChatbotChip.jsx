const ChatbotChip = ({ label, onClick }) => {
  return (
    <button className="chatbot-chip" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default ChatbotChip;
