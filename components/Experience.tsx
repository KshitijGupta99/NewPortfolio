import React from "react";
import Link from "next/link"; // Import Link from Next.js for navigation

const experiences = [
  {
    title: "Full Stack Intern",
    org: "Offozon",
    date: "Oct 2024 – Dec 2024",
    desc: "Worked on frontend and backend web development, ensuring smooth integration and performance.",
  },
  {
    title: "PR Lead",
    org: "Google Developer Group IIIT Sonepat",
    date: "Oct 2024 – Present",
    desc: "Led PR campaigns, organized events, and drove tech community growth.",
  },
  {
    title: "Content Lead",
    org: "AlgoZenith IIIT Sonepat",
    date: "Oct 2024 – Present",
    desc: "Managed content creation, strategy, and dissemination for tech events.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-gray-900 to-black px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 font-bold text-white text-4xl">Experience</h2>
        <div className="gap-8 grid md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Link key={i} href="https://www.linkedin.com/in/rohitchand01/" passHref>
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
