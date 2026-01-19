import React, { useLayoutEffect, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  const isLivePage = location.pathname === "/home/live";

  const headerProps = isLivePage
    ? {
        title: "Live",
        showBack: true,
        showAnShare: true,
        showLogo: false,
        isLive: true,
      }
    : {
        showLogo: true,
        showCart: true,
        showMenu: true,
        title: "",
      };

  // (선택) 브라우저 스크롤 복원 막기 - 1회
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // ✅ 페이지 이동(내비게이션) 때마다 무조건 맨 위
  useLayoutEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    el.scrollTop = 0;
  }, [location.key]); // pathname보다 key가 "재진입"에도 더 확실

  return (
    <div className="app-wrapper">
      <div className="app">
        <Header {...headerProps} />
        <main className={`main ${isLivePage ? "is-live" : ""}`} ref={mainRef}>
          <Outlet />
        </main>
        {!isLivePage && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
