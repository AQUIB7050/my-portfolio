import React from "react";
import { FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaKey, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb, SiTailwindcss, SiPostgresql, SiJenkins, SiHibernate } from "react-icons/si";
import { motion } from "framer-motion";
import { GiTortoise } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";


const skills = [
  { name: "Java", icon: <FaJava className="text-orange-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Hibernate", icon: <SiHibernate className="text-green-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "JWT", icon: <FaKey className="text-yellow-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "C#", icon: <TbBrandCSharp className="text-purple-400" /> }, // fallback icon for C#
  { name: "Tortoise SVN", icon: <GiTortoise className="text-gray-300" /> }, // fallback icon for Tortoise SVN
];

const Skills = () => (
  <section className="py-20 bg-gray-950 px-4 sm:px-6 md:px-10 lg:px-20">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition-all p-4 sm:p-5 rounded-lg shadow-md flex flex-col items-center justify-center space-y-2 sm:space-y-3"
          >
            <div className="text-3xl sm:text-4xl">{skill.icon}</div>
            <p className="text-sm sm:text-base text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
