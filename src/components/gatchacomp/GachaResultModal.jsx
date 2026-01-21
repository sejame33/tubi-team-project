import { useEffect, useState } from "react";
import "./GachaResultModal.css";
import { gachaItems } from "../data/gachaData.jsx";
import "../../style/Dot.css";

const GachaResultModal = ({ onClose }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const random = gachaItems[Math.floor(Math.random() * gachaItems.length)];
    setItem(random);
  }, []);

  if (!item) return null;

  return (
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

        {/* 결과 이미지 */}
        <div className="gacha-result-slot">
          <img src={item.logo} alt={item.name} className="gacha-result-image" />
        </div>

        {/* 결과 텍스트 */}
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
        >
          스티커 목록 보기
        </button>
      </div>
    </div>
  );
};

export default GachaResultModal;
