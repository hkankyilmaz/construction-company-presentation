"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

function Navbar({ type }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.5;

      setShowNavbar(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style =
    type === "slider"
      ? "flex justify-between p-5 z-50 w-full absolute px-14 top-[50px] text-white max-lg:hidden"
      : "flex justify-between p-5 z-50 w-full px-14 sticky left-0 top-0 rigt-0 bg-white  max-lg:hidden shadow-xl";

  if (showNavbar) {
    return (
      <navbar className="flex justify-between p-5 z-50 w-full px-14 sticky left-0 top-0 rigt-0 bg-white  max-lg:hidden shadow-xl">
        <div className="text-2xl tracking-wide">LOGO</div>
        <div className="flex justify-center items-center space-x-5">
          <LinkItem href="/about" text="Giriş" />
          <LinkItem href="/services" text="Proje" />
          <LinkItem href="/contact" text="Galeri" />
          <LinkItem href="/blog" text="Konum" />
          <LinkItem href="/careers" text="İletişim" />
        </div>
      </navbar>
    );
  } else {
    return (
      <navbar className="flex justify-between p-5 z-50 w-full absolute px-14 top-[50px] text-white max-lg:hidden">
        <div className="text-2xl tracking-wide">LOGO</div>
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
}

export default Navbar;

function LinkItem({ href, text }) {
  return (
    <div className="flex justify-center items-center space-x-2">
      <p className=" tracking-wide"> {text} </p>
      <FaAngleDown className="" />
    </div>
  );
}
