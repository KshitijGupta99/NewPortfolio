import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        cyan: "var(--cyan)",
        magenta: "var(--magenta)",
        text: "var(--text)",
        muted: "var(--muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        "glow-cyan": "var(--glow-cyan)",
        "glow-magenta": "var(--glow-magenta)",
      },
    },
  },
  plugins: [],
};

export default config;
