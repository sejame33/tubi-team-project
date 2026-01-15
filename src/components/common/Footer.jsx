import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/home" end className="footer-item">
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

      <NavLink to="/home/shop" className="footer-item">
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

      <NavLink to="/home/dm" className="footer-item">
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

      <NavLink to="/home/my" className="footer-item">
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
