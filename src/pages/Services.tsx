import { motion } from 'framer-motion'

const services = [
  { title: 'Corporate Photography', desc: 'Professional headshots and events.' },
  { title: 'Product Shoots', desc: 'High-quality images for e-commerce.' },
  { title: 'Wedding & Events', desc: 'Capturing special moments.' },
  { title: 'Portrait Sessions', desc: 'Personalized and artistic portraits.' },
]

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section className="py-16">
      <div className="container-custom">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl text-center mb-12 hero-title"
      >
        Our Services
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-lg card-elevated"
          >
            <h2 className="text-2xl mb-3">{service.title}</h2>
            <p className="muted">{service.desc}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}