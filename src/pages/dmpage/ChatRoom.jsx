import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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
  const bottomRef = useRef(null);

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

  return (
    <div className="chat-room">
      <div className="chat-body">
        {messages.map((msg, index) => {
          const prev = messages[index - 1];
          const next = messages[index + 1];

          // 그룹 시작
          const isFirstOfGroup =
            !prev || prev.sender !== msg.sender || prev.time !== msg.time;

          // 그룹 끝
          const isLastOfGroup =
            !next || next.sender !== msg.sender || next.time !== msg.time;

          return (
            <div key={msg.id} className={`chat-row ${msg.sender}`}>
              {/* 왼쪽: 프로필 슬롯 */}
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

              {/* 오른쪽: 이름 + 말풍선 */}
              <div className="message-col">
                {/* 이름 + 뱃지 (프로필 옆, 한 줄) */}
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

                  {/* 시간은 그룹 마지막만 */}
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지 보내기"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          {/* 이모티콘 버튼 */}
          <button
            type="button"
            className="emoji-btn"
            onClick={() => {
              // 나중에 이모지 패널 연결
              console.log("emoji click");
            }}
          >
            <img src="/img/dm-smile.svg" alt="emoji" />
          </button>
        </div>

        <button onClick={sendMessage} className="send-btn">
          <img src="/img/dm-send.svg" alt="send" />
        </button>
      </footer>
    </div>
  );
}

export default ChatRoom;
