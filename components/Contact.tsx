"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Globe } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kshitij-gupta-481aaa290/",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/kshitijgupta99" },
  {
    icon: Code2,
    label: "LeetCode",
    href: "https://leetcode.com/u/kshitijgupta21",
  },
  { icon: Globe, label: "Portfolio", href: "https://kshitij-portfolio-silk.vercel.app/" },
];

export default function Contact() {
  const [burst, setBurst] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBurst(true);
    setTimeout(() => setBurst(false), 600);
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:guptakshitij111@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-4xl font-bold tracking-tight md:text-6xl"
        >
          LET&apos;S BUILD{" "}
          <span className="text-cyan glow-text">SOMETHING</span>
        </motion.h2>

        <motion.a
          href="mailto:guptakshitij111@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 inline-block font-mono text-lg text-cyan transition-all hover:text-magenta md:text-2xl cursor-hover glow-text"
        >
          guptakshitij111@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center gap-6"
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="cursor-hover rounded-full border border-cyan/20 p-3 text-muted transition-all hover:border-cyan hover:text-cyan hover:shadow-glow-cyan"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 space-y-6 text-left"
        >
          {(["name", "email"] as const).map((field) => (
            <div key={field}>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                required
                value={form[field]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [field]: e.target.value }))
                }
                className="w-full rounded-lg border border-white/10 bg-surface/50 px-4 py-3 font-body text-text outline-none transition-all focus:border-cyan focus:shadow-glow-cyan"
              />
            </div>
          ))}
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
              message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className="w-full resize-none rounded-lg border border-white/10 bg-surface/50 px-4 py-3 font-body text-text outline-none transition-all focus:border-cyan focus:shadow-glow-cyan"
            />
          </div>
          <button
            type="submit"
            className={`cursor-hover w-full rounded-full bg-cyan py-4 font-mono text-sm font-medium text-bg transition-all hover:scale-[1.02] hover:shadow-glow-cyan ${burst ? "burst-active" : ""}`}
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
