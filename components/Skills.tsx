"use client";

import { motion } from "framer-motion";

const clusters = [
  {
    title: "Languages",
    skills: ["TypeScript", "Python", "Rust", "C++"],
  },
  {
    title: "Frameworks",
    skills: ["MERN", "Next.js", "React Native", "LangChain", "TensorFlow"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "Firebase", "Kafka"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "REST APIs", "Microservices", "Linux"],
  },
];

const allSkills = clusters.flatMap((c) => c.skills);

const chipVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-4 font-display text-4xl font-bold tracking-tight text-text md:text-7xl"
        >
          TECH <span className="text-cyan glow-text">ARSENAL</span>
        </motion.h2>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-12">
          {clusters.map((cluster, ci) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-magenta">
                {cluster.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cluster.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    custom={ci * 5 + si}
                    variants={chipVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, boxShadow: "var(--glow-cyan)" }}
                    className="cursor-hover glass rounded-lg px-3 py-1.5 font-mono text-xs text-text transition-all hover:border-cyan/50 hover:text-cyan sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden md:mt-20">
          <div className="flex marquee-track whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="mx-3 font-mono text-xs text-cyan/30 sm:mx-4 sm:text-sm"
              >
                {skill} •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
