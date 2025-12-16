import { motion } from 'framer-motion'

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Footer() {
  return (
    <motion.footer 
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-12 py-10 text-center"
    >
      <div className="container-custom">
        <div className="mb-4">
          <p className="text-sm muted">Hyderabad • +91-7386526988 • vamshikumarakunamoni@gmail.com</p>
        </div>
        <div className="text-xs muted">&copy; 2025 Vamshi Photography. All rights reserved.</div>
      </div>
    </motion.footer>
  )
}