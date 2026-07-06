"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "GigzGenie",
    role: "Full Stack Developer Intern",
    period: "May 2025 – July 2026",
    highlights: [
      "Scalable location-aware mobile app: 10+ screens, 25+ REST APIs",
      "Google Maps geofencing (dynamic 50–500m radius)",
      "Back-office admin portal → 50% less engineering dependency",
      "End-to-end Google Play Store and App Store deployment",
    ],
  },
  {
    company: "Xelron",
    role: "Software Developer Intern",
    period: "Mar 2026 – Apr 2026",
    highlights: [
      "30+ PRs, 35+ bugs resolved across agile codebase",
      "AI-assisted dev tools for task decomposition → 15+ PRs shipped",
    ],
  },
];

function TimelineLine() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <svg
      ref={ref}
      className="absolute left-4 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-px"
      preserveAspectRatio="none"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="100%"
        stroke="var(--cyan)"
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset={inView ? 0 : 1000}
        style={{ transition: "stroke-dashoffset 2s ease-out" }}
        opacity={0.5}
      />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 font-display text-5xl font-bold tracking-tight md:text-7xl"
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative">
          <TimelineLine />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-12 pl-12 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
              }`}
            >
              <div className="absolute left-2 top-6 h-4 w-4 rounded-full border-2 border-cyan bg-bg shadow-glow-cyan md:left-1/2 md:-translate-x-1/2" />

              <div className="glass border-glow rounded-2xl border-l-4 border-l-cyan p-8 transition-transform hover:-translate-y-1">
                <span className="font-mono text-xs text-cyan">{exp.period}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-text">
                  {exp.company}
                </h3>
                <p className="font-mono text-sm text-magenta">{exp.role}</p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-muted before:text-cyan before:content-['▸']"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
