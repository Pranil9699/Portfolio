import React from "react";
import { motion } from "framer-motion";

const certificates = [
  { img: "/images/internship/completionletter/letter.jpg", text: "Internship Completion Letter" },
  { img: "/images/internship/completionletter/internshipCertificate.jpg", text: "Internship Certificate" },
];

const internshipProjects = [
  { img: "/images/internship/p-1/1.png", text: "Student Startup Registration System" },
  { img: "/images/internship/p-2/1.png", text: "Scorecard and Analytics Report Generator" },
  { img: "/images/internship/p-3/1.png", text: "Startup Questionnaire Creation" },
];

const ExtraCredits = () => {
  return (
    <section id="extra-credits" className="pt-16 pb-8">
      <h2 className="section-title text-3xl font-bold sm:text-4xl">Extra Credits</h2>
      
      <h3 className="mt-8 text-xl font-semibold text-[#9be9c8]">Certificates</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {certificates.map((item, i) => (
          <motion.figure
            key={item.text}
            className="glass-card overflow-hidden p-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            {/* Added object-contain and bg-[#0b1329] to keep full image visible */}
            <img 
              src={item.img} 
              alt={item.text} 
              className="h-64 w-full rounded-lg object-contain bg-[#0b1329]" 
            />
            <figcaption className="mt-3 text-sm text-[#c6dbef]">{item.text}</figcaption>
          </motion.figure>
        ))}
      </div>

      <h3 className="mt-10 text-xl font-semibold text-[#9be9c8]">Internship Projects</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {internshipProjects.map((item, i) => (
          <motion.figure
            key={item.text}
            className="glass-card overflow-hidden p-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            {/* Added object-contain and bg-[#0b1329] here as well */}
            <img 
              src={item.img} 
              alt={item.text} 
              className="h-56 w-full rounded-lg object-contain bg-[#0b1329]" 
            />
            <figcaption className="mt-3 text-sm text-[#c6dbef]">{item.text}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default ExtraCredits;
