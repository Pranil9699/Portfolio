import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "RentLappy - Laptop Rental System",
    type: "image",
    media: Array.from({ length: 14 }, (_, i) => `/images/LapShare/${i + 1}.png`),
    description: "Full-stack laptop rental platform with Admin and User roles, booking, inventory, payment tracking, and REST API integration.",
    tech: "Spring Boot, React.js, PostgreSQL, Tailwind CSS, JWT",
    github: "https://github.com/Pranil9699/my_laptop_backend_with_spring_boot",
    live: "https://lapshare.vercel.app/",
  }, 
  {
    title: "Chat App",
    type: "image",
    media: Array.from({ length: 4 }, (_, i) => `/images/chatapp/${i + 1}.png`),
    description: "Real-time chat with auth and online status.",
    tech: "React, Node.js, Socket.io, MongoDB",
    github: "https://github.com/Pranil9699/Chat-App",
    live: "https://chat-app-p-t.onrender.com/",
  },
  {
    title: "RJ Photowala",
    type: "video",
    media: "/videos/rj_photowala/rj_photowala.mp4",
    description: "RJ Photowala - Creative Photographer portfolio style project.",
    tech: "React Js,Express Js, Tailwind CSS, GSAP, Github",
    github: "https://github.com/Pranil9699/RJ-Photowala-frontend",
    live: "https://rjphoto-nine.vercel.app",
  },
  {
    title: "Blogging Application",
    type: "video",
    media: "/videos/bloggingapplication/blogApp.mp4",
    description: "Secured blogging app with authentication, post CRUD, comments, and clean error handling.",
    tech: "Java 17, Spring Boot, JPA, MySQL, JWT, React",
    github: "https://github.com/Pranil9699/BlogApiApplication",
    live: "https://github.com/Pranil9699/BlogApiApplication",
  },
  {
    title: "Lal Pari Bus - Online Bus Ticket System",
    type: "image",
    media: Array.from({ length: 13 }, (_, i) => `/images/lalparibus/${i + 1}${i + 1 <= 2 ? ".jpg" : ".png"}`),
    description: "Online bus booking system with payment flow and admin dashboard for booking and payment management.",
    tech: "Spring Boot, Java 17, PostgreSQL, React.js",
    github: "https://github.com/Pranil9699/Project-Bus-System-Live",
    live: "https://lalparibus-pranil9699.onrender.com/",
  },
];

const Projects = () => {
  const initialIndexMap = useMemo(() => {
    const map = {};
    projectData.forEach((project, idx) => {
      if (project.type === "image" && Array.isArray(project.media)) {
        map[idx] = 0;
      }
    });
    return map;
  }, []);

  const [indexMap, setIndexMap] = useState(initialIndexMap);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexMap((prev) => {
        const next = { ...prev };
        projectData.forEach((project, idx) => {
          if (project.type === "image" && Array.isArray(project.media) && project.media.length > 1) {
            next[idx] = ((prev[idx] ?? 0) + 1) % project.media.length;
          }
        });
        return next;
      });
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="pt-16">
      <h2 className="section-title text-3xl font-bold sm:text-4xl">Projects</h2>
      <div className="mt-6 space-y-6">
        {projectData.map((project, i) => (
          <motion.article
            key={project.title}
            className="glass-card grid gap-5 p-4 md:grid-cols-[44%_1fr] md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            {project.type === "video" ? (
              <video className="h-64 w-full rounded-xl object-cover" controls preload="metadata">
                <source src={project.media} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.media[indexMap[i] ?? 0]}
                alt={project.title}
                className="h-64 w-full rounded-xl object-cover"
              />
            )}

            <div>
              <h3 className="section-title text-2xl">{project.title}</h3>
              <p className="mt-2 text-[#c6dbef]">{project.description}</p>
              <p className="mt-3 text-sm text-[#9be9c8]">{project.tech}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#6fb5ff] px-4 py-2 text-sm font-semibold text-[#09162a]">Live Demo</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
