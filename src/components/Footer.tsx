import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background-decoration"></div>
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="footer-logo">
              <Sparkles size={24} />
              <h3 className="footer-title">Ain Horus</h3>
            </div>
            <p className="footer-subtitle">
              Smart Public Transport Safety & Incident Detection System
            </p>
            <div className="footer-tagline">
              Revolutionizing public transport safety through innovation
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="footer-icon-wrapper">
              <GraduationCap size={20} />
              <h4 className="footer-heading">Project Information</h4>
            </div>
            <p className="footer-text">Graduation Project 2024</p>
            <p className="footer-text">Department of Business Information Systems</p>
            <p className="footer-text">AAST - SmartVillage</p>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Ain Horus. All rights reserved.</p>
          <div className="footer-accent"></div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

