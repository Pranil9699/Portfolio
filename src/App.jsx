import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExtraCredits from "./components/ExtraCredits";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import { ParticlesBackground } from "./components/ParticlesBackground";
import Lenis from "lenis";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.3,
    });

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell" id="top">
      <Preloader isLoading={isLoading} />
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      <main className="content-wrap">
        <AboutUs />
        <Education />
        <Skills />
        <Projects />
        <ExtraCredits />
      </main>
      <Footer />
    </div>
  );
};

export default App;
