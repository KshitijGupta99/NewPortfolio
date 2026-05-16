"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Globe, Copy, Check, Loader2 } from "lucide-react";

const EMAIL = "guptakshitij111@gmail.com";

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
  {
    icon: Globe,
    label: "Portfolio",
    href: "https://kshitij-portfolio-silk.vercel.app/",
  },
];

function openMailto(options?: { subject?: string; body?: string }) {
  const params = new URLSearchParams();
  if (options?.subject) params.set("subject", options.subject);
  if (options?.body) params.set("body", options.body);
  const query = params.toString();
  const url = `mailto:${EMAIL}${query ? `?${query}` : ""}`;

  const link = document.createElement("a");
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function buildMessageBody(form: {
  name: string;
  email: string;
  message: string;
}) {
  return [
    `Hi Kshitij,`,
    ``,
    form.message,
    ``,
    `—`,
    form.name,
    form.email,
  ].join("\n");
}

export default function Contact() {
  const [burst, setBurst] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const showStatus = (
    type: "success" | "error" | "info",
    text: string,
    ms = 5000
  ) => {
    setStatus({ type, text });
    setTimeout(() => setStatus(null), ms);
  };

  const handleEmailClick = async () => {
    openMailto();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      showStatus("info", "Opening mail app — email copied to clipboard", 3000);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showStatus("info", "Opening your mail app…", 3000);
    }
  };

  const fallbackCompose = async () => {
    const body = buildMessageBody(form);
    const subject = `Portfolio contact from ${form.name}`;

    openMailto({ subject, body });

    try {
      const text = `To: ${EMAIL}\nSubject: ${subject}\n\n${body}`;
      await navigator.clipboard.writeText(text);
      showStatus(
        "info",
        "No mail app detected — message copied. Paste into Gmail or use Copy email above."
      );
    } catch {
      showStatus(
        "info",
        "Opening mail app… If nothing opens, set a default mail app in Windows settings."
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBurst(true);
    setTimeout(() => setBurst(false), 600);
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showStatus("success", "Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      if (res.status === 503) {
        await fallbackCompose();
        return;
      }

      throw new Error(data.message || "Send failed");
    } catch {
      await fallbackCompose();
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-[#0a0f1a] px-4 py-3 font-mono text-sm text-cyan-50 placeholder:text-gray-500 caret-cyan outline-none transition-all focus:border-cyan focus:shadow-glow-cyan relative z-10";

  const statusColor = {
    success: "text-green-400",
    error: "text-magenta",
    info: "text-cyan/80",
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mt-8 flex flex-col items-center gap-3"
        >
          <button
            type="button"
            onClick={handleEmailClick}
            className="cursor-hover font-mono text-lg text-cyan transition-all hover:text-magenta md:text-2xl glow-text"
          >
            {EMAIL}
          </button>
          <button
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(EMAIL);
              setCopied(true);
              showStatus("info", "Email copied to clipboard", 2500);
              setTimeout(() => setCopied(false), 2500);
            }}
            className="cursor-hover inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-cyan"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </motion.div>

        {status && (
          <p
            className={`relative z-10 mt-4 font-mono text-xs ${statusColor[status.type]}`}
          >
            {status.text}
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mt-10 flex justify-center gap-6"
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
          className="relative z-10 mt-16 space-y-6 text-left"
        >
          {(["name", "email"] as const).map((field) => (
            <div key={field}>
              <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                required
                disabled={sending}
                placeholder={
                  field === "email" ? "you@example.com" : "Your name"
                }
                value={form[field]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [field]: e.target.value }))
                }
                className={inputClass}
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
              disabled={sending}
              placeholder="Tell me about your project…"
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className={`cursor-hover flex w-full items-center justify-center gap-2 rounded-full bg-cyan py-4 font-mono text-sm font-medium text-bg transition-all hover:scale-[1.02] hover:shadow-glow-cyan disabled:opacity-60 disabled:hover:scale-100 ${burst ? "burst-active" : ""}`}
          >
            {sending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
