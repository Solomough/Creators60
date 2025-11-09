import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Creators<span className="text-accent">50</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The Future is Built by Creators — 50 days of growth in Word, innovation, and technology.
      </motion.p>

      <motion.a
        href="#apply"
        className="glow-button"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Join the Movement
      </motion.a>
    </section>
  )
}

export default Hero
