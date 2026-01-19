import React from "react";
import { Routes, Route } from "react-router-dom";

import { NicknameProvider } from "./context/NicknameContext";
import ScrollToTop from "./pages/ScrollToTop";

// ✅ 메인 앱 레이아웃
import Layout from "./components/common/Layout";

// ✅ 온보딩 전용 레이아웃
import OnboardingLayout from "./components/common/OnboardingLayout";

// pages
import Home from "./pages/homepage/Home";
import Shop from "./pages/shoppage/Shop";
import DM from "./pages/dmpage/Dm";
import My from "./pages/mypage/My";

// startpage
import StartPage from "./pages/startpage/StartPage";
import OnboardingPage1 from "./pages/startpage/OnboardingPage1";
import OnboardingPage2 from "./pages/startpage/OnboardingPage2";
import OnboardingPage3 from "./pages/startpage/OnboardingPage3";
import OnboardingPage4 from "./pages/startpage/OnboardingPage4";
import LogInPage from "./pages/startpage/LogInPage";
import NicknamePage from "./pages/startpage/NicknamePage";

// shop
import ShopAnnounce from "./pages/shoppage/ShopAnnounce";
import ShopAnnounceDetail from "./pages/shoppage/ShopAnnounceDetail";
import ShopProduct from "./pages/shoppage/ShopProduct";

// dm
import ChatRoom from "./pages/dmpage/ChatRoom";

// gacha
import Gatcha from "./pages/gatchapage/Gatcha";

// live
import LivePage from "./pages/livepage/LivePage";
import Artist from "./pages/artistpage/Artist";

function App() {
  return (
    <NicknameProvider>
      <ScrollToTop />
      <Routes>
        {/* ✅ 최초 진입 (스플래시) */}
        <Route path="/" element={<StartPage />} />

        {/* ✅ 온보딩만 헤더/푸터 있음 */}
        <Route element={<OnboardingLayout />}>
          <Route path="/onboarding/1" element={<OnboardingPage1 />} />
          <Route path="/onboarding/2" element={<OnboardingPage2 />} />
          <Route path="/onboarding/3" element={<OnboardingPage3 />} />
          <Route path="/onboarding/4" element={<OnboardingPage4 />} />
        </Route>

        {/* ✅ 로그인 / 닉네임 (레이아웃 없음) */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/nickname" element={<NicknamePage />} />

        {/* ✅ 메인 앱 영역 */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/artist" element={<Artist />} />
          <Route path="/home/live" element={<LivePage />} />
          <Route path="gatcha" element={<Gatcha />} />

          <Route path="shop" element={<Shop />} />
          <Route path="shop/announcement" element={<ShopAnnounce />} />
          <Route
            path="shop/announcement/:noticeId"
            element={<ShopAnnounceDetail />}
          />
          <Route path="shop/ShopProduct" element={<ShopProduct />} />

          <Route path="dm" element={<DM />} />
          <Route path="dm/:artistId" element={<ChatRoom />} />

          <Route path="my" element={<My />} />
        </Route>
      </Routes>
    </NicknameProvider>
  );
}

export default App;
