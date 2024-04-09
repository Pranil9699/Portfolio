import React from "react";
import { AiFillGithub, AiFillLinkedin  } from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";
const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
  return (
    <>
      <hr className="border-t-2 border-gray-300 my-8 mx-auto w-[90%]" />
      <footer className="py-6 px-4 md:px-0 lg:w-[100%] text-white">
        <div className="flex justify-center mb-8">
          <a
            href="https://github.com/Pranil9699"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <AiFillGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/pranil-takawane-528001218"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <AiFillLinkedin size={32} />
          </a>
          <a
          href="https://www.instagram.com/Pranil_9699/"
          target="_blank"
          rel="noopener noreferrer"
          className=" mr-4"
        >
          <FiInstagram size={32} />
        </a>
        </div>
        <button
          onClick={handleScrollToTop}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Top
        </button>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} takawanepranil22@gmail.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
