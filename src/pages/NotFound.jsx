import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Search } from 'lucide-react'
import Layout from '../components/layout/Layout'

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
  container: {
    backgroundColor: colors.black,
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '120px 0'
  },
  overline: {
    color: colors.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    fontWeight: 500,
    display: 'block',
  },
  heading: {
    color: colors.white,
    fontSize: '5rem',
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
    maxWidth: '400px',
    margin: '0 auto 48px auto'
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
    border: `1px solid ${colors.white}15`,
    color: `${colors.white}80`,
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

export default function NotFound() {
  return (
    <Layout>
      <div style={styles.container}>
        {/* Subtle Architectural Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
        />

        {/* Ambient Center Glow */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div style={{ width: '40vw', height: '40vh', background: `radial-gradient(circle, ${colors.gold}10 0%, transparent 70%)`, filter: 'blur(60px)' }} />
        </div>

        <div className="w-full max-w-[800px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom }}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Minimalist Top Indicator */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px]" style={{ backgroundColor: `${colors.gold}50` }} />
              <span style={styles.overline}>Error 404</span>
              <span className="w-8 h-[1px]" style={{ backgroundColor: `${colors.gold}50` }} />
            </div>

            <h1 style={styles.heading}>
              Lost your <span style={{ color: `${colors.white}40`, fontStyle: 'italic' }}>way?</span>
            </h1>

            <p style={styles.paragraph}>
              We cannot find the page you are looking for. It may have been moved or deleted. Let's get you back to the right place.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <Link 
                to="/" 
                style={styles.btnPrimary}
                className="group hover:bg-white hover:text-black"
              >
                <Home size={14} className="mb-[2px]" /> Go Home
              </Link>
              
              <Link 
                to="/properties" 
                style={styles.btnSecondary}
                className="group hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Search size={14} className="mb-[2px]" /> See All Homes
              </Link>
              
              <Link 
                to="/contact" 
                style={styles.btnSecondary}
                className="group hover:border-white hover:text-white"
              >
                Talk to Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform mb-[2px]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}