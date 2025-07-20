import React from "react";

const Footer = () => (
  <footer className="py-6 px-4 sm:px-6 md:px-10 text-center text-sm text-gray-400 bg-gray-900">
    <p className="tracking-wide text-xs sm:text-sm animate-pulse text-cyan-500 leading-relaxed">
      &copy; {new Date().getFullYear()} Aquib Ahmed Ansari</p>
  </footer>
);

export default Footer;