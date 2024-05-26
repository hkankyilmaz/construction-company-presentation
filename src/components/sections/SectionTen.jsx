import React from "react";

function SectionTen() {
  const arr1 = [
    { title: "Toplam Daire Sayısı", info: "54" },
    { title: "Toplam Blok", info: "2 Blok" },
    { title: "Kapalı Otopark", info: "Var" },
    { title: "Güvenlik", info: "Var" },
  ];
  const arr2 = [
    { title: "2+1", info: "13 Daire" },
    { title: "3+1", info: "7 daire" },
    { title: "4+1", info: "4 daire" },
    { title: "Dubleks", info: "16 daire" },
  ];
  const arr3 = [
    { title: "2+1 ölçüleri", info: "55 - 71 m²" },
    { title: "3+1 ölçüleri", info: "90 - 130 m²" },
    { title: "4+1 ölçüleri", info: "150 - 238 m²" },
  ];

  return (
    <section className="section-ten  m-auto flex-col xl:flex-row flex max-xl:space-y-12 xl:space-x-36 justify-center  items-center xl:items-start">
      <div className="flex flex-col">
        <span className=" font-semibold text-center">
          Projedeki Toplam Daire Sayısı
        </span>
        <span className="text-[60px] md:text-[120px] leading-[70px] md:leading-[125px] text-center">
          54
        </span>
      </div>
      <div className="flex flex-col space-y-12">
        <div className="flex  max-md:flex-col items-center max-md:space-y-6 md:space-x-16">
          <div className="flex flex-col max-md:justify-center max-md:items-center space-y-5 pl-4">
            <span className="tabInfo ">
              &lsquo;YENİ DEĞER KONAKLARI / ALTUNİZADE&rsquo;
            </span>
            <span className="text-3xl md:text-5xl">Proje Detayları</span>
          </div>
          <div>
            Yeni Değer Konakları&apos;nda her ihtiyaca ve her bütçeye göre
            tasarlanmış daireler mevcuttur.
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Card arr={arr1} />
          <Card arr={arr2} middle={true} />
          <Card arr={arr3} />
        </div>
      </div>
    </section>
  );
}

export default SectionTen;

function Card({ arr, middle }) {
  const tailwindcss = middle ? "bg-[#F7F7F7]" : "";
  return (
    <div
      className={`grid   grid-col-1 md:grid-cols-4 items-center gap-3 p-4 ${tailwindcss}`}
    >
      {arr.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <span className="text-gray-400"> {item.title} </span>
            <span> {item.info} </span>
          </div>
        );
      })}
    </div>
  );
}
