import { useNavigate } from "react-router-dom";
import DmSection from "../../components/dmcomp/DmSection.jsx";

const dmListData = [
  {
    id: "irise",
    name: "아이리제",
    check: "/img/dm-purple-check.svg",
    time: "12분 전",
    group: "IRISE",
    image: "/img/dm-irise.png",
    verified: true,
  },
  {
    id: "stellive",
    name: "스텔라이브",
    check: "/img/dm-purple-check.svg",
    time: "45분 전",
    group: "Stellive",
    image: "/img/dm-stellive.png",
    verified: true,
  },
  {
    id: "honeyz",
    name: "허니즈",
    check: "/img/dm-purple-check.svg",
    time: "6시간 전",
    group: "Honeyz",
    image: "/img/dm-honeyz.svg",
    verified: true,
  },
  {
    id: "isegye",
    name: "이세계 아이돌",
    check: "/img/dm-purple-check.svg",
    time: "2일 전",
    group: "ISEGYE IDOL",
    image: "/img/dm-isegyeidol.svg",
    verified: true,
  },
  {
    id: "hebi",
    name: "HEBI",
    check: "/img/dm-purple-check.svg",
    time: "4일 전",
    group: "Hebi",
    image: "/img/dm-hebi.png",
    verified: true,
  },
  {
    id: "meechu",
    name: "미츄",
    check: "/img/dm-purple-check.svg",
    time: "8일 전",
    group: "Meechu",
    image: "/img/dm-meechu.svg",
    verified: true,
  },
];

function Dm() {
  const navigate = useNavigate();

  return (
    <main className="dm-page">
      <DmSection
        items={dmListData}
        onClickItem={(id) => navigate(`/home/dm/${id}`)}
      />
    </main>
  );
}

export default Dm;
