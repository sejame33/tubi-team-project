import React from 'react'
import MvSection from '../components/MvSection';
import MainBanner from '../components/MainBanner';
import MyArtist from '../components/MyArtist';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  return (
    <div className="home">
      <MainBanner/>
      <MyArtist/>
      <MvSection/>
    </div>
  );
}

export default Home;