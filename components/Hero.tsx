"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("./ParticleBackground"),
  { ssr: false }
);

const roles = [
  "Full Stack Developer",
  "DSA Enthusiast",
  "React Native Builder",
  "4th Year @ IIIT Sonepat",
];

const letterVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

function AnimatedName({ text }: { text: string }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="block"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          variants={letterVariants}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [display, deleting, index]);

  return (
    <span className="font-mono text-base text-cyan sm:text-lg md:text-xl">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden grid-bg"
    >
      <ParticleBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 text-center sm:px-6 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted"
        >
          Portfolio / 2026
        </motion.p>

        <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight text-text glow-text sm:text-7xl md:text-9xl">
          <AnimatedName text="KSHITIJ" />
          <AnimatedName text="GUPTA" />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 h-8 sm:mt-8"
        >
          <Typewriter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4"
        >
          <a
            href="#projects"
            className="cursor-hover inline-flex w-full items-center justify-center rounded-full bg-cyan px-6 py-3 font-mono text-sm font-medium text-bg shadow-glow-cyan transition-transform hover:scale-105 sm:w-auto sm:px-8"
          >
            View Work
          </a>
          <a
            href="https://drive.google.com/drive/u/0/folders/1HgAzdPwaFjvd9ytHBrEA2zhky_jNyBS4"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan/50 px-6 py-3 font-mono text-sm text-cyan transition-all hover:border-cyan hover:bg-cyan/10 hover:scale-105 sm:w-auto sm:px-8"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 1.5 },
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cyan cursor-hover sm:block"
        aria-label="Scroll to about"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
