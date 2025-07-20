import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import avatar from "../assets/aquib-avatar.png"; // Make sure this image exists in src/assets

const Header = () => (
  <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur sticky top-0 z-50 py-4 px-4 sm:px-6 md:px-20 shadow-xl border-b border-cyan-600/20">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt="Aquib Avatar"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-500 shadow-md"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform duration-300">
          Aquib Ahmed Ansari
        </h1>
      </div>
      <div className="flex justify-center sm:justify-end items-center space-x-4 text-xl sm:text-2xl text-cyan-200">
        <a
          href="https://linkedin.com/in/aquib-ahmed-7050"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AQUIB7050"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition-transform duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:ansariaquib301@gmail.com"
          className="hover:text-white hover:scale-110 transition-transform duration-200"
        >
          <FaEnvelope />
        </a>
        <span className="md:hidden text-cyan-300 text-3xl">
          <HiOutlineMenuAlt3 />
        </span>
      </div>
    </div>
  </header>
);

export default Header;