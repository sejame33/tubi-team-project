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
        </div>
      </section>
    </div>
  );
};

export default ShopMiku;
