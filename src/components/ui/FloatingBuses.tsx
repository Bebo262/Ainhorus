import { motion } from 'framer-motion'
import { Bus } from 'lucide-react'

interface FloatingBusesProps {
  count?: number
  size?: 'small' | 'medium' | 'large'
}

const FloatingBuses = ({ count = 3, size = 'medium' }: FloatingBusesProps) => {
  const sizes = {
    small: { icon: 4, container: 'p-2', rounded: 'rounded-xl' },
    medium: { icon: 6, container: 'p-3', rounded: 'rounded-2xl' },
    large: { icon: 8, container: 'p-4', rounded: 'rounded-3xl' },
  }

  const sizeConfig = sizes[size]

  const buses = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 18 + Math.random() * 12,
    delay: Math.random() * 5,
    rotation: Math.random() * 360,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {buses.map((bus) => (
        <motion.div
          key={bus.id}
          className="absolute"
          style={{
            left: `${bus.x}%`,
            top: `${bus.y}%`,
          }}
          animate={{
            y: [0, -25, 25, -15, 15, 0],
            x: [0, 25, -25, 20, -20, 0],
            rotate: [bus.rotation, bus.rotation + 180, bus.rotation + 360],
            scale: [1, 1.15, 0.85, 1.1, 0.9, 1],
          }}
          transition={{
            duration: bus.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bus.delay,
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className={`relative bg-white/90 backdrop-blur-sm ${sizeConfig.container} ${sizeConfig.rounded} shadow-lg border border-blue-200/50`}>
              <Bus className={`w-${sizeConfig.icon} h-${sizeConfig.icon} text-blue-600`} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingBuses

