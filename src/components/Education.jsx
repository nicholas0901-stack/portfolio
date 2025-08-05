import React from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const education = [
  {
    title: "University of Wollongong, SIM",
    subtitle: "Bachelor of Computer Science | Major in Digital Security System",
    year: "Jul 2025",
  },
  {
    title: "Singapore Polytechnic",
    subtitle: "Diploma | Computer Engineering",
    year: "Apr 2020",
  },
  {
    title: "ITE College Central (Ang Mo Kio)",
    subtitle: "Higher NITEC | Electronics Engineering",
    year: "2018",
    extra: [
      "• Certificate of Merit",
      "• Director’s List (Academic Year 2016, 2017)",
    ],
  },
  {
    title: "ITE College Central (Ang Mo Kio)",
    subtitle: "NITEC | Aerospace Technology",
    year: "2016",
  },
  {
    title: "Jurong Secondary School",
    subtitle: "GCE N Level",
    year: "2013",
  },
];

const modules = [
  {
    title: "Computer Science & Security Modules",
    subtitle: "University of Wollongong",
    list: [
      "OO Design & Programming",
      "System Security",
      "Database mangement",
      "Big Data mangement",
      "Cryptography and secure application",
      "Websecurity",
    ],
  },
  
  {
    title: "Engineering & Computing Modules",
    subtitle: "Singapore Polytechnic & ITE",
    list: [
      "Microcontroller Programming",
      "Networking Fundamentals",
      "Digital Electronics",
      "Java and C++ Programming",
      "Cloud native application",
      "Linux and Windows System Administration",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#0D1117] py-16 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Headings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Education */}
          <div>
            <span className="text-sm bg-blue-900 text-blue-300 px-3 py-1 rounded-full">
              Education
            </span>
            <h2 className="text-3xl font-bold mt-4">Academic Background</h2>
            <p className="text-gray-400 mt-2">
              My formal education in computer science, computer engineering, electronics engineering and aerospace engineering.
            </p>

            <div className="mt-6 space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-[#161B22] border border-slate-800 rounded-lg p-4 flex justify-between items-start"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900 p-2 rounded-full text-blue-400">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{edu.title}</h3>
                      <p className="text-sm text-gray-400">{edu.subtitle}</p>
                      {edu.extra && (
                        <ul className="text-sm text-gray-400 mt-1 list-disc list-inside">
                          {edu.extra.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <span className="bg-[#1F2937] text-gray-300 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Modules / Certifications */}
          <div>
            <span className="text-sm bg-blue-900 text-blue-300 px-3 py-1 rounded-full">
              Certifications
            </span>
            <h2 className="text-3xl font-bold mt-4">Professional Development</h2>
            <p className="text-gray-400 mt-2">
              Relevant modules and specialisations that enhanced my technical proficiency.
            </p>

            <div className="mt-6 space-y-4">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="bg-[#161B22] border border-slate-800 rounded-lg p-4 flex gap-4 items-start"
                >
                  <div className="bg-blue-900 p-2 rounded-full text-blue-400">
                    <FaBookOpen />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{mod.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{mod.subtitle}</p>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      {mod.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
