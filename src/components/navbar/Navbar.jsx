import React from "react";
import { FaAngleDown } from "react-icons/fa6";

function Navbar({ type }) {
  const style =
    type == "slider"
      ? "flex justify-between p-5 z-50 w-full absolute px-14 top-[50px] text-white"
      : "";

  return (
    <navbar className={style}>
      <div>LOGO</div>
      <div className="flex justify-center items-center space-x-5">
        <LinkItem href="/about" text="Giriş" />
        <LinkItem href="/services" text="Proje" />
        <LinkItem href="/contact" text="Galeri" />
        <LinkItem href="/blog" text="Konum" />
        <LinkItem href="/careers" text="İletişim" />
      </div>
    </navbar>
  );
}

export default Navbar;

function LinkItem({ href, text }) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <p> {text} </p>
      <FaAngleDown className="" />
    </div>
  );
}
