import React from "react";
import { FaServer, FaDatabase, FaCode, FaDocker } from "react-icons/fa";


export default function About() {
  return (
    <section id="about" className="bg-[#0D1117] text-white py-16 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      {/* Left - About Text */}
      <div className="lg:w-2/3">
        <span className="text-sm bg-blue-900 text-blue-300 px-3 py-1 rounded-full mb-4 inline-block">
          About Me
        </span>
      
        <h2 className="text-3xl font-bold mb-4">
          Security-focused <span className="text-blue-400">System Engineer</span> &{" "}
          <span className="text-blue-400">Computer Science Graduate</span>
        </h2>
      
        <p className="text-gray-400 mb-4">
          I am a System Engineer with hands-on experience in network security, system
          hardening, and cross-platform administration across Linux and Windows
          environments.
        </p>
      
        <p className="text-gray-400 mb-4">
          I am proficient in automating deployments and operational workflows using
          Bash and PowerShell, supporting secure infrastructures, and implementing CIS
          benchmark standards to strengthen system compliance and resilience.
        </p>
      
        <p className="text-gray-400 mb-4">
          In addition to infrastructure work, I build robust web applications using
          React, Node.js, Express, and SQLite, with cloud deployment expertise on AWS
          (EC2, S3, Route 53) and containerization using Docker.
        </p>
      
        <p className="text-gray-400 mb-4">
          I am actively expanding my skill set in DevOps and automation, exploring and
          adopting open-source tools such as Terraform, Jenkins, and Kubernetes to
          improve infrastructure provisioning, CI/CD pipelines, and container
          orchestration.
        </p>
      
        <p className="text-gray-400">
          My mission is to design and operate resilient, secure, and scalable systems
          bridging the gap between infrastructure engineering and application
          delivery.
        </p>
      </div>

        {/* Right - Skill Cards */}
        <div className="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
                {
                icon: <FaServer className="text-blue-400 text-2xl mb-4" />,
                title: "System Engineering",
                desc: "Experienced with Linux/Windows server environments, system hardening, Active Directory, and secure network design.",
                },
                {
                icon: <FaDatabase className="text-blue-400 text-2xl mb-4" />,
                title: "Cloud & Databases",
                desc: "Skilled in AWS (EC2, S3), PostgreSQL, MySQL, and deployment pipelines using CI/CD and Docker.",
                },
                {
                icon: <FaDocker className="text-blue-400 text-2xl mb-4" />,
                title: "Containerization & Virtualization",
                desc: "Hands-on with VMware vSphere, Docker, and deploying scalable services with NGINX and GitOps.",
                },
                {
                icon: <FaCode className="text-blue-400 text-2xl mb-4" />,
                title: "Full-Stack Development",
                desc: "Worked on ReactJS, Node.js, Express, SQLite/PostgreSQL, and building secure backend systems with SDLC practices.",
                },
            ].map((card, idx) => (
                <div
                key={idx}
                className="bg-[#161B22] p-5 rounded-lg shadow-md border border-slate-800 flex flex-col h-full"
                >
                {card.icon}
                <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
                <p className="text-sm text-gray-400 flex-grow">{card.desc}</p>
                </div>
            ))}
            </div>
      </div>
    </section>
  );
}
