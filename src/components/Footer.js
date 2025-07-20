import React from "react";

const Footer = () => (
  <footer className="py-8 text-center text-sm text-gray-400 bg-gray-900">
    <p className="tracking-wide animate-pulse text-cyan-500">
      &copy; {new Date().getFullYear()} Aquib Ahmed Ansari — Built with ❤️ using React
    </p>
  </footer>
);

export default Footer;