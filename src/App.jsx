import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout";
import Home from "./pages/homepage/Home";
import Shop from "./pages/shoppage/Shop";
import DM from "./pages/dmpage/Dm";
import My from "./pages/mypage/My";
import NicknamePage from "./pages/startpage/NicknamePage";
import { NicknameProvider } from "./context/NicknameContext";
import ShopAnnounce from "./pages/shoppage/ShopAnnounce";
import ShopAnnounceDetail from "./pages/shoppage/ShopAnnounceDetail";
import ShopProduct from "./pages/shoppage/ShopProduct";

function App() {
  return (
    <NicknameProvider>
      <Routes>
        {/* ✅ 최초 진입 페이지 */}
        <Route path="/" element={<NicknamePage />} />

        {/* ✅ 메인 앱 영역 */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/announcement" element={<ShopAnnounce />} />
          <Route
            path="shop/announcement/:noticeId"
            element={<ShopAnnounceDetail />}
          />
          <Route path="shop/ShopProduct" element={<ShopProduct />}></Route>
          <Route path="dm" element={<DM />} />
          <Route path="my" element={<My />} />
        </Route>
      </Routes>
    </NicknameProvider>
  );
}

export default App;
