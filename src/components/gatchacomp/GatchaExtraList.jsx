import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gatcha.css";
import { GATCHA_EXTRA_ACTIONS } from "./GatchaExtraActions";

const STORAGE_KEY = "gatcha_extra_claims";

const getTodayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const GatchaExtraList = () => {
  const navigate = useNavigate();
  const [claimed, setClaimed] = useState({});

  /** ✅ 최초 로드 시 오늘 수령 기록 불러오기 */
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const parsed = JSON.parse(raw);
    const today = getTodayKey();

    setClaimed(parsed[today] || {});
  }, []);

  /** ✅ 보상 지급 + 저장 */
  const grantReward = (action) => {
    const today = getTodayKey();

    setClaimed((prev) => {
      const updated = { ...prev, [action.id]: true };

      const raw = localStorage.getItem(STORAGE_KEY);
      const all = raw ? JSON.parse(raw) : {};

      all[today] = updated;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));

      return updated;
    });

    alert(`${action.reward} 지급되었습니다!`);
  };

  /** ✅ 클릭 핸들러 */
  const handleClick = async (action) => {
    // 이미 오늘 받았으면 차단
    if (claimed[action.id]) return;

    // 📱 공유
    if (action.type === "share") {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "튜비 가챠",
            text: action.shareText,
            url: action.url,
          });
          grantReward(action);
        } catch (_) {
          // 취소 시 지급 안 함
        }
      } else {
        // 💻 PC fallback
        await navigator.clipboard.writeText(action.url);
        alert("링크가 복사되었습니다.");
        grantReward(action);
      }
      return;
    }

    // 🌐 외부 링크
    if (action.type === "external") {
      window.open(action.url, "_blank", "noopener,noreferrer");
      grantReward(action);
      return;
    }

    // 🧭 내부 이동
    if (action.type === "internal") {
      navigate(action.url);
      grantReward(action);
    }
  };

  return (
    <div className="gatcha-extra-box">
      <h3 className="gatcha-extra-title">뽑기권을 더 받고 싶다면?</h3>

      <ul className="gatcha-extra-list">
        {GATCHA_EXTRA_ACTIONS.map((item) => (
          <li className="gatcha-extra-item" key={item.id}>
            <div className="gatcha-extra-minibox">
              <p className="gatcha-extra-text">{item.label}</p>
              <span className="gatcha-extra-sub">{item.reward}</span>
            </div>

            <button
              className="gatcha-extra-btn"
              disabled={claimed[item.id]}
              onClick={() => handleClick(item)}
            >
              {claimed[item.id] ? "완료" : "받기"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatchaExtraList;
