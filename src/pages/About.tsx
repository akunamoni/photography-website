import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Happy Clients' },
  { number: '24/7', label: 'Support Available' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="container-custom">
        <motion.h1
          className="text-4xl text-center mb-16 hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Vamshi Photography
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              With over a decade of experience in professional photography, Vamshi Photography has been at the forefront of visual storytelling in Hyderabad. We specialize in capturing the essence of businesses, events, and personal moments with unparalleled artistry and technical excellence.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed muted"
            >
              Our journey began with a passion for preserving memories and has evolved into a comprehensive photography service that serves businesses and individuals alike. We believe every image tells a story, and we're here to help you tell yours.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="/portfolio" className="btn-primary mt-6 inline-block">View Our Work</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="card-elevated overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
              srcSet={
                "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600 600w, " +
                "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w"
              }
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={1200}
              height={800}
              alt="Professional photography team at work"
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="text-center card-elevated p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5, type: 'spring' }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}