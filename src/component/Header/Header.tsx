"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "../Nav/Nav";
import { useContext, useEffect, useState } from "react";
import style from "./Header.module.scss";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { ModalContext } from "@/app/context/ModalProvider";
import ButtomOpenModal from "../ButtonOpenModal/ButtomOpenModal";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isOpenModal, close } = useContext(ModalContext);

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
      <div className="flex justify-between p-2 items-center">
        <div className=" hidden lg:flex gap-3">
          <Link href="#">
             <Image src="/telegram.svg" alt="" width={30} height={30} />
          </Link>
          <Link href="#">
             <Image src="/vk.svg" alt="" width={30} height={30} />
          </Link>
        </div>
        <div className="lg:absolute lg:top-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%]">
          <Image src="/logo-new.png" alt="Logo" width={150} height={30} />
        </div>
        <div className="flex gap-4 items-center">
          <Link href="tel:+79173169209" className="hidden sm:block">
            +7 (917) 316-92-09
          </Link>
          <ButtomOpenModal className=" hidden sm:block rounded-lg bg-white text-[#807170] p-2">
            Записаться на прием
          </ButtomOpenModal>

          
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
      <Modal isOpen={isOpenModal} onClose={close}>
        <Form id="modal-form"/>
      </Modal>
    </header>
  );
};

export default Header;
