import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

const Card = ({ children, className = '', hover = true, glow = false }: CardProps) => {
  return (
    <motion.div
      className={`
        relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8
        border border-slate-200/60
        shadow-lg shadow-slate-200/50
        ${glow ? 'shadow-primary-500/20' : ''}
        ${hover ? 'hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default Card

