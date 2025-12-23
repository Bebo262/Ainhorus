import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Star, Award, Target } from 'lucide-react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import Card from './ui/Card'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const comparisonData = [
  {
    feature: 'Passenger Reporting',
    category: 'Reporting',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: false,
    ticketingOnly: false
  },
  {
    feature: 'Driver Reporting',
    category: 'Reporting',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: false,
    ticketingOnly: false
  },
  {
    feature: 'AI Incident Detection',
    category: 'Intelligence',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: true,
    ticketingOnly: false
  },
  {
    feature: 'Real-time GPS Tracking',
    category: 'Tracking',
    ainHorus: true,
    gpsOnly: true,
    cctvOnly: false,
    ticketingOnly: false
  },
  {
    feature: 'Authority Dashboard',
    category: 'Management',
    ainHorus: true,
    gpsOnly: true,
    cctvOnly: true,
    ticketingOnly: true
  },
  {
    feature: 'Integrated Media Storage',
    category: 'Storage',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: true,
    ticketingOnly: false
  },
  {
    feature: 'Automated Alerts',
    category: 'Alerts',
    ainHorus: true,
    gpsOnly: true,
    cctvOnly: false,
    ticketingOnly: false
  },
  {
    feature: 'Comprehensive Analytics',
    category: 'Analytics',
    ainHorus: true,
    gpsOnly: true,
    cctvOnly: false,
    ticketingOnly: true
  },
  {
    feature: 'Multi-source Data Integration',
    category: 'Integration',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: false,
    ticketingOnly: false
  },
  {
    feature: 'Real-time Incident Response',
    category: 'Response',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: false,
    ticketingOnly: false
  },
  {
    feature: 'Audit Logs & Compliance',
    category: 'Compliance',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: false,
    ticketingOnly: false
  },
  {
    feature: 'Mobile Applications',
    category: 'Accessibility',
    ainHorus: true,
    gpsOnly: false,
    cctvOnly: false,
    ticketingOnly: true
  },
]

const CompetitorSnapshot = () => {
  const calculateScore = (name: string) => {
    const total = comparisonData.length
    let count = 0
    comparisonData.forEach(item => {
      if (item[name as keyof typeof item] === true) {
        count++
      }
    })
    return Math.round((count / total) * 100)
  }

  const ainHorusScore = calculateScore('ainHorus')
  const gpsOnlyScore = calculateScore('gpsOnly')
  const cctvOnlyScore = calculateScore('cctvOnly')
  const ticketingOnlyScore = calculateScore('ticketingOnly')

  // Calculate feature counts
  const ainHorusFeatures = comparisonData.filter(f => f.ainHorus).length
  const gpsOnlyFeatures = comparisonData.filter(f => f.gpsOnly).length
  const cctvOnlyFeatures = comparisonData.filter(f => f.cctvOnly).length
  const ticketingOnlyFeatures = comparisonData.filter(f => f.ticketingOnly).length

  // Group unique advantages
  const uniqueAdvantages = comparisonData.filter(f => 
    f.ainHorus && !f.gpsOnly && !f.cctvOnly && !f.ticketingOnly
  )

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/15 to-blue-200/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-300/18 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <FloatingElements count={16} colors={['rgba(37, 99, 235, 0.12)', 'rgba(59, 130, 246, 0.10)', 'rgba(99, 102, 241, 0.08)']} />
      <FloatingCameras count={6} size="small" />
      <FloatingBuses count={5} size="small" />
      
      <Container className="relative z-10">
        <SectionHeader
          badge="Comparison"
          title="Why Ain Horus Stands Out"
          description="A comprehensive comparison showing why Ain Horus is the complete solution"
        />

        {/* Enhanced Score Cards with Feature Counts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { 
              name: 'Ain Horus', 
              score: ainHorusScore, 
              features: ainHorusFeatures,
              icon: Zap, 
              featured: true,
              color: 'primary'
            },
            { 
              name: 'GPS-Only', 
              score: gpsOnlyScore, 
              features: gpsOnlyFeatures,
              icon: TrendingUp, 
              featured: false,
              color: 'slate'
            },
            { 
              name: 'CCTV-Only', 
              score: cctvOnlyScore, 
              features: cctvOnlyFeatures,
              icon: Shield, 
              featured: false,
              color: 'slate'
            },
            { 
              name: 'Ticketing-Only', 
              score: ticketingOnlyScore, 
              features: ticketingOnlyFeatures,
              icon: TrendingUp, 
              featured: false,
              color: 'slate'
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className={`text-center relative overflow-hidden ${item.featured ? 'border-2 border-primary-500 shadow-xl shadow-primary-500/20' : 'border border-slate-200'}`}>
                  {item.featured && (
                    <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                      <Star className="w-3 h-3 inline mr-1" />
                      BEST
                    </div>
                  )}
                  <div className={`w-14 h-14 ${item.featured ? 'bg-primary-50' : 'bg-slate-50'} rounded-xl flex items-center justify-center mx-auto mb-4 mt-2`}>
                    <Icon className={`w-7 h-7 ${item.featured ? 'text-primary-600' : 'text-slate-600'}`} />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">{item.score}%</div>
                  <div className={`text-sm font-semibold mb-2 ${item.featured ? 'text-primary-700' : 'text-slate-600'}`}>
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500 mb-3">{item.features} Features</div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.featured ? 'bg-primary-600' : 'bg-slate-400'}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Compact Analysis: Why Ain Horus Wins */}
        <motion.div
          className="bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 mb-12 border-2 border-primary-200/50 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Ain Horus: The Complete Solution</h3>
              <p className="text-sm text-slate-600">12/12 features • 100% coverage • All-in-one platform</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary-200/30">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-primary-600" />
                <span className="font-bold text-slate-900 text-sm">Unique Features</span>
              </div>
              <div className="text-3xl font-black text-primary-600 mb-1">{uniqueAdvantages.length}</div>
              <div className="text-xs text-slate-600">Exclusive to Ain Horus</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary-200/30">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-slate-900 text-sm">Feature Advantage</span>
              </div>
              <div className="text-3xl font-black text-blue-600 mb-1">+{ainHorusFeatures - Math.max(gpsOnlyFeatures, cctvOnlyFeatures, ticketingOnlyFeatures)}</div>
              <div className="text-xs text-slate-600">More than competitors</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary-200/30">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-slate-900 text-sm">Coverage Score</span>
              </div>
              <div className="text-3xl font-black text-amber-600 mb-1">{ainHorusScore}%</div>
              <div className="text-xs text-slate-600">vs {Math.max(gpsOnlyScore, cctvOnlyScore, ticketingOnlyScore)}% best competitor</div>
            </div>
          </div>
        </motion.div>

        {/* Compact Feature Comparison - Visual Badge Style */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-slate-900">Feature Comparison</h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="font-semibold text-primary-600">Ain Horus</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                <span className="text-slate-600">Others</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {comparisonData.map((feature) => {
              const isExclusive = feature.ainHorus && !feature.gpsOnly && !feature.cctvOnly && !feature.ticketingOnly
              const othersCount = [feature.gpsOnly, feature.cctvOnly, feature.ticketingOnly].filter(Boolean).length
              
              return (
                <motion.div
                  key={feature.feature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    isExclusive 
                      ? 'bg-primary-50 border-primary-300/50' 
                      : feature.ainHorus 
                      ? 'bg-white border-primary-200/50' 
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-bold text-slate-900 flex-1 pr-2">{feature.feature}</span>
                    {isExclusive && (
                      <span className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                        EXCLUSIVE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className={`flex-1 h-2 rounded-full ${feature.ainHorus ? 'bg-primary-600' : 'bg-slate-300'}`} />
                    <div className="text-xs font-semibold text-slate-600 min-w-[3rem] text-right">
                      {feature.ainHorus ? '✓' : '✗'} / {othersCount}/3
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CompetitorSnapshot
