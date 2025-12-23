import { motion } from 'framer-motion'
import { Camera, CheckCircle, Database, Bell } from 'lucide-react'
import './Section.css'

const steps = [
  {
    icon: Camera,
    title: 'Capture',
    description: 'Incidents are captured through passenger reports, driver inputs, or AI camera detection with GPS coordinates and media attachments.'
  },
  {
    icon: CheckCircle,
    title: 'Validate & Classify',
    description: 'AI algorithms validate and classify incidents by type, severity, and location for proper routing and prioritization.'
  },
  {
    icon: Database,
    title: 'Store Incident & Media',
    description: 'All incident data, media files, and metadata are securely stored in the system database with timestamps and audit logs.'
  },
  {
    icon: Bell,
    title: 'Generate Alerts & Reports',
    description: 'Automated alerts are sent to relevant authorities, and comprehensive reports are generated for analysis and response coordination.'
  }
]

const HowItWorks = () => {
  return (
    <section className="section section-alt section-how-it-works">
      <div className="section-background-decoration"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            A streamlined workflow from incident detection to response
          </p>
        </motion.div>
        
        <div className="timeline">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="timeline-number"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {index + 1}
                </motion.div>
                <div className="timeline-content">
                  <motion.div 
                    className="timeline-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-description">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <motion.div 
                    className="timeline-line"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

