import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useCallback(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: { value: 32 },
        color: { value: ["#4de2b1", "#6fb5ff", "#d6edff"] },
        move: { enable: true, speed: 0.7 },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: "#6fb5ff",
          opacity: 0.16,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-0"
      options={options()}
    />
  );
};
