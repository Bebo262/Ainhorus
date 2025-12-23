import { motion } from 'framer-motion'
import { Users, AlertTriangle, Clock, EyeOff, FileX } from 'lucide-react'
import './Section.css'

const problems = [
  {
    icon: Users,
    title: 'Overcrowding',
    description: 'Buses and trains operate beyond capacity, compromising passenger safety and comfort.'
  },
  {
    icon: AlertTriangle,
    title: 'Unsafe Driving',
    description: 'No real-time monitoring of driver behavior, leading to accidents and violations.'
  },
  {
    icon: EyeOff,
    title: 'No Monitoring',
    description: 'Lack of comprehensive surveillance and tracking systems across the network.'
  },
  {
    icon: Clock,
    title: 'No Fast Response',
    description: 'Delayed incident reporting and slow emergency response times.'
  },
  {
    icon: FileX,
    title: 'Unstructured Reporting',
    description: 'Fragmented and inconsistent incident documentation across different authorities.'
  }
]

const Problem = () => {
  return (
    <section className="section section-alt section-problem">
      <div className="section-background-decoration"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">Challenges</div>
          <h2 className="section-title">The Problem</h2>
          <p className="section-description">
            Public transportation in Egypt faces critical safety and efficiency challenges
          </p>
        </motion.div>
        
        <div className="cards-grid">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                className="card card-problem"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="card-glow"></div>
                <div className="card-icon card-icon-problem">
                  <Icon size={32} />
                </div>
                <h3 className="card-title">{problem.title}</h3>
                <p className="card-description">{problem.description}</p>
                <div className="card-accent"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Problem

