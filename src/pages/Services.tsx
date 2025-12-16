import { motion, cubicBezier } from 'framer-motion'
import { FiBriefcase, FiPackage, FiHeart, FiCamera } from 'react-icons/fi'

const services = [
  {
    title: 'Corporate Photography',
    desc: 'Professional headshots, office events, and brand photography that elevates your business image.',
    features: ['Professional headshots', 'Event coverage', 'Brand photography', 'Post-production editing'],
    price: 'Starting at ₹15,000',
    icon: FiBriefcase
  },
  {
    title: 'Product Photography',
    desc: 'High-quality product shots for e-commerce, catalogs, and marketing materials.',
    features: ['E-commerce ready', 'Lifestyle shots', '360° views', 'White background'],
    price: 'Starting at ₹8,000',
    icon: FiPackage
  },
  {
    title: 'Wedding & Events',
    desc: 'Capture your special moments with artistic photography and cinematic videography.',
    features: ['Full day coverage', 'Cinematic videos', 'Photo albums', 'Online gallery'],
    price: 'Starting at ₹50,000',
    icon: FiHeart
  },
  {
    title: 'Portrait Sessions',
    desc: 'Personalized portrait photography for individuals, families, and creative concepts.',
    features: ['Studio sessions', 'Outdoor shoots', 'Creative concepts', 'Fine art prints'],
    price: 'Starting at ₹5,000',
    icon: FiCamera
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced from 0.2 to 0.1 for faster loading
      delayChildren: 0.2, // Small delay before starting the stagger
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Reduced y movement for faster animation
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Faster animation duration
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
    }
  },
  hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
}

export default function Services() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl text-center mb-6 hero-title animate"
        >
          <span className="luxury-text">Premium</span> Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xl muted mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Elevate your brand with <span className="luxury-text font-semibold">museum-quality photography</span> that commands attention and drives results.
          Each service is crafted with uncompromising attention to detail and artistic excellence.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -20,
                boxShadow: '0 30px 60px rgba(212, 175, 55, 0.25)'
              }}
              className="card-elevated p-12 relative overflow-hidden group rounded-3xl"
            >
              {/* Luxury background effects */}
              <div className="absolute inset-0 bg-linear-to-br from-accent-gold/5 via-accent-emerald/5 to-accent-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-accent-gold via-accent-platinum to-accent-gold opacity-60" />

              <div className="relative z-10">
                <motion.div
                  className="text-7xl mb-8 w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-gradient-gold shadow-glow-gold"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <service.icon />
                </motion.div>

                <h2 className="text-3xl mb-6 font-bold text-center">{service.title}</h2>
                <p className="muted mb-8 leading-relaxed text-lg text-center">{service.desc}</p>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 text-accent-gold text-center">Premium Package Includes:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        className="flex items-center text-muted"
                      >
                        <motion.span
                          className="text-accent-gold mr-3 text-xl"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          ✨
                        </motion.span>
                        <span className="text-text-luxury">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="text-center border-t border-accent-gold/20 pt-6">
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-accent-gold">{service.price}</span>
                    <p className="text-sm muted mt-1">Professional quality guaranteed</p>
                  </div>

                  <motion.a
                    href="/contact"
                    className="btn-primary w-full text-center py-4 text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Premium Session
                  </motion.a>
                </div>
              </div>

              {/* Luxury corner accent */}
              <motion.div
                className="absolute bottom-4 right-4 text-accent-gold/20 text-3xl"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                💎
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Luxury Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 card-elevated p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Luxury background */}
          <div className="absolute inset-0 bg-linear-to-br from-accent-gold/10 via-accent-emerald/5 to-accent-burgundy/10" />

          <div className="relative z-10">
            <motion.div
              className="text-6xl mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              💎
            </motion.div>

            <h3 className="text-4xl mb-6 font-bold">
              Need a <span className="luxury-text">Custom Package</span>?
            </h3>
            <p className="muted mb-8 text-xl leading-relaxed max-w-2xl mx-auto">
              We create bespoke photography experiences tailored to your unique vision and requirements.
              From exclusive events to specialized commercial projects, let's craft something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                className="btn-primary px-8 py-4 text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.a>

              <motion.a
                href="/portfolio"
                className="text-accent-gold hover:text-accent-platinum transition-colors font-semibold text-lg flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View Our Work
                <span className="ml-2">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}