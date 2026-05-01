import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

const AboutUs = () => {
  return (
    <section id="about" className="pt-16 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 sm:p-10"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#6fb5ff]">Portfolio Resume</p>
        <h1 className="section-title mt-2 text-4xl font-bold sm:text-6xl">Pranil Takawane</h1>
        <p className="mt-3 max-w-2xl text-base text-[#c6dbef] sm:text-lg">
          Full-stack developer focused on clean engineering, responsive UI, and practical products.
          I work with Java, Spring Boot, React, and modern web animation stacks.
        </p>

        <div className="mt-8 grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="section-title text-2xl">About Me</h2>
            <p className="mt-3 leading-7 text-[#c6dbef]">
              I am currently pursuing MCA and building production-ready projects including rental,
              chat, and booking platforms. I enjoy combining backend reliability with refined frontend
              experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:takawanepranil22@gmail.com" className="rounded-full bg-[#4de2b1] px-5 py-2 font-semibold text-[#082112] transition hover:brightness-110">Contact</a>
              <a href="/pdf/Pranil%20Takawane.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-2 transition hover:bg-white/10">Resume</a>
              <a href="https://github.com/Pranil9699" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-4 py-2 transition hover:bg-white/10"><AiFillGithub size={24} /></a>
            </div>
          </div>

          <img
            src="https://avatars.githubusercontent.com/u/99954777?v=4"
            alt="Pranil Takawane"
            className="h-52 w-52 rounded-3xl border border-white/20 object-cover shadow-2xl shadow-cyan-500/10"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
