"use client";
import React from "react";
import "./slider.style.css";
import SliderEmbla from "./SliderEmbla";
import Navbar from "../navbar/Navbar";
import SliderContent from "./SliderContent";
import SliderForm from "./SliderForm";

export function Slider() {
  const OPTIONS = {
    containScroll: "trimSnaps",
    draggFree: false,
    watchDrag: false,
  };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <div className="relative">
        <Navbar type={"slider"} />
        <SliderEmbla slides={SLIDES} options={OPTIONS} />
        <div className="max-lg:absolute max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[8%] max-lg:flex max-lg:flex-col max-lg:space-y-8">
          <SliderContent />
          <SliderForm />
        </div>
      </div>
    </>
  );
}
