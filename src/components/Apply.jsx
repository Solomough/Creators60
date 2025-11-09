import React from 'react'
import { motion } from 'framer-motion'

const Apply = () => {
  return (
    <section
      id="apply"
      className="relative z-10 py-20 px-6 bg-[#000a1f] text-center"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
          Apply Now
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Fill out the form to begin your 60-day journey as a Creator.
        </p>
        <motion.iframe
          src="https://forms.gle/PsRdCJLHPsPfZDkd8"
          width="100%"
          height="700"
          className="rounded-2xl shadow-xl border-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.iframe>
      </motion.div>
    </section>
  )
}

export default Apply
