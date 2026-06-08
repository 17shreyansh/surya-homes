import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import Layout from '../components/layout/Layout'
import { Newsletter } from '../components/sections'
import { faqs, getFAQCategories } from '../data/faq'

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
  },
  btnSecondary: {
    border: `1px solid ${colors.gold}50`,
    color: colors.gold,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '14px 28px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  }
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: easeCustom }}
      style={{ 
        backgroundColor: colors.charcoal,
        border: `1px solid ${open ? `${colors.gold}40` : `${colors.white}05`}`,
        marginBottom: '12px',
        transition: 'border-color 0.4s ease',
        willChange: 'transform, opacity'
      }}
      className="group"
      onMouseEnter={(e) => { if (!open) e.currentTarget.style.borderColor = `${colors.white}15` }}
      onMouseLeave={(e) => { if (!open) e.currentTarget.style.borderColor = `${colors.white}05` }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 32px',
          cursor: 'pointer',
          border: 'none',
          background: 'none',
          textAlign: 'left',
          gap: '24px'
        }}
      >
        <span style={{ 
          color: open ? colors.gold : colors.white, 
          fontSize: '15px', 
          fontWeight: 300, 
          transition: 'color 0.3s ease' 
        }}>
          {faq.question}
        </span>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexShrink: 0 
        }}>
          {open ? <Minus size={16} style={{ color: colors.gold }} /> : <Plus size={16} style={{ color: `${colors.white}40` }} className="group-hover:text-white transition-colors" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeCustom }}
            style={{ overflow: 'hidden', willChange: 'height, opacity' }}
          >
            <div style={{ padding: '0 32px 32px 32px' }}>
              <div style={{ height: '1px', width: '32px', backgroundColor: `${colors.gold}40`, marginBottom: '16px' }} />
              <p style={{ color: `${colors.white}60`, fontSize: '14px', lineHeight: 1.7, fontWeight: 300 }}>
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const categories = ['All', ...getFAQCategories()]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? faqs : faqs.filter(f => f.category === active)

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
              <span style={styles.overline} className="!mb-0">Quick Answers</span>
              <span className="w-8 h-[1px]" style={{ backgroundColor: colors.gold }} />
            </div>
            <h1 style={styles.heading}>
              Common <span style={{ color: `${colors.white}50`, fontStyle: 'italic' }}>Questions.</span>
            </h1>
            <p style={{ ...styles.paragraph, maxWidth: '500px', margin: '0 auto' }}>
              Everything you need to know about finding, buying, or selling your next home with us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main FAQ Section */}
      <section style={{ backgroundColor: colors.navy, padding: '80px 0 120px 0' }}>
        <div className="w-full max-w-[800px] mx-auto px-6 md:px-12">
          
          {/* Stripe-Tier Animated Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '48px' }}>
            {categories.map(cat => {
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    position: 'relative',
                    padding: '10px 20px',
                    color: isActive ? colors.gold : `${colors.white}60`,
                    fontSize: '11px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    transition: 'color 0.4s ease',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                  className="hover:text-white"
                >
                  {cat}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        backgroundColor: colors.gold,
                        willChange: 'transform'
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* 120FPS GPU-Accelerated List */}
          <motion.div layout style={{ willChange: 'transform' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((faq, i) => (
                <FAQItem key={faq.id} faq={faq} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Direct CTA Section */}
      <section style={{ backgroundColor: colors.charcoal, padding: '100px 0', borderTop: `1px solid ${colors.white}05`, textAlign: 'center' }}>
        <div className="w-full max-w-[600px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCustom }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px]" style={{ backgroundColor: `${colors.gold}60` }} />
              <span style={styles.overline} className="!mb-0">Still Not Sure?</span>
              <span className="w-8 h-[1px]" style={{ backgroundColor: `${colors.gold}60` }} />
            </div>
            
            <h2 style={{ ...styles.heading, fontSize: '3rem', marginBottom: '16px' }}>Talk to Us.</h2>
            <p style={{ ...styles.paragraph, marginBottom: '40px' }}>
              We are here to help Monday to Saturday, 9 AM to 7 PM. Give us a call or send a message.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/contact" 
                style={styles.btnPrimary}
                className="group hover:bg-white hover:text-black"
              >
                Message Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919876543210" 
                style={styles.btnSecondary}
                className="hover:bg-[#D4AF37] hover:text-black"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  )
}