import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const { pathname } = useLocation();

  let headerProps = {
    showLogo: true,
    showMenu: true,
    showBack: false,
    showCart: false,
    title: "",
  };

  if (pathname === "/home/shop") {
    headerProps = {
      showBack: true,
      showMenu: true,
      showCart: true, // ✅ Shop만 장바구니
      title: "Shop",
    };
  }

  if (pathname === "/home/shop/announcement") {
    headerProps = {
      showBack: true,
      showAnCopy: true,
      showAnShare: true,
      title: "공지사항",
    };
  }

  // if (pathname.startsWith("/home/shop/announcement/1")) {
  //   headerProps = {
  //     showBack: true,
  //     showAnCopy: true,
  //     showAnShare: true,
  //     title: "공지사항",
  //   };
  // }

  if (
    pathname === "/home/shop/announcement" ||
    /^\/home\/shop\/announcement\/\d+$/.test(pathname)
  ) {
    headerProps = {
      showBack: true,
      showAnCopy: true,
      showAnShare: true,
      title: "공지사항",
    };
  }

  if (pathname === "/home/dm") {
    headerProps = {
      showBack: true,
      showMenu: false,
      showCart: false,
      title: "DM",
    };
  }

  if (pathname === "/home/my") {
    headerProps = {
      showLogo: false,
      showMenu: false,
      showCart: false,
      title: "My",
    };
  }

  return (
    <div className="app-wrapper">
      <div className="app">
        <Header {...headerProps} />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
