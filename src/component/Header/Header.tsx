"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import style from "./Header.module.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      const currentPos = window.scrollY;

      if (currentPos > 100 && !scroll) {
        setScroll(true);
      }
      if (currentPos <= 100) {
        setScroll(false);
      }
    };

    handlerScroll();
    document.addEventListener("scroll", handlerScroll);
    return () => {
      document.removeEventListener("scroll", handlerScroll);
    };
  }, [scroll]);
  return (
    <header
      className={`fixed z-10 w-full text-white ${
        !scroll ? "bg-transparent" : "bg-[#b0a9a7]"
      } transition-colors duration-500`}
    >
      <div className="flex justify-between p-4">
        <div className=" hidden lg:flex gap-3">
          <Link href="#">
            <svg
              role="presentation"
              width="30px"
              height="30px"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                fill="#ffffff"
              ></path>
            </svg>
          </Link>
          <Link href="#">
            <svg
              role="presentation"
              width="30px"
              height="30px"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                fill="#ffffff"
              ></path>
            </svg>
          </Link>
          <Link href="#">
            <svg
              role="presentation"
              width="30px"
              height="30px"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                fill="#ffffff"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="lg:absolute lg:top-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%]">
          <Image src="/logo.svg" alt="Logo" width={150} height={30} />
        </div>
        <div className="flex gap-4 items-center">
          <Link href="#" className="hidden sm:block">
            +7 999 999 99 99
          </Link>
          <button className=" hidden sm:block rounded-lg bg-white text-[#807170] p-2">Записаться на прием</button>
        </div>
        <div className="items-center flex lg:hidden z-10">
          <button
            className={`${style.burger_btn} flex lg:hidden ${isOpen ? style.active : ""}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
