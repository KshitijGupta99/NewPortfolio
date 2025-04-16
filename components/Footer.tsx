import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black backdrop-blur py-8 border-white/10 border-t text-gray-400 text-sm text-center">
      <div className="mx-auto px-4 max-w-4xl">
        <p className="mb-2">
          Built with passion by{" "}
          <span className="font-semibold text-blue-500 hover:underline transition-all duration-300">
            Rohit Chand
          </span>
        </p>
        <p className="text-gray-500 text-xs tracking-wider">
          © {new Date().getFullYear()} Rohit Chand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
