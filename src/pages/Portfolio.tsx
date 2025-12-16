import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const images = [
  'https://images.pexels.com/photos/2651248/pexels-photo-2651248.jpeg',
  'https://images.pexels.com/photos/707018/pexels-photo-707018.jpeg',
  'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg',
  'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
  'https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg',
  'https://images.pexels.com/photos/2917382/pexels-photo-2917382.jpeg',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
}

export default function Portfolio() {
  return (
    <section className="py-16">
      <div className="container-custom">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center mb-12"
      >
        Our Portfolio
      </motion.h1>
      <PhotoProvider>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover="hover"
              className="overflow-hidden rounded-lg cursor-pointer card-elevated"
            >
              <PhotoView src={src}>
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                  srcSet={`${src}?auto=compress&cs=tinysrgb&w=600 600w, ${src}?auto=compress&cs=tinysrgb&w=1200 1200w, ${src}?auto=compress&cs=tinysrgb&w=2000 2000w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-72 md:h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </PhotoView>
            </motion.div>
          ))}
        </motion.div>
      </PhotoProvider>
      </div>
    </section>
  )
}