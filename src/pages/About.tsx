import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="container-custom">
        <h1 className="text-4xl text-center mb-10 hero-title">About Us</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">With over 10 years in the industry, Vamshi Photography specializes in capturing stunning visuals for businesses. Our team uses state-of-the-art equipment to deliver premium results.</p>
            <p className="muted">We work closely with clients to craft visual stories that elevate brands and preserve moments with timeless artistry.</p>

            <a href="/portfolio" className="btn-primary mt-4 inline-block">View Portfolio</a>
          </div>

          <div className="card-elevated overflow-hidden">
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
              alt="Team"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}