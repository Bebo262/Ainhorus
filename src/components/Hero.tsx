import { motion } from 'framer-motion'
import { Shield, Zap, Eye, MapPin, Sparkles } from 'lucide-react'
import './Hero.css'

const features = [
  { icon: Shield, text: 'AI-Powered Safety' },
  { icon: Zap, text: 'Real-Time Detection' },
  { icon: Eye, text: 'Smart Monitoring' },
  { icon: MapPin, text: 'GPS Tracking' }
]

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="grid-pattern"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="floating-elements">
          <div className="floating-element fe-1"></div>
          <div className="floating-element fe-2"></div>
          <div className="floating-element fe-3"></div>
        </div>
        <div className="light-rays"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 80 }}
          >
            <motion.div
              className="logo-glow"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(37, 99, 235, 0.2)",
                  "0 0 80px rgba(37, 99, 235, 0.3)",
                  "0 0 40px rgba(37, 99, 235, 0.2)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <motion.div
                className="logo-sparkles"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={24} className="sparkle-1" />
                <Sparkles size={20} className="sparkle-2" />
                <Sparkles size={18} className="sparkle-3" />
              </motion.div>
              <img src={`${import.meta.env.BASE_URL || '/'}logo.png`} alt="Ain Horus Logo" loading="eager" />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h1
              className="hero-title-main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Revolutionizing Public Transport Safety
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Smart Public Transport Safety & Incident Detection System
            </motion.p>
            <motion.p
              className="hero-location"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span className="location-dot"></span>
              <span className="location-text">Designed for Egypt</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.text}
                  className="feature-badge"
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -4, rotate: 1 }}
                >
                  <motion.div
                    className="feature-icon"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={22} />
                  </motion.div>
                  <span className="feature-text">{feature.text}</span>
                  <div className="feature-glow"></div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 12, 0] }}
            transition={{ delay: 1.3, duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="scroll-line"></div>
            <span className="scroll-text">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

