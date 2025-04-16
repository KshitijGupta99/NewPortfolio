import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-900 to-black px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-12 font-bold text-white text-4xl">About Me</h2>
        <p className="bg-white/5 shadow-lg backdrop-blur-md p-6 border border-gray-700 rounded-xl text-gray-300 text-lg leading-relaxed tracking-wide">
          I&rsquo;m a 3rd-year Computer Science student at IIIT Sonepat, driven by a passion for full-stack web development and a deep love for coding.
          With hands-on experience in the MERN stack and Next.js, I have developed a strong understanding of front-end and back-end technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
