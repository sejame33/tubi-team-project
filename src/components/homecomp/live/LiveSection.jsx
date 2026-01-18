import React, { useMemo, useState } from "react";
import "./liveSection.css";
import SectionHeader from "./SectionHeader";
import LiveTabs from "./LiveTabs";
import FilterChips from "./FilterChips";
import LiveArtistRow from "./LiveArtistRow";
import LiveReplayCard from "./LiveReplayCard";
import { useNickname } from "../../../context/NicknameContext";

const TABS = ["라이브", "콘텐츠", "무대"];
const CHIPS = ["HOT", "NEW", "FOR YOU", "TREND"];

// ✅ 팔로잉 목록(예시)
// PLAVE도 전체에서 보이게 하려면 3을 추가해야 함: [1, 2, 3]
const FOLLOWING_IDS = [1, 2, 3];

const mockArtists = [
  {
    id: 1,
    name: "HEBI",
    label: "헤비",
    avatar: "/img/live-artist-1.svg",
    live: true,
    verified: true,
  },
  {
    id: 2,
    name: "LUVDIA",
    label: "밤비",
    avatar: "/img/live-artist-2.svg",
    live: true,
    verified: true,
  },
  {
    id: 3,
    name: "PLAVE",
    label: "나스카",
    avatar: "/img/live-artist-3.svg",
    live: false,
    verified: true,
  },
];

const mockReplays = [
  {
    id: 1,
    title: "산중 호걸이라는 테리님의 생일날...",
    subtitle: "LUVDIA · 아이비",
    thumb: "/img/live-replay-bg.svg",
    badge: "HOT",
  },
];

export default function LiveSection() {
  const { nickname } = useNickname();

  const [tab, setTab] = useState("라이브");
  const [chip, setChip] = useState("HOT");

  // ✅ mini-tab은 실제 버튼 텍스트랑 동일하게!
  const [panelTab, setPanelTab] = useState("라이브"); // "라이브" | "전체"

  // ✅ 팔로우 리스트 기반 + mini-tab에 따른 필터
  const artists = useMemo(() => {
    // 1) 팔로잉한 아티스트만 먼저
    const following = mockArtists.filter((a) => FOLLOWING_IDS.includes(a.id));

    // 2) mini-tab이 '라이브'면 live=true만
    if (panelTab === "라이브") {
      return following.filter((a) => a.live);
    }

    // 3) '전체'면 팔로잉 전체(라이브 여부 상관 없음)
    return following;
  }, [panelTab]);

  const replays = useMemo(() => {
    if (chip === "클립") return mockReplays; // 예시
    return mockReplays;
  }, [chip]);

  return (
    <section className="live-section">
      <SectionHeader
        title="실시간 Live!"
        showMore={true}
        onMoreClick={() => console.log("전체보기")}
      />

      <LiveTabs tabs={TABS} active={tab} onChange={setTab} />
      <FilterChips chips={CHIPS} active={chip} onChange={setChip} />

      <div className="live-panel">
        <h3 className="live-panel-title">
          <span>{nickname || "닉네임"}</span>님의 팔로우 리스트
        </h3>

        <div className="live-panel-tabs">
          <button
            type="button"
            className={`mini-tab ${panelTab === "라이브" ? "is-active" : ""}`}
            onClick={() => setPanelTab("라이브")}
          >
            라이브
          </button>

          <button
            type="button"
            className={`mini-tab ${panelTab === "전체" ? "is-active" : ""}`}
            onClick={() => setPanelTab("전체")}
          >
            전체
          </button>
        </div>

        <LiveArtistRow items={artists} />
      </div>

      <div className="replay-panel">
        <h3 className="replay-main-title">Live Replay</h3>
        {replays.map((r) => (
          <LiveReplayCard key={r.id} item={r} />
        ))}
      </div>

      <button className="section-more" onClick={() => console.log("더보기")}>
        더보기
        <img src="/img/live-down-arrow.svg" alt="" />
      </button>
      <img
        src="/img/live-speech-bubble.png"
        alt=""
        className="replay-speech-bubble"
      />
    </section>
  );
}
