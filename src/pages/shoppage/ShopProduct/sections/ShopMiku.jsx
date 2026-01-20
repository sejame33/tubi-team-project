import React from "react";
import "./ShopMiku.css";

const ShopMiku = () => {
  return (
    <div className="detail-container">
      <h2>상세정보</h2>

      <section className="main-visual">
        <img src="/img/shopmiku1.svg" alt="Hatsune Miku Main Visual" />
      </section>

      <section className="product-intro">
        <h1 className="product-title">[하츠네미쿠] 아크릴 스탠드</h1>
        <p className="product-model">SPAWG11U01</p>
      </section>

      <section className="print-section">
        <div className="thumbnail-box">
          <img src="/img/shopmiku2.svg" alt="Print Preview" />
        </div>
        <span className="section-label">PRINT</span>
      </section>

      <section className="real-shot">
        <img src="/img/shopmiku2.svg" alt="Acrylic Stand Real Look" />
      </section>

      <section className="detail-info">
        <h3 className="detail-label">DETAIL</h3>
        <div className="detail-image-card">
          <img src="/img/shopmiku3.svg" alt="Detail Package View" />
        </div>
      </section>

      <section className="detail-info">
        <div className="detail-image-card">
          <img src="/img/shopmiku-logo.svg" alt="Detail Package View" />
          <p className="miku">하츠네미쿠</p>
          <p className="mikuTxt">하츠네미쿠는 피규어, 의류, 문구, 한정 컬렉션 등 다양한 카테고리의 상품을 만나볼 수 있으며, 시즌별 테마와 이벤트를 통해 새로운 굿즈를 지속적으로 선보입니다.</p>
        </div>
      </section>
    </div>
  );
};

export default ShopMiku;
