import { motion } from 'framer-motion'
import { Smartphone, Car, LayoutDashboard, Camera, MapPin } from 'lucide-react'
import './Section.css'

const components = [
  {
    icon: Smartphone,
    title: 'Passenger App',
    description: 'Mobile application for passengers to report incidents, view routes, and receive alerts.'
  },
  {
    icon: Car,
    title: 'Driver Interface',
    description: 'Dedicated interface for drivers to report incidents and receive real-time updates.'
  },
  {
    icon: LayoutDashboard,
    title: 'Authority Dashboard',
    description: 'Centralized dashboard for authorities to monitor, manage, and respond to incidents.'
  },
  {
    icon: Camera,
    title: 'AI Camera System',
    description: 'Intelligent camera systems with AI-powered detection for automatic incident identification.'
  },
  {
    icon: MapPin,
    title: 'GPS Tracking',
    description: 'Real-time GPS tracking integrated across all system components for accurate location data.'
  }
]

const Solution = () => {
  return (
    <section className="section section-solution">
      <div className="section-background-decoration solution-decoration"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge section-badge-blue">Solution</div>
          <h2 className="section-title">Our Solution</h2>
          <p className="section-description">
            A comprehensive smart system integrating passenger reporting, driver interfaces, 
            authority dashboards, and AI-powered detection for enhanced public transport safety
          </p>
        </motion.div>
        
        <div className="cards-grid">
          {components.map((component, index) => {
            const Icon = component.icon
            return (
              <motion.div
                key={component.title}
                className="card card-featured card-solution"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="card-glow card-glow-blue"></div>
                <div className="card-icon card-icon-blue">
                  <Icon size={36} />
                </div>
                <h3 className="card-title">{component.title}</h3>
                <p className="card-description">{component.description}</p>
                <div className="card-accent card-accent-blue"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solution

