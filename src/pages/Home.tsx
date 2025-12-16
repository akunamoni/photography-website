import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Typewriter from '../components/Typewriter'
import { FiAward, FiStar, FiTarget } from 'react-icons/fi'

export default function Home() {
  // For hero parallax background – use viewport scroll
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'], // Starts at 0 when top hits viewport top, reaches 1 when bottom hits top
  })
  const yBg = useTransform(heroProgress, [0, 1], ['0%', '50%']) // Adjust % for desired speed
  const textColor = useTransform(heroProgress, [0, 0.5], ['#ffffff', '#d4af37'])

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

  // Card hover variants
  const cardHoverVariants = {
    hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
  }

  // Combined variants for cards
  const cardVariants = {
    ...childVariants,
    hover: cardHoverVariants.hover,
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
          onError={(e) => {
            // Fallback to external image if local image fails
            e.currentTarget.src = 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=2000&h=1200&fit=crop&crop=center';
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${imgLoaded ? 'opacity-100' : 'opacity-0 blur-sm scale-105'}`}
        />
        <div className="absolute inset-0 bg-black/36" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#fff" opacity="0.1" />
                <circle cx="75" cy="75" r="1" fill="#fff" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grain)" />
          </svg>
        </div>
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-black/20" />
        <motion.div
          className="container-custom relative z-10 text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="hero-title text-6xl md:text-7xl font-extrabold mb-6 animate"
            style={{ color: textColor }}
          >
            <Typewriter text="Capturing Moments, Creating Memories" delay={0.8} speed={60} />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 muted leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <span className="luxury-text font-semibold">Premium Photography Services</span> for discerning clients who demand excellence.
            From corporate branding to personal milestones, we deliver timeless artistry that transcends ordinary photography.
          </motion.p>
          <motion.a
            href="/contact"
            className="btn-primary text-lg px-8 py-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(212, 175, 55, 0.6)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book Premium Consultation
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section with Luxury Animations */}
      <motion.section
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container-custom">
          <motion.h2
            variants={childVariants}
            className="text-5xl text-center mb-16 hero-title luxury-border"
          >
            Why Choose <span className="luxury-text">Luxury Photography</span>?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Masterful Craftsmanship',
                desc: 'Every image is meticulously crafted with professional-grade equipment and artistic vision that commands attention.',
                icon: FiAward,
                premium: 'Award-winning techniques'
              },
              {
                title: 'Elite Client Experience',
                desc: 'Personalized service with dedicated consultation, ensuring your vision is brought to life with uncompromising quality.',
                icon: FiStar,
                premium: 'VIP treatment'
              },
              {
                title: 'Timeless Excellence',
                desc: 'Photographs that stand the test of time, preserving your most precious moments in stunning, gallery-quality art.',
                icon: FiTarget,
                premium: 'Museum-quality results'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.08,
                  y: -15,
                  boxShadow: '0 25px 50px rgba(212, 175, 55, 0.2)'
                }}
                className="card-elevated p-10 rounded-2xl text-center cursor-pointer group relative overflow-hidden"
              >
                {/* Luxury background effect */}
                <div className="absolute inset-0 bg-linear-to-br from-accent-gold/5 via-transparent to-accent-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gradient-premium"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon />
                  </motion.div>

                  <h3 className="text-2xl mb-4 font-bold">{item.title}</h3>
                  <p className="muted mb-4 leading-relaxed text-lg">{item.desc}</p>

                  <div className="border-t border-accent-gold/20 pt-4">
                    <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
                      {item.premium}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section with Luxury 3D Effects */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container-custom">
          <motion.h2
            className="text-5xl text-center mb-16 hero-title luxury-border"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="luxury-text">Elite Client</span> Testimonials
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Solutions',
                quote: 'Vamshi transformed our company\'s brand image completely. The corporate headshots and office photography exceeded our expectations. Our team looks professional and approachable, which has helped us attract top talent.',
                rating: 5,
                project: 'Corporate Branding',
                company: 'Fortune 500 Tech'
              },
              {
                name: 'Michael & Priya Chen',
                role: 'Newlyweds',
                quote: 'Our wedding day was absolutely perfect, and Vamshi captured every magical moment. From the ceremony to the reception, every photo tells our love story beautifully. We couldn\'t be happier with the results.',
                rating: 5,
                project: 'Wedding Photography',
                company: 'Luxury Events'
              },
              {
                name: 'Rajesh Kumar',
                role: 'Product Manager, FashionHub',
                quote: 'The product photography for our e-commerce launch was outstanding. Vamshi understood our brand aesthetic perfectly and delivered images that significantly boosted our sales conversion rates.',
                rating: 5,
                project: 'E-commerce Product Shoot',
                company: 'Fashion E-commerce'
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="card-elevated p-10 rounded-2xl relative overflow-hidden group"
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -60 : 60,
                  rotateY: -15,
                  scale: 0.9
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 30px 60px rgba(212, 175, 55, 0.2)'
                }}
                style={{ perspective: 1000 }}
              >
                {/* Luxury background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-accent-gold/5 via-accent-emerald/5 to-accent-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Rating stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <motion.span
                      key={starIndex}
                      className="text-2xl text-accent-gold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + starIndex * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                <motion.blockquote
                  className="text-xl mb-8 italic leading-relaxed text-text-luxury"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  "{testimonial.quote}"
                </motion.blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-bg-luxury font-bold text-xl mr-4 shadow-luxury"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1]?.[0] || ''}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="muted text-sm">{testimonial.role}</p>
                      <p className="text-accent-gold text-xs font-semibold">{testimonial.company}</p>
                    </div>
                  </div>

                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="text-xs bg-accent-gold/20 text-accent-gold px-3 py-1 rounded-full font-semibold border border-accent-gold/30">
                      {testimonial.project}
                    </span>
                  </motion.div>
                </div>

                {/* Luxury corner accent */}
                <motion.div
                  className="absolute top-4 right-4 text-accent-gold/30 text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  💎
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}