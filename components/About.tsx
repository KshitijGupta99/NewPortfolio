import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-900 to-black px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-white text-center animate-fade-in-up">
        <h2 className="mb-10 font-extrabold text-4xl tracking-tight">About Me</h2>
        <p className="bg-white/5 shadow-lg backdrop-blur-md p-6 border border-gray-700 rounded-xl text-gray-300 text-lg leading-relaxed tracking-wide">
          I&rsquo;m a 3rd-year Computer Science student at IIIT Sonepat, driven by a passion for full-stack web development and building intuitive, impactful digital experiences. With strong hands-on experience in the MERN stack and Next.js, I specialize in transforming ideas into seamless, scalable applications with a modern UI/UX focus.
          
          Over the past few years, I&rsquo;ve developed projects like real-time chat platforms, contact managers, and crypto dashboards—handling both frontend finesse and backend logic. I thrive in roles that allow me to work across the stack and learn continuously.
          
          I&rsquo;m currently the PR Lead at GDG IIIT Sonepat and Content Lead at AlgoZenith, where I actively contribute to organizing tech events and content creation, enhancing both communication and leadership skills. I also dedicate time to solving DSA problems, studying system design, and collaborating in hackathons.
          
          My goal is to develop software that not only works but delights. I enjoy collaborating with enthusiastic minds to build products that make a difference and reflect craftsmanship at every level.
        </p>
      </div>
    </section>
  );
};

export default About;
