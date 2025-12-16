import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 nav-backdrop backdrop-blur-sm z-50 py-4"
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary tracking-wide hero-title">Vamshi Photography</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm">
          {links.map((item) => (
            <motion.li key={item.label} variants={itemVariants}>
              <Link to={item.to} className="hover:text-primary transition-colors px-2 py-1">
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-sm">
              {links.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.to} className="hover:text-primary transition-colors px-4 py-2 block">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}