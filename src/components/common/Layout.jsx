import React, { useLayoutEffect, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  const isMyHome = location.pathname === "/home/my";
  const isTubiPage = location.pathname === "/home/my/tubi";

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

  return (
    <div className="app-wrapper">
      <div className="app">
        {/* Header */}
        {!isMyHome && !isTubiPage && <Header />}

        <main
          className={`main ${
            isMyHome || isTubiPage ? "main--nochrome" : ""
          }`}
          ref={mainRef}
        >
          <Outlet />
        </main>

        {/* Footer */}
        {!isTubiPage && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
