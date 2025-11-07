import { motion } from "framer-motion";

export default function VisionSection() {
  const pillars = [
    {
      title: "Word & Teaching",
      desc: "Rooted in truth and spiritual understanding — building wisdom, clarity, and purpose for the generation ahead.",
      icon: "📖",
    },
    {
      title: "Innovation",
      desc: "Fostering creative thinkers who shape solutions with vision and excellence for the world around them.",
      icon: "💡",
    },
    {
      title: "Technology",
      desc: "Equipping young minds with the power of tech — from AI to software — to pioneer the future with divine insight.",
      icon: "🤖",
    },
    {
      title: "Leadership",
      desc: "Raising a people who lead with humility, faith, and creativity — influencing systems and transforming culture.",
      icon: "🌍",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#000814] to-[#001d3d] text-center text-white overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8 text-blue-300"
      >
        Our Vision & Core Pillars
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-blue-100 mb-16 text-lg"
      >
        We are a generation called to merge spiritual depth with technological brilliance — 
        to create, innovate, and transform our world through divine inspiration.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#001233]/40 border border-blue-500/30 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/40 transition-all"
          >
            <div className="text-4xl mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{pillar.title}</h3>
            <p className="text-blue-100 text-sm">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
      }
