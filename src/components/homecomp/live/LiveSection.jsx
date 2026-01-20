import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./liveSection.css";
import SectionHeader from "./SectionHeader";
import LiveTabs from "./LiveTabs";
import FilterChips from "./FilterChips";
import LiveArtistRow from "./LiveArtistRow";
import LiveReplayCard from "./LiveReplayCard";
import { useNickname } from "../../../context/NicknameContext";
import { useFollowArtist } from "../../../context/FollowArtistContext";

const TABS = ["라이브", "콘텐츠", "무대"];
const CHIPS = ["HOT", "NEW", "FOR YOU", "TREND"];

// ✅ 라이브 탭에서 "항상 보여줄" 고정 3명 (ARTIST_LIST의 id로 맞춰줘!)
const FIXED_LIVE_IDS = ["7", "5", "1"]; // IRISE(7), HONEYZ(5), Plave(1)

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
  const navigate = useNavigate();
  const { nickname } = useNickname();

  // ✅ 전체 탭은 팔로우 전체
  const { followedArtists, artistsOnly } = useFollowArtist();

  const [tab, setTab] = useState("라이브");
  const [chip, setChip] = useState("HOT");
  const [panelTab, setPanelTab] = useState("라이브"); // "라이브" | "전체"

  // ✅ ARTIST_LIST(artistsOnly)에서 id로 찾아서 "라이브 고정 3명" 구성
  const fixedLiveArtists = useMemo(() => {
    const byId = new Map(artistsOnly.map((a) => [String(a.id), a]));

    return FIXED_LIVE_IDS.map((id) => {
      const a = byId.get(String(id));
      if (!a) return null;

      return {
        id: a.id,
        name: a.name,
        label: a.label ?? "", // ✅ ARTIST_LIST에서 가져옴
        avatar: a.img,
        live: true,
        verified: true,
      };
    }).filter(Boolean);
  }, [artistsOnly]);

  // ✅ 전체 탭: 팔로우 전체를 LiveArtistRow 포맷으로 매핑
  const followingArtists = useMemo(() => {
    return (followedArtists || []).map((a) => ({
      id: a.id,
      name: a.name,
      label: false, // ✅ ARTIST_LIST 기반 label
      avatar: a.img,
      live: false,
      verified: false,
    }));
  }, [followedArtists]);

  // ✅ mini-tab에 따라 items 결정
  const artists = panelTab === "라이브" ? fixedLiveArtists : followingArtists;

  const replays = useMemo(() => mockReplays, [chip]);

  const goToLivePage = () => navigate("/home/live");

  return (
    <section className="live-section">
      <SectionHeader
        title="실시간 Live!"
        showMore={true}
        onMoreClick={goToLivePage}
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
    </section>
  );
}
