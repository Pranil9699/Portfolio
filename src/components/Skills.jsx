import React from "react";
import { motion } from "framer-motion";
import { DiBootstrap, DiCss3, DiDatabase, DiGit, DiHtml5, DiJava, DiJavascript1, DiMongodb, DiPostgresql, DiPython, DiReact } from "react-icons/di";

const skills = [
  ["Java 17", <DiJava size={28} />],
  ["JavaScript", <DiJavascript1 size={28} />],
  ["C / C++", <DiDatabase size={28} />],
  ["Python", <DiPython size={28} />],
  ["Spring Boot", <DiJava size={28} />],
  ["REST APIs / JWT", <DiDatabase size={28} />],
  ["React.js", <DiReact size={28} />],
  ["HTML", <DiHtml5 size={28} />],
  ["CSS / Tailwind", <DiCss3 size={28} />],
  ["Bootstrap", <DiBootstrap size={28} />],
  ["MySQL / PostgreSQL", <DiPostgresql size={28} />],
  ["MongoDB", <DiMongodb size={28} />],
  ["Git / GitHub / Postman", <DiGit size={28} />],
];

const Skills = () => {
  return (
    <section id="skills" className="pt-16">
      <h2 className="section-title text-3xl font-bold sm:text-4xl">Technical Skills</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(([name, icon], i) => (
          <motion.div
            key={name}
            className="glass-card flex items-center gap-3 px-5 py-4"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <span className="text-[#6fb5ff]">{icon}</span>
            <span>{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
