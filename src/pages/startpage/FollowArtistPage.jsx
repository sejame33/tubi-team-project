import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFollowArtist } from "../../context/FollowArtistContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./FollowArtistPage.css";

export default function FollowArtistPage() {
  const navigate = useNavigate();
  const { artistsOnly, followedArtists, isFollowed, addFollow, removeFollow } =
    useFollowArtist();

  const [q, setQ] = useState("");

  // ✅ viewport 폭 + content(칩 전체 길이) 측정용 ref 2개
  const viewportRef = useRef(null);
  const measureRef = useRef(null);
  const [useSwiper, setUseSwiper] = useState(false);

  useEffect(() => {
    const viewportEl = viewportRef.current;
    const measureEl = measureRef.current;
    if (!viewportEl || !measureEl) return;

    const check = () => {
      const contentW = measureEl.scrollWidth;
      const viewW = viewportEl.clientWidth;
      setUseSwiper(contentW > viewW + 1);
    };

    check();
    requestAnimationFrame(check);

    const ro = new ResizeObserver(() => {
      check();
      requestAnimationFrame(check);
    });

    ro.observe(viewportEl);
    ro.observe(measureEl);

    return () => ro.disconnect();
  }, [followedArtists.length]);

  const filtered = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    if (!keyword) return artistsOnly;
    return artistsOnly.filter((a) => a.name.toLowerCase().includes(keyword));
  }, [artistsOnly, q]);

  const location = useLocation();
  const from = location.state?.from;

  const handleSelect = (artist) => addFollow(artist.id);
  const handleRemove = (artist) => removeFollow(artist.id);

  const handleDone = () => {
    if (from === "myartist") {
      // 히스토리가 없을 수도 있으니 안전장치
      if (window.history.length > 1) navigate(-1);
      else navigate("/home");
    } else {
      navigate("/home");
    }
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div className="app">
        <main className="main followartist-main">
          <section className="followartist-page">
            {/* ✅ sticky 영역(타이틀+검색+선택 row) */}
            <div className="followartist-sticky">
              <h2 className="followartist-title">
                소식을 받아볼
                <br />
                버추얼 그룹을 선택해요
              </h2>

              {/* 검색 */}
              <div className="followartist-search">
                <span className="followartist-search-icon" aria-hidden="true">
                  <img src="/img/follow-artist-search-icon.svg" alt="" />
                </span>
                <input
                  className="followartist-search-input"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="아티스트의 이름을 입력하세요"
                />
              </div>

              {/* ✅ 선택된 아티스트 (넘치면 Swiper, 안 넘치면 flex) */}
              {followedArtists.length > 0 && (
                <div
                  className="followartist-selected-viewport"
                  ref={viewportRef}
                  aria-label="selected artists"
                >
                  {/* 측정 전용 */}
                  <div
                    ref={measureRef}
                    className="followartist-selected-measure"
                  >
                    {followedArtists.map((a) => (
                      <div key={a.id} className="followartist-chip">
                        <div className="followartist-chip-img" />
                      </div>
                    ))}
                  </div>

                  {/* 실제 표시 */}
                  {useSwiper ? (
                    <Swiper
                      slidesPerView="auto"
                      spaceBetween={16}
                      slidesOffsetAfter={16}
                      className="followartist-selected-swiper"
                    >
                      {followedArtists.map((a) => (
                        <SwiperSlide
                          key={a.id}
                          className="followartist-chip-slide"
                        >
                          <div className="followartist-chip">
                            <div className="followartist-chip-img">
                              <img src={a.img} alt={a.name} />
                              <button
                                type="button"
                                className="followartist-chip-remove"
                                onClick={() => handleRemove(a)}
                                aria-label={`${a.name} 제거`}
                              >
                                −
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="followartist-selected-row">
                      {followedArtists.map((a) => (
                        <div key={a.id} className="followartist-chip">
                          <div className="followartist-chip-img">
                            <img src={a.img} alt={a.name} />
                            <button
                              type="button"
                              className="followartist-chip-remove"
                              onClick={() => handleRemove(a)}
                              aria-label={`${a.name} 제거`}
                            >
                              −
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ✅ 리스트만 스크롤되는 영역 */}
            <div className="followartist-list-scroll">
              <div className="followartist-list" role="list">
                {filtered.map((a) => {
                  const active = isFollowed(a.id);

                  return (
                    <button
                      key={a.id}
                      type="button"
                      className={`followartist-item ${active ? "is-selected" : ""}`}
                      role="listitem"
                      onClick={() =>
                        active ? removeFollow(a.id) : handleSelect(a)
                      }
                    >
                      <div className="followartist-item-left">
                        <div className="followartist-item-avatar">
                          <img src={a.img} alt={a.name} />
                        </div>

                        <div className="followartist-item-text">
                          <div className="followartist-item-name">{a.name}</div>
                          <div className="followartist-item-sub">
                            그룹 · 라이브 · 업데이트
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="follow-artist-btn-wrap">
              <button
                className="followartist-done"
                type="button"
                onClick={handleDone}
              >
                선택완료
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
