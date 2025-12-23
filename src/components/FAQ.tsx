import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Container from './ui/Container'
import SectionHeader from './ui/SectionHeader'
import FloatingElements from './ui/FloatingElements'
import FloatingCameras from './ui/FloatingCameras'
import FloatingBuses from './ui/FloatingBuses'

const faqs = [
  {
    question: 'How does the AI detection system work?',
    answer: 'Our AI-powered camera systems continuously monitor public transport vehicles, using advanced computer vision algorithms to detect incidents such as accidents, overcrowding, and unsafe driving behaviors in real-time.',
  },
  {
    question: 'Can passengers report incidents through the app?',
    answer: 'Yes, passengers can easily report incidents through our mobile application. They can attach photos, videos, and provide GPS coordinates for accurate location tracking.',
  },
  {
    question: 'How fast is the response time?',
    answer: 'Our system is designed for rapid response. Once an incident is detected or reported, alerts are sent to relevant authorities within seconds, with an average response time of less than 2 minutes.',
  },
  {
    question: 'Is the system compatible with existing transport infrastructure?',
    answer: 'Yes, Ain Horus is designed to integrate seamlessly with existing transport systems. It can work with current GPS tracking, CCTV systems, and ticketing platforms.',
  },
  {
    question: 'What data is stored and how is privacy protected?',
    answer: 'We store incident data, media files, and system logs with strict security measures. All data is encrypted and access is controlled through role-based permissions. Personal information is handled according to privacy regulations.',
  },
  {
    question: 'Can the system work offline?',
    answer: 'The mobile applications can cache incident reports when offline and sync automatically when connectivity is restored. However, real-time AI detection requires active internet connection.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-primary-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-76 h-76 bg-indigo-200/18 rounded-full blur-2xl"
          animate={{
            x: [0, 80, -70, 0],
            y: [0, -80, 70, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-68 h-68 bg-blue-200/18 rounded-full blur-2xl"
          animate={{
            x: [0, -70, 80, 0],
            y: [0, 70, -80, 0],
            scale: [1, 0.9, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-indigo-300/25 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-36 h-36 border-2 border-blue-300/25 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <FloatingElements count={12} colors={['rgba(99, 102, 241, 0.12)', 'rgba(59, 130, 246, 0.10)', 'rgba(96, 165, 250, 0.08)']} />
      <FloatingCameras count={5} size="small" />
      <FloatingBuses count={4} size="small" />
      <Container className="relative z-10">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about Ain Horus"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-2xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQ

