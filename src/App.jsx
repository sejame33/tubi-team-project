import React from 'react'
import Layout from './components/Layout'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import DM from "./pages/DM";
import My from "./pages/My";

function App() {
  return (

      <>
      <Header/>

      <main className='main'>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="shop" element={<Shop />} />
            <Route path="dm" element={<DM />} />
            <Route path="my" element={<My />} />
          </Route>
      </Routes>
      </main>

      <Footer />
      </>
  );
}

export default App;
