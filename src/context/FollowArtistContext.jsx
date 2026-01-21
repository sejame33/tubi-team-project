import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// ✅ more 포함 + artist에 label 추가
const ARTIST_LIST = [
  {
    id: "more",
    type: "more",
    name: "More Artists",
    img: "/img/my-artist-more.svg",
  },
  {
    id: 1,
    type: "artist",
    name: "Plave",
    label: "나츠키",
    img: "/img/my-artist-1.png",
  },
  {
    id: 2,
    type: "artist",
    name: "MEECHU",
    label: "미츄",
    img: "/img/my-artist-2.png",
  },
  {
    id: 3,
    type: "artist",
    name: "APOKI",
    label: "아뽀키",
    img: "/img/my-artist-3.png",
  },
  {
    id: 4,
    type: "artist",
    name: "HEBI",
    label: "헤비",
    img: "/img/my-artist-4.png",
  },
  {
    id: 5,
    type: "artist",
    name: "HONEYZ",
    label: "허니즈",
    img: "/img/my-artist-5.png",
  },
  {
    id: 6,
    type: "artist",
    name: "이세계아이돌",
    label: "이세돌",
    img: "/img/my-artist-6.png",
  },
  {
    id: 7,
    type: "artist",
    name: "IRISE",
    label: "리제",
    img: "/img/my-artist-7.png",
  },
  {
    id: 8,
    type: "artist",
    name: "StelLive",
    label: "스텔라이브",
    img: "/img/my-artist-8.png",
  },
];

const FollowArtistContext = createContext(null);

export function FollowArtistProvider({ children }) {
  const DEFAULT_FOLLOWED_IDS = ["1", "2", "3"];

const [followedIds, setFollowedIds] = useState(() => {
  try {
    const saved = localStorage.getItem("followedArtistIds");
    if (saved) return JSON.parse(saved);
    return DEFAULT_FOLLOWED_IDS;
  } catch {
    return DEFAULT_FOLLOWED_IDS;
  }
});

  useEffect(() => {
    try {
      localStorage.setItem("followedArtistIds", JSON.stringify(followedIds));
    } catch {}
  }, [followedIds]);

  const artistsOnly = useMemo(
    () => ARTIST_LIST.filter((a) => a.type === "artist"),
    [],
  );

  const followedArtists = useMemo(() => {
    const map = new Map(artistsOnly.map((a) => [String(a.id), a]));
    return followedIds.map((id) => map.get(String(id))).filter(Boolean);
  }, [artistsOnly, followedIds]);

  const isFollowed = (id) => followedIds.includes(String(id));

  const addFollow = (id) => {
    const key = String(id);
    setFollowedIds((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const removeFollow = (id) => {
    const key = String(id);
    setFollowedIds((prev) => prev.filter((x) => x !== key));
  };

  const toggleFollow = (id) => {
    const key = String(id);
    setFollowedIds((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key],
    );
  };

  const value = useMemo(
    () => ({
      artistList: ARTIST_LIST,
      artistsOnly,
      followedIds,
      followedArtists,
      isFollowed,
      addFollow,
      removeFollow,
      toggleFollow,
      setFollowedIds,
    }),
    [artistsOnly, followedArtists, followedIds],
  );

  return (
    <FollowArtistContext.Provider value={value}>
      {children}
    </FollowArtistContext.Provider>
  );
}

export function useFollowArtist() {
  const ctx = useContext(FollowArtistContext);
  if (!ctx)
    throw new Error("useFollowArtist must be used within FollowArtistProvider");
  return ctx;
}
