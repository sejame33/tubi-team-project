import { useEffect, useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductCategory from "../../../components/shopcomp/ProductCategory";
import SettingsList from "../../../components/mycomp/SettingsList";
import StickerSwiper from "../../../components/mycomp/StickerSwiper";
import ShopProductBannerSwiper from "../../../components/shopcomp/ShopProductBannerSwiper";

import "../My.css";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

const MySticker = () => {
  const sheetRef = useRef(null);
  const handleRef = useRef(null);

  const dragging = useRef(false);
  const startY = useRef(0);
  const startT = useRef(0);
  const curT = useRef(0);

  const snapOpen = useRef(0);
  const snapPeek = useRef(0);

  const moved = useRef(false);

  const navigate = useNavigate();

  const categories = useMemo(
    () => [
      { value: "PLAVE", label: "PLAVE" },
      { value: "APOKI", label: "APOKI" },
      { value: "LUVDIA", label: "LUVDIA" },
      { value: "HEBI", label: "HEBI" },
      { value: "MEECHU", label: "MEECHU" },
      { value: "HONEYZ", label: "HONEYZ" },
      { value: "IRISE", label: "IRISE" },
      { value: "StelLive", label: "StelLive" },
    ],
    [],
  );

  const [active, setActive] = useState("PLAVE");

  const stickers = useMemo(
    () => [
      {
        id: 1,
        brand: "PLAVE",
        name: "ASTERUM",
        imageUrl: "/img/sticker1.svg",
        category: "PLAVE",
      },
      {
        id: 2,
        brand: "PLAVE",
        name: "솜바꼭질",
        imageUrl: "/img/sticker2.svg",
        category: "PLAVE",
      },
      {
        id: 3,
        brand: "PLAVE",
        name: "인형 예준",
        imageUrl: "/img/sticker3.svg",
        category: "PLAVE",
      },
      {
        id: 4,
        brand: "PLAVE",
        name: "인형 노아",
        imageUrl: "/img/sticker4.svg",
        category: "PLAVE",
      },
      {
        id: 5,
        brand: "PLAVE",
        name: "인형 밤비",
        imageUrl: "/img/sticker5.svg",
        category: "PLAVE",
      },
      {
        id: 6,
        brand: "PLAVE",
        name: "인형 은호",
        imageUrl: "/img/sticker6.svg",
        category: "PLAVE",
      },
      {
        id: 7,
        brand: "PLAVE",
        name: "인형 하민",
        imageUrl: "/img/sticker7.svg",
        category: "PLAVE",
      },
    ],
    [],
  );

  const filtered = useMemo(
    () => stickers.filter((s) => (active ? s.category === active : true)),
    [stickers, active],
  );

  const settings = useMemo(
    () => [
      {
        key: "profile",
        label: "내 정보",
        icon: "/img/setting1.svg",
        to: "/my/profile",
      },
      {
        key: "wish",
        label: "내 관심상품",
        icon: "/img/setting2.svg",
        to: "/my/wish",
      },
      {
        key: "setting",
        label: "환경설정",
        icon: "/img/setting3.svg",
        to: "/my/setting",
      },
      {
        key: "notice",
        label: "공지사항",
        icon: "/img/setting4.svg",
        to: "/my/notice",
      },
      { key: "cs", label: "고객센터", icon: "/img/setting5.svg", to: "/my/cs" },
    ],
    [],
  );

  const banners = [
    {
      background: "linear-gradient(90deg, #003B66 0%, #2B0B66 100%)",
      subtitle: { type: "text", value: "얼마 안 남았어요!" },
      title: "VIP 까지\n앞으로 3개월!",
      productImage: "/img/my-banner1.svg",
    },
    {
      background: "linear-gradient(90deg, #FF3D8F 0%, #FFD16A 100%)",
      subtitle: { type: "text", value: "튜비 스티커 가챠" },
      title: "나만의 튜비를\n만들어 봐요!",
      productImage: "/img/my-banner2.svg",
      url: "/home/gatcha",
    },
  ];
  const setT = (px, animate) => {
    const el = sheetRef.current;
    if (!el) return;
    el.style.transition = animate
      ? "transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1.0)"
      : "none";
    el.style.transform = `translateY(${px}px)`;
    curT.current = px;
  };

  const recalc = () => {
    const vh = window.innerHeight;
    snapOpen.current = 0;
    snapPeek.current = Math.round(vh * 0.65);
    setT(snapPeek.current, true);
  };

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  useEffect(() => {
    const handleEl = handleRef.current;
    if (!handleEl) return;

    const getY = (e) =>
      e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;

    const onStart = (e) => {
      // ✅ 텍스트 선택이나 이미지 드래그 방지
      if (e.type === "mousedown" && e.button !== 0) return;

      dragging.current = true;
      moved.current = false;
      startY.current = getY(e);
      startT.current = curT.current;

      setT(startT.current, false);
    };

    const onMove = (e) => {
      if (!dragging.current) return;

      const delta = getY(e) - startY.current;

      // ✅ 임계값 설정: 5px 이상 움직였을 때만 시트 이동 시작 (미세 터치 무시)
      if (Math.abs(delta) > 5) {
        moved.current = true;
        const next = startT.current + delta;
        const maxDown = snapPeek.current + 50; // 아래로 과도하게 내려가는 것 방지
        setT(clamp(next, snapOpen.current, maxDown), false);
      }

      // 시트 드래그 중일 때는 브라우저 스크롤 금지
      if (moved.current && e.cancelable) e.preventDefault();
    };

    const onEnd = () => {
      if (!dragging.current) return;
      dragging.current = false;

      if (!moved.current) return;

      const mid = (snapOpen.current + snapPeek.current) / 2;
      const now = curT.current;

      // 스냅 포인트로 이동
      if (now <= mid) setT(snapOpen.current, true);
      else setT(snapPeek.current, true);
    };

    // ✅ 이벤트 등록: mousedown/touchstart는 오직 'handleEl'에만!
    handleEl.addEventListener("touchstart", onStart, { passive: false });
    handleEl.addEventListener("mousedown", onStart);

    // move와 end는 부드러운 연결을 위해 window에 등록
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);

    return () => {
      handleEl.removeEventListener("touchstart", onStart);
      handleEl.removeEventListener("mousedown", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
    };
  }, []);

  return (
    <section
      className="bottomSheet"
      ref={sheetRef}
      style={{ touchAction: "none" }}
    >
      {/* ✋ 오직 이 핸들 부분을 잡아야 시트가 움직입니다 */}
      <div className="sheetHandle" ref={handleRef} style={{ cursor: "grab" }} />

      <div className="sheetBody" style={{ touchAction: "pan-y" }}>
        <div
          style={{
            padding: "35px 16px 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>
            나의 스티커
          </h2>
          <button
            className="impl-anchor"
            data-impl
            type="button"
            onClick={() => navigate("/home/gatcha/stickercollection")}
            style={{
              border: 0,
              background: "transparent",
              fontSize: 18,
              fontWeight: 500,
              color: "#656565",
              "--impl-right": "-8px",
              "--impl-top": "4px",
            }}
          >
            더보기 ›
          </button>
        </div>

        {/* 내부 요소들: 이제 이 부분들을 드래그해도 시트가 올라오지 않습니다 */}
        <ProductCategory
          categories={categories}
          active={active}
          onChange={setActive}
        />
        <StickerSwiper
          items={filtered}
          onItemClick={(it) => console.log("sticker", it.id)}
        />
        <ShopProductBannerSwiper banners={banners} />
        <SettingsList items={settings} />

        <div className="sheetSpacer" style={{ height: "100px" }} />
      </div>
    </section>
  );
};

export default MySticker;
