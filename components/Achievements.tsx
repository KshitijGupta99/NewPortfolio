"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    stat: "500+",
    label: "LeetCode",
    description: "Top algorithmic problem solver",
  },
  {
    icon: "🥇",
    stat: "Hackzilla 2.0",
    label: "Winner",
    description: "Led team to victory at intra-IIIT hackathon",
  },
  {
    icon: "🎓",
    stat: "8.3/10",
    label: "GPA",
    description: "IIIT Sonepat, B.Tech CSE (2023–2027)",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 font-mono text-xs uppercase tracking-[0.3em] text-cyan text-center"
        >
          {"// Achievements"}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, rotateX: -30, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{ perspective: 1000 }}
              className="glass border-glow cursor-hover rounded-2xl p-8 text-center transition-transform hover:-translate-y-2"
            >
              <span className="text-5xl">{item.icon}</span>
              <p className="mt-6 font-display text-4xl font-bold text-cyan glow-text md:text-5xl">
                {item.stat}
              </p>
              <p className="mt-2 font-mono text-sm uppercase tracking-widest text-magenta">
                {item.label}
              </p>
              <p className="mt-4 text-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
