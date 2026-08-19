"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "LinkSaver",
    description:
      "Built a full-stack, AI-powered bookmarking platform enabling users to organize, search, and manage web resources using nested collections, smart tags, and real-time collaboration features.",
    tags: ["Next.js", "SCSS", "Docker"],
    size: "large",
    github: "https://github.com/LinkSaver-Resourcify",
    link: "https://linksaver.in",
  },
  {
    title: "Playlist Exchanger",
    description:
      "A cross-platform playlist migration tool that transfers user playlists between major streaming services.",
    tags: ["Next.js", "OAuth", "Node.js"],
    size: "medium",
    github: "https://github.com/KshitijGupta99/Playlist-Exchanger",
    link: "#",
  },
  {
    title: "YouTube Controller",
    description:
      "Engineered a browser extension that synchronizes YouTube playback across tabs — starting a video in one tab automatically pauses all others, eliminating audio conflicts.",
    tags: ["Manifest v3", "Webpack", "YouTube API"],
    size: "small",
    github: "https://github.com/KshitijGupta99/YouTube-Video-Controller",
    link: "#",
  },
  {
    title: "Chatify",
    description:
      "Built a real-time chat application supporting photo sharing, 32+ themes and global access.",
    tags: ["Socket.io", "React", "Node.js"],
    size: "small",
    github: "https://github.com/KshitijGupta99/Chat-app",
    link: "https://chat-app-neon-theta.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasLiveDemo = project.link && project.link !== "#";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  };

  const sizeClass =
    project.size === "large"
      ? "md:col-span-2 md:row-span-2"
      : project.size === "medium"
        ? "md:col-span-1 md:row-span-2"
        : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className={sizeClass}
    >
      <div
        ref={cardRef}
        onMouseMove={project.size === "large" ? handleMouseMove : undefined}
        onMouseLeave={project.size === "large" ? handleMouseLeave : undefined}
        className="border-glow group glass relative flex h-full min-h-[200px] flex-col justify-between rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 sm:min-h-[220px] sm:p-8"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative z-10">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="font-display text-xl font-bold text-text transition-colors group-hover:text-cyan sm:text-2xl">
              {project.title}
            </h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 cursor-hover rounded-md p-1 text-muted transition-colors hover:text-cyan"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={20} />
            </a>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-cyan/10 px-2 py-0.5 font-mono text-xs text-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={hasLiveDemo ? project.link : project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 cursor-hover inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-cyan transition-all hover:gap-2"
          >
            {hasLiveDemo ? "View Project" : "View on GitHub"}{" "}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 font-display text-4xl font-bold tracking-tight md:mb-16 md:text-7xl"
        >
          PROJECTS
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3 md:auto-rows-[minmax(200px,auto)]">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
