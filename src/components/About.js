import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-gray-950">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Who Am I?
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
        Here! I'm a <span className="text-cyan-400 font-semibold">Full Stack Engineer</span> at <a href="https://www.pragmaticplay.com/en/#" target="_blank"><b>Pragmatic Play</b></a>, writing clean, maintainable code and delivering solid features across both frontend and backend. I’ve got a tight handle on <span className="text-cyan-300">Spring Boot, Hibernate</span>, and I'm all about crafting secure APIs with JWT and role-based sauce.
        <br className="hidden sm:block" />
        On the flip side, I flex hard with <span className="text-cyan-300">React.js</span> for snappy UIs, and my DB game is strong with <span className="text-cyan-300">MySQL and MongoDB</span>. Whether I’m tuning queries or building sleek interfaces, I keep things fast, secure, and ✨user centric✨.
      </p>
      <div className="mt-8">
        <a
          href="https://github.com/AQUIB7050?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 sm:px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition duration-300 text-sm sm:text-base"
        >
          💻 Peek My Code
        </a>
      </div>
    </motion.div>
  </section>
);

export default About;