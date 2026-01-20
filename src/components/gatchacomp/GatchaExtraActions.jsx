export const GATCHA_EXTRA_ACTIONS = [
  {
    id: "share",
    label: "친구에게 공유하기",
    reward: "뽑기 조각 1개",
    type: "share", // ✅ 변경
    url: "https://youtu.be/jfKFpfyJRdk", // 공유할 실제 링크
    shareText: "튜비 가챠 같이 해보자!",
  },
  {
    id: "watch_mv",
    label: "신곡 MV 영상 보기",
    reward: "뽑기 조각 2개",
    type: "external",
    url: "https://www.youtube.com/",
  },
  {
    id: "buy_goods",
    label: "굿즈 5만원 이상 구매하기",
    reward: "뽑기권 1개",
    type: "internal",
    url: "/home/shop",
  },
];
