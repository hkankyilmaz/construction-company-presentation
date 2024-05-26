import React from "react";
import { p } from "@/assets/photosUrl";

function Footer() {
  return (
    <footer
      className="h-[400px] p-[100px] flex flex-col justify-center items-start shadow-2xl"
      style={{ backgroundImage: `url(${p.footer.backgroundImage})` }}
    >
      <p className="mb-[50px]">
        Copyright 2024. Yeni Değer Konakları bir Yeni Mimari İnşaat projesidir.
      </p>
      <p>Logo</p>
    </footer>
  );
}

export default Footer;
