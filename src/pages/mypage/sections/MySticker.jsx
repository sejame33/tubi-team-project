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
    },
  ];

  const setT = (px, animate) => {
    const el = sheetRef.current;
    if (!el) return;
    el.style.transition = animate ? "transform 260ms ease-out" : "none";
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
      moved.current = false;
      dragging.current = true;
      startY.current = getY(e);
      startT.current = curT.current || snapPeek.current;

      setT(startT.current, false);

      if (e.cancelable) e.preventDefault();
    };

    const onMove = (e) => {
      if (!dragging.current) return;

      const delta = getY(e) - startY.current;
      if (Math.abs(delta) > 6) moved.current = true;

      const next = startT.current + delta;
      const maxDown = snapPeek.current + Math.round(window.innerHeight * 0.12);
      setT(clamp(next, snapOpen.current, maxDown), false);

      if (moved.current && e.cancelable) e.preventDefault();
    };

    const onEnd = () => {
      if (!dragging.current) return;
      dragging.current = false;

      if (!moved.current) return;

      const mid = (snapOpen.current + snapPeek.current) / 2;
      const now = curT.current;

      if (now <= mid) setT(snapOpen.current, true);
      else setT(snapPeek.current, true);
    };

    handleEl.addEventListener("touchstart", onStart, { passive: false });
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd);

    handleEl.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);

    return () => {
      handleEl.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);

      handleEl.removeEventListener("mousedown", onStart);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
    };
  }, []);
  return (
    <section className="bottomSheet" ref={sheetRef}>
      <div className="sheetHandle" ref={handleRef} />
      <div className="sheetBody">
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
            type="button"
            onClick={() => navigate("/my/stickers")}
            style={{
              border: 0,
              background: "transparent",
              fontSize: 18,
              fontWeight: 500,
              color: "#656565",
            }}
          >
            더보기 ›
          </button>
        </div>

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

        <div className="sheetSpacer" />
      </div>
    </section>
  );
};

export default MySticker;
