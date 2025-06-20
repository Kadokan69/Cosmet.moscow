import { NavLink } from "@/constant/constant";
import Link from "next/link";
import ButtomOpenModal from "../ButtonOpenModal/ButtomOpenModal";


interface INav {
  isOpen: boolean;
  setIsOpen: (item: boolean) => void;
}


const Nav = (prop: INav) => {
  return (
    <>
      {prop.isOpen ? (
        <div
          className={`overlay absolute left-0 top-0 bg-[#00000080] w-full h-[100vh]`}
          onClick={() => {
            prop.setIsOpen(!prop.isOpen);
          }}
        ></div>
      ) : (
        ""
      )}
      <nav
        className={`absolute min-w-[320] lg:static lg:h-auto lg:text-white flex top-0 text-[#807170] right-0 flex-col h-[100vh] bg-[#f4f4f2] lg:bg-inherit lg:flex-row items-center gap-4 p-2 pt-2 transition-all duration-200 text-center lg:translate-x-0 ${
          prop.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="flex lg:hidden absolute right-[15px]"
          onClick={() => {
            prop.setIsOpen(!prop.isOpen);
          }}
        ></button>

        <ul
          className={`flex flex-col w-[69vw] justify-center items-center gap-6 right-0 top-0   lg:flex-row lg:translate-none lg:static lg:w-full`}
        >
          {NavLink.map((link) => {
            return (
              <li className="p-1.5" key={link.id}>
                <Link href={link.url} className=" hover:text-white-300 transition-all duration-200">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="#" className="lg:hidden">+7 999 999 99 99</Link>
        <ButtomOpenModal className="rounded-lg text-white bg-[#807170] p-2 lg:hidden">Записаться на прием</ButtomOpenModal>

      </nav>
    </>
  );
};

export default Nav;
