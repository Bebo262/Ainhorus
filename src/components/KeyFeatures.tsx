import { motion } from 'framer-motion'
import { 
  MapPin, Camera, Users, Shield, Settings, BarChart3 
} from 'lucide-react'
import './Section.css'

const features = [
  {
    icon: MapPin,
    title: 'Passenger Reporting',
    description: 'GPS-enabled reporting with media uploads for real-time incident documentation.'
  },
  {
    icon: Users,
    title: 'Driver Reporting',
    description: 'Dedicated interface for drivers to quickly report incidents and receive updates.'
  },
  {
    icon: Camera,
    title: 'AI Detection',
    description: 'Automated incident detection using AI-powered camera systems with GPS integration.'
  },
  {
    icon: Shield,
    title: 'Authority Incident Feed',
    description: 'Real-time incident feed with dispatch capabilities for rapid response coordination.'
  },
  {
    icon: Settings,
    title: 'Admin Management',
    description: 'Comprehensive admin panel for managing routes, buses, devices, and system configuration.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Audit Logs',
    description: 'Advanced analytics dashboard with detailed audit logs for system monitoring and insights.'
  }
]

const KeyFeatures = () => {
  return (
    <section className="section section-features">
      <div className="section-background-decoration features-decoration"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge section-badge-blue">Features</div>
          <h2 className="section-title">Key Features</h2>
          <p className="section-description">
            Comprehensive capabilities designed for modern public transport safety
          </p>
        </motion.div>
        
        <div className="cards-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="card card-feature"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="card-glow"></div>
                <motion.div 
                  className="card-icon card-icon-feature"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={36} />
                </motion.div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
                <div className="card-accent"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures

