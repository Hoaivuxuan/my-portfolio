// src/App.js

import React, { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import ScrollToTop from "react-scroll-to-top";

// import "./App.css";

export default function App() {
  const workRef = useRef();

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar handleWorkScroll={handleWorkScroll} />
      <About />
      <Skills />
      <Certificates />
      <Projects workRef={workRef} />
      <Contact />
    </main>
  );
}
