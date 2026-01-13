import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import DM from "./pages/DM";
import My from "./pages/My";
import NicknamePage from "./pages/NicknamePage";
import { NicknameProvider } from "./context/NicknameContext";

function App() {
  return (
    <NicknameProvider>
      <Routes>
        {/* 최초 진입 */}
        <Route path="/" element={<NicknamePage />} />

        {/* 메인 영역 */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="dm" element={<DM />} />
          <Route path="my" element={<My />} />
        </Route>
      </Routes>
    </NicknameProvider>
  );
}

export default App;
