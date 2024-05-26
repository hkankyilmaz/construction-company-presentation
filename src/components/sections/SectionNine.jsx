"use client";
import React from "react";
import { Image } from "antd";
import { p } from "@/assets/photosUrl";

function SectionNine() {
  return (
    <section className="grid grid-cols-4 grid-rows-4 gap-1  [&i>img]:h-full my-[120px]">
      <Card src={p.sectionNine.firstPhoto} />
      <Card
        src={p.sectionNine.secondPhoto}
        tailwindcss={"col-span-2 row-span-2"}
      />
      <Card src={p.sectionNine.thirdPhoto} />
      <Card src={p.sectionNine.fourthPhoto} />
      <Card src={p.sectionNine.fifthPhoto} />
      <Card src={p.sectionNine.sixthPhoto} />
      <Card src={p.sectionNine.seventhPhoto} />
      <Card src={p.sectionNine.eighthPhoto} />
      <Card src={p.sectionNine.ninthPhoto} tailwindcss={"row-span-2"} />
      <Card src={p.sectionNine.tenthPhoto} />
      <Card src={p.sectionNine.eleventhPhoto} />
      <Card src={p.sectionNine.twelfthPhoto} />
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
