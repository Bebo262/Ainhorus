import { motion } from 'framer-motion'
import { MapPin, Camera, Users, Shield, Settings, BarChart3, Sparkles, Zap, CheckCircle } from 'lucide-react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const features = [
  {
    icon: MapPin,
    title: 'Passenger Reporting',
    description: 'GPS-enabled reporting with media uploads for real-time incident documentation.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
    gradient: 'from-primary-500 to-primary-700',
    badge: 'Mobile',
    highlights: ['GPS Tracking', 'Media Upload', 'Real-time'],
  },
  {
    icon: Users,
    title: 'Driver Reporting',
    description: 'Dedicated interface for drivers to quickly report incidents and receive updates.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    gradient: 'from-blue-500 to-blue-700',
    badge: 'Driver',
    highlights: ['Quick Report', 'Live Updates', 'Easy Access'],
  },
  {
    icon: Camera,
    title: 'AI Detection',
    description: 'Automated incident detection using AI-powered camera systems with GPS integration.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    gradient: 'from-purple-500 to-purple-700',
    badge: 'AI-Powered',
    highlights: ['Auto Detection', 'Smart Analysis', '24/7 Monitoring'],
  },
  {
    icon: Shield,
    title: 'Authority Incident Feed',
    description: 'Real-time incident feed with dispatch capabilities for rapid response coordination.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    gradient: 'from-emerald-500 to-emerald-700',
    badge: 'Real-time',
    highlights: ['Live Feed', 'Quick Dispatch', 'Coordination'],
  },
  {
    icon: Settings,
    title: 'Admin Management',
    description: 'Comprehensive admin panel for managing routes, buses, devices, and system configuration.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    gradient: 'from-indigo-500 to-indigo-700',
    badge: 'Admin',
    highlights: ['Full Control', 'Route Management', 'Device Config'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Audit Logs',
    description: 'Advanced analytics dashboard with detailed audit logs for system monitoring and insights.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    gradient: 'from-amber-500 to-amber-700',
    badge: 'Analytics',
    highlights: ['Data Insights', 'Audit Trail', 'Reports'],
  },
]

const KeyFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-primary-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-200/15 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-300/18 rounded-full blur-2xl"
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-300/18 rounded-full blur-2xl"
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 90, -70, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-primary-400/25 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-indigo-400/25 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <FloatingElements count={14} colors={['rgba(37, 99, 235, 0.12)', 'rgba(99, 102, 241, 0.10)', 'rgba(139, 92, 246, 0.08)']} />
      <FloatingCameras count={5} size="small" />
      <FloatingBuses count={4} size="small" />
      
      <Container className="relative z-10">
        <SectionHeader
          badge="Features"
          title="Key Features"
          description="Comprehensive capabilities designed for modern public transport safety"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Card className={`h-full relative overflow-hidden group border-2 ${feature.borderColor} hover:shadow-2xl transition-all duration-300`}>
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Animated Icon Container */}
                  <div className="relative mb-4 sm:mb-6">
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 ${feature.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 relative overflow-hidden border-2 ${feature.borderColor}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Icon Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${feature.color} relative z-10`} />
                      
                      {/* Sparkle Effect - Hidden on mobile */}
                      <motion.div
                        className="absolute top-1 right-1 hidden sm:block"
                        animate={{
                          rotate: [0, 360],
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Sparkles className={`w-4 h-4 ${feature.color} opacity-60`} />
                      </motion.div>
                    </motion.div>
                    
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold ${feature.bgColor} ${feature.color} border ${feature.borderColor}`}>
                      <Zap className="w-3 h-3" />
                      <span>{feature.badge}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-slate-200">
                    {feature.highlights.map((highlight, idx) => (
                      <motion.div
                        key={highlight}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full ${feature.bgColor} ${feature.color.replace('text-', 'bg-')} flex-shrink-0`}
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2,
                          }}
                        />
                        <span className="font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  />
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Feature Summary Banner */}
        <motion.div
          className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-3 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-black mb-2">All Features Integrated</h3>
                <p className="text-white/90 text-base sm:text-lg px-4 sm:px-0">One comprehensive platform for complete transport safety management</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Users, label: 'Multi-User Support', value: '3 User Types' },
                { icon: Shield, label: 'Security Level', value: 'Enterprise' },
                { icon: Zap, label: 'Response Time', value: '<2 seconds' },
              ].map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
                    <div className="text-xl sm:text-2xl font-black mb-1">{item.value}</div>
                    <div className="text-xs sm:text-sm text-white/80">{item.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default KeyFeatures
