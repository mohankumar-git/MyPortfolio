import React from "react";
import Slider from "react-slick";
import StaticWebsite from "../assets/static-website.png";
import ResponsiveWebsite from "../assets/responsive-website.png";
import SQL from "../assets/sql.png";
import Python from "../assets/python.png";
import GitHub from "../assets/github.png";
import DynamicWebsite from "../assets/dynamic-website.png";
import Javascript from "../assets/js-essential.png";
import Flexbox from "../assets/flexbox.png";
import Nodejs from "../assets/nodejs.png";
import Reactjs from "../assets/reactjs.png";

const Certifications = () => {
  const config = {
    certificates: [
      {
        title: "Build Your Own Static Website",
        image: StaticWebsite,
        url: "https://certificates.ccbp.in/intensive/static-website?id=MVMONOZSHP",
      },
      {
        title: "Build Your Own Responsive Website",
        image: ResponsiveWebsite,
        url: "https://certificates.ccbp.in/intensive/responsive-website?id=AEXUWAVNNM",
      },
      {
        title: "Introduction to Databases",
        image: SQL,
        url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=HWJFJDBSQT",
      },
      {
        title: "Programming Foundations",
        image: Python,
        url: "https://certificates.ccbp.in/intensive/programming-foundations?id=WVSUHMLADW",
      },
      {
        title: "Developer Foundations",
        image: GitHub,
        url: "https://certificates.ccbp.in/intensive/developer-foundations?id=CJZQLPWLGI",
      },
      {
        title: "Build Your Own Dynamic Web Application",
        image: DynamicWebsite,
        url: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=TTOKMBMSUA",
      },
      {
        title: "JavaScript Essentials",
        image: Javascript,
        url: "https://certificates.ccbp.in/intensive/javascript-essentials?id=UHZAZJUREO",
      },
      {
        title: "Responsive Web Design using Flexbox",
        image: Flexbox,
        url: "https://certificates.ccbp.in/intensive/flexbox?id=FPUCCZETSE",
      },
      {
        title: "Node JS",
        image: Nodejs,
        url: "https://certificates.ccbp.in/intensive/node-js?id=TBVITVFZNA",
      },
      {
        title: "React JS - Getting started",
        image: Reactjs,
        url: "https://certificates.ccbp.in/intensive/react-js?id=XGDMQRORID",
      },
    ],
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="slider-container flex flex-col">
      <h1 className="text-4xl font-bold text-white md:self-center text-center border-b-4 border-[#4A5568] mb-10 w-[190px]">
      Certificates
      </h1>
      <Slider {...settings}>
        {config.certificates.map((certificate, index) => (
          <div className="relative px-5" key={index}>
            <img
              // className="md:h-[250px] md:w-[500px] h-[180px] w-[300px]"
              src={certificate.image}
              alt={certificate.title}
            />
            <div className="certificate-decs">
              <p className="text-center md:text-2xl text-white md:font-semibold px-5 py-3 md:py-5">{certificate.title}</p>
              <div className="flex justify-center">
                <a
                  className="certificate-view-btn text-white"
                  target="_blank"
                  href={certificate.url}
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certifications;
