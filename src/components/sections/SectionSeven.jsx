import React from "react";
import { Image } from "antd";
import { p } from "@/assets/photosUrl";

function SectionSeven() {
  return (
    <section className="section-two section-seven">
      <div className="section-image-wrapper">
        <Image src={p.sectionOne.firstPhoto} alt="Section Two" width={1200} />
      </div>
      <div className="section-card-wrapper two">
        <span className="tabInfo">1. Proje</span>
        <h2 className="section-card-header">
          Şehrin dokusu <br /> yeniden inşa ediliyor...
        </h2>
        <p className="section-card-para">
          66 m²’den başlayıp 284 m²’ye varan farklı daire seçenekleriyle, Yeni
          Değer Konakları sizlere huzurlu ve kaliteli bir yaşam sunuyor. İki
          bloktan oluşan proje, estetik tasarımıyla göz doldururken, iç
          mekanlarıyla da ferahlık ve konfor sunuyor.
          <br />
          Her bir detayı özenle düşünülen dairelerimiz, modern yaşamın
          gereksinimlerini karşılarken, aynı zamanda güneş ışığına da doymanızı
          sağlıyor.
        </p>
      </div>
    </section>
  );
}

export default SectionSeven;
