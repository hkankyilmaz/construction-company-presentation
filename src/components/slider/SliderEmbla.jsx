import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Responsive } from "@/utils/Responsive";

import Image from "next/image";
import { p } from "@/assets/photosUrl";

function SliderEmbla(props) {
  const imagesDesktop = [
    p.landingPage.slider.firstPhoto,
    p.landingPage.slider.secondPhoto,
    p.landingPage.slider.thirdPhoto,
  ];

  const imagesMobile = [
    p.landingPage.slider.firstPhotoMobile,
    p.landingPage.slider.thirdPhotoMobile,
    p.landingPage.slider.secondPhotoMobile,
  ];

  const [list, setList] = React.useState(imagesDesktop);

  const imageByIndex = (index) => list[index % list.length];

  const changeImnageListForMobile = () => {
    setList(imagesMobile);
  };
  const changeImnageListForDesktop = () => {
    setList(imagesDesktop);
  };

  useEffect(() => {
    if (Responsive.getCurrentBreakpoint() === "phone") {
      changeImnageListForMobile();
    }
    Responsive.matchesBreakpointWithoutMatchs("phone").addEventListener(
      "change",
      (e) => {
        if (e.matches) {
          changeImnageListForMobile();
        } else {
          changeImnageListForDesktop();
        }
      }
    );
  }, []);

  const { slides, options } = props;
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
    Fade(),
  ]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image
                quality={100}
                loading={"eager"}
                width={1920}
                height={728}
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderEmbla;
