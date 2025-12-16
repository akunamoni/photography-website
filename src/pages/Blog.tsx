import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Top Photography Tips for 2025: Mastering Light and Composition',
    excerpt: 'Discover the latest techniques and trends in professional photography. Learn how to capture stunning images with proper lighting techniques and advanced composition rules.',
    date: 'December 15, 2025',
    readTime: '5 min read',
    category: 'Photography Tips',
    image: 'https://images.pexels.com/photos/2885016/pexels-photo-2885016.jpeg'
  },
  {
    title: 'Behind the Scenes: Corporate Brand Photography Shoot',
    excerpt: 'A detailed look at how we transformed a tech startup\'s brand identity through strategic photography. From concept to final delivery, see the process behind professional corporate imaging.',
    date: 'December 10, 2025',
    readTime: '7 min read',
    category: 'Case Study',
    image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg'
  },
  {
    title: 'The Art of Wedding Photography: Capturing Emotions',
    excerpt: 'Wedding photography goes beyond just taking pictures—it\'s about preserving emotions and creating timeless memories. Learn our approach to documenting your special day.',
    date: 'December 5, 2025',
    readTime: '6 min read',
    category: 'Wedding Photography',
    image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg'
  },
  {
    title: 'Product Photography: E-commerce Success Secrets',
    excerpt: 'In the competitive world of online retail, product photography can make or break your sales. Discover professional techniques for showcasing your products effectively.',
    date: 'November 28, 2025',
    readTime: '8 min read',
    category: 'Product Photography',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg'
  }
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

export default function Blog() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl text-center mb-4 hero-title"
        >
          Photography Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg muted mb-12 max-w-2xl mx-auto"
        >
          Insights, tips, and behind-the-scenes stories from the world of professional photography.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {posts.map((post, i) => (
            <motion.article
              key={i}
              variants={itemVariants}
              className="card-elevated overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-dark px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm muted mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl mb-3 font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-primary font-semibold">
                  <span>Read More</span>
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 card-elevated p-8"
        >
          <h3 className="text-2xl mb-4">Stay Updated</h3>
          <p className="muted mb-6">Subscribe to our newsletter for the latest photography tips and industry insights.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent rounded-lg border border-white/20 focus:border-primary outline-none transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}