import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Home() {
  // For hero parallax background – use viewport scroll
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'], // Starts at 0 when top hits viewport top, reaches 1 when bottom hits top
  })
  const yBg = useTransform(heroProgress, [0, 1], ['0%', '50%']) // Adjust % for desired speed

  const [imgLoaded, setImgLoaded] = useState(false)

  // Parent variants for stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  // Child variants (for cards and heading)
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative">
      {/* Hero Section with Parallax Background */}
      <motion.div
        ref={heroRef}
        style={{ backgroundPositionY: yBg }}
        className="h-screen bg-black/5 relative flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background image as prioritized <img> for better LCP and responsive loading */}
        <img
          src={'https://images.pexels.com/photos/2866073/pexels-photo-2866073.jpeg'}
          srcSet={
            "https://images.pexels.com/photos/2866073/pexels-photo-2866073.jpeg?auto=compress&cs=tinysrgb&w=800 800w, " +
            "https://images.pexels.com/photos/2866073/pexels-photo-2866073.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w, " +
            "https://images.pexels.com/photos/2866073/pexels-photo-2866073.jpeg?auto=compress&cs=tinysrgb&w=2000 2000w"
          }
          sizes="100vw"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${imgLoaded ? 'opacity-100' : 'opacity-0 blur-sm scale-105'}`}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/36" />
        <motion.div
          className="container-custom relative z-10 text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="hero-title text-5xl md:text-6xl font-extrabold mb-4">Capturing Moments, Creating Memories</h1>
          <p className="text-lg md:text-xl mb-8 muted">Premium Photography Services for Businesses & Individuals</p>
          <a
            href="/contact"
            className="btn-primary hover:scale-105 transform-gpu"
          >
            Book Now
          </a>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section with Proper Stagger */}
      <motion.section
        className="py-16 px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={childVariants}
          className="text-4xl text-center mb-8"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {['Professional Quality', 'Creative Vision', 'Client Satisfaction'].map((item, i) => (
            <motion.div
              key={i}
              variants={childVariants}
              className="bg-dark/50 p-6 rounded"
            >
              <h3 className="text-2xl mb-4">{item}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}