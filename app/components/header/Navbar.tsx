"use client";
import Image from "next/image";
import logoImg from "@/public/images/red-304573_1280.webp";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const navmenu = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Blog",
    link: "/hospital",
  },
  {
    id: 3,
    text: "About",
    link: "/blog",
  },
  {
    id: 4,
    text: "Contact",
    link: "/support",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar bg-[#DCECF1]">
      <div className="max-w-[1400px] mx-auto w-full p-3 flex justify-between items-center">
        <Image src={logoImg} width={40} alt={""} />
        <ul className="menu hidden md:flex gap-5 text-[#1A093F] font-medium">
          {navmenu.map((item, index) => (
            <li key={index}>
              <a
                className="hover:text-[#159FED] duration-100 transition-all "
                href={item.link}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="btn-group gap-3 hidden md:flex">
          <button className="btn1 bg-[#FAFBFB] w-[106px] h-[50px] rounded-xl">
            Log in
          </button>
          <button className="btn2 bg-[#1ECAAB] w-[106px] h-[50px] rounded-xl">
            Sign Up
          </button>
        </div>
        <a onClick={toggleMenu} href="#" className="md:hidden block text-2xl">
          <AiOutlineMenu />
        </a>
      </div>
      <div
        className={`${
          isOpen ? "left-0" : "-left-96"
        } duration-300 sidebar-menu bg-white shadow-2xl md:hidden z-50 top-0  w-56 h-full fixed overflow-y-auto`}
      >
        <a
          className="font-semibold flex items-center justify-between pt-[23px] pr-3 text-2xl md:hidden"
          href="#"
        >
          <span className="pl-3 text-2xl font-semibold ">
            <img src="/public/image/Logo (2).svg" alt="" />
          </span>{" "}
          <span onClick={toggleMenu} className="hover:text-[#F6D2CF]">
            <RxCross1 />
          </span>
        </a>
        <ul className="menu items-start ml-8 font-medium  pt-7 flex flex-col gap-5">
          {navmenu.map((item, index) => (
            <li key={index}>
              <a
                className="hover:text-[#159FED] duration-100 transition-all "
                href={item.link}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-lg w-32 ml-6 h-[40px] mt-7 font-semibold text-[#1A093F] border-2 border-[#1DC2A4] mx-auto">
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Navbar;
