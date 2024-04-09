import React, { useEffect } from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiGit } from "react-icons/di";
import {
  DiBootstrap,
  DiNodejsSmall,
  DiReact,
  DiJava,
  DiPython,
  DiDatabase,
  DiMysql,
  DiPostgresql,
  DiPhp,
  DiMongodb,
  //   DiSpring,
  DiCode,
  //   DiTomcat,
} from "react-icons/di";

const Skills = ({ t }) => {
  useEffect(() => {
    if (t) {

      t.from("#technical-skill-content", {
        opacity: 0,
        delay: 0.1,
      })
        .from("#technical-skill-content h1", {
          y: 80,
          // x:20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
        })
        .from("#technical-skill-content div", {
          // y: 90,
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
        //   stagger: 0.2,
          scrollTrigger: {
            trigger: "#header",
            scroller: "body",
            markers: true,
            start: "top 40%",
            end: "top 65%",
            scrub: 1,
          },
        });
    }
  }, [t]);
  return (
    <>
     <div id="skills">
     {" "}
      <hr className="border-t-2 border-gray-300 my-8 mx-auto w-[90%]" />
      <div
        id="technical-skill-content"
        className="py-10 px-4 md:px-0 lg:w-[100%] lg:h-[100vh]"
      >
        <h1 className="text-4xl text-center mb-8 text-white font-semibold">
          Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
          {/* HTML */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiHtml5 size={48} color="#E34F26" />
              <h3 className="ml-4">HTML</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill html bg-[#E34F26]"></div>
            </div>
          </div>

          {/* CSS */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiCss3 size={48} color="#1572B6" />
              <h3 className="ml-4">CSS</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill css bg-[#1572B6]"></div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiJavascript1 size={48} color="#F0DB4F" />
              <h3 className="ml-4">JavaScript</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill js bg-[#F0DB4F]"></div>
            </div>
          </div>

          {/* GIT */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiGit size={48} color="#F1502F" />
              <h3 className="ml-4">GIT + Github</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill git bg-[#F1502F]"></div>
            </div>
          </div>
          {/* Bootstrap */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiBootstrap size={48} color="#563d7c" />
              <h3 className="ml-4">Bootstrap</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill bootstrap bg-[#563d7c]"></div>
            </div>
          </div>

          {/* Tailwind */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiCss3 size={48} color="#38B2AC" />
              <h3 className="ml-4">Tailwind</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill tailwind bg-[#38B2AC]"></div>
            </div>
          </div>

          {/* Node JS */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiNodejsSmall size={48} color="#68A063" />
              <h3 className="ml-4">Node JS</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill nodejs bg-[#68A063]"></div>
            </div>
          </div>

          {/* Express */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiCode size={48} color="#000" />
              <h3 className="ml-4">Express</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill express bg-[#000]"></div>
            </div>
          </div>

          {/* React JS */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiReact size={48} color="#61DAFB" />
              <h3 className="ml-4">React JS</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill react bg-[#61DAFB]"></div>
            </div>
          </div>

          {/* GSAP */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiCode size={48} color="#000" />
              <h3 className="ml-4">GSAP</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill gsap bg-[#000]"></div>
            </div>
          </div>

          {/* Spring Boot
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiSpring size={48} color="#6DB33F" />
              <h3 className="ml-4">Spring Boot</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill spring bg-[#6DB33F]"></div>
            </div>
          </div> */}

          {/* PHP */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiPhp size={48} color="#8892BF" />
              <h3 className="ml-4">PHP</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill php bg-[#8892BF]"></div>
            </div>
          </div>

          {/* MongoDB + Mongoose */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiMongodb size={48} color="#4DB33D" />
              <h3 className="ml-4">Mongo DB + Mongoose</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill mongodb bg-[#4DB33D]"></div>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiPostgresql size={48} color="#336791" />
              <h3 className="ml-4">PostgreSQL</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill postgresql bg-[#336791]"></div>
            </div>
          </div>

          {/* MySQL */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiMysql size={48} color="#00758F" />
              <h3 className="ml-4">MySQL</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill mysql bg-[#00758F]"></div>
            </div>
          </div>

          {/* C and C++ */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiCode size={48} color="#5C6BC0" />
              <h3 className="ml-4">C and C++</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill ccplus bg-[#5C6BC0]"></div>
            </div>
          </div>

          {/* Java */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiJava size={48} color="#5382A1" />
              <h3 className="ml-4">Java</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill java bg-[#5382A1]"></div>
            </div>
          </div>

          {/* Python */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiPython size={48} color="#306998" />
              <h3 className="ml-4">Python</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill python bg-[#306998]"></div>
            </div>
          </div>

          {/* Hibernate */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiDatabase size={48} color="#4CAF50" />
              <h3 className="ml-4">Hibernate</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill hibernate bg-[#4CAF50]"></div>
            </div>
          </div>

          {/* Servlet */}
          <div className="tech-skill bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%]">
            <div className="flex items-center mb-2">
              <DiJava size={48} color="#5382A1" />
              <h3 className="ml-4">Servlet</h3>
            </div>
            <div className="bar bg-gray-200">
              <div className="fill servlet bg-[#5382A1]"></div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Skills;
