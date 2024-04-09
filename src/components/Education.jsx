import { gsap } from "gsap";
import React, { useEffect } from "react";

const Education = ({ t }) => {
  useEffect(() => {
    if (t) {
      let newt = gsap.timeline();

      t.from("#Education", {
        opacity: 0,
        delay: 0.1,
      })
        .from(".educationUs h1", {
          y: 80,
          // x:20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
        })
        .from("#Education div", {
          // y: 90,
          scale: 0.8,
          opacity: 0,
          duration: 1,
          stagger: 0.4,
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
      <hr className="border-t-2 border-gray-300 my-8 mx-auto w-[90%]" />
      <div className="educationUs">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Education
        </h1>
      </div>
      <div
        id="Education"
        className="py-10 px-4 md:px-0 lg:w-[100%] lg:h-[70vh] lg:pt-20 lg:pb-0 "
      >
        <div className="flex flex-col   md:flex-row justify-center items-center gap-8 max-w-screen-lg mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%] lg:h-[100%]">
            <h2 className="text-lg lg:text-3xl font-semibold mb-2">
              Bachelor of Computer Applications
            </h2>
            <p className="text-sm lg:text-2xl text-gray-600 mb-2">
              Savitribai Phule Pune University
            </p>
            <p className="text-sm lg:text-2xl text-gray-600 mb-2">
              Bhartiya Jain Sanghatan College, Wagholi, Pune (BJ’s College)
            </p>
            <p className="text-sm lg:text-2xl text-gray-600 mb-2">
              5 Sem-TYBCA - CGPA – <code>8.5/10</code> | Grade - First Class
              with Distinction
            </p>
            <code className="text-sm lg:text-2xl text-gray-600 mb-2">
              2021 - 2024
            </code>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 md:w-80 w-full lg:w-[90%] lg:h-[100%]">
            <h2 className="text-lg lg:text-3xl font-semibold mb-2">
              Higher Secondary School
            </h2>
            <p className="text-sm lg:text-2xl text-gray-600 mb-2">
              Maharashtra State Board of Secondary & Higher Secondary Education,
              Pune Divisional Board
            </p>
            <p className="text-sm lg:text-2xl text-gray-600 mb-2">
              Bhairavnath Vidyalya Khutbav,(Pune)
            </p>
            <p className="text-sm lg:text-2xl text-gray-600 mb-2">
              Percentage – <code>76.83</code> % | Grade - Second Class with
              Distinction
            </p>
            <code className="text-sm lg:text-2xl text-gray-600 mb-2">
              2019 - 2021
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
