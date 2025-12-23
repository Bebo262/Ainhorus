import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

interface FloatingCamerasProps {
  count?: number
  size?: 'small' | 'medium' | 'large'
}

const FloatingCameras = ({ count = 4, size = 'medium' }: FloatingCamerasProps) => {
  const sizes = {
    small: { icon: 4, container: 'p-2', rounded: 'rounded-xl' },
    medium: { icon: 6, container: 'p-3', rounded: 'rounded-2xl' },
    large: { icon: 8, container: 'p-4', rounded: 'rounded-3xl' },
  }

  const sizeConfig = sizes[size]

  const cameras = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 15,
    delay: Math.random() * 5,
    rotation: Math.random() * 360,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cameras.map((camera) => (
        <motion.div
          key={camera.id}
          className="absolute"
          style={{
            left: `${camera.x}%`,
            top: `${camera.y}%`,
          }}
          animate={{
            y: [0, -30, 30, -20, 20, 0],
            x: [0, 20, -20, 15, -15, 0],
            rotate: [camera.rotation, camera.rotation + 360],
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
            <div className={`relative bg-white/90 backdrop-blur-sm ${sizeConfig.container} ${sizeConfig.rounded} shadow-lg border border-primary-200/50`}>
              <Camera className={`w-${sizeConfig.icon} h-${sizeConfig.icon} text-primary-600`} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingCameras

