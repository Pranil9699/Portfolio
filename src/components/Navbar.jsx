import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ callFunc, t }) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (t) {
      t.from("#nav", {
        opacity: 0,
        delay: 0.1,
      })
        .from("#logo", {
          y: -80,
          // x:20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
        })
        .to("#logo", {
          y: 0,
          x: 50,
        })
        .from("#navItems", {
          y: -80,
          // x:20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
        })
        .from("hr", {
          y: -80,
          // x:20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
        })
        .from(".aboutUs h1", {
          y: 80,
          // x:20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
        });
      t.from("#left h2", {
        x: -500,
        opacity: 0,
        duration: 0.5,
        stagger: 0.4,
      })
        .from("#right img", {
          scale: 0.5,
          opacity: 0,
        })
        .from("#left #buttonsforcontactAnddownload", {
          x: -500,
          opacity: 0,
          duration: 0.5,
          stagger: 0.4,
        });
    }
  }, [t]);

  return (
    <>
      {/* <div class="slider relative h-0 z-20 bg-green-600"></div> */}
      <div
        id="nav"
        className="bg-black flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white"
      >
        {/* Logo */}
        <h1 id="logo" className="w-full text-3xl font-bold text-[#00df9a]  ">
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <ul id="navItems" className="hidden md:flex">
          <li
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              callFunc(`#About`);
            }}
          >
            <a href="#About" target="">
              About
            </a>
          </li>
          <li
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              callFunc(`#Education`);
            }}
          >
            <a href="#Education" target="">
              Education
            </a>
          </li>
          <li
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              callFunc(`#Skills`);
            }}
          >
            <a href="#skills" target="">
              Skills
            </a>
          </li>
          <li
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              callFunc(`#Projects`);
            }}
          >
            <a href="#projects" target="">
              Projects
            </a>
          </li>
          <li
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              callFunc(`#ExtraCredits`);
            }}
          >
            <a href="#extraCredits" target="">
              ExtraCredits
            </a>
          </li>
          <li
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              callFunc(`#Contact`);
            }}
          >
            <a href="mailto:@takawanepranil22@gmail.com">Contact</a>
          </li>
          <li
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => {
              callFunc(`#Resume`);
            }}
          >
            <a href="../../public/pdf/Pranil Takawane.pdf">Resume</a>
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Portfolio
          </h1>

          {/* Mobile Navigation Items */}
          <li
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              callFunc(`#About`);
            }}
          >
            About
          </li>
          <li
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              callFunc(`#Education`);
            }}
          >
            Education
          </li>
          <li
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              callFunc(`#Skills`);
            }}
          >
            Skills
          </li>
          <li
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              callFunc(`#Projects`);
            }}
          >
            Projects
          </li>
          <li
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              callFunc(`#ExtraCredits`);
            }}
          >
            ExtraCredits
          </li>
          <li
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              callFunc(`#Contact`);
            }}
          >
            <a href="mailto:@takawanepranil22@gmail.com">Contact</a>
          </li>
          <li
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => {
              callFunc(`#Resume`);
            }}
          >
            <a href="../../public/pdf/Pranil Takawane.pdf">Resume</a>
          </li>
        </ul>
      </div>

      <hr className="border-t-2 border-gray-300 my-8 mx-auto w-[90%]" />
      <div className="aboutUs">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          About Me
        </h1>
      </div>
      <div
        id="container"
        className="w-full h-[60vh] text-white bg-black  justify-center   pt-15  leading-50"
      >
        <div id="left" className="">
          <h2 id="name" className="text-3xl font-bold p-5  text-white">
            Hello..., Im Pr😚nil Takawane!
          </h2>
          <h2
            id="love"
            className="text-3xl font-bold font-serif p-5 text-white "
          >
            Im Passionated About Programming.
          </h2>
          <h2
            id="love"
            className="text-3xl font-bold font-serif p-5 text-white "
          >
            I have good Technical Knowlegde.
          </h2>
          <div
  id="buttonsforcontactAnddownload"
  className="md:flex md:p-3 justify-center text-center gap-3 pt-5 sm:flex-col sm:gap-2 sm:pt-2"
>
  <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
    <a href="mailto:@takawanepranil22@gmail.com">Contact Me</a>
  </button>
  <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
    <a href="../../pdf/Pranil Takawane.pdf">Download Resume</a>
  </button>
</div>

        </div>

        <div
          id="right"
          className="w-1/2 flex justify-center md:w-[100%] md:h-[100%] md:p-0"
        >
          <img
            src="../../images/IMG_20230120_143519.png"
            alt="Profile"
            className="rounded-lg w-[50%] h-[60%] hover:scale-150"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
