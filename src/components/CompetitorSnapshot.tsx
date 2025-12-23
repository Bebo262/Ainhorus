import { motion } from 'framer-motion'
import { Check, X, Star, Zap, Shield, TrendingUp } from 'lucide-react'
import './Section.css'
import './CompetitorSnapshot.css'

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
  }
]

const competitors = [
  { name: 'Ain Horus', score: 12, color: 'var(--color-blue)', icon: Star },
  { name: 'GPS-Only Tracking', score: 4, color: '#64748b', icon: TrendingUp },
  { name: 'CCTV-Only', score: 3, color: '#64748b', icon: Shield },
  { name: 'Ticketing-Only', score: 3, color: '#64748b', icon: Zap }
]

const keyAdvantages = [
  'Unified multi-source incident reporting',
  'AI-powered automatic detection',
  'Real-time response coordination',
  'Comprehensive compliance tracking'
]

const CompetitorSnapshot = () => {
  const renderCheck = (value: boolean, isAinHorus: boolean = false) => {
    if (value) {
      return (
        <div className="check-wrapper">
          <Check size={18} className="check-icon" />
          {isAinHorus && <span className="feature-badge">Best</span>}
        </div>
      )
    }
    return <X size={18} className="x-icon" />
  }

  const calculateScore = (competitor: string) => {
    return comparisonData.filter(row => {
      if (competitor === 'ainHorus') return row.ainHorus
      if (competitor === 'gpsOnly') return row.gpsOnly
      if (competitor === 'cctvOnly') return row.cctvOnly
      if (competitor === 'ticketingOnly') return row.ticketingOnly
      return false
    }).length
  }

  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Competitor Snapshot</h2>
          <p className="section-description">
            How Ain Horus compares to existing solutions in the market
          </p>
        </motion.div>

        {/* Score Summary Cards */}
        <motion.div
          className="competitor-scores"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {competitors.map((competitor, index) => {
            const Icon = competitor.icon
            const actualScore = index === 0 
              ? calculateScore('ainHorus')
              : index === 1 
              ? calculateScore('gpsOnly')
              : index === 2
              ? calculateScore('cctvOnly')
              : calculateScore('ticketingOnly')
            
            return (
              <motion.div
                key={competitor.name}
                className={`score-card ${index === 0 ? 'score-card-featured' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="score-card-header">
                  <div className="score-icon" style={{ background: `${competitor.color}15`, color: competitor.color }}>
                    <Icon size={24} />
                  </div>
                  <div className="score-value">
                    <span className="score-number">{actualScore}</span>
                    <span className="score-total">/12</span>
                  </div>
                </div>
                <h3 className="score-title">{competitor.name}</h3>
                <div className="score-bar">
                  <motion.div
                    className="score-bar-fill"
                    style={{ backgroundColor: competitor.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(actualScore / 12) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key Advantages */}
        <motion.div
          className="advantages-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="advantages-title">Key Advantages of Ain Horus</h3>
          <div className="advantages-grid">
            {keyAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage}
                className="advantage-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <Check size={20} className="advantage-check" />
                <span>{advantage}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Comparison Table */}
        <motion.div
          className="comparison-table-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell table-cell-feature">
                <span>Feature</span>
              </div>
              <div className="table-cell table-cell-ain table-cell-ain-header">
                <span className="ain-horus-name">Ain Horus</span>
              </div>
              <div className="table-cell">
                <span>GPS-Only Tracking</span>
              </div>
              <div className="table-cell">
                <span>CCTV-Only</span>
              </div>
              <div className="table-cell">
                <span>Ticketing-Only</span>
              </div>
            </div>
            
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                className="table-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.03, duration: 0.4 }}
                whileHover={{ 
                  backgroundColor: 'var(--color-gray-light)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="table-cell table-cell-feature">
                  <span className="feature-name">{row.feature}</span>
                  <span className="feature-category">{row.category}</span>
                </div>
                <div className="table-cell table-cell-ain">
                  {renderCheck(row.ainHorus, true)}
                </div>
                <div className="table-cell">{renderCheck(row.gpsOnly)}</div>
                <div className="table-cell">{renderCheck(row.cctvOnly)}</div>
                <div className="table-cell">{renderCheck(row.ticketingOnly)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitorSnapshot

