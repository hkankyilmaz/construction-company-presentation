import React from "react";
import { BsHandbag } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LuTrain } from "react-icons/lu";
import { FaRegHospital } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

function SectionOne() {
  return (
    <section className="lg:flex justify-center items-center lg:space-x-24 max-md:my-5 py-7 lg:py-10 border-y grid grid-cols-2 gap-x-0 gap-y-10">
      <Card
        icon={<BsHandbag />}
        text="Alışveriş Merkezlerine"
        time="5 DAKİKA"
      />
      <Card icon={<GrLocation />} text="Sahile" time="10 DAKİKA" />
      <Card icon={<LuTrain />} text="Metrobüse" time="6 DAKİKA" />
      <Card icon={<FaRegHospital />} text="Hastanelere" time="4 DAKİKA" />
      <Card icon={<BiSolidSchool />} text="Okullara" time="3 DAKİKA" />
    </section>
  );
}

export default SectionOne;

function Card({ icon, text, time }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div className="text-5xl max-md:text-4xl">{icon}</div>
      <div className="max-md:text-sm"> {text} </div>
      <div className="bg-gray-200 p-3 rounded-full max-md:text-[11px] text-xs font-semibold">
        {" "}
        {time}{" "}
      </div>
    </div>
  );
}
