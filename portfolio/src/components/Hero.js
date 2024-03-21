import React from "react";
import HeroImg from "../assets/hero.png"
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  const config = {
    subtitle: "I'm a Full-Stack developer"
  }
  return (
    <section className="flex flex-col md:flex-row px-5 py-10 justify-center bg-primary">
      <div className="md:w-1/2 flex flex-col">
      <h1 className="text-white text-6xl font-hero-font">
        Hi, <br />
        I'm <span className="text-black">Mohan Kumar</span>
        <p className="text-2xl">{config.subtitle}</p>
      </h1>
      <div className="flex py-10 gap-5">
        <a target="_blank" href="https://www.linkedin.com/in/mohan-kumar-049731264/" className="hover:text-white"><AiFillLinkedin size={40}/></a>
        <a target="_blank" href="https://twitter.com/mohan_kumar_23" className="hover:text-white"><FaXTwitter size={38}/></a>
        <a target="_blank" href="https://github.com/mohankumar-git" className="hover:text-white"><AiOutlineGithub size={40}/></a>
      </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} alt="Hero"/>
    </section>
  );
};

export default Hero;
