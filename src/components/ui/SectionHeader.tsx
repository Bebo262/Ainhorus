import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  children?: ReactNode
}

const SectionHeader = ({ badge, title, description, children }: SectionHeaderProps) => {
  return (
    <motion.div
      className="text-center max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <motion.span
          className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-primary-600 uppercase bg-primary-50 rounded-full border border-primary-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {badge}
        </motion.span>
      )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight px-2">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
              {description}
            </p>
          )}
      {children}
    </motion.div>
  )
}

export default SectionHeader

