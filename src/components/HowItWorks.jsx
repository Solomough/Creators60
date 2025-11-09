import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  'Apply via Google Form',
  'Review & Qualification',
  'Join the Creators60 Community',
  'Begin 60-day Transformation'
]

const HowItWorks = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#000a1f]">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
          How It Works
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          A simple 4-step journey to become part of Creators60.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-[#001133] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <span className="font-bold text-accent mr-2">{index + 1}.</span>
            <span className="text-white">{step}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
