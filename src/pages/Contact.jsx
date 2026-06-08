import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { ContactForm } from '../components/forms'
import { Newsletter } from '../components/sections'
import { CONTACT } from '../constants'
import { faqs } from '../data/faq'

// High-end easing curve for smooth hardware acceleration
const easeCustom = [0.16, 1, 0.3, 1]

// Precise Luxury Industrial color palette
const colors = {
  navy: '#0A0F1C',
  charcoal: '#1A1A1A',
  black: '#000000',
  gold: '#D4AF37',
  white: '#FFFFFF',
}

const styles = {
  header: {
    backgroundColor: colors.black,
    padding: '160px 0 100px 0',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: `1px solid ${colors.white}0A`,
  },
  overline: {
    color: colors.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    fontWeight: 500,
    display: 'block',
    marginBottom: '16px'
  },
  heading: {
    color: colors.white,
    fontSize: '4rem',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '24px'
  },
  paragraph: {
    color: `${colors.white}60`,
    fontSize: '16px',
    lineHeight: 1.6,
    fontWeight: 300,
  },
  card: {
    backgroundColor: colors.charcoal,
    border: `1px solid ${colors.white}0A`,
    padding: '32px',
    transition: 'all 0.4s ease',
  },
  btnPrimary: {
    backgroundColor: colors.gold,
    color: colors.black,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '14px 28px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    width: '100%'
  }
}

const contactInfo = [
  { Icon: MapPin, label: 'Our Office', value: CONTACT.address, href: 'https://maps.google.com' },
  { Icon: Phone, label: 'Call Us', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { Icon: Mail, label: 'Email Us', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { Icon: Clock, label: 'Hours', value: `${CONTACT.hours.weekdays}\n${CONTACT.hours.sunday}`, href: null },
]

// 120 FPS Animated FAQ Component
const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      style={{ ...styles.card, padding: '0', cursor: 'pointer', marginBottom: '16px', overflow: 'hidden' }}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${colors.gold}50`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = `${colors.white}0A`}
    >
      <div style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ color: colors.white, fontSize: '15px', fontWeight: 300 }}>{faq.question}</h3>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {isOpen ? <Minus size={16} style={{ color: colors.gold }} /> : <Plus size={16} style={{ color: colors.gold }} />}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeCustom }}
            style={{ willChange: 'height, opacity' }}
          >
            <div style={{ padding: '0 32px 32px 32px' }}>
              <div style={{ height: '1px', backgroundColor: `${colors.gold}20`, width: '40px', marginBottom: '16px' }} />
              <p style={{ color: `${colors.white}60`, fontSize: '14px', lineHeight: 1.6, fontWeight: 300 }}>
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  return (
    <Layout>
      {/* Editorial Hero Header */}
      <div style={styles.header}>
        {/* Subtle Architectural Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
        />
        
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px]" style={{ backgroundColor: colors.gold }} />
              <span style={styles.overline} className="!mb-0">Contact Us</span>
              <span className="w-8 h-[1px]" style={{ backgroundColor: colors.gold }} />
            </div>
            <h1 style={styles.heading}>
              We Are Here <span style={{ color: `${colors.white}50`, fontStyle: 'italic' }}>To Help.</span>
            </h1>
            <p style={{ ...styles.paragraph, maxWidth: '500px', margin: '0 auto' }}>
              Call us, send an email, or visit our office. Our team is ready to answer your questions and help you find your next home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section style={{ backgroundColor: colors.navy, padding: '120px 0' }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            
            {/* Left: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: easeCustom }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div style={styles.card}>
                <h2 style={{ color: colors.white, fontSize: '2rem', fontWeight: 300, marginBottom: '8px' }}>Send a Message.</h2>
                <p style={{ color: `${colors.white}50`, fontSize: '13px', fontWeight: 300, marginBottom: '32px' }}>
                  We usually reply within 2 to 4 hours during business days.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Right: Contact Information Grid */}
            <div className="flex flex-col gap-6">
              {contactInfo.map(({ Icon, label, value, href }, i) => (
                <motion.div 
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: easeCustom }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div 
                    style={{ ...styles.card, padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}
                    className="group"
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${colors.gold}40`; e.currentTarget.style.backgroundColor = '#1F1F1F'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors.white}0A`; e.currentTarget.style.backgroundColor = colors.charcoal; }}
                  >
                    <div style={{ width: '40px', height: '40px', border: `1px solid ${colors.gold}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} className="group-hover:bg-[#D4AF37]/10 transition-colors">
                      <Icon size={16} style={{ color: colors.gold }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div style={{ color: `${colors.white}40`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          style={{ color: colors.white, fontSize: '14px', fontWeight: 300, whiteSpace: 'pre-line', transition: 'color 0.3s ease' }}
                          className="hover:text-[#D4AF37]"
                        >
                          {value}
                        </a>
                      ) : (
                        <p style={{ color: colors.white, fontSize: '14px', fontWeight: 300, whiteSpace: 'pre-line' }}>
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Architectural Map Overlay Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: easeCustom }}
                style={{ ...styles.card, padding: '0', position: 'relative', overflow: 'hidden', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=70"
                  alt="Map Location"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}
                />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26, 26, 26, 0.7)' }} />
                
                <div style={{ position: 'relative', zIndex: 10, padding: '24px' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: `${colors.gold}15`, border: `1px solid ${colors.gold}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                    <MapPin size={20} style={{ color: colors.gold }} />
                  </div>
                  <p style={{ color: colors.white, fontSize: '14px', fontWeight: 400, marginBottom: '4px' }}>Main Office</p>
                  <p style={{ color: `${colors.white}50`, fontSize: '12px', fontWeight: 300, marginBottom: '20px' }}>{CONTACT.address}</p>
                  
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.btnPrimary}
                    className="hover:bg-white hover:text-black"
                  >
                    Get Directions
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Smooth Animated FAQ Section */}
      <section style={{ backgroundColor: colors.black, padding: '120px 0', borderTop: `1px solid ${colors.white}0A` }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span style={styles.overline}>Quick Answers</span>
              <h2 style={{ ...styles.heading, marginBottom: 0 }}>Common Questions.</h2>
            </div>
            
            <Link 
              to="/faq" 
              className="group flex items-center gap-3"
              style={{ color: colors.gold, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', paddingBottom: '8px', borderBottom: `1px solid ${colors.gold}40` }}
            >
              Read All FAQs
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, i) => (
                <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <FaqItem faq={faq} />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col">
              {faqs.slice(Math.ceil(faqs.length / 2), 4).map((faq, i) => (
                <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <FaqItem faq={faq} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  )
}