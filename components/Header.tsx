"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { VscGithubInverted } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";


const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech" }, 
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
          ? "backdrop-blur bg-gradient-to-r from-gray-900/90 to-black/90 shadow-md"
          : "bg-gradient-to-r from-gray-950/90 to-black/90"
        }`}
        >
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-7xl">
      <div className="flex items-center gap-4 text-gray-300">
  <Link
    href="https://github.com/KshitijGupta99"
    target="_blank"
    rel="noopener noreferrer"
  >
    <VscGithubInverted size={28} />
  </Link>

  <Link
    href="https://www.linkedin.com/in/kshitij-gupta-481aaa290/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <CiLinkedin size={28} />
  </Link>

  <Link
    href="https://x.com/ktjexe"
    target="_blank"
    rel="noopener noreferrer"
  >
    <RiTwitterXLine size={28} />
  </Link>
</div>


        <Link
          href="/"
          className="bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 font-extrabold text-transparent text-2xl tracking-tight"
          >
          Kshitij Gupta
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium text-gray-300 hover:text-blue-400 tracking-wide transition-all duration-300"
            >
              {link.name}
              <span className="-bottom-1 left-0 absolute bg-blue-500 w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-br from-gray-900 to-black px-6 py-6 text-center">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-300 hover:text-blue-400 tracking-wide transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
