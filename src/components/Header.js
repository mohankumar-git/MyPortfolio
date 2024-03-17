import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from '../assets/logo.png'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between items-center px-5 py-2 bg-primary">
      <a href="/" className="text-2xl font-bold text-black` font-hero-font">
        <img className="h-[50px] w-[50]" src={Logo} alt="logo"/>
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && <nav className="block md:hidden">
        <ul className="flex flex-col text-white mobile-nav">
          <li>
            <a href="/" onClick={() => setToggleMenu(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a>
          </li>
          <li>
            <a href="#resume" onClick={() => setToggleMenu(false)}>Resume</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
          </li>
        </ul>
      </nav>}
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
