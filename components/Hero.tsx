import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-gray-900 to-black px-6 min-h-screen">
      <div className="items-center gap-12 grid md:grid-cols-2 w-full max-w-6xl">
        <div className="space-y-6 md:text-left text-center animate-fade-in">
          <h1 className="font-bold text-white text-5xl md:text-6xl leading-tight tracking-tight">
            Hey, I&rsquo;m <span className="text-blue-500">Kshitij</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
          a web developer who loves turning ideas into fast, functional, and beautiful web experiences.
          I specialize in full-stack development with a focus on the MERN stack, crafting seamless frontends with React and NEXT and building scalable backends with Node.js and MongoDB. With over 200 LeetCode problems solved and a solid foundation in Python, JavaScript, and C++, I bring both logic and creativity to every project. From quick prototypes to production-ready apps, I enjoy building tools that make the web smarter
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 shadow-lg px-6 py-3 rounded-xl font-medium text-white text-base hover:scale-105 transition-all transform"
            >
              View Projects
            </a>
            <a
              href="mailto:rohitchand010904@gmail.com"
              className="hover:bg-blue-50 px-6 py-3 border border-blue-600 rounded-xl font-medium text-blue-600 text-base hover:scale-105 transition-all transform"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* <div className="flex justify-center md:justify-end">
          <div className="relative w-72 md:w-96 h-72 md:h-96">
            <Image
              src="/images/myprofile.png"
              alt="Rohit Chand"
              width={448}  
              height={448} 
              className="shadow-2xl border-8 border-blue-300 rounded-full object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
