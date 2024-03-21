import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between items-center px-5 py-2 bg-primary">
      <a href="/" className="text-2xl font-bold text-black` font-hero-font">
        <img className="h-[50px] w-[50]" src={Logo} alt="logo" />
      </a>
      <nav
        className={`bg-gray-800 fixed h-full z-50 w-[70%] ${
          toggleMenu ? "right-0" : "right-[-300px]"
        } duration-300 top-0 md:bg-transparent md:static md:z-auto md:w-fit`}
      >
        <ul className="flex flex-col md:flex-row text-white">
          <li className="text-center py-5 px-5 self-end md:hidden">
            <button
              className="block md:hidden"
              onClick={() => setToggleMenu((prev) => !prev)}
            >
              <XMarkIcon className="text-white h-5" />
            </button>
          </li>
          <li className="text-center py-3 md:py-0">
            <a
              href="/"
              className="hover:border-b-2 md:hover:border-none"
              onClick={() => setToggleMenu(false)}
            >
              Home
            </a>
          </li>
          <li className="text-center py-3 md:py-0">
            <a
              href="#about"
              className="hover:border-b-2 md:hover:border-none"
              onClick={() => setToggleMenu(false)}
            >
              About
            </a>
          </li>
          <li className="text-center py-3 md:py-0">
            <a
              href="#projects"
              className="hover:border-b-2 md:hover:border-none"
              onClick={() => setToggleMenu(false)}
            >
              Projects
            </a>
          </li>
          <li className="text-center py-3 md:py-0">
            <a
              href="#resume"
              className="hover:border-b-2 md:hover:border-none"
              onClick={() => setToggleMenu(false)}
            >
              Resume
            </a>
          </li>
          <li className="text-center py-3 md:py-0">
            <a
              href="#contact"
              className="hover:border-b-2 md:hover:border-none"
              onClick={() => setToggleMenu(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="block md:hidden"
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
};

export default Header;
