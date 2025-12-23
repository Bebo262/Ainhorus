import { motion } from 'framer-motion'

interface FloatingElementsProps {
  count?: number
  colors?: string[]
  sizes?: number[]
}

const FloatingElements = ({ 
  count = 6, 
  colors = ['rgba(37, 99, 235, 0.15)', 'rgba(59, 130, 246, 0.12)', 'rgba(96, 165, 250, 0.10)'],
  sizes = [60, 80, 100, 120, 140, 160]
}: FloatingElementsProps) => {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: sizes[i % sizes.length],
    color: colors[i % colors.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full blur-xl"
          style={{
            width: element.size,
            height: element.size,
            background: `radial-gradient(circle, ${element.color} 0%, transparent 70%)`,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements

