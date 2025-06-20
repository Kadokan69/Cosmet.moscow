'use client'
import { ModalContext } from '@/app/context/ModalProvider';
import React, { useContext } from 'react'

type ButtomOpenModalProps = {
  className?: string; // Простая строка
  children: React.ReactNode;
};

function ButtomOpenModal({className='rounded-lg bg-[#807170] text-white p-2', children}: ButtomOpenModalProps) {
    const {open} = useContext(ModalContext)
  return (
    <button onClick={open} className={className}>{children}</button>
  )
}

export default ButtomOpenModal