import { motion } from 'framer-motion'
import { ArrowRight, Play, Shield, Zap, MapPin, Camera } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs with enhanced animations */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary-400/35 to-primary-600/25 rounded-full blur-3xl hidden sm:block"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-blue-400/30 to-primary-500/20 rounded-full blur-3xl hidden sm:block"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-primary-300/25 to-blue-200/15 rounded-full blur-3xl opacity-50 md:opacity-100"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Additional floating shapes with motion */}
        <motion.div 
          className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/25 to-blue-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/25 to-primary-400/20 rounded-full blur-2xl"
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 40, -25, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* More floating elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-violet-400/20 to-purple-500/15 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -30, 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-br from-sky-400/20 to-cyan-500/15 rounded-full blur-2xl"
          animate={{
            x: [0, -50, 35, 0],
            y: [0, 45, -35, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Mesh gradient overlay with animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-100/8 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.12) 1px, transparent 1px),
              radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-primary-300/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-blue-300/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

          {/* Floating Cameras - Hidden on mobile */}
        {[
          { x: '10%', y: '20%', delay: 0, duration: 20 },
          { x: '85%', y: '15%', delay: 2, duration: 25 },
          { x: '15%', y: '75%', delay: 4, duration: 22 },
          { x: '80%', y: '80%', delay: 1, duration: 24 },
          { x: '50%', y: '10%', delay: 3, duration: 18 },
          { x: '5%', y: '50%', delay: 5, duration: 26 },
          { x: '95%', y: '55%', delay: 2.5, duration: 23 },
          { x: '45%', y: '90%', delay: 1.5, duration: 21 },
        ].map((camera, index) => (
          <motion.div
            key={index}
            className="absolute hidden sm:block"
            style={{
              left: camera.x,
              top: camera.y,
            }}
            animate={{
              y: [0, -30, 30, -20, 20, 0],
              x: [0, 20, -20, 15, -15, 0],
              rotate: [0, 5, -5, 3, -3, 0],
              scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
            }}
            transition={{
              duration: camera.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: camera.delay,
            }}
          >
            <div className="relative">
              {/* Camera glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Camera icon container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-primary-200/50">
                <Camera className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Additional smaller floating cameras - Hidden on mobile */}
        {[
          { x: '25%', y: '30%', delay: 1, duration: 15 },
          { x: '70%', y: '25%', delay: 3, duration: 17 },
          { x: '30%', y: '70%', delay: 2, duration: 19 },
          { x: '75%', y: '75%', delay: 0.5, duration: 16 },
        ].map((camera, index) => (
          <motion.div
            key={`small-${index}`}
            className="absolute hidden md:block"
            style={{
              left: camera.x,
              top: camera.y,
            }}
            animate={{
              y: [0, -20, 20, -15, 15, 0],
              x: [0, 15, -15, 10, -10, 0],
              rotate: [0, 360],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: camera.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: camera.delay,
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-primary-300/15 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-md border border-primary-200/40">
                <Camera className="w-4 h-4 text-primary-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Container size="xl" className="relative z-10 py-20 md:py-32">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full" />
              <div className="relative bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-primary-200/50">
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}logo.png`} 
                  alt="Ain Horus Logo" 
                  className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Revolutionizing Public
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Transport Safety
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Smart Public Transport Safety & Incident Detection System
          </motion.p>

          {/* Location Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-12 text-slate-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Designed for Egypt</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              Get Started
            </Button>
            <Button variant="secondary" size="lg" icon={Play} iconPosition="left">
              Watch Demo
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { icon: Shield, text: 'AI-Powered Safety' },
              { icon: Zap, text: 'Real-Time Detection' },
              { icon: MapPin, text: 'GPS Tracking' },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{feature.text}</span>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary-600 to-transparent rounded-full" />
        <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
