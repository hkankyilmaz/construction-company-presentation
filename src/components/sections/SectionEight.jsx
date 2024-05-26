import React from "react";
import Link from "next/link";
import { p } from "@/assets/photosUrl";

function SectionEight() {
  return (
    <section className="section-eight">
      <div className="blocks-wrapper">
        <div className="block">
          <Card title="2+1 Daireler" />
          <Card title="3+1 Daireler" />
          <Card title="4+1 Daireler" />
        </div>
        <div className="block">
          <Card title="Bahçe Katı Daireler" />
          <Card title="Ara Kat Daireler" />
          <Card title="Dubleks Daireler" />
        </div>
        <div className="block">
          <Card title="Kapalı Otopark" />
          <Card title="7/24 Güvenlik" />
          <Card title="Çocuk Oyun Alanı" />
        </div>
      </div>
      <a target="_blank" className="w-full" href={p.pdf.one}>
        <button className="bg-yellow-400 w-full hover:bg-white hover:shadow-xl max-md:text-xs  transition-all duration-[0.6s] py-3 px-6  md:px-6 rounded text-black">
          KATALOĞUMUZU İNCELEYEBİLİRSİNİZ
        </button>
      </a>
    </section>
  );
}

export default SectionEight;

import { FiPlus } from "react-icons/fi";

function Card({ title }) {
  return (
    <div className="flex justify-start items-center space-x-2 font-semibold">
      <span className="text-xs">
        <FiPlus />
      </span>
      <p className="text-black"> {title} </p>
    </div>
  );
}
