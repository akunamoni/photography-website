import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook, FiLinkedin, FiTwitter, FiZap } from 'react-icons/fi'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const contactInfo = [
  {
    icon: FiMapPin,
    title: 'Location',
    details: ['Hyderabad, Telangana', 'India'],
    link: null
  },
  {
    icon: FiPhone,
    title: 'Phone',
    details: ['+91-7386526988'],
    link: 'tel:+917386526988'
  },
  {
    icon: FiMail,
    title: 'Email',
    details: ['vamshikumarakunamoni@gmail.com'],
    link: 'mailto:vamshikumarakunamoni@gmail.com'
  },
  {
    icon: FiClock,
    title: 'Business Hours',
    details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: By Appointment'],
    link: null
  }
]

const socialLinks = [
  { name: 'Instagram', icon: FiInstagram, url: '#' },
  { name: 'Facebook', icon: FiFacebook, url: '#' },
  { name: 'LinkedIn', icon: FiLinkedin, url: '#' },
  { name: 'Twitter', icon: FiTwitter, url: '#' }
]

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log(data) // Replace with actual submission (e.g., email API)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16"
    >
      <div className="container-custom">
        <motion.h1
          className="text-4xl text-center mb-4 hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's Create Something Amazing
        </motion.h1>
        <motion.p
          className="text-center text-lg muted mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Ready to capture your vision? Get in touch and let's discuss how we can bring your photography dreams to life.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card-elevated p-8">
              <h2 className="text-2xl mb-6 font-semibold">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.input
                    {...register('name', { required: true })}
                    placeholder="Your Name"
                    className="w-full p-4 bg-transparent rounded-lg border border-white/20 focus:border-primary outline-none transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.input
                    {...register('phone', { required: true })}
                    placeholder="Phone Number"
                    type="tel"
                    className="w-full p-4 bg-transparent rounded-lg border border-white/20 focus:border-primary outline-none transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {errors.name && <motion.p className="text-red-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Name is required</motion.p>}
                {errors.phone && <motion.p className="text-red-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Phone is required</motion.p>}

                <motion.input
                  {...register('email', { required: true })}
                  placeholder="Email Address"
                  type="email"
                  className="w-full p-4 bg-transparent rounded-lg border border-white/20 focus:border-primary outline-none transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.email && <motion.p className="text-red-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Email is required</motion.p>}

                <motion.select
                  {...register('service', { required: true })}
                  className="w-full p-4 bg-transparent rounded-lg border border-white/20 focus:border-primary outline-none transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="" className="bg-dark">Select Service</option>
                  <option value="corporate" className="bg-dark">Corporate Photography</option>
                  <option value="product" className="bg-dark">Product Photography</option>
                  <option value="wedding" className="bg-dark">Wedding & Events</option>
                  <option value="portrait" className="bg-dark">Portrait Sessions</option>
                  <option value="other" className="bg-dark">Other</option>
                </motion.select>
                {errors.service && <motion.p className="text-red-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Please select a service</motion.p>}

                <motion.textarea
                  {...register('message', { required: true })}
                  placeholder="Tell us about your project..."
                  className="w-full p-4 bg-transparent rounded-lg h-32 border border-white/20 focus:border-primary outline-none transition-colors resize-none"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.message && <motion.p className="text-red-500 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Message is required</motion.p>}

                <motion.button
                  type="submit"
                  className="btn-primary w-full text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl mb-6 font-semibold">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-2xl"><info.icon /></div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="muted text-sm">
                          {info.link ? (
                            <a href={info.link} className="hover:text-primary transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl mb-6 font-semibold">Follow Us</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <span className="text-xl"><social.icon /></span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="card-elevated p-6 text-center"
            >
              <div className="text-3xl mb-2"><FiZap /></div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm muted">We respond to all inquiries within 24 hours</p>
            </motion.div>
          </motion.div>
        </div>

        {isSubmitted && (
          <motion.div
            className="mt-8 p-6 bg-green-500/20 border border-green-500 rounded-lg text-center max-w-md mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <p className="text-green-400 font-semibold">Thank you! We'll get back to you within 24 hours.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}