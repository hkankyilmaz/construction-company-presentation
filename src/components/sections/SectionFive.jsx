import React from "react";
import { Image } from "antd";
import { p } from "@/assets/photosUrl";

function SectionFive() {
  return (
    <section className="section-five">
      <div className="section-card-wrapper five max-w-[700px]">
        <span className="tabInfo">2. Proje</span>
        <h2 className="section-card-header">
          Şehrin kalbinde <br /> Yeni bir Değer.
        </h2>
        <p className="section-card-para">
          Her bir detayı özenle düşünülmüş, estetik ve fonksiyonellik
          harmanlanarak tasarlanmış Yeni Değer Konakları, size hem şehrin
          kalbinde olmanın avantajlarını hem de huzurlu bir yaşamın keyfini
          sunuyor.
        </p>
        <p className="section-card-para">
          Her bir detayı özenle düşünülmüş, estetik ve fonksiyonellik
          harmanlanarak tasarlanmış Yeni Değer Konakları, size hem şehrin
          kalbinde olmanın avantajlarını hem de huzurlu bir yaşamın keyfini
          sunuyor. Üsküdar / Altunizade’de bulunan Yeni Değer Konakları;
          alışveriş merkezlerine, restoranlara, kültürel etkinliklere, 15 Temmuz
          Şehitler Köprüsü’ne, Metrobüse çok kolay erişim sağlarken, aynı
          zamanda yeşillerin içinde huzurlu bir yaşamı mümkün kılıyor.
        </p>
      </div>
      <div className="section-image-wrapper five">
        <Image
          className="w-full"
          src={p.sectionOne.firstPhoto}
          alt="Section Two"
          width={1200}
        />
      </div>
    </section>
  );
}

export default SectionFive;
