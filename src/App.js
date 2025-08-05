import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills"; // ⬅️ Add this
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-[#0D1117] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />     {/* ⬅️ Add this below Education or wherever you want */}
      <ContactSection />
    </div>
  );
}

export default App;
