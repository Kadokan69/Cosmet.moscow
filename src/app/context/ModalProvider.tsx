'use client'
import { createContext, ReactNode, useState } from "react";
type Props = {
  children: ReactNode;
};

export const ModalContext = createContext({
  isOpenModal: false,
  open: () => {},
  close: () => {},
});

export const ModalProvider = ({ children }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const open = () => setIsOpenModal(true);
  const close = () => setIsOpenModal(false);

  return <ModalContext.Provider value={{ isOpenModal, open, close }}>{children}</ModalContext.Provider>;
};
