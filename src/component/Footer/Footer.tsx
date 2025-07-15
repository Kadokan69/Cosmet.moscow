import React from "react";
import Image from "next/image";
import ButtomOpenModal from "../ButtonOpenModal/ButtomOpenModal";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-4 justify-center lg:justify-between  items-center p-4 bg-[#807170] text-[#f4f4f2]">
      <div className="grid grid-cols-2 gap-2 flex-1 w-full">
        <a
          href="#"
          className="flex items-center gap-1 justify-center border border-[#f4f4f2] rounded-2xl p-2 text-center"
        >
          <span>
             <Image src="/telegram.svg" alt="" width={30} height={30} />
          </span>
          Telegram
        </a>
        <a
          href="#"
          className="flex items-center gap-1 justify-center border border-[#f4f4f2] rounded-2xl p-2 text-center"
        >
          <span>
            <Image src="/vk.svg" alt="" width={30} height={30} />
          </span>
          VK
        </a>
        <ButtomOpenModal className="border border-[#f4f4f2] rounded-2xl p-2 text-center col-span-2">
          Записаться на прием
        </ButtomOpenModal>
      </div>
      <div className="text-center text-3xl flex-1">
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </div>
      <div className="gap-2 flex flex-col flex-1">
        <p>м. Таганская (кольцевая Выход 1).</p>
        <p>Большой дровяной пер., д.8, с.1 (вход в здание со стороны дома 10)</p>
        <p>Время работы: Пн-Пт 9:00-18:00</p>
      </div>
    </footer>
  );
}

export default Footer;
