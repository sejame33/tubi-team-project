import AnnouncementListItem from "./AnnouncementListItem";
import "./AnnouncementList.css";

const announcements = [
  {
    id: 1,
    icon: "/img/announcement-hebi-icon.svg",
    title: [
      { text: "Hebi", color: "#0020EF" },
      { text: " ‘늘(EVER)’ 구매자 당첨자 발표", color: "#111" },
    ],
    desc: "싱글 앨범 구매 이벤트 결과 안내",
    time: "1시간 전",
  },
  {
    id: 2,
    icon: "/img/announcement-nova-logo-icon.svg",
    title: [
      { text: "Nova", color: "#8355FE" },
      { text: " X ", color: "#111" },
      { text: "Kakao Pay", color: "#EDD600" },
      { text: " 추가 적립", color: "#111" },
    ],
    desc: "3·5·7만원 결제 시 코인 지급",
    time: "3시간 전",
  },
  {
    id: 3,
    icon: "/img/announcement-irise-icon.svg",
    title: [
      { text: "IRISÉ", color: "#E477FF" },
      { text: " ‘WINGS’ 발매 기념 스트리밍", color: "#111" },
    ],
    desc: "참여 방법 및 미션 안내",
    time: "1일 전",
  },
  {
    id: 4,
    icon: "/img/announcement-plave-icon.svg",
    title: [
      { text: "PLAVE", color: "#59B0EE" },
      { text: " 2주년 한정 굿즈 사전예약", color: "#111" },
    ],
    desc: "선착순 200명 특전 제공",
    time: "2일 전",
  },
  {
    id: 5,
    icon: "/img/announcement-apoki-icon.svg",
    title: [
      { text: "APOKI", color: "#FF5E63" },
      { text: " 스페셜 이벤트", color: "#111" },
    ],
    desc: "아뽀키 신규 굿즈 및 구매 이벤트 안내",
    time: "4일 전",
  },
  {
    id: 6,
    icon: "/img/announcement-nova-logo-icon.svg",
    title: [
      { text: "Nova", color: "#8355FE" },
      { text: " 코인 통합 운영 안내", color: "#111" },
    ],
    desc: "전 서비스 공용 적립·사용 정책 변경",
    time: "7일 전",
  },
  {
    id: 7,
    icon: "/img/announcement-plave-icon.svg",
    title: [
      { text: "PLAVE", color: "#59B0EE" },
      { text: " World Tour - HongKong", color: "#111" },
    ],
    desc: "월드 투어 홍콩 공연 티켓 오픈 일정 공개",
    time: "2026.01.07",
  },
];

const AnnouncementList = () => {
  return (
    <div className="announcement-list">
      {announcements.map((a) => (
        <AnnouncementListItem key={a.id} {...a} />
      ))}
    </div>
  );
};

export default AnnouncementList;
