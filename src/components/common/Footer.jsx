import React from "react";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";

function Footer({ isLive }) {
  const { pathname } = useLocation();

  const isChatRoom =
    pathname.startsWith("/home/dm/") && pathname !== "/home/dm";

  if (isChatRoom) {
    return null;
  }

  return (
    <footer className={`footer ${isLive ? "is-live" : ""}`}>
      <NavLink
        to="/home"
        end
        className="footer-item impl-anchor"
        data-impl
        style={{
          "--impl-right": "8px",
          "--impl-top": "0px",
        }}
      >
        {({ isActive }) => (
          <>
            <img
              src={
                isActive
                  ? "/img/footer-home-active.svg"
                  : "/img/footer-home.svg"
              }
              alt="홈"
            />
            <p>홈</p>
          </>
        )}
      </NavLink>

      <NavLink
        to="/home/shop"
        className="footer-item impl-anchor"
        data-impl
        style={{
          "--impl-right": "8px",
          "--impl-top": "0px",
        }}
      >
        {({ isActive }) => (
          <>
            <img
              src={
                isActive
                  ? "/img/footer-shop-active.svg"
                  : "/img/footer-shop.svg"
              }
              alt="Shop"
            />
            <p>Shop</p>
          </>
        )}
      </NavLink>

      <NavLink
        to="/home/dm"
        className="footer-item impl-anchor"
        data-impl
        style={{
          "--impl-right": "8px",
          "--impl-top": "0px",
        }}
      >
        {({ isActive }) => (
          <>
            <img
              src={
                isActive ? "/img/footer-dm-active.svg" : "/img/footer-dm.svg"
              }
              alt="DM"
            />
            <p>DM</p>
          </>
        )}
      </NavLink>

      <NavLink
        to="/home/my"
        className="footer-item impl-anchor"
        data-impl
        style={{
          "--impl-right": "8px",
          "--impl-top": "0px",
        }}
      >
        {({ isActive }) => (
          <>
            <img
              src={
                isActive ? "/img/footer-my-active.svg" : "/img/footer-my.svg"
              }
              alt="마이페이지"
            />
            <p>마이페이지</p>
          </>
        )}
      </NavLink>
    </footer>
  );
}

export default Footer;
