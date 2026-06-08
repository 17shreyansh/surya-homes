import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1000))
    console.log('Contact form:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-12 gap-4"
      >
        <div className="w-16 h-16 border border-gold/30 flex items-center justify-center">
          <CheckCircle size={28} className="text-gold" />
        </div>
        <h3 className="font-display text-2xl text-cream">Message Received</h3>
        <p className="text-silver/70 font-body text-sm max-w-xs">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block overline-text text-2xs mb-2">Full Name *</label>
          <input
            type="text"
            placeholder="Your name"
            {...register('name', { required: true })}
            className={`input-luxury ${errors.name ? 'border-red-500/50' : ''}`}
          />
          {errors.name && <p className="text-red-400/80 text-xs mt-1 font-body">Required</p>}
        </div>
        <div>
          <label className="block overline-text text-2xs mb-2">Phone *</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            {...register('phone', { required: true })}
            className={`input-luxury ${errors.phone ? 'border-red-500/50' : ''}`}
          />
          {errors.phone && <p className="text-red-400/80 text-xs mt-1 font-body">Required</p>}
        </div>
      </div>

      <div>
        <label className="block overline-text text-2xs mb-2">Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register('email', { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          className={`input-luxury ${errors.email ? 'border-red-500/50' : ''}`}
        />
        {errors.email && <p className="text-red-400/80 text-xs mt-1 font-body">Invalid email</p>}
      </div>

      <div>
        <label className="block overline-text text-2xs mb-2">Subject</label>
        <select
          {...register('subject')}
          className="input-luxury"
        >
          <option value="">Select a topic</option>
          <option value="property-inquiry">Property Inquiry</option>
          <option value="site-visit">Schedule Site Visit</option>
          <option value="home-loan">Home Loan Assistance</option>
          <option value="list-property">List My Property</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block overline-text text-2xs mb-2">Message</label>
        <textarea
          rows={5}
          placeholder="Tell us how we can help you..."
          {...register('message', { required: true })}
          className={`input-luxury resize-none ${errors.message ? 'border-red-500/50' : ''}`}
        />
        {errors.message && <p className="text-red-400/80 text-xs mt-1 font-body">Required</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full justify-center disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : (<>Send Message <Send size={14} /></>)}
      </button>
    </form>
  )
}

export function InquiryForm({ property }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      message: property ? `Hi, I'm interested in "${property.title}". Please contact me.` : '',
    },
  })

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1000))
    console.log('Inquiry form:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center text-center py-8 gap-3"
      >
        <CheckCircle size={32} className="text-gold" />
        <p className="font-display text-xl text-cream">Enquiry Sent</p>
        <p className="text-silver/60 text-sm font-body">Our advisor will call you shortly.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block overline-text text-2xs mb-2">Your Name *</label>
        <input
          type="text"
          placeholder="Full name"
          {...register('name', { required: true })}
          className={`input-luxury ${errors.name ? 'border-red-500/50' : ''}`}
        />
        {errors.name && <p className="text-red-400/80 text-xs mt-1 font-body">Required</p>}
      </div>

      <div>
        <label className="block overline-text text-2xs mb-2">Phone Number *</label>
        <input
          type="tel"
          placeholder="+91 98765 43210"
          {...register('phone', { required: true })}
          className={`input-luxury ${errors.phone ? 'border-red-500/50' : ''}`}
        />
        {errors.phone && <p className="text-red-400/80 text-xs mt-1 font-body">Required</p>}
      </div>

      <div>
        <label className="block overline-text text-2xs mb-2">Message</label>
        <textarea
          rows={4}
          {...register('message')}
          className="input-luxury resize-none"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-gold w-full justify-center disabled:opacity-60">
        {isSubmitting ? 'Sending...' : (<>Send Enquiry <Send size={14} /></>)}
      </button>
    </form>
  )
}
