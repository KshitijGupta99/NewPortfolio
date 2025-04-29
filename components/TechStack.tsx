import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiTypescript,
  SiNumpy ,
  SiAnaconda ,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaPython, FaJsSquare } from "react-icons/fa";

const techs = [
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "React.js", icon: <SiReact className="text-sky-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Numpy", icon: <SiNumpy  className="text-yellow-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "React Native", icon: <TbBrandReactNative  className="text-gray-900" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Anaconda", icon: <SiAnaconda  className="text-cyan-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "DSA", icon: <SiGit className="text-blue-600" /> },
];

const TechStack = () => {
  return (
    <section id="tech" className="bg-gradient-to-r from-gray-900 to-black px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-10 font-bold text-white text-4xl">Tech Stack</h2>
        <div className="place-items-center gap-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
          {techs.map((tech, index) => (
            <div key={index} className="group flex flex-col items-center hover:scale-110 transition transform">
              <div className="mb-2 text-white group-hover:text-blue-500 text-4xl">{tech.icon}</div>
              <p className="font-medium text-gray-300 group-hover:text-blue-500 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
