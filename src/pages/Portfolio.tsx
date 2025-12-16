import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/2651248/pexels-photo-2651248.jpeg',
    category: 'corporate',
    title: 'Corporate Headshots'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/707018/pexels-photo-707018.jpeg',
    category: 'wedding',
    title: 'Wedding Photography'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg',
    category: 'product',
    title: 'Product Showcase'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
    category: 'portrait',
    title: 'Portrait Session'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg',
    category: 'corporate',
    title: 'Office Environment'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/2917382/pexels-photo-2917382.jpeg',
    category: 'event',
    title: 'Event Coverage'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
    category: 'wedding',
    title: 'Ceremony Moments'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    category: 'product',
    title: 'E-commerce Product'
  }
]

const categories = [
  { id: 'all', label: 'All Work', count: portfolioItems.length },
  { id: 'corporate', label: 'Corporate', count: portfolioItems.filter(item => item.category === 'corporate').length },
  { id: 'wedding', label: 'Wedding', count: portfolioItems.filter(item => item.category === 'wedding').length },
  { id: 'product', label: 'Product', count: portfolioItems.filter(item => item.category === 'product').length },
  { id: 'portrait', label: 'Portrait', count: portfolioItems.filter(item => item.category === 'portrait').length },
  { id: 'event', label: 'Events', count: portfolioItems.filter(item => item.category === 'event').length }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center mb-4 hero-title"
        >
          Our Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg muted mb-12 max-w-2xl mx-auto"
        >
          Explore our diverse collection of professional photography work across various categories and styles.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-dark shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        <PhotoProvider>
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover="hover"
                className="overflow-hidden rounded-lg cursor-pointer card-elevated group relative"
              >
                <PhotoView src={item.src}>
                  <motion.img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                    srcSet={`${item.src}?auto=compress&cs=tinysrgb&w=600 600w, ${item.src}?auto=compress&cs=tinysrgb&w=1200 1200w, ${item.src}?auto=compress&cs=tinysrgb&w=2000 2000w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </PhotoView>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                    <span className="text-white/80 text-sm">Click to view full size</span>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-dark px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </PhotoProvider>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 card-elevated p-8"
        >
          <h3 className="text-2xl mb-4">Ready to Create Something Amazing?</h3>
          <p className="muted mb-6">Let's discuss your photography needs and bring your vision to life.</p>
          <a href="/contact" className="btn-primary">Start Your Project</a>
        </motion.div>
      </div>
    </section>
  )
}