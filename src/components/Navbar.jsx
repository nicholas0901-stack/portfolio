import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="block w-full px-4 py-3 bg-[#0D1117] text-white shadow-md fixed top-0 z-50">
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-xl font-bold text-white">
          Nicholas Ng<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
       {/* Desktop Nav */}
        <div className="hidden lg:block">
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-sm text-slate-300">
            <li><a href="#hero" className="hover:text-blue-400 cursor-pointer">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 cursor-pointer">About</a></li>
            <li><a href="#experience" className="hover:text-blue-400 cursor-pointer">Experience</a></li>
            <li><a href="#education" className="hover:text-blue-400 cursor-pointer">Education</a></li>
            <li><a href="#projects" className="hover:text-blue-400 cursor-pointer">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 cursor-pointer">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a></li>
        </ul>
        </div>


        {/* Hamburger Toggle Button (Mobile) */}
        <button
          className="relative ml-auto h-6 w-6 text-white lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
        </button>

       {/* Mobile Nav */}
        {menuOpen && (
        <div className="w-full mt-4 lg:hidden">
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
            <li><a href="#hero" className="hover:text-blue-400 cursor-pointer">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 cursor-pointer">About</a></li>
            <li><a href="#experience" className="hover:text-blue-400 cursor-pointer">Experience</a></li>
            <li><a href="#education" className="hover:text-blue-400 cursor-pointer">Education</a></li>
            <li><a href="#projects" className="hover:text-blue-400 cursor-pointer">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 cursor-pointer">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a></li>
            </ul>
        </div>
        )}
      </div>
    </nav>
  );
}
