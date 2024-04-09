import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { gsap } from "gsap";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExtraCredits from "./components/ExtraCredits";
import Footer from "./components/Footer";

const App = () => {
  const callFunc = (e) => {
    console.log(e);
  };
  const [t, setT] = useState(null);
  useEffect(() => {
    if (t) {
    }
  }, [t]);
  useEffect(() => {
    setT(gsap.timeline({ ease: "power4" }));
  }, []);

  return (
    <>
      <section className="bg-black" id="header">
        <Navbar callFunc={callFunc} t={t} />
        <Education t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <ExtraCredits t={t} />
        <Footer t={t} />
      </section>
     
    </>
  );
};

export default App;
