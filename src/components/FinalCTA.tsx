import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Container from './ui/Container'
import Button from './ui/Button'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/12 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -50, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/12 rounded-full blur-2xl"
          animate={{
            x: [0, -50, 60, 0],
            y: [0, 50, -60, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-white/20 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-40 h-40 border-2 border-white/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-white/90 font-semibold uppercase tracking-wider text-sm">
              Ready to Transform Transport Safety?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Start Your Journey with
            <br />
            <span className="text-primary-200">Ain Horus Today</span>
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the revolution in public transport safety. Get started with our comprehensive
            incident detection and response system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="bg-white text-primary-700 hover:bg-primary-50"
            >
              Get Started Free
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </Container>
      <FloatingElements count={8} colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.12)', 'rgba(255, 255, 255, 0.10)']} />
      <FloatingCameras count={4} size="small" />
      <FloatingBuses count={3} size="small" />
    </section>
  )
}

export default FinalCTA

