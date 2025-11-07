import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Neon Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: { value: "#000814" } },
          fpsLimit: 120,
          particles: {
            color: { value: "#00d9ff" },
            links: { color: "#00d9ff", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Text + Motion */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-blue-400 drop-shadow-lg"
      >
        Raising a Generation of <span className="text-cyan-300">Creators</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-blue-100 max-w-xl"
      >
        Where Word, Teaching, Innovation & Tech converge to shape the next wave of visionaries.
      </motion.p>

      <motion.a
        href="https://forms.gle/PsRdCJLHPsPfZDkd8"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full shadow-lg font-semibold hover:shadow-cyan-400/50"
      >
        Join the 60 Days Initiative
      </motion.a>
    </section>
  );
      }
