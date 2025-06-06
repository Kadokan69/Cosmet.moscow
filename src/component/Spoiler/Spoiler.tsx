"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Spoiler.module.scss"

type TSpoilerChild = {
  children: React.ReactNode;
  title: string;
  className?: string
  open?:boolean
};

function Spoiler({ children, title, className, open}: TSpoilerChild) {
  const [isOpen, setIsOpen] = useState(open || false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div className={`${className} border-t-1 border-b-1 border-[#7955481f] p-2.5 flex flex-col h-[100%]` }>
      <div
      className="flex justify-between items-center"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h3>{title}</h3>
        <button className={`${style.open__btn} ${isOpen? `${style.active}`: ''}`} ></button>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ${isOpen? ' mt-2.5':''}`}
        style={{
          height: `${contentHeight}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Spoiler;
