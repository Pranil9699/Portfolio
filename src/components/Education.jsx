import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Master of Computer Applications (MCA)",
    institute: "JSPM University, Pune",
    score: "CGPA: 7.9",
    year: "2024 - 2026",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institute: "BJS College, Wagholi (SPPU)",
    score: "CGPA: 8.7",
    year: "2021 - 2024",
  },
  {
    title: "12th Science (PCMB+IT)",
    institute: "HSC - Maharashtra State Board",
    score: "Percentage: 76.77%",
    year: "2019 - 2021",
  },
];

const Education = () => {
  return (
    <section id="education" className="pt-16">
      <h2 className="section-title text-3xl font-bold sm:text-4xl">Education</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {educationData.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="section-title text-xl">{item.title}</h3>
            <p className="mt-3 text-[#c6dbef]">{item.institute}</p>
            <p className="mt-2 text-[#9be9c8]">{item.score}</p>
            <p className="mt-2 text-sm text-[#91abc7]">{item.year}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
