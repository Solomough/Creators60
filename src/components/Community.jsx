import React from 'react'
import { motion } from 'framer-motion'

const Community = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#001133]">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
          Join the Community
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Connect with like-minded creators aged 13-24, share insights, collaborate on projects, and grow together.
        </p>
        <a
          href="https://t.me/thearknetworkpublic"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-button"
        >
          Join Discord Community 
        </a>
      </motion.div>
    </section>
  )
}

export default Community
