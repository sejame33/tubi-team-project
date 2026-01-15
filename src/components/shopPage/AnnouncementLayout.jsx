import React from "react";
import AnnouncementList from "./AnnouncementList";
import { HomeSmallBannerSwiper } from "../../pages/homepage/Home";

const AnnouncementLayout = () => {
  return (
    <div className="announcement-page">
      <HomeSmallBannerSwiper />
      <div className="announcement-layout">
        <AnnouncementList />
      </div>
    </div>
  );
};

export default AnnouncementLayout;
