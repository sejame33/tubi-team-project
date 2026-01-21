import { useMemo, useState, useEffect } from "react"; // ✅ useEffect 추가
import SectionTitle from "../../components/homecomp/SectionTitle";
import ProductCategory from "../../components/shopcomp/ProductCategory";
import StickerCard from "../../components/mycomp/StickerCard";
import { useFollowArtist } from "../../context/FollowArtistContext";
import "./StickerCollection.css";

const StickerCollection = () => {
  const { followedArtists } = useFollowArtist();

  const [active, setActive] = useState("ALL");
  const [sortType, setSortType] = useState("최신순");
  const stickers = useMemo(
    () => [
      {
        id: 1,
        name: "ASTERUM",
        imageUrl: "/img/sticker1.svg",
        category: "PLAVE",
        isNew: true,
        isOwned: true,
      },
      {
        id: 2,
        name: "솜바꼭질",
        imageUrl: "/img/sticker2.svg",
        category: "PLAVE",
        isNew: true,
        isOwned: true,
      },
      {
        id: 3,
        name: "인형 예준",
        imageUrl: "/img/sticker3.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 4,
        name: "인형 노아",
        imageUrl: "/img/sticker4.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 5,
        name: "인형 밤비",
        imageUrl: "/img/sticker5.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 6,
        name: "인형 은호",
        imageUrl: "/img/sticker6.svg",
        category: "PLAVE",
        isOwned: true,
      },
      {
        id: 7,
        name: "인형 하민",
        imageUrl: "/img/sticker7.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 8,
        name: "ASTERUM",
        imageUrl: "/img/sticker1.svg",
        category: "PLAVE",
        isOwned: true,
      },
      {
        id: 9,
        name: "헤비 스파클",
        imageUrl: "/img/sticker8.svg",
        category: "HEBI",
        isOwned: true,
      },
      {
        id: 10,
        name: "이파리",
        imageUrl: "/img/sticker9.svg",
        category: "이세계 아이돌",
        isOwned: true,
      },
      {
        id: 11,
        name: "인형 예준",
        imageUrl: "/img/sticker3.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 12,
        name: "인형 노아",
        imageUrl: "/img/sticker4.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 13,
        name: "인형 밤비",
        imageUrl: "/img/sticker5.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 14,
        name: "인형 은호",
        imageUrl: "/img/sticker6.svg",
        category: "PLAVE",
        isOwned: true,
      },
      {
        id: 15,
        name: "인형 하민",
        imageUrl: "/img/sticker7.svg",
        category: "PLAVE",
        isOwned: false,
      },
      {
        id: 16,
        name: "ASTERUM",
        imageUrl: "/img/sticker1.svg",
        category: "PLAVE",
        isOwned: true,
      },
    ],
    [],
  );
  const groupedByArtist = useMemo(() => {
    const followedNames = (followedArtists || []).map((a) =>
      a.name.toLowerCase(),
    );
    const filteredByFollow = stickers.filter((s) =>
      followedNames.includes(s.category.toLowerCase()),
    );

    return filteredByFollow.reduce((acc, sticker) => {
      const category = sticker.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(sticker);
      return acc;
    }, {});
  }, [stickers, followedArtists]);

  const filteredList = useMemo(() => {
    if (active === "ALL") return stickers;
    return stickers.filter(
      (s) => s.category.toLowerCase() === active.toLowerCase(),
    );
  }, [stickers, active]);

  const categories = useMemo(
    () => [
      { value: "ALL", label: "ALL" },
      { value: "My Artist", label: "My Artist" },
      { value: "PLAVE", label: "PLAVE" },
      { value: "HEBI", label: "HEBI" },
      { value: "이세계 아이돌", label: "이세계 아이돌" },
    ],
    [],
  );

  return (
    <div className="sticker-collection-container">
      <SectionTitle
        title="스티커 컬렉션"
        showMore={false}
        showSort={true}
        useNicknameTitle={false}
      />

      <div className="stickerBox">
        <ProductCategory
          categories={categories}
          active={active}
          onChange={setActive}
        />

        <div className="sticker-content-area">
          {active === "My Artist" ? (
            Object.keys(groupedByArtist).length > 0 ? (
              Object.entries(groupedByArtist).map(
                ([artistName, artistStickers]) => (
                  <div key={artistName} className="artist-group-section">
                    <div className="artist-group-header">
                      <span className="artist-group-title">{artistName}</span>
                      <span className="artist-group-count">
                        {artistStickers.length} / {artistStickers.length}
                      </span>
                    </div>
                    <div className="sticker-grid">
                      {artistStickers.map((item) => (
                        <StickerCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ),
              )
            ) : (
              <div className="no-data">
                팔로우한 아티스트의 스티커가 없습니다.
              </div>
            )
          ) : (
            <div className="sticker-grid">
              {filteredList.map((item) => (
                <StickerCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickerCollection;
