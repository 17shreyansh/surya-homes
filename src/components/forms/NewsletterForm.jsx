import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function NewsletterForm({ variant = 'default' }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 800))
    console.log('Newsletter signup:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-3 py-4"
      >
        <CheckCircle size={20} className="text-gold" />
        <span className="font-body text-cream">You're subscribed. Welcome to the inner circle.</span>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto w-full">
      <div className="flex-1">
        <input
          type="email"
          placeholder="Enter your email address"
          {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          className={`input-luxury w-full ${errors.email ? 'border-red-500/50' : ''}`}
        />
        {errors.email && (
          <p className="text-red-400/80 text-xs mt-1 font-body">Please enter a valid email</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold whitespace-nowrap disabled:opacity-60"
      >
        {isSubmitting ? 'Subscribing...' : (
          <>Subscribe <ArrowRight size={14} /></>
        )}
      </button>
    </form>
  )
}
