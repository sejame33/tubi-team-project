import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import { chatData } from "../../components/dmcomp/ChatData.jsx";
import "./ChatRoom.css";

function ChatRoom() {
  const navigate = useNavigate();
  const { artistId } = useParams();
  const artistInfo = chatData[artistId];

  if (!artistInfo) {
    return (
      <>
        <div className="chat-error-message">
          <img src="/img/chat-error-tubi.svg" alt="" />
          <p className="chat-error-title">
            현재 해당 페이지를
            <br />
            찾을 수 없어요
          </p>
          <p className="chat-error-text">나중에 다시 시도해주세요</p>
        </div>

        <div className="chat-error-btn-wrap">
          <button className="chat-error-btn" onClick={() => navigate(-1)}>
            다시 돌아가기
          </button>
        </div>
      </>
    );
  }

  const [messages, setMessages] = useState(artistInfo.initialMessages);
  const [input, setInput] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const time = new Date().toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "me", text: input, time },
    ]);
    setInput("");
    setShowEmoji(false);

    setTimeout(() => {
      const reply =
        artistInfo.replies[
          Math.floor(Math.random() * artistInfo.replies.length)
        ];

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "artist", text: reply, time },
      ]);
    }, 1200);
  };

  const handleEmojiClick = (emojiData) => {
    const cursorPos = inputRef.current.selectionStart;

    const newText =
      input.slice(0, cursorPos) + emojiData.emoji + input.slice(cursorPos);

    setInput(newText);
    setShowEmoji(false);

    requestAnimationFrame(() => {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        cursorPos + emojiData.emoji.length,
        cursorPos + emojiData.emoji.length,
      );
    });
  };

  return (
    <div className="chat-room">
      <div className="chat-body">
        {messages.map((msg, index) => {
          const prev = messages[index - 1];
          const next = messages[index + 1];

          const isFirstOfGroup =
            !prev || prev.sender !== msg.sender || prev.time !== msg.time;

          const isLastOfGroup =
            !next || next.sender !== msg.sender || next.time !== msg.time;

          return (
            <div key={msg.id} className={`chat-row ${msg.sender}`}>
              {msg.sender === "artist" && (
                <div className="profile-slot">
                  {isFirstOfGroup && (
                    <div className="profile-frame">
                      <img
                        src={artistInfo.profileImage}
                        alt={artistInfo.name}
                        className="profile-img"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="message-col">
                {msg.sender === "artist" && isFirstOfGroup && (
                  <div className="artist-header">
                    <span className="artist-name">{artistInfo.name}</span>
                    <img
                      src="/img/dm-purple-check.svg"
                      alt=""
                      className="artist-charm"
                    />
                  </div>
                )}

                <div className="bubble-box">
                  <div className={`bubble ${msg.sender}`}>{msg.text}</div>

                  {isLastOfGroup && (
                    <span className={`time ${msg.sender}`}>{msg.time}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>

      <footer className="chat-input">
        <div className="chat-input-box">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지 보내기"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            type="button"
            className="emoji-btn impl-anchor"
            data-impl
            onClick={() => setShowEmoji((prev) => !prev)}
            style={{
              "--impl-right": "-3px",
              "--impl-top": "0px",
            }}
          >
            <img src="/img/dm-smile.svg" alt="emoji" />
          </button>

          {showEmoji && (
            <div className="emoji-picker-wrapper">
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                height={350}
                width={300}
              />
            </div>
          )}
        </div>

        <button
          onClick={sendMessage}
          className="send-btn impl-anchor"
          data-impl
          style={{
            "--impl-right": "5px",
            "--impl-top": "11px",
          }}
        >
          <img src="/img/dm-send.svg" alt="send" />
        </button>
      </footer>
    </div>
  );
}

export default ChatRoom;
