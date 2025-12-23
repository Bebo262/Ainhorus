import { motion } from 'framer-motion'
import Container from './ui/Container'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const partners = [
  'AAST SmartVillage',
  'BIS Department',
  'Egypt Transport Authority',
  'Ministry of Transport',
]

const TrustBar = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-200 relative overflow-hidden">
      <FloatingElements count={6} colors={['rgba(37, 99, 235, 0.08)', 'rgba(59, 130, 246, 0.06)', 'rgba(96, 165, 250, 0.05)']} />
      <FloatingCameras count={3} size="small" />
      <FloatingBuses count={2} size="small" />
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-60 px-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                className="text-sm sm:text-base md:text-lg font-bold text-slate-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrustBar

