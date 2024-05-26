import Image from "next/image";
import { Slider } from "@/components/slider/Slider";
import SectionOne from "@/components/sections/SectionOne";
import SectionTwo from "@/components/sections/SectionTwo";
import SectionThree from "@/components/sections/SectionThree";
import SectionFour from "@/components/sections/SectionFour";
import SectionFive from "@/components/sections/SectionFive";
import SectionSix from "@/components/sections/SectionSix";
import SectionSeven from "@/components/sections/SectionSeven";
import SectionEight from "@/components/sections/SectionEight";
import SectionNine from "@/components/sections/SectionNine";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
    </main>
  );
}
