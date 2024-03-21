import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  const config = {
    line1:
      "Hi, I'm Mohankumar, a seasoned Full Stack Web Developer specializing in the MERN stack. I create visually appealing websites using React.js, Tailwind CSS, and Bootstrap.",
    line2:
      "On the Frontend, I am skilled in React.js, Redux, Redux Toolkit, Axios, HTML5, Tailwind CSS, Bootstrap, MUI, and CSS3, among other advanced technologies. My expertise extends to creating seamless user experiences and pixel-perfect designs.",
    line3:
      "In the backend, I specialize in Node.js, Express.js, MongoDB, Mongoose, and MySQL to provide robust and scalable solutions for a wide range of projects.",
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} alt="AboutImg" />
      </div>
      <div className="md:w-1/2 flex py-4">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-[#4A5568] mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5 md:text-2xl">{config.line1}</p>
          <p className="pb-5 md:text-2xl">{config.line2}</p>
          <p className="pb-5 md:text-2xl">{config.line3}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
