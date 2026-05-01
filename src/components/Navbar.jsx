import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Extra", href: "#extra-credits" },
  { name: "Contact", href: "mailto:takawanepranil22@gmail.com" },
  { name: "Resume", href: "/pdf/Pranil%20Takawane.pdf" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060a1ecc]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[92vw] max-w-[1120px] items-center justify-between">
        <a href="#top" className="section-title text-xl font-bold text-[#4de2b1] sm:text-2xl">
          &lt;Pranil9699 /&gt;
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Resume" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-sm text-[#d6e8ff] transition hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-white/10 bg-[#050714] md:hidden"
        >
          <div className="mx-auto flex w-[92vw] max-w-[1120px] flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Resume" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-xl px-4 py-3 text-[#d6e8ff] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
