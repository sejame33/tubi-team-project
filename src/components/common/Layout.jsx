import React, { useLayoutEffect, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation, matchPath } from "react-router-dom";
import "./Layout.css";
import ChatbotContainer from "../homecomp/chatbot/ChatbotContainer.jsx";

const Layout = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  const isMyHome = location.pathname === "/home/my";
  const isTubiPage = location.pathname === "/home/my/tubi";
  const isArtistPage = location.pathname.startsWith("/home/artist");
  const isAnnouncement6 = location.pathname === "/home/shop/announcement/6";
  const isAnnouncement7 = location.pathname === "/home/shop/announcement/7";
  const isAnnouncement5 = location.pathname === "/home/shop/announcement/5";
  const isDmPage1 = location.pathname === "/home/dm/isegye";
  const isDmPage2 = location.pathname === "/home/dm/hebi";
  const isDmPage3 = location.pathname === "/home/dm/meechu";

  const isChatRoom = !!matchPath("/home/dm/:artistId", location.pathname);

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

  const isHome =
    location.pathname === "/home" || location.pathname === "/home/";

  const getHeaderProps = () => {
    const path = location.pathname;

    if (path === "/stickercollection") {
      return {
        showBack: true,
        showLogo: false,
        title: "스티커 목록",
        showMenu: false,
      };
    }

    if (path.startsWith("/home/shop/brand")) {
      return {
        showBack: true,
        showLogo: false,
        title: "PLAVE",
        showCart: true,
      };
    }

    if (path.startsWith("/home/shop/ShopProduct")) {
      return {
        showBack: true,
        showLogo: false,
        showCart: true,
      };
    }

    if (
      path === "/home/my" ||
      path === "/home/my/tubi"
    ) {
      return null;
    }

    if (path === "/home/shop") {
      return {
        showBack: false,
        showLogo: true,
        showCart: true,
        showMenu: true,
      };
    }
    if (path.startsWith("/home/shop/announcement")) {
      return {
        showBack: true,
        showLogo: false,
        centerTitle: "공지사항",
        showAnShare: true,
        showMenu: false,
      };
    }
    if (path.startsWith("/home/artist/")) {
      return {
        showBack: true,
      };
    }
    if (path === "/home/gatcha/stickercollection") {
      return {
        showBack: true,
        showLogo: false,
        centerTitle: "스티커 목록",
        showMenu: false,
      };
    }
    if (path === "/home/gatcha") {
      return {
        showBack: true,
        showLogo: false,
        centerTitle: "스티커 가챠실",
        showMenu: false,
      };
    }
    if (path === "/home/dm") {
      return {
        showLogo: false,
        centerTitle: "Tubi DM",
        showMenu: false,
      };
    }
    if (path === "/home/album") {
      return {
        showBack: true,
        centerTitle: "ALBUM",
        showMenu: false,
        showAnShare: true,
      };
    }
    if (path === "/home/mv") {
      return {
        showBack: true,
        centerTitle: "MV",
        showMenu: false,
        showAnShare: true,
      };
    }
    if (path === "/home/live") {
      return {
        isLive: true,
        showBack: true,
        centerTitle: "LIVE",
        showMenu: false,
        showAnShare: true,
      };
    }
    if (path === "/home/dm/irise") {
      return {
        showBack: true,
        showLogo: false,
        centerTitle: "IRISE",
        showVerify: true,
        showMenu: false,
        showMore: true,
      };
    }
    if (path === "/home/dm/honeyz") {
      return {
        showBack: true,
        showLogo: false,
        centerTitle: "HONEYZ",
        showVerify: true,
        showMenu: false,
        showMore: true,
      };
    }
    if (path === "/home/dm/stellive") {
      return {
        showBack: true,
        showLogo: false,
        centerTitle: "STELLIVE",
        showVerify: true,
        showMenu: false,
        showMore: true,
      };
    }

    return { showBack: false, showLogo: true, showMenu: true };
  };

  const headerProps = getHeaderProps();
  const isLiveMode = headerProps?.isLive || false;

  const disableImplDot = () => {
    document.body.classList.add("impl-off");
  };

  const enableImplDot = () => {
    document.body.classList.remove("impl-off");
  };

  return (
    <>
      <div className="all">
        <div className="apptit">
          <img src="/img/background-light.png" alt="" className="light" />
          <p className="appTit">라이브부터 소통까지,</p>
          <p className="appSubTit">당신과 아이돌을 이어주는</p>
          <img src="/img/background-logo.png" alt="" className="logo" />
          <div className="btn">
            <button onClick={enableImplDot}>가이드 ON</button>
            <button onClick={disableImplDot}>가이드 OFF</button>
          </div>
        </div>
        <div className="app-wrapper">
          <div className="app">
            {headerProps && !isAnnouncement6 && !isAnnouncement7 && !isAnnouncement5 && !isDmPage1 && !isDmPage2 && !isDmPage3 && <Header {...headerProps} />}
            <main
              ref={mainRef}
              className={[
                "main",
                (isMyHome || isTubiPage) ? "main--nochrome" : "",
                isChatRoom ? "main--noBottom main--chat" : "",
              ].filter(Boolean).join(" ")}
            >
              <Outlet />
            </main>
            {!isTubiPage && !isAnnouncement5 && !isAnnouncement6 && !isAnnouncement7 && <Footer isLive={isLiveMode} />}
            {isHome && <ChatbotContainer />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
