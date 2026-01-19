import React, { useState } from "react";
import SectionTitle from "../../../components/homecomp/SectionTitle";
import LiveTabs from "../../../components/homecomp/live/LiveTabs";
import "../LivePage.css";
import LiveCard from "../../../components/livecomp/LiveCard";
import { liveData } from "./LiveData";

const Live = () => {
  const tabList = ["팔로잉", "라이브", "콘텐츠"];
  const [activeTab, setActiveTab] = useState("팔로잉");

  const filteredData = liveData.filter(
    (item) => item.tabCategory === activeTab,
  );

  return (
    <>
      <div className="livepage">
        <SectionTitle title="Live" showMore={false} useNicknameTitle={false} />
        <div className="livesection">
          <LiveTabs tabs={tabList} active={activeTab} onChange={setActiveTab} />
          <div className="live-page-list">
            {filteredData.length > 0 ? (
              filteredData.map((item) => <LiveCard key={item.id} {...item} />)
            ) : (
              <div className="no-data">해당 카테고리의 콘텐츠가 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
