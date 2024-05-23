import React, { useState, useEffect } from "react";

const SliderContent = () => {
  const [texts, setTexts] = useState(["Değer", "Başlangıç", "Mimari"]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimation(false);
        setAnimation2(true);
      }, 1000);
      setTimeout(() => {
        setAnimation2(false);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="lg:absolute bottom-[150px] max-md:pl-[20px] lg:left-[7%] xl:left-[18%]">
      <p className="text-2xl md:text-6xl text-white font-bold mb-1 uppercase">
        Yeni Bir
      </p>
      <p
        className={`text-2xl md:text-6xl text-white mb-4 md:mb-8 font-bold uppercase ${
          animation ? "animate-fade" : ""
        } ${animation2 ? "animate-fadeIn" : ""}`}
      >
        {texts[currentTextIndex]}
      </p>
      <button className="bg-yellow-400 hover:bg-white hover:shadow-xl max-md:text-xs  transition-all duration-[0.6s] font-bold py-2 px-6 md:py-3 md:px-6 rounded text-black">
        KATALOĞUMUZU İNCELEYİN
      </button>
    </div>
  );
};

export default SliderContent;
