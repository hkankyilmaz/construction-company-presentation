import React from "react";
import Image from "next/image";
import { p } from "@/assets/photosUrl";

function SectionEleven() {
  return (
    <section className="my-[120px]">
      <Image
        width={1900}
        height={400}
        className="max-h-[90vh]"
        src={p.sectionEleven.backgroundImage}
      />
    </section>
  );
}

export default SectionEleven;
