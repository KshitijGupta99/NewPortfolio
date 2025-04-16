import React from "react";

const projects = [
  {
    title: "Real-Time Chat App",
    description: "A real-time messaging app with WebSocket, group chat, auth, and message storage.",
    link: "https://github.com/Rohitchand-01/Real-time-chat-app",
  },
  {
    title: "Crypto Dashboard",
    description: "Track real-time market data, trends, and portfolio performance with a sleek UI.",
    link: "https://github.com/Rohitchand-01/crypto-dashboard",
  },
  {
    title: "Contact Manager",
    description: "Manage contacts with search, sort, and Firebase integration for persistence.",
    link: "https://github.com/Rohitchand-01/Contact_Manager",
  },
  {
    title: "Gemini Clone",
    description: "A clone of the Gemini platform with real-time market data, secure login, and a sleek trading interface.",
    link: "https://github.com/Rohitchand-01/Gemini_clone",
  },
  {
    title: "Trading Dashboard",
    description: "A powerful trading dashboard with real-time stock market data and portfolio tracking.",
    link: "https://github.com/Rohitchand-01/Trading_Dashboard",
  },
  {
    title: "Shopping Cart",
    description: "An e-commerce shopping cart with product selection, quantity update, and order summary.",
    link: "https://github.com/Rohitchand-01/shopping-cart",
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
