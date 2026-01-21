import React, { useLayoutEffect, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import ChatbotContainer from "../homecomp/chatbot/ChatbotContainer.jsx";

const Layout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  const isMyHome = location.pathname === "/home/my";
  const isTubiPage = location.pathname === "/home/my/tubi";

  const isArtistPage = location.pathname.startsWith("/home/artist");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    el.scrollTop = 0;
  }, [location.key]);

  /** ✅ 메인 홈인지 판단 */
  const isHome =
    location.pathname === "/home" || location.pathname === "/home/";

  return (
    <div className="app-wrapper">
      <div className="app">
        {/* Header */}
        {!isMyHome && !isTubiPage && !isArtistPage && <Header />}

        <main
          className={`main ${isMyHome || isTubiPage || isArtistPage ? "main--nochrome" : ""}`}
          ref={mainRef}
        >
          <Outlet />
        </main>
        <Footer />
        {isHome && <ChatbotContainer />}
      </div>
    </div>
  );
};

export default Layout;
