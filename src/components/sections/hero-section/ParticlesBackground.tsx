import { useEffect, useRef, useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine, tsParticles } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesContainer = useRef<HTMLDivElement>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    if (particlesContainer.current) {
      const initParticles = async () => {
        await particlesInit(tsParticles);
        tsParticles.load({
          id: particlesContainer.current?.id,
          options: {
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                },
              },
              color: {
                value: ["#fd47b4", "#3bb5e6"],
              },
              shape: {
                type: ["circle", "triangle", "edge", "polygon"],
                options: {
                  polygon: {
                    nb_sides: 5,
                  },
                },
              },
              opacity: {
                value: 0.5,
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out",
              },
            },
            retina_detect: true,
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
          },
        });
      };

      initParticles();
    }
  }, [particlesInit]);

  return (
    <div
      id="tsparticles"
      className="absolute inset-0"
      ref={particlesContainer}
    ></div>
  );
};

export default ParticlesBackground;
