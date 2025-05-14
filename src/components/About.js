// src/components/About.js

import React from "react";
import Hoai_Vu_Xuan_Resume from "./Hoai_Vu_Xuan_Resume.pdf";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/Hoai_Vu_Xuan_Resume.pdf";
    link.download = "Hoai_Vu_Xuan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Hoai Vu - <br className="hidden lg:inline-block" />
            Software Engineer
          </h1>
          <p className="mb-8 leading-relaxed">
            As a dedicated Information of Technology student at Posts and
            Telecommunications Institute of Technology(PTIT) in Hanoi, I'm
            passionate about harnessing the synergy between technology and
            economics to drive innovation and growth! 🚀
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Let's Connect!
            </a>
            <a
              href={Hoai_Vu_Xuan_Resume}
              download="Hoai_Vu_Xuan_Resume"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Download My CV/Resume! {"  "}
              <i className="ml-4 mt-1 pi pi-download"></i>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="my-photo"
            src="./MyPhoto.png"
          />
        </div>
      </div>
      <div className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </section>
  );
}
