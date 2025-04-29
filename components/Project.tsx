import React from "react";

const projects = [
  {
    title: "Playlist Exchanger",
    description: "Convert and sync playlists between Spotify and YouTube effortlessly.",
    link: "https://github.com/KshitijGupta99/Playlist-Exchanger",
  },
  {
    title: "YouTube Extension",
    description: "A browser extension to enhance YouTube with custom features and controls.",
    link: "https://github.com/KshitijGupta99/YouTube-Video-Controller",
  },
  {
    title: "Chat App",
    description: "Real-time chat app with user-friendly UI and secure messaging using WebSockets.",
    link: "https://github.com/KshitijGupta99/Chat-app",
  },
  {
    title: "Clothify",
    description: "Classifies fashion items into 10 categories using a trained machine learning model.",
    link: "https://github.com/KshitijGupta99/Clothify",
  },
  {
    title: "Vibe Cart",
    description: "VibeCart 🛒 A vibrant e-commerce platform making shopping a joyful adventure. Explore the code behind our fun and trendy online store!",
    link: "https://github.com/KshitijGupta99/VibeCart",
  },
  {
    title: "Finance Tracker",
    description: "Track your income and expenses with visual insights and balance summaries.",
    link: "https://github.com/KshitijGupta99/Finance-Tracker",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-gray-900 to-black px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 font-bold text-white text-4xl">Projects</h2>
        <div className="gap-8 grid md:grid-cols-3">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-gray-800 shadow-lg hover:shadow-xl p-6 border border-gray-700 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="mb-2 font-semibold text-blue-500 text-xl">{proj.title}</h3>
              <p className="mb-4 text-gray-400">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 font-medium text-teal-400 hover:underline"
              >
                Try it here →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
