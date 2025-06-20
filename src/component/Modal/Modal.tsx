"use client";
import React, { ReactNode, useEffect } from "react";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: IModal) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={`fixed z-10 inset-0 flex justify-center items-center bg-[#00000052] bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-4 w-[320] rounded-2xl relative bg-white"
      >
        <button
          onClick={onClose}
          className="w-[20] h-[20] absolute top-[8] right-[8] text-[#817170] flex justify-center items-center"
        >
          <span className="w-[20] h-[2] bg-[#817170] absolute rotate-[45deg]"></span>
          <span className="w-[20] h-[2] bg-[#817170] rotate-[-45deg]"></span>
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
