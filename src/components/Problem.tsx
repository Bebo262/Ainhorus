import { motion } from 'framer-motion'
import { Users, AlertTriangle, Clock, EyeOff, FileX, TrendingDown } from 'lucide-react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const problems = [
  {
    icon: Users,
    title: 'Overcrowding',
    description: 'Buses and trains operate beyond capacity, compromising passenger safety and comfort.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    stat: '150%',
    statLabel: 'Average Capacity',
  },
  {
    icon: AlertTriangle,
    title: 'Unsafe Driving',
    description: 'No real-time monitoring of driver behavior, leading to accidents and violations.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    stat: '40%',
    statLabel: 'Accident Rate',
  },
  {
    icon: EyeOff,
    title: 'No Monitoring',
    description: 'Lack of comprehensive surveillance and tracking systems across the network.',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    stat: '0%',
    statLabel: 'Coverage',
  },
  {
    icon: Clock,
    title: 'No Fast Response',
    description: 'Delayed incident reporting and slow emergency response times.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    stat: '15+ min',
    statLabel: 'Response Time',
  },
  {
    icon: FileX,
    title: 'Unstructured Reporting',
    description: 'Fragmented and inconsistent incident documentation across different authorities.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    stat: '60%',
    statLabel: 'Lost Data',
  },
]

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-200/15 rounded-full blur-2xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-200/15 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <FloatingElements count={8} colors={['rgba(239, 68, 68, 0.12)', 'rgba(249, 115, 22, 0.10)', 'rgba(251, 146, 60, 0.08)']} />
      <FloatingCameras count={5} size="small" />
      <FloatingBuses count={3} size="small" />
      
      <Container className="relative z-10">
        <SectionHeader
          badge="Challenges"
          title="The Problem"
          description="Public transportation in Egypt faces critical safety and efficiency challenges that demand innovative solutions"
        />

        {/* Enhanced Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className={`h-full border-2 ${problem.borderColor} hover:shadow-2xl transition-all duration-300`}>
                  <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 ${problem.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center border-2 ${problem.borderColor} flex-shrink-0`}>
                      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${problem.color}`} />
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl sm:text-3xl font-black text-slate-900">{problem.stat}</div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{problem.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{problem.description}</p>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                      <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                      <span className="font-medium">Critical Issue</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Impact Summary */}
        <motion.div
          className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-red-200/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-red-600 mb-2">2.5M+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider px-2">Daily Passengers Affected</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-orange-600 mb-2">500+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider px-2">Incidents Per Month</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-600 mb-2">$50M+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 uppercase tracking-wider px-2">Annual Economic Impact</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Problem
