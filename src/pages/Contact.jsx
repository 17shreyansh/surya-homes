import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowRight, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { ContactForm } from '../components/forms'
import { Newsletter } from '../components/sections'
import { CONTACT } from '../constants'
import { faqs } from '../data/faq'

const cinematicEase = [0.25, 1, 0.5, 1]

const theme = {
  navy: '#082F67',
  charcoal: '#101826',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
}

const styles = {
  header: {
    backgroundColor: theme.ivory,
    padding: '140px 0 80px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  overline: {
    fontFamily: '"Inter", sans-serif',
    color: theme.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    fontWeight: 600,
    display: 'block',
    marginBottom: '16px'
  },
  heading: {
    fontFamily: '"Playfair Display", serif',
    color: theme.navy,
    fontSize: '4.5rem',
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: '24px'
  },
  paragraph: {
    fontFamily: '"Inter", sans-serif',
    color: `${theme.navy}70`,
    fontSize: '16px',
    lineHeight: 1.6,
    fontWeight: 300,
  },
  card: {
    backgroundColor: theme.ivory,
    border: `1px solid ${theme.navy}08`,
    padding: '32px',
    transition: 'all 0.4s ease',
  },
  btnPrimary: {
    fontFamily: '"Inter", sans-serif',
    backgroundColor: theme.gold,
    color: theme.ivory,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '14px 28px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: 600,
    transition: 'all 0.4s ease',
    width: '100%'
  }
}

const contactInfo = [
  { Icon: MapPin, label: 'Our Office', value: CONTACT.address, href: 'https://maps.google.com' },
  { Icon: Phone, label: 'Call Us', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { Icon: Mail, label: 'Email Us', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { Icon: Clock, label: 'Hours', value: `${CONTACT.hours.weekdays}\n${CONTACT.hours.sunday}`, href: null },
]

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      style={{ ...styles.card, padding: '0', cursor: 'pointer', marginBottom: '16px', overflow: 'hidden' }}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${theme.gold}40`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = `${theme.navy}08`}
    >
      <div style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '15px', fontWeight: 400 }}>{faq.question}</h3>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {isOpen ? <Minus size={16} style={{ color: theme.gold }} /> : <Plus size={16} style={{ color: theme.gold }} />}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: cinematicEase }}
            style={{ willChange: 'height, opacity' }}
          >
            <div style={{ padding: '0 32px 32px 32px' }}>
              <div style={{ height: '1px', backgroundColor: `${theme.gold}30`, width: '40px', marginBottom: '16px' }} />
              <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '14px', lineHeight: 1.6, fontWeight: 300 }}>
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
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px]" style={{ backgroundColor: theme.gold }} />
              <span style={styles.overline} className="!mb-0">Contact Us</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: theme.gold }} />
            </div>
            <h1 style={styles.heading}>
              We Are Here <span style={{ fontStyle: 'italic', color: theme.gold }}>To Help.</span>
            </h1>
            <p style={{ ...styles.paragraph, maxWidth: '500px', margin: '0 auto' }}>
              Call us, send an email, or visit our office. Our team is ready to answer your questions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section style={{ backgroundColor: theme.ivory, padding: '120px 0' }}>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            
            {/* Left: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: cinematicEase }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div style={styles.card}>
                <h2 style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, fontSize: '2rem', fontWeight: 400, marginBottom: '8px' }}>Send a Message.</h2>
                <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}50`, fontSize: '13px', fontWeight: 300, marginBottom: '32px' }}>
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
                  transition={{ duration: 0.8, delay: i * 0.1, ease: cinematicEase }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div 
                    style={{ ...styles.card, padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${theme.gold}40`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${theme.navy}08`; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ width: '40px', height: '40px', border: `1px solid ${theme.gold}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color: theme.gold }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}50`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px', fontWeight: 600 }}>
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '14px', fontWeight: 400, whiteSpace: 'pre-line', transition: 'color 0.3s ease' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = theme.gold}
                          onMouseLeave={(e) => e.currentTarget.style.color = theme.navy}
                        >
                          {value}
                        </a>
                      ) : (
                        <p style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '14px', fontWeight: 400, whiteSpace: 'pre-line' }}>
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: cinematicEase }}
                style={{ ...styles.card, padding: '0', position: 'relative', overflow: 'hidden', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=70"
                  alt="Map Location"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}
                />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(250, 248, 243, 0.8)' }} />
                
                <div style={{ position: 'relative', zIndex: 10, padding: '24px' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: `${theme.gold}15`, border: `1px solid ${theme.gold}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                    <MapPin size={20} style={{ color: theme.gold }} />
                  </div>
                  <p style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, fontSize: '14px', fontWeight: 400, marginBottom: '4px' }}>Main Office</p>
                  <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}60`, fontSize: '12px', fontWeight: 300, marginBottom: '20px' }}>{CONTACT.address}</p>
                  
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.btnPrimary}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.navy; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = theme.gold; }}
                  >
                    Get Directions
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: theme.beige, padding: '120px 0' }}>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span style={styles.overline}>Quick Answers</span>
              <h2 style={{ ...styles.heading, marginBottom: 0 }}>Common Questions.</h2>
            </div>
            
            <Link 
              to="/faq" 
              className="group flex items-center gap-3"
              style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', paddingBottom: '8px', borderBottom: `1px solid ${theme.navy}30`, fontWeight: 600 }}
            >
              Read All FAQs
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, i) => (
                <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}>
                  <FaqItem faq={faq} />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col">
              {faqs.slice(Math.ceil(faqs.length / 2), 4).map((faq, i) => (
                <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}>
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
