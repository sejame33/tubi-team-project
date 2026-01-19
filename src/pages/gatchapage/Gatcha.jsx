import { useState } from "react";
import "../../components/gatchacomp/Gatcha.css";
import GatchaVisual from "../../components/gatchacomp/GatchaVisual.jsx";
import GatchaExtraList from "../../components/gatchacomp/GatchaExtraList.jsx";
import GachaResultModal from "../../components/gatchacomp/GachaResultModal.jsx";

const Gatcha = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="gatcha-page">
      {/* 🔽 블러 대상 영역 */}
      <div className={`gatcha-page-blur ${open ? "is-blurred" : ""}`}>
        <div className="gatcha-header">
          <h1 className="gatcha-header-title">스티커 가챠실</h1>
          <p className="gatcha-more">
            목록보기 <img src="/img/gatcha-right-arrow.svg" alt="" />
          </p>
        </div>

        <div className="gatcha-content">
          <GatchaVisual setOpen={setOpen} />
        </div>
      </div>

      {/* 🔼 블러 제외 영역 (모달 전용) */}
      {open && <GachaResultModal onClose={() => setOpen(false)} />}

      <section className="gatcha-btn-list">
        <GatchaExtraList />
      </section>
    </div>
  );
};

export default Gatcha;
