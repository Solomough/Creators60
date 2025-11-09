import React from 'react'
import { motion } from 'framer-motion'

const FocusAreas = () => {
  const areas = [
    {
      title: 'Word & Teaching',
      description: 'Grow in wisdom, faith, and purpose through daily spiritual engagement.',
    },
    {
      title: 'Innovation & Tech',
      description: 'Learn, build, and create futuristic solutions using AI and tech skills.',
    },
  ]

  return (
    <section className="relative z-10 py-20 px-6 bg-[#001133]">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
          Focus Areas
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Choose your path and specialize in what excites you most.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className="bg-[#000a1f] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
            <p className="text-gray-300">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FocusAreas
