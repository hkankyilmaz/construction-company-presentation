import Image from "next/image";
import { Slider } from "@/components/slider/Slider";
import SectionOne from "@/components/sections/SectionOne";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <SectionOne />
    </main>
  );
}
