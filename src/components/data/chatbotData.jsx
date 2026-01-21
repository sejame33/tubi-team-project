// 버튼 노출용 (UI)
export const TOPIC_OPTIONS = {
  굿즈샵: ["구매", "할인쿠폰", "환불/교환"],
  설정: ["알림", "계정", "차단"],
  이벤트: ["진행중 이벤트", "당첨자 발표"],
  가챠아이템: ["확률", "보유 아이템"],
  마이아티스트: ["구독", "콘텐츠", "알림"],
};

export const IMPLEMENTED_OPTIONS = {
  굿즈샵: ["구매", "할인쿠폰", "환불/교환"],
  설정: ["알림", "계정", "차단"],
  이벤트: ["진행중 이벤트", "당첨자 발표"],
  가챠아이템: ["확률", "보유 아이템"],
  마이아티스트: ["구독", "콘텐츠", "알림"],
};

export const TOPIC_ACTIONS = {
  굿즈샵: {
    구매: {
      type: "link",
      answer: {
        text: "굿즈 구매는 굿즈샵 상품 목록에서 진행할 수 있어요.",
        url: "/home/shop",
        ctaLabel: "굿즈샵 바로가기",
      },
    },
    할인쿠폰: {
      type: "link",
      answer: {
        text: "할인쿠폰은 마이페이지에서 확인할 수 있어요.",
        url: "/home/my",
        ctaLabel: "마이페이지 바로가기",
      },
    },
    "환불/교환": {
      type: "link",
      answer: {
        text: "환불 및 교환 정책은 공지사항에서 확인할 수 있어요.",
        url: "/home/shop/announcement",
        ctaLabel: "공지사항 바로가기",
      },
    },
  },

  설정: {
    알림: {
      type: "link",
      answer: {
        text: "알림 설정은 마이페이지에서 변경할 수 있어요.",
        url: "/home/my",
        ctaLabel: "알림 설정 바로가기",
      },
    },
    계정: {
      type: "link",
      answer: {
        text: "계정 정보는 마이페이지에서 관리할 수 있어요.",
        url: "/home/my",
        ctaLabel: "계정 관리 바로가기",
      },
    },
    차단: {
      type: "link",
      answer: {
        text: "차단한 사용자는 마이페이지에서 관리할 수 있어요.",
        url: "/home/my",
        ctaLabel: "차단 관리 바로가기",
      },
    },
  },

  이벤트: {
    "진행중 이벤트": {
      type: "link",
      answer: {
        text: "현재 진행 중인 이벤트를 확인해 보세요.",
        url: "/home/shop/announcement",
        ctaLabel: "이벤트 보러가기",
      },
    },
    "당첨자 발표": {
      type: "link",
      answer: {
        text: "이벤트 당첨자 발표를 확인해 보세요.",
        url: "/home/shop/announcement",
        ctaLabel: "당첨자 발표 바로가기",
      },
    },
  },

  가챠아이템: {
    확률: {
      type: "link",
      answer: {
        text: "가챠는 스티커 가챠실에서 이용할 수 있어요.",
        url: "/home/gatcha",
        ctaLabel: "가챠 바로가기",
      },
    },
    "보유 아이템": {
      type: "link",
      answer: {
        text: "보유 아이템은 마이페이지에서 확인할 수 있어요.",
        url: "/home/my",
        ctaLabel: "보유 아이템 보기",
      },
    },
  },

  마이아티스트: {
    구독: {
      type: "link",
      answer: {
        text: "아티스트 구독은 DM 또는 마이페이지에서 관리할 수 있어요.",
        url: "/home/dm",
        ctaLabel: "아티스트 보러가기",
      },
    },
    콘텐츠: {
      type: "link",
      answer: {
        text: "아티스트 전용 콘텐츠를 확인해 보세요.",
        url: "/home/dm",
        ctaLabel: "전용 콘텐츠 바로가기",
      },
    },
    알림: {
      type: "link",
      answer: {
        text: "아티스트 알림 설정은 마이페이지에서 변경할 수 있어요.",
        url: "/home/my",
        ctaLabel: "알림 설정 바로가기",
      },
    },
  },
};
