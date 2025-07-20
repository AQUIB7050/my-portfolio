import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "EcomVerse",
    stack: "Java, Spring Boot, MySQL, React",
    link: "https://ecomverse.vercel.app/",
    desc: "Full Stack e-commerce platform with real time inventory and secure payments."
  },
  {
    title: "SpringLink Pro",
    stack: "Spring Boot, Thymeleaf, MySQL",
    link: "https://github.com/AQUIB7050/NexGen-Contact-Manager",
    desc: "Admin panel with modular security and optimized backend."
  },
  {
    title: "YelpCamp",
    stack: "Node.js, Express.js, MongoDB",
    link: "https://github.com/AQUIB7050/YelpCamp-ExpressApp",
    desc: "Real time campground booking and review system."
  },
  {
    title: "Product Management System",
    stack: "Spring Framework, Mysql",
    link: "https://github.com/AQUIB7050/springProjects/tree/updates/productcrudapp",
    desc: "Built a Product Management, enhancing user interaction speed and data persistence efficiency."
  },
];

const Projects = () => (
  <section className="py-20 px-4 sm:px-6 md:px-20 bg-gray-950">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            className="group bg-gradient-to-br from-gray-800 to-gray-900 hover:from-cyan-800/40 transition-all duration-300 p-6 rounded-xl shadow-xl border border-cyan-700/30 hover:border-cyan-500 text-left flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-white transition">{proj.title}</h3>
              <p className="text-xs sm:text-sm text-cyan-100 bg-gray-900 inline-block px-2 py-1 rounded mb-3">{proj.stack}</p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{proj.desc}</p>
            </div>
            <div className="mt-4 text-right">
              <span className="text-cyan-400 text-sm sm:text-base font-medium inline-flex items-center group-hover:text-white transition">
                View Project <FaArrowRight className="ml-2 text-xs sm:text-sm" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;
