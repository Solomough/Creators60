import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#000a1f]">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
          About Creators50
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Creators50 is a 50-day initiative designed to empower young minds aged 15-25 in spiritual growth, technology, innovation, and leadership. Over this journey, you will grow in Word, develop high-demand skills, and become part of a community of like-minded creators.
        </p>
      </motion.div>
    </section>
  )
}

export default About
