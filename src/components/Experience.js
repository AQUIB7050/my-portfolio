import React from "react";
import { motion } from "framer-motion";

const Experience = () => (
  <section className="py-20 px-4 sm:px-6 md:px-20 bg-gray-950">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
        My XP
      </h2>
      <div className="relative border-l-2 border-cyan-600 pl-4 sm:pl-6 ml-1 sm:ml-2 space-y-12">
        <div className="relative">
          <div className="absolute -left-3 top-1 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-950"></div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white ml-2 sm:ml-4">Software Developer @ Pragmatic Play</h3>
          <p className="text-sm text-gray-400 mb-2 ml-2 sm:ml-4">Jul 2023 – Present | Noida, India</p>
          <ul className="list-disc ml-5 text-sm sm:text-base text-gray-300 space-y-2">
            <li>
              Engineered RESTful APIs using <span className="text-cyan-300">Spring Boot, Java, JWT</span> — powering role based access, password encryption, and smooth data validation. Boosted system efficiency by <strong>53%</strong>.
            </li>
            <li>
              Collaborated cross functionally to build a <span className="text-cyan-300">layered backend architecture</span> and scalable systems serving up <strong>10k+ concurrent users</strong> without breaking a sweat.
            </li>
            <li>
              Built slick frontends in <span className="text-cyan-300">React.js</span> and managed real time pagination, dashboards, and intuitive UI/UX.
            </li>
            <li>
              Developed slot game prototypes with <span className="text-cyan-300">C#</span> & JS, leading to a <strong>30% boost</strong> in user engagement.
            </li>
            <li>
              Played hard with databases like <span className="text-cyan-300">MySQL & MongoDB</span> — optimized queries and reduced data latency across the board.
            </li>
          </ul>
          <div className="mt-5">
            <a
              href="https://github.com/AQUIB7050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm sm:text-base bg-cyan-700 text-white font-semibold rounded-full shadow hover:bg-cyan-600 transition"
            >
              🔗 View My Work
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Experience;