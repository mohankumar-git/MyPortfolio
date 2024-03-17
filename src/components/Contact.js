import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const config = {
    email: "mohankumardev24@gmail.com",
    phone: "97XXXXX882",
  };
  return (
    <section id="contact" className="flex flex-col justify-center bg-primary px-5 py-32">
      <div className="flex flex-col items-center py-4 text-white">
        <h1 className="text-4xl border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5 md:text-2xl">
          If you want to discuss more in detail, please contact me
        </p>
        <p className="py-2">
          <span className="font-bold">Email: </span>
          {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone: </span>
          {config.phone}
        </p>
      </div>
      <div className="flex gap-5 justify-center">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohan-kumar-049731264/"
          className="hover:text-white"
        >
          <AiFillLinkedin size={40} />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/mohan_kumar_23"
          className="hover:text-white"
        >
          <FaXTwitter size={38} />
        </a>
        <a
          target="_blank"
          href="https://github.com/mohankumar-git"
          className="hover:text-white"
        >
          <AiOutlineGithub size={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
