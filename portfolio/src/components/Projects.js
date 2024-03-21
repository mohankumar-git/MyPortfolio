import React from "react";
import ECommerceImg from "../assets/ecommerce.jpg";
import JobFindingImg from "../assets/job-finding.jpg"
import YoutubeCloneImg from "../assets/youtube-clone.jpg"

const Projects = () => {
  const config = {
    projects: [
      {
        image: ECommerceImg,
        description: "A Ecommerce Website. Built with MERN Stack.",
        link: "https://github.com/mohankumar-git/Nxt-Trendz",
      },
      {
        image: JobFindingImg,
        description: "A job finding website using React.js, integrating APIs for real-time job listings.",
        link: "https://github.com/mohankumar-git/Jobby-App",
      },
      {
        image: YoutubeCloneImg,
        description: "YouTube clone using React, offering users a familiar interface for watching videos",
        link: "https://github.com/mohankumar-git/Nxt-Watch",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-[#2D3748] mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p className="md:text-2xl text-white">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center md:items-start md:flex-row px-10 gap-5">
          {config.projects.map((project, index) => (
            <div className="relative" key={index}>
              <img
                className="md:h-[250px] md:w-[500px] h-[180px] w-[300px]"
                src={project.image}
                alt="ECommerceImg"
              />
              <div className="project-decs">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a className="download-btn" target="_blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
