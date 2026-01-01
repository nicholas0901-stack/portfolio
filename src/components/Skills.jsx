import React from "react";
import { FaNetworkWired, FaCloud, FaServer, FaDatabase, FaCode } from "react-icons/fa";

const skillCategories = [
  {
    title: "Networking & Security",
    icon: <FaNetworkWired className="text-blue-400" />,
    skills: [
      "Packet analysis",
      "Network security",
      "Routing & switching",
      "Cisco ASA firewall",
      "LAN/WAN troubleshooting",
      "Cryptography",
      "Secure system design",
    ],
  },
  {
    title: "Cloud & Virtualization",
    icon: <FaCloud className="text-blue-400" />,
    skills: [
      "AWS EC2",
      "AWS S3",
      "Route 53",
      "VMware ESXi",
      "vSphere",
      "vCenter",
      "Docker",
    ],
  },
  {
    title: "Operating Systems",
    icon: <FaServer className="text-blue-400" />,
    skills: [
      "RHEL 7",
      "Ubuntu 22.04",
      "Ubuntu 24.04",
      "Bash scripting",
      "CIS hardening",
      "Windows Server 2016",
      "Windows Server 2022",
      "Active Directory",
      "Patching",
      "PowerShell automation",
    ],
  },
  {
    title: "Big Data & Databases",
    icon: <FaDatabase className="text-blue-400" />,
    skills: [
      "Hadoop",
      "HDFS",
      "Hive",
      "Spark",
      "RDBMS",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Programming & Development",
    icon: <FaCode className="text-blue-400" />,
    skills: [
      "Java",
      "JavaScript",
      "ReactJS",
      "Bootstrap",
      "HTML/CSS",
      "Node.js",
      "Express.js",
      "SDLC",
      "Agile",
      "Scrum",
      "Kanban",
      "Data Structures",
      "Algorithms",
    ],
  },
   {
    title: "Automation & DevOps",
    icon: <FaCogs className="text-blue-400" />,
    skills: [
      "Ansible",
      "Infrastructure as Code (IaC)",
      "Configuration management",
      "CI/CD fundamentals",
      "Automation scripting",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0D121F] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-sm bg-blue-900 text-blue-300 px-3 py-1 rounded-full">
          Skills
        </span>
        <h2 className="text-3xl font-bold mt-4">Technical Expertise</h2>
        <p className="text-gray-400 mt-2">
          Key technologies and tools I work with to build secure and scalable systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-blue-300">
                {category.icon}
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1F2937] text-sm text-gray-300 px-3 py-1 rounded-full hover:bg-blue-700 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
