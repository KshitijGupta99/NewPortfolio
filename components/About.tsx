"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 600, suffix: "+", label: "LeetCode Problems" },
  { value: 1800, suffix: "+", label: "Contest Rating" },
  { value: 30, suffix: "+", label: "PRs Merged" },
  { value: 4, suffix: "+", label: "Major Projects" },
];

const badges = [  
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Next.js",
  "React Native",
  "Python",
  "Docker",
  "PostgreSQL",
  "Redis",
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-cyan glow-text md:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 font-mono text-xs uppercase tracking-[0.3em] text-cyan"
        >
          {"// About"}
        </motion.h2>

        <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 font-mono text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xl font-light leading-relaxed text-text md:text-3xl">
              I build things for the web and mobile From pixel perfect UIs to
              scalable backend systems.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Currently in my 4th year at IIIT Sonepat, shipping real products
              and obsessing over clean code.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="cursor-hover rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 font-mono text-xs text-cyan transition-all hover:border-cyan/60 hover:shadow-glow-cyan"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
