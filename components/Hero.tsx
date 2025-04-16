import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-gray-900 to-black px-6 min-h-screen">
      <div className="items-center gap-12 grid md:grid-cols-2 w-full max-w-6xl">
        <div className="space-y-6 md:text-left text-center animate-fade-in">
          <h1 className="font-bold text-white text-5xl md:text-6xl leading-tight tracking-tight">
            Hey, I'm <span className="text-blue-500">Rohit Chand</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Full Stack Developer passionate about building web apps.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            With a strong foundation in the MERN stack and Next.js, I bring ideas to life through clean code and interactive UIs.
            I'm currently exploring cloud deployment, system design, and performance optimization. Whether it's a dynamic landing page or a full-fledged platform, I focus on speed, scalability, and great user experience. Let’s build something impactful together!
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
        <div className="flex justify-center md:justify-end">
          <img
            src="/myprofile.png"
            alt="Rohit Chand"
            className="shadow-2xl border-8 border-blue-300 rounded-full w-112 md:w-112 h-112 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
