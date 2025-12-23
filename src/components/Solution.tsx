import { motion } from 'framer-motion'
import { Smartphone, Car, LayoutDashboard, Camera, MapPin, CheckCircle, Zap, Shield } from 'lucide-react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const components = [
  {
    icon: Smartphone,
    title: 'Passenger App',
    description: 'Mobile application for passengers to report incidents, view routes, and receive alerts.',
    features: ['GPS Reporting', 'Media Upload', 'Real-time Alerts'],
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Car,
    title: 'Driver Interface',
    description: 'Dedicated interface for drivers to report incidents and receive real-time updates.',
    features: ['Quick Reporting', 'Route Updates', 'Safety Alerts'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: LayoutDashboard,
    title: 'Authority Dashboard',
    description: 'Centralized dashboard for authorities to monitor, manage, and respond to incidents.',
    features: ['Live Monitoring', 'Analytics', 'Dispatch Control'],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: Camera,
    title: 'AI Camera System',
    description: 'Intelligent camera systems with AI-powered detection for automatic incident identification.',
    features: ['Auto Detection', 'Real-time Analysis', 'Smart Alerts'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: MapPin,
    title: 'GPS Tracking',
    description: 'Real-time GPS tracking integrated across all system components for accurate location data.',
    features: ['Live Tracking', 'Route Optimization', 'Location History'],
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
]

const Solution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary-300/18 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-300/18 rounded-full blur-2xl"
          animate={{
            x: [0, -50, 60, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.8, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary-300/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <FloatingElements count={10} colors={['rgba(37, 99, 235, 0.15)', 'rgba(59, 130, 246, 0.12)', 'rgba(96, 165, 250, 0.10)']} />
      <FloatingCameras count={6} size="medium" />
      <FloatingBuses count={4} size="medium" />
      
      <Container className="relative z-10">
        <SectionHeader
          badge="Solution"
          title="Our Solution"
          description="A comprehensive smart system integrating passenger reporting, driver interfaces, authority dashboards, and AI-powered detection for enhanced public transport safety"
        />

        {/* Enhanced Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {components.map((component, index) => {
            const Icon = component.icon
            return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card glow className="h-full border-primary-200/50 hover:border-primary-300/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 ${component.bgColor} rounded-2xl flex items-center justify-center border-2 border-primary-200/50`}>
                      <Icon className={`w-8 h-8 ${component.color}`} />
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Zap className="w-6 h-6 text-primary-500" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{component.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{component.description}</p>
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    {component.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Solution Benefits */}
        <motion.div
          className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-2 border-primary-200/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Key Benefits</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our integrated solution delivers measurable improvements across all aspects of public transport safety
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-black text-primary-600 mb-2">95%</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Safety Improvement</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-black text-blue-600 mb-2">&lt;2 min</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Response Time</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-black text-indigo-600 mb-2">99.9%</div>
              <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">System Uptime</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Solution
