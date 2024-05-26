import React from "react";
import { p } from "@/assets/photosUrl";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="h-[400px] p-[100px] flex flex-col justify-center items-start shadow-2xl "
      style={{ backgroundImage: `url(${p.footer.backgroundImage})` }}
    >
      <p className="mb-[50px]">
        Copyright 2024. Yeni Değer Konakları bir Yeni Mimari İnşaat projesidir.
      </p>
      <div className="relative w-[220px] flex justify-center items-center h-[100px] bg-[#072326]  shadow-2xl rounded-xl">
        <Image
          className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          src={p.footer.logo}
          width={200}
          height={50}
        />
      </div>
    </footer>
  );
}

export default Footer;
