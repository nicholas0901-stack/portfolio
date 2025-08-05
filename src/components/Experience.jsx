import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import ncsLogo from "../assets/ncs-logo.JPG"; // adjust path as needed
import stLogo from "../assets/st-logo.JPG"; // adjust path as needed
import equinixLogo from "../assets/equinix-logo.JPG"; // adjust path as needed

const experiences = [
  {
    date: "Jul 2024 – Present",
    title: "System Engineer",
    company: "NCS",
    type: "Full-time",
    bullets: [
      "Hardened servers and network switches for system resilience.",
      "Managed clustered servers and deployed secure infrastructure.",
      "Delivered Level 1 and Level 2 application support.",
      "Deployed and maintained infrastructure components.",
    ],
  },
  {
    date: "Aug 2022 – Jun 2024",
    title: "System Engineer",
    company: "ST Engineering (Mission Software & Services)",
    type: "Full-time",
    bullets: [
      "Managed Linux/Windows servers and secured project environments.",
      "Automated tasks using PowerShell.",
      "Programmed microcontrollers in C++.",
      "Performed OS hardening (CIS) and supported UAT/FAT processes.",
      "Provisioned Layer 2 switches and managed system deployments.",
    ],
  },
  {
    date: "Mar 2019 – Aug 2019",
    title: "Network Service Engineer (Intern)",
    company: "Equinix Asia Pacific",
    type: "Internship",
    bullets: [
      "Provisioned customer ports, configured BGP.",
      "Deployed Routers/Switches in new Datacenters.",
      "Performed L1–L2 troubleshooting and handled NOC alerts.",
      "Assisted with capacity expansion and module upgrades.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#161B22] py-16 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm bg-blue-900 text-blue-300 px-3 py-1 rounded-full">
            Work Experience
          </span>
          <h2 className="text-3xl font-bold mt-4">My Professional Journey</h2>
          <p className="text-gray-400 mt-2">
            Building and securing systems across government and enterprise domains.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Connector icon */}
                  <div className="hidden lg:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white p-2 rounded-full z-10">
                      <FaLaptopCode className="text-sm" />
                    </div>
                  </div>

                  <div
                    className={`mt-6 lg:w-[48%] ${
                      isLeft ? "lg:mr-auto lg:pr-10" : "lg:ml-auto lg:pl-10"
                    }`}
                  >
                    <div className="bg-[#0D1117] border border-slate-800 rounded-lg p-6 shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-blue-300">{exp.date}</span>
                        <span className="text-xs bg-slate-800 text-blue-200 px-2 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      {/* Conditional rendering for NCS logo */}
                     {exp.company === "NCS" ? (
                        <div className="flex items-center gap-2 mb-1">
                            <img
                            src={ncsLogo}
                            alt="NCS Logo"
                            className="w-6 h-6 object-contain"
                            />
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                        </div>
                        ) : exp.company.includes("ST Engineering") ? (
                        <div className="flex items-center gap-2 mb-1">
                            <img
                            src={stLogo}
                            alt="ST Logo"
                            className="w-6 h-6 object-contain"
                            />
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                        </div>
                        ) : exp.company.includes("Equinix") ? (
                        <div className="flex items-center gap-2 mb-1">
                            <img
                            src={equinixLogo}
                            alt="Equinix Logo"
                            className="w-6 h-6 object-contain"
                            />
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                        </div>
                        ) : (
                        <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                        )}
                      <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
