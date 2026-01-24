import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LiveSection.css";
import SectionHeader from "./SectionHeader";
import LiveTabs from "./LiveTabs";
import FilterChips from "./FilterChips";
import LiveArtistRow from "./LiveArtistRow";
import LiveReplayCard from "./LiveReplayCard";
import { useNickname } from "../../../context/NicknameContext";
import { useFollowArtist } from "../../../context/FollowArtistContext";

const TABS = ["라이브", "콘텐츠", "무대"];
const CHIPS = ["HOT", "NEW", "FOR YOU", "TREND"];
const FIXED_LIVE_IDS = ["7", "5", "1"]; // IRISE(7), HONEYZ(5), Plave(1)

/* =========================
   ✅ mock: badge 4종(HOT/NEW/FOR YOU/TREND) 구성 + url 추가
   ========================= */

const ARTIST_URL_MAP = {
  1: "https://weverse.io/plave/live?hl=ko",
  2: "https://www.sooplive.co.kr/station/meechu",
  3: "https://www.youtube.com/@apoki_vv",
  4: "https://weverse.io/hebi/artistpedia",
  5: "https://www.twitch.tv/team/projecti",
  6: "https://www.sooplive.co.kr/station/cotton1217/vod",
  7: "https://weverse.io/irise/live",
  8: "https://stellive.me/",
};

// 라이브 탭 (패널 1개)
const mockLiveReplays = [
  {
    id: 1,
    title: "산중 호걸이라는 테리님의 생일날...",
    subtitle: "LUVITA · 아이비",
    thumb: "/img/live-replay-bg.svg",
    badge: "HOT",
    url: "https://www.sooplive.co.kr/station/luvita",
  },
  {
    id: 2,
    title: "오늘의 라이브 요약",
    subtitle: "HONEYZ · 제이",
    thumb: "/img/live-replay-bg-2.svg",
    badge: "NEW",
    url: "https://www.twitch.tv/team/projecti",
  },
  {
    id: 3,
    title: "당신을 위한 추천 라이브",
    subtitle: "IRISE · 이이네",
    thumb: "/img/live-replay-bg-3.svg",
    badge: "FOR YOU",
    url: "https://weverse.io/irise/live",
  },
  {
    id: 4,
    title: "지금 가장 트렌디한 순간",
    subtitle: "PLAVE · 밤비",
    thumb: "/img/live-replay-bg-4.svg",
    badge: "TREND",
    url: "https://weverse.io/plave/live?hl=ko",
  },
];

// 콘텐츠 탭 (패널 2개)
const mockContentReplays = [
  {
    id: 11,
    title: "비하인드 콘텐츠 모음.zip",
    subtitle: "LUVITA · 이이네",
    thumb: "/img/content-clip-bg.svg",
    badge: "HOT",
    url: "https://www.sooplive.co.kr/station/luvita",
  },
  {
    id: 12,
    title: "오늘의 라이브 요약",
    subtitle: "HONEYZ · 제이",
    thumb: "/img/live-replay-bg-2.svg",
    badge: "NEW",
    url: "https://www.twitch.tv/team/projecti",
  },
  {
    id: 13,
    title: "당신을 위한 추천 라이브",
    subtitle: "IRISE · 이이네",
    thumb: "/img/live-replay-bg-3.svg",
    badge: "FOR YOU",
    url: "https://weverse.io/irise/live",
  },
  {
    id: 14,
    title: "지금 가장 트렌디한 순간",
    subtitle: "PLAVE · 밤비",
    thumb: "/img/live-replay-bg-4.svg",
    badge: "TREND",
    url: "https://weverse.io/plave/live?hl=ko",
  },
];

const mockContentClips = [
  {
    id: 21,
    title: "10초 하이라이트 클립",
    subtitle: "HONEYZ · 제이",
    thumb: "/img/content-replay-bg.svg",
    badge: "HOT",
    url: "https://www.twitch.tv/team/projecti",
  },
  {
    id: 22,
    title: "리액션 모음 클립",
    subtitle: "LUVITA · 아이비",
    thumb: "/img/content-clip-bg-2.svg",
    badge: "NEW",
    url: "https://www.sooplive.co.kr/station/luvita",
  },
  {
    id: 23,
    title: "FOR YOU 추천 클립",
    subtitle: "IRISE · 이이네",
    thumb: "/img/content-clip-bg-3.svg",
    badge: "FOR YOU",
    url: "https://weverse.io/irise/live",
  },
  {
    id: 24,
    title: "TREND 밈 클립",
    subtitle: "PLAVE · 밤비",
    thumb: "/img/content-clip-bg-4.svg",
    badge: "TREND",
    url: "https://weverse.io/plave/live?hl=ko",
  },
];

// 무대 탭 (패널 2개)
const mockStageReplays = [
  {
    id: 31,
    title: "무대 풀캠 리플레이",
    subtitle: "PLAVE · 밤비",
    thumb: "/img/stage-replay-bg.svg",
    badge: "HOT",
    url: "https://weverse.io/plave/live?hl=ko",
  },
  {
    id: 32,
    title: "오늘의 라이브 요약",
    subtitle: "HONEYZ · 제이",
    thumb: "/img/live-replay-bg-2.svg",
    badge: "NEW",
    url: "https://www.twitch.tv/team/projecti",
  },
  {
    id: 33,
    title: "당신을 위한 추천 라이브",
    subtitle: "IRISE · 이이네",
    thumb: "/img/live-replay-bg-3.svg",
    badge: "FOR YOU",
    url: "https://weverse.io/irise/live",
  },
  {
    id: 34,
    title: "지금 가장 트렌디한 순간",
    subtitle: "PLAVE · 밤비",
    thumb: "/img/live-replay-bg-4.svg",
    badge: "TREND",
    url: "https://weverse.io/plave/live?hl=ko",
  },
];

const mockStageClips = [
  {
    id: 41,
    title: "킬링파트 모음",
    subtitle: "PLAVE · 하민",
    thumb: "/img/stage-clip-bg.svg",
    badge: "HOT",
    url: "https://weverse.io/plave/live?hl=ko",
  },
  {
    id: 42,
    title: "NEW 5초 킬포",
    subtitle: "IRISE · 이이네",
    thumb: "/img/stage-clip-bg-2.svg",
    badge: "NEW",
    url: "https://weverse.io/irise/live",
  },
  {
    id: 43,
    title: "FOR YOU 퍼포먼스",
    subtitle: "HONEYZ · 제이",
    thumb: "/img/stage-clip-bg-3.svg",
    badge: "FOR YOU",
    url: "https://www.twitch.tv/team/projecti",
  },
  {
    id: 44,
    title: "TREND 안무 모음",
    subtitle: "LUVITA · 아이비",
    thumb: "/img/stage-clip-bg-4.svg",
    badge: "TREND",
    url: "https://www.sooplive.co.kr/station/luvita",
  },
];

export default function LiveSection() {
  const navigate = useNavigate();
  const { nickname } = useNickname();
  const { followedArtists, artistsOnly } = useFollowArtist();

  const [tab, setTab] = useState("라이브");
  const [chip, setChip] = useState("HOT");
  const [panelTab, setPanelTab] = useState("라이브"); // "라이브" | "전체"

  const isLiveTab = tab === "라이브";
  const isContentTab = tab === "콘텐츠";
  const isStageTab = tab === "무대";

  const goToUrl = (url) => {
    if (!url) return;

    const isExternal = /^https?:\/\//i.test(url);

    if (isExternal) {
      // ✅ 팝업 차단 회피용: a 태그를 만들어 클릭
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    // 내부 링크
    navigate(url);
  };

  const goToLivePage = () => goToUrl("/home/live");

  /* =========================
     ✅ chip -> badge 필터링 함수
     ========================= */
  const filterByChip = (arr) => {
    if (!chip) return arr;
    return (arr || []).filter((item) => item.badge === chip);
  };

  /* =========================
     ✅ 팔로우 패널(라이브 탭 고정) + url 추가
     ========================= */
  const fixedLiveArtists = useMemo(() => {
    const byId = new Map(artistsOnly.map((a) => [String(a.id), a]));

    return FIXED_LIVE_IDS.map((id) => {
      const a = byId.get(String(id));
      if (!a) return null;

      return {
        id: a.id,
        name: a.name,
        label: a.label ?? "",
        avatar: a.img,
        live: true,
        verified: true,
        url: ARTIST_URL_MAP[String(a.id)] ?? `/home/artist/${a.id}`,
      };
    }).filter(Boolean);
  }, [artistsOnly]);

  const followingArtists = useMemo(() => {
    return (followedArtists || []).map((a) => ({
      id: a.id,
      name: a.name,
      label: false,
      avatar: a.img,
      live: false,
      verified: false,
      url: ARTIST_URL_MAP[String(a.id)] ?? `/home/artist/${a.id}`,
    }));
  }, [followedArtists]);

  const artists = panelTab === "라이브" ? fixedLiveArtists : followingArtists;

  /* =========================
     ✅ chip 눌렀을 때 실제 렌더링될 리스트(필터 적용)
     ========================= */
  const liveReplays = useMemo(() => filterByChip(mockLiveReplays), [chip]);
  const contentReplays = useMemo(
    () => filterByChip(mockContentReplays),
    [chip],
  );
  const contentClips = useMemo(() => filterByChip(mockContentClips), [chip]);
  const stageReplays = useMemo(() => filterByChip(mockStageReplays), [chip]);
  const stageClips = useMemo(() => filterByChip(mockStageClips), [chip]);

  /* =========================
     ✅ 패널 정의(탭별로 1개/2개)
     ========================= */
  const replayPanels = useMemo(() => {
    if (isLiveTab) {
      return [
        {
          key: "live-replay",
          title: "Now Live!",
          variant: "live",
          items: liveReplays,
        },
      ];
    }

    if (isContentTab) {
      return [
        {
          key: "content-replay",
          title: "Live Replay",
          variant: "content",
          items: contentReplays,
        },
        {
          key: "content-clip",
          title: "Hot Clip",
          variant: "content2",
          items: contentClips,
        },
      ];
    }

    // isStageTab
    return [
      {
        key: "stage-replay",
        title: "Stage Replay",
        variant: "stage",
        items: stageReplays,
      },
      {
        key: "stage-clip",
        title: "Performance Clip",
        variant: "stage2",
        items: stageClips,
      },
    ];
  }, [
    isLiveTab,
    isContentTab,
    isStageTab,
    liveReplays,
    contentReplays,
    contentClips,
    stageReplays,
    stageClips,
  ]);

  return (
    <section className="live-section">
      <SectionHeader
        title="실시간 Live!"
        showMore={true}
        onMoreClick={goToLivePage}
      />

      <LiveTabs
        tabs={TABS}
        active={tab}
        onChange={(next) => {
          setTab(next);
          if (next === "라이브") setPanelTab("라이브");
        }}
      />

      <FilterChips chips={CHIPS} active={chip} onChange={setChip} />

      {/* ✅ 라이브 탭일 때만 팔로우 패널 */}
      {isLiveTab && (
        <div className="live-panel">
          <h3 className="live-panel-title">
            <span>{nickname || "닉네임"}</span>님의 팔로우 리스트
          </h3>

          <div className="live-panel-tabs">
            <button
              type="button"
              className={`mini-tab impl-anchor ${
                panelTab === "라이브" ? "is-active" : ""
              }`}
              onClick={() => setPanelTab("라이브")}
              data-impl-alt
            >
              라이브
            </button>

            <button
              type="button"
              className={`mini-tab impl-anchor ${
                panelTab === "전체" ? "is-active" : ""
              }`}
              onClick={() => setPanelTab("전체")}
              data-impl-alt
            >
              전체
            </button>
          </div>

          {/* ✅ 아티스트 클릭 시 url 이동 */}
          <LiveArtistRow items={artists} onItemClick={(a) => goToUrl(a.url)} />
        </div>
      )}

      {/* ✅ 탭에 따라 패널 1개/2개, chip에 따라 리스트가 필터링됨 */}
      {replayPanels.map((panel) => (
        <div className="replay-panel" key={panel.key}>
          <h3 className="replay-main-title">{panel.title}</h3>

          {panel.items.length === 0 ? (
            <p className="replay-empty">해당 카테고리의 영상이 아직 없어요.</p>
          ) : (
            panel.items.map((r) => (
              <LiveReplayCard
                key={`${panel.key}-${r.id}`}
                item={r}
                variant={panel.variant}
                onClick={() => goToUrl(r.url)} // ✅ 카드 클릭 시 url 이동
              />
            ))
          )}
        </div>
      ))}

      {/* ✅ 더보기도 url 이동 */}
      <button
        className="section-more impl-anchor"
        onClick={() => goToUrl("/home/live")}
        data-impl
      >
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
