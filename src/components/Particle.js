import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [particleCount, setParticleCount] = useState(140);

  useEffect(() => {
    const updateCount = () => {
      setParticleCount(window.innerWidth <= 767 ? 70 : 140);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="particles-layer"
      params={{
        particles: {
          number: {
            value: particleCount,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
