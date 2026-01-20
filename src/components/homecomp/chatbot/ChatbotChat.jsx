import ChatbotMessage from "./ChatbotMessage.jsx";
import ChatbotOptions from "./ChatbotOptions.jsx";

const ChatbotChat = ({ messages, onSend }) => {
  return (
    <>
      {messages.map((msg) => (
        <div key={msg.id}>
          <ChatbotMessage message={msg} />
          {msg.options?.length > 0 && (
            <ChatbotOptions options={msg.options} onSelect={onSend} />
          )}
        </div>
      ))}
    </>
  );
};

export default ChatbotChat;
