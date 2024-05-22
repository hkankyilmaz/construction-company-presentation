"use client";
import React from "react";
import "./slider.style.css";
import SliderEmbla from "./SliderEmbla";
import Navbar from "../navbar/Navbar";
import SliderContent from "./SliderContent";

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
        <Navbar />
        <SliderEmbla slides={SLIDES} options={OPTIONS} />
        <div>
          <SliderContent />
        </div>
      </div>
    </>
  );
}
