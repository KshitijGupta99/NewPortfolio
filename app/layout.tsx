import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kshitij Gupta | Full Stack Developer",
  description:
    "Portfolio of Kshitij Gupta — Full Stack Developer specializing in MERN, React Native, and AI-powered apps. 4th year CS @ IIIT Sonepat.",
  keywords: [
    "Kshitij Gupta",
    "Full Stack Developer",
    "MERN",
    "React Native",
    "IIIT Sonepat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="font-body antialiased">
        <div className="noise-overlay" aria-hidden />
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
