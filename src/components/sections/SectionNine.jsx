"use client";
import React from "react";
import { Image } from "antd";
import { p } from "@/assets/photosUrl";

function SectionNine() {
  return (
    <section className="my-[60px] md:my-[120px] max-md:p-1">
      <div className="flex flex-col justify-center items-center p-10 bg-[#072326] text-white">
        <h3 className="text-xs mb-2">PRJOE GÖRSELLERİ</h3>
        <h2 className="text-2xl md:text-5xl">Yeni Değer Konakları</h2>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-4 md:grid-rows-4 gap-1">
        <Card src={p.sectionNine.firstPhoto} />
        <Card
          src={p.sectionNine.secondPhoto}
          tailwindcss={"md:col-span-2 md:row-span-2"}
        />
        <Card src={p.sectionNine.thirdPhoto} />
        <Card src={p.sectionNine.fourthPhoto} />
        <Card src={p.sectionNine.fifthPhoto} />
        <Card src={p.sectionNine.sixthPhoto} />
        <Card src={p.sectionNine.seventhPhoto} />
        <Card src={p.sectionNine.eighthPhoto} />
        <Card src={p.sectionNine.ninthPhoto} tailwindcss={"md:row-span-2"} />
        <Card src={p.sectionNine.tenthPhoto} />
        <Card src={p.sectionNine.eleventhPhoto} />
        <Card src={p.sectionNine.twelfthPhoto} />
      </div>
      <div className="flex flex-col justify-center items-center p-10 bg-[#072326] text-white">
        <h3 className=" mb-2">
          Yeni Mimari İnşaat olarak; 25 yıllık inşaat deneyimimiz ve uzman
          ekiplerimizle, hayallerinizdeki konutları inşa ediyoruz.
        </h3>
      </div>
    </section>
  );
}

export default SectionNine;

function Card({ src, tailwindcss }) {
  const style = tailwindcss;
  return (
    <div className={style}>
      <Image.PreviewGroup
        items={[
          src,
          p.sectionNine.firstPhoto,
          p.sectionNine.secondPhoto,
          p.sectionNine.thirdPhoto,
          p.sectionNine.fourthPhoto,
          p.sectionNine.fifthPhoto,
          p.sectionNine.sixthPhoto,
          p.sectionNine.seventhPhoto,
          p.sectionNine.eighthPhoto,
          p.sectionNine.ninthPhoto,
          p.sectionNine.tenthPhoto,
          p.sectionNine.eleventhPhoto,
          p.sectionNine.twelfthPhoto,
        ]}
      >
        <Image height={"100%"} src={src} />
      </Image.PreviewGroup>
    </div>
  );
}
