import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import FocusArea from './components/FocusArea'
import HowItWorks from './components/HowItWorks'
import Community from './components/Community'
import Apply from './components/Apply'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />
      <Hero />
      <About />
      <FocusArea />
      <HowItWorks />
      <Community />
      <Apply />
      <Footer />
    </div>
  )
}

export default App
