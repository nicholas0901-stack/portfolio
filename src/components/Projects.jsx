import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CSIT314 – Cleaning Services Web Application",
    description:
      "Full-stack web app for booking and managing cleaning services. Built with Agile (Scrum) practices, including role-based dashboards, authentication, and booking workflows.",
    tags: [
      "ReactJS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "SQLite",
      "Git",
      "Docker",
      "Scrum",
    ],
    code: "https://github.com/nicholas0901-stack/CSIT314_cleaning-main/tree/main",
    demo: "https://csit314-cleaning-main.onrender.com",
  },
];

// Static tag list for display (no filtering logic here)
const tagCloud = [
  "All",
  "ReactJS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "SQLite",
  "Docker",
  "AWS",
  "EC2",
  "S3",
  "NGINX",
  "Route 53",
  "Git",
  "Scrum",
  "HTML/CSS",
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0B0F19] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm bg-blue-800 text-blue-200 px-3 py-1 rounded-full">
          Projects
        </span>
        <h2 className="text-3xl font-bold mt-4 text-white">Personal Projects</h2>
        <p className="text-gray-400 mt-2">
          Showcasing my technical skills through personal and academic projects.
        </p>

        {/* Tag Cloud */}
        <div className="flex flex-wrap gap-2 mt-8">
          {tagCloud.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                tag === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-gray-300"
              } cursor-pointer transition`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-5 shadow-md hover:shadow-blue-900 transition-shadow duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1F2937] text-xs text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-6 mt-4 text-blue-400 text-sm">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-300"
                >
                  <FaCode className="mr-1" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-300"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
