import React from "react";
import Link from "next/link";

const experiences = [
  {
    title: "Full Stack Devloper",
    org: "GigzGenie",
    date: "May 2025 - present",
    desc: "Intern as a Full Stack Software Developer @GigzGenie"
  },
  {
    title: "Member @GDSC at IIIT Sonepat",
    org: "Google Developer Student Club",
    date: "Dec 2024 – present",
    desc: "Contributed to various projects and events as a member of GDSC.",
  },
  {
    title: "SIH 2024 Team leader",
    org: "Smart India Hackathon",
    date: "Apr 2024",
    desc: "Lead a team for the Smart India Hackathon 2024.",
  },
  {
    title: "Open Source Contributor for GSOC 2025",
    org: "stdlib",
    date: "Nov 2024 – present",
    desc: "contibuted for stdlib for GSOC 2025.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-gray-900 to-black px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 font-bold text-white text-4xl">Experience</h2>
        <div className="gap-8 grid md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Link key={i} href="https://www.linkedin.com/in/kshitij-gupta-481aaa290/" passHref>
              <div className="bg-gray-800 shadow-lg hover:shadow-xl p-6 rounded-xl transition cursor-pointer">
                <h3 className="mb-2 font-semibold text-blue-600 text-xl">{exp.title}</h3>
                <p className="text-gray-400 text-sm">{exp.org} | {exp.date}</p>
                <p className="mt-4 text-gray-300">{exp.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
