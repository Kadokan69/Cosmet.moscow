import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-4 justify-center lg:justify-between  items-center p-4 bg-[#807170] text-[#f4f4f2]">
      <div className="grid grid-cols-2 gap-2 flex-1">
        <a href="#" className="border border-[#f4f4f2] rounded-2xl p-2 text-center">Telegram</a>
        <a href="#" className="border border-[#f4f4f2] rounded-2xl p-2 text-center">VK</a>
        <a href="#" className="border border-[#f4f4f2] rounded-2xl p-2 text-center col-span-2">Записаться</a>
      </div>
      <div className="text-center text-3xl flex-1">
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </div>
      <div className="text-center flex-1">
        <p>Время работы: Пн-Пт 9:00-18:00</p>
      </div>
    </footer>
  );
}

export default Footer;
