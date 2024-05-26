"use client";
import React from "react";
import { useInView } from "framer-motion";
import { p } from "@/assets/photosUrl";

function SectionSix() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const [isInViewOnce, setIsInViewOnce] = React.useState(false);
  const [numbers, setNumbers] = React.useState([0, 0, 0]);
  React.useEffect(() => {
    if (isInView) setIsInViewOnce(true);
    if (isInViewOnce) return;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    const interval = setInterval(() => {
      if (count1 === 50 && count2 === 100 && count3 === 2025) {
        clearInterval(interval);
      } else {
        if (count1 < 50) {
          count1++;
        }
        if (count2 < 100) {
          count2 = count2 + 2;
        }
        if (count3 < 2025) {
          count3 = count3 + 45;
        }
        setNumbers([count1, count2, count3]);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      style={{ backgroundImage: `url(${p.sectionSix.backgroundImage})` }}
      ref={ref}
      className="section-six"
    >
      <div className="block">
        <span className="header"> {numbers[0]}+ </span>
        <span className="title">Yıllık İnşaat Denetimi</span>
      </div>

      <div className="block">
        <span className="header"> {numbers[1]}+ </span>
        <span className="title">Kişilik Uzman Ekip</span>
      </div>

      <div className="block">
        <span className="header"> {numbers[2]} </span>
        <span className="title">Teslim Tarihi</span>
      </div>
    </section>
  );
}

export default SectionSix;
