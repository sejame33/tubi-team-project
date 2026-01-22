import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/homecomp/SectionTitle";
import LiveTabs from "../../../components/homecomp/live/LiveTabs";
import "../LivePage.css";
import LiveCard from "../../../components/livecomp/LiveCard";
import { liveData } from "./LiveData";

const Live = () => {
  const navigate = useNavigate();

  const tabList = ["팔로잉", "라이브", "콘텐츠"];
  const [activeTab, setActiveTab] = useState("팔로잉");

  const filteredData = liveData.filter((item) => item.tabCategory === activeTab);

  // ✅ 외부 링크/내부 링크 모두 처리
  const goToUrl = (url) => {
    if (!url) return;

    // 외부 링크면 새 탭(팝업차단 회피: a태그 클릭)
    if (/^https?:\/\//i.test(url)) {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    // 내부 링크면 SPA 이동
    navigate(url);
  };

  return (
    <>
      <div className="livepage">
        <SectionTitle title="Live" showMore={false} useNicknameTitle={false} />

        <div className="livesection">
          <LiveTabs tabs={tabList} active={activeTab} onChange={setActiveTab} />

          <div className="live-page-list">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <LiveCard
                  key={item.id}
                  {...item}
                  onClick={() => goToUrl(item.url)} // ✅ 여기서 링크 이동
                />
              ))
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
