import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/gatchacomp/Gatcha.css";
import GatchaVisual from "../../components/gatchacomp/GatchaVisual.jsx";
import GatchaExtraList from "../../components/gatchacomp/GatchaExtraList.jsx";
import GachaResultModal from "../../components/gatchacomp/GachaResultModal.jsx";

const Gatcha = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // 2. 네비게이트 함수 선언

  /** ✅ 모달 열릴 때 뒤 스크롤 차단 */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="gatcha-page">
      {/* 🔽 블러 대상 영역 */}
      <div className={`gatcha-page-blur ${open ? "is-blurred" : ""}`}>
        <div
          className="gatcha-header impl-anchor"
          data-impl
          style={{
            "--impl-right": "10px",
            "--impl-top": "42px",
          }}
        >
          <h1 className="gatcha-header-title">오늘의 스티커는?</h1>
          <p
            className="gatcha-more"
            onClick={() => navigate("/home/gatcha/stickercollection")}
            style={{ cursor: "pointer" }}
          >
            목록보기 <img src="/img/gatcha-right-arrow.svg" alt="" />
          </p>
        </div>

        <div className="gatcha-content">
          <GatchaVisual setOpen={setOpen} />
        </div>
      </div>

      {/* 🔼 모달 */}
      {open && <GachaResultModal onClose={() => setOpen(false)} />}

      <section className="gatcha-btn-list">
        <GatchaExtraList />
      </section>
    </div>
  );
};

export default Gatcha;
