// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar({ scrollToSection, refs }) {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button
          onClick={() => scrollToSection(refs.about)}
          className="title-font font-medium text-white mb-4 md:mb-0 text-xl ml-3 text-left"
        >
          Hoai Vu' Portfolio
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <button
            onClick={() => scrollToSection(refs.about)}
            className="mr-5 hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.skills)}
            className="mr-5 hover:text-white"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(refs.certificates)}
            className="mr-5 hover:text-white"
          >
            Qualifications
          </button>
          <button
            onClick={() => scrollToSection(refs.projects)}
            className="mr-5 hover:text-white"
          >
            Projects
          </button>
        </nav>
        <button
          onClick={() => scrollToSection(refs.contact)}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
}
