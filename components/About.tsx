import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-900 to-black px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-12 font-bold text-white text-4xl">About Me</h2>
        <div className="bg-white/5 shadow-lg backdrop-blur-md p-6 border border-gray-700 rounded-xl">
          <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
            I&rsquo;m a 3rd-year Computer Science student at IIIT Sonepat, driven by a passion for full-stack web development and a deep love for coding.
            With hands-on experience in the MERN stack and Next.js, I have developed a strong understanding of front-end and back-end technologies.
          </p>
          <div className="space-y-6 mt-10 text-gray-300 text-lg leading-relaxed tracking-wide">
            <p>
              I have worked on various personal projects, building interactive web applications and focusing on performance optimization, scalability, and user experience. 
              I&rsquo;m currently exploring cloud deployment, containerization, and serverless architecture to build efficient, scalable applications.
            </p>
            <p>
              Besides coding, I enjoy reading about new technologies and contributing to open-source projects. I&rsquo;m also an active participant in hackathons, 
              where I love collaborating with like-minded individuals to create innovative solutions.
            </p>
            <p>
              My goal is to continue learning, develop my skills, and build impactful software that makes a difference in people’s lives. I&rsquo;m always open to new 
              challenges and collaborations to enhance my knowledge and experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
