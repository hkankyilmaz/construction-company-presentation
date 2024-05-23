import React from "react";

function SliderForm() {
  return (
    <form className="flex flex-col max-md:w-[310px] md:max-w-[600px] lg:absolute bg-white lg:bottom-[20%] lg:right-[7%] xl:right-[18%] space-y-3 md:space-y-5 p-4 md:p-20 rounded-2xl">
      <h2 className="text-lg md:text-2xl font-semibold">
        SİZ DE YENİ DEĞER'E KATILIN!
      </h2>
      <p className="text-gray-500 max-md:text-xs">
        Proje hakkında daha fazla bilgi almak ve satın alma & ödeme seçenekleri
        için bizimle iletişime geçebilirsiniz. İgilendiğiniz daire tipini
        seçmeyi unutmayın. Size hemen dönüş yapacağız.
      </p>
      <input
        className="max-md:text-xs border bg-inputInnerColor p-2 md:p-3outline-none ring-0"
        type="text"
        placeholder="Adınız Soyadınız"
      />
      <input
        className="max-md:text-xs border bg-inputInnerColor p-2 md:p-3 outline-none ring-0"
        type="text"
        placeholder="Telefon Numaranız"
      />
      <select className="max-md:text-xs border bg-inputInnerColor p-2 md:p-3outline-none ring-0">
        <option value="2+1">2+1</option>
        <option value="3+1">3+1</option>
        <option value="4+1">4+1</option>
      </select>
      <div className="flex items-center">
        <input className="cursor-pointer" type="checkbox" />
        <label className="text-gray-500 ml-2 max-md:text-xs" for="checkbox">
          Kişisel verilerimin işlenmesine izin veriyorum.
        </label>
      </div>

      <button
        className="text-white bg-black px-1 py-2 md:px-2 md:py-4 rounded-2xl max-md:text-xs"
        type="submit"
      >
        BENİ BİLGİLENDİRİN
      </button>
    </form>
  );
}

export default SliderForm;
