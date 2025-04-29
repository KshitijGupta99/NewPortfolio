// components/Footer.jsx
import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-6 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-center md:text-left">
          Made with 💙 by Kshitij Gupta ·{" "}
          <a href="mailto:guptakshitij111@gmail.com" className="hover:text-blue-400 underline">
            Contact Me
          </a>
        </p>

        <div className="flex items-center gap-4 text-xl">
          <Link
            href="https://github.com/KshitijGupta99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kshitij-gupta-481aaa290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </Link>
          <Link
            href="https://x.com/ktjexe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
