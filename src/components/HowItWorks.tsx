import { motion } from 'framer-motion'
import { Camera, CheckCircle, Database, Bell } from 'lucide-react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Capture',
    description: 'Incidents are captured through passenger reports, driver inputs, or AI camera detection with GPS coordinates and media attachments.',
  },
  {
    icon: CheckCircle,
    number: '02',
    title: 'Validate & Classify',
    description: 'AI algorithms validate and classify incidents by type, severity, and location for proper routing and prioritization.',
  },
  {
    icon: Database,
    number: '03',
    title: 'Store Incident & Media',
    description: 'All incident data, media files, and metadata are securely stored in the system database with timestamps and audit logs.',
  },
  {
    icon: Bell,
    number: '04',
    title: 'Generate Alerts & Reports',
    description: 'Automated alerts are sent to relevant authorities, and comprehensive reports are generated for analysis and response coordination.',
  },
]

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-primary-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-300/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary-400/12 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-blue-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -60, 80, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-48 border-2 border-primary-400/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <FloatingElements count={12} colors={['rgba(37, 99, 235, 0.12)', 'rgba(59, 130, 246, 0.10)', 'rgba(96, 165, 250, 0.08)']} />
      <FloatingCameras count={4} size="small" />
      <FloatingBuses count={3} size="small" />
      <Container className="relative z-10">
        <SectionHeader
          badge="Process"
          title="How It Works"
          description="A streamlined workflow from incident detection to response"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <Card className="text-center h-full">
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg z-10">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-3 sm:mt-4">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-2">{step.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
