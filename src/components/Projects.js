// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React, { forwardRef } from "react";
import { projects } from "../data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Projects = forwardRef(function Projects({ workRef }, ref) {
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font"
      ref={ref}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Take a look at some of my most notable real-world and personal
            projects...
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.image} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="Projects"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <br />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "lightblue" }}
                    >
                      View
                      <ArrowForwardIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
