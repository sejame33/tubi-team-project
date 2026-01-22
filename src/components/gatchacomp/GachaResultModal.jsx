import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { boom } from "./boom";

import "./GachaResultModal.css";
import { gachaItems } from "../data/gachaData.jsx";
import { useNavigate } from "react-router-dom";
import "../../style/Dot.css";

const GachaResultModal = ({ onClose }) => {
  const [item, setItem] = useState(null);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const navigate = useNavigate();

  useEffect(() => {
    boom();
    // 가챠 아이템 랜덤
    const random = gachaItems[Math.floor(Math.random() * gachaItems.length)];
    setItem(random);

    // resize 대응
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!item) return null;

  return (
    <>
      <div className="gacha-backdrop" role="dialog" aria-modal="true">
        <div className="gacha-modal">
          <button
            className="gacha-modal-close-btn"
            onClick={onClose}
            aria-label="닫기"
          >
            <img src="/img/gatcha-modal-close-btn.svg" alt="" />
          </button>

          <p className="gacha-modal-title">축하드려요!</p>

          <div className="gacha-result-slot">
            <img
              src={item.logo}
              alt={item.name}
              className="gacha-result-image"
            />
          </div>

          <div className="sticker-gatcha-box">
            <div className="sticker-badge">{item.no}</div>
            <p className="sticker-desc">
              {item.name} <span>획득!</span>
            </p>
          </div>

          <button
            className="sticker-list-btn impl-anchor"
            data-impl
            style={{
              "--impl-right": "38px",
              "--impl-top": "12px",
            }}
            onClick={() => navigate("/home/gatcha/stickercollection")}
          >
            스티커 목록 보기
          </button>
        </div>
      </div>
    </>
  );
};

export default GachaResultModal;
