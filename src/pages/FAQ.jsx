import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import Layout from '../components/layout/Layout'
import { Newsletter } from '../components/sections'
import { faqs, getFAQCategories } from '../data/faq'

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
  },
  btnSecondary: {
    fontFamily: '"Inter", sans-serif',
    border: `1px solid ${theme.navy}30`,
    color: theme.navy,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '14px 28px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.4s ease',
    fontWeight: 600,
  }
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: cinematicEase }}
      style={{ 
        backgroundColor: theme.ivory,
        border: `1px solid ${open ? `${theme.gold}40` : `${theme.navy}08`}`,
        marginBottom: '12px',
        transition: 'border-color 0.4s ease',
        willChange: 'transform, opacity'
      }}
      onMouseEnter={(e) => { if (!open) e.currentTarget.style.borderColor = `${theme.navy}15` }}
      onMouseLeave={(e) => { if (!open) e.currentTarget.style.borderColor = `${theme.navy}08` }}
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
          fontFamily: '"Inter", sans-serif',
          color: open ? theme.gold : theme.navy, 
          fontSize: '15px', 
          fontWeight: 400, 
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
          {open ? <Minus size={16} style={{ color: theme.gold }} /> : <Plus size={16} style={{ color: `${theme.navy}40` }} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: cinematicEase }}
            style={{ overflow: 'hidden', willChange: 'height, opacity' }}
          >
            <div style={{ padding: '0 32px 32px 32px' }}>
              <div style={{ height: '1px', width: '32px', backgroundColor: `${theme.gold}40`, marginBottom: '16px' }} />
              <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '14px', lineHeight: 1.7, fontWeight: 300 }}>
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
      {/* Hero Header */}
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
              <span style={styles.overline} className="!mb-0">Quick Answers</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: theme.gold }} />
            </div>
            <h1 style={styles.heading}>
              Common <span style={{ fontStyle: 'italic', color: theme.gold }}>Questions.</span>
            </h1>
            <p style={{ ...styles.paragraph, maxWidth: '500px', margin: '0 auto' }}>
              Everything you need to know about finding, buying, or selling your next home with us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main FAQ Section */}
      <section style={{ backgroundColor: theme.ivory, padding: '80px 0 120px 0' }}>
        <div className="w-full max-w-[800px] mx-auto px-6 sm:px-12">
          
          {/* Category Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '48px' }}>
            {categories.map(cat => {
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    position: 'relative',
                    padding: '10px 20px',
                    color: isActive ? theme.gold : `${theme.navy}60`,
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    transition: 'color 0.4s ease',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = theme.navy; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = `${theme.navy}60`; }}
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
                        backgroundColor: theme.gold,
                        willChange: 'transform'
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* FAQ List */}
          <motion.div layout style={{ willChange: 'transform' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((faq, i) => (
                <FAQItem key={faq.id} faq={faq} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: theme.beige, padding: '100px 0', textAlign: 'center' }}>
        <div className="w-full max-w-[600px] mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cinematicEase }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px]" style={{ backgroundColor: `${theme.gold}60` }} />
              <span style={styles.overline} className="!mb-0">Still Not Sure?</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: `${theme.gold}60` }} />
            </div>
            
            <h2 style={{ ...styles.heading, fontSize: '3rem', marginBottom: '16px' }}>Talk to Us.</h2>
            <p style={{ ...styles.paragraph, marginBottom: '40px' }}>
              We are here to help Monday to Saturday, 9 AM to 7 PM.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/contact" 
                style={styles.btnPrimary}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.navy; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = theme.gold; }}
              >
                Message Us <ArrowRight size={14} />
              </Link>
              <a 
                href="tel:+919876543210" 
                style={styles.btnSecondary}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.gold; e.currentTarget.style.color = theme.ivory; e.currentTarget.style.borderColor = theme.gold; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.navy; e.currentTarget.style.borderColor = `${theme.navy}30`; }}
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
