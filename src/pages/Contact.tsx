import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data) // Replace with actual submission (e.g., email API)
    alert('Message sent!')
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16"
    >
      <div className="container-custom max-w-lg mx-auto">
        <h1 className="text-4xl text-center mb-8 hero-title">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 card-elevated p-6">
          <motion.input 
            {...register('name', { required: true })}
            placeholder="Name"
            className="w-full p-3 bg-transparent rounded text-white border border-transparent focus:border-primary outline-none"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          />
          {errors.name && <p className="text-red-500">Required</p>}
          
          <motion.input 
            {...register('email', { required: true })}
            placeholder="Email"
            type="email"
            className="w-full p-3 bg-transparent rounded text-white border border-transparent focus:border-primary outline-none"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          {errors.email && <p className="text-red-500">Required</p>}
          
          <motion.textarea 
            {...register('message', { required: true })}
            placeholder="Message"
            className="w-full p-3 bg-transparent rounded text-white h-32 border border-transparent focus:border-primary outline-none"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          {errors.message && <p className="text-red-500">Required</p>}
          
          <motion.button 
            type="submit"
            className="btn-primary w-full text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}