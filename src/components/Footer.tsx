import { motion } from 'framer-motion'
import { GraduationCap, Sparkles, Instagram, Linkedin, Twitter } from 'lucide-react'
import Container from './ui/Container'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary-400" />
              <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Ain Horus
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-400 mb-3 sm:mb-4 leading-relaxed">
              Smart Public Transport Safety & Incident Detection System
            </p>
            <p className="text-xs sm:text-sm text-slate-500 italic">
              Revolutionizing public transport safety through innovation
            </p>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary-400" />
              <h4 className="font-bold text-lg">Project Information</h4>
            </div>
            <ul className="space-y-2 text-sm sm:text-base text-slate-400">
              <li>Graduation Project 2024</li>
              <li>Department of Business Information Systems</li>
              <li>AAST - SmartVillage</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ain_horus_?igsh=YXIyb3pkaXI1NHI4&utm_source=qr' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary-400 hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Ain Horus. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
