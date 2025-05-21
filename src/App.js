// src/App.js

import React, { useRef, Suspense } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ScrollToTop from "react-scroll-to-top";

// Lazy load components
const Skills = React.lazy(() => import("./components/Skills"));
const Certificates = React.lazy(() => import("./components/Certificates"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));

// import "./App.css";

export default function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const certificatesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const scrollToSection = (ref) => {
    if (!ref) return;

    // Add a small delay to ensure the ref is mounted
    setTimeout(() => {
      if (ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          about: aboutRef,
          skills: skillsRef,
          certificates: certificatesRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />
      <About ref={aboutRef} />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Skills ref={skillsRef} />
        <Certificates ref={certificatesRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </Suspense>
    </main>
  );
}
