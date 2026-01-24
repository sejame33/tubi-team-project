import React, { useMemo } from "react";
import SectionTitle from "../../../components/homecomp/SectionTitle";
import ShopproductList from "../../../components/shopcomp/ShopproductList";
import { useNavigate } from "react-router-dom";

const Goods = () => {
  const navigate = useNavigate();
  const items = useMemo(
    () => [
      {
        id: 601,
        rank: 1,
        title: "아야츠노 유니 STELLIVE 크리스마스 응원봉",
        price: "₩38,000원",
        img: "/img/goods1.svg",
        badge1: "단독판매",
      },
      {
        id: 602,
        rank: 2,
        title: "STELLIVE POP-UP 봄빛 캔뱃지 랜덤",
        price: "₩27,000원",
        img: "/img/goods2.svg",
        badge1: "단독판매",
        badge2: "특전제공",
      },
      {
        id: 603,
        title: "2026 FESTIVAL 핫피",
        price: "₩53,000원",
        img: "/img/goods3.svg",
        badge4: "콜라보",
      },
      {
        id: 604,
        title: "[2차 판매] 2026 FESTIVAL 슬로건 타월",
        price: "₩15,000원",
        img: "/img/goods4.svg",
        badge1: "단독판매",
        badge2: "특전제공",
      },
    ],
    [],
  );

  return (
    <>
      <div className="goods">
        <SectionTitle
          title="굿즈샵"
          useNicknameTitle={false}
          onMoreClick={() => navigate("/home/shop")}
        />
        <div className="goodsshop">
          <ShopproductList items={items} enableBrandFilter={false} />
        </div>
      </div>
    </>
  );
};

export default Goods;
