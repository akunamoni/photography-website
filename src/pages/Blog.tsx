import { motion } from 'framer-motion'

const posts = [
  { title: 'Top Photography Tips for 2025', excerpt: 'Learn the latest trends...' },
  { title: 'Behind the Scenes: Corporate Shoot', excerpt: 'How we captured...' },
]

export default function Blog() {
  return (
    <section className="py-16">
      <div className="container-custom">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl text-center mb-12"
      >
        Blog
      </motion.h1>
      <div className="space-y-8">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded card-elevated hover:translate-y-[-6px] transition-transform"
          >
            <h2 className="text-2xl mb-2">{post.title}</h2>
            <p className="muted">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  )
}