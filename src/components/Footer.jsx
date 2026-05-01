import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 py-8">
      <div className="mx-auto flex w-[92vw] max-w-[1120px] flex-col items-center gap-4 text-[#c6dbef]">
        <div className="flex items-center gap-3">
          <a href="https://github.com/Pranil9699" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 p-2 transition hover:bg-white/10">
            <AiFillGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pranil-takawane-528001218" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 p-2 transition hover:bg-white/10">
            <AiFillLinkedin size={24} />
          </a>
        </div>

        <a href="#top" className="rounded-full bg-[#4de2b1] px-5 py-2 text-sm font-semibold text-[#091f16]">Go To Top</a>
        <p className="text-sm">{new Date().getFullYear()} - takawanepranil22@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
