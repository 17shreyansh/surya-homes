import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS, CONTACT, SITE_NAME } from '../../constants'
import { useScrollPosition, useBodyLock } from '../../hooks'
import logoImage from '../../assets/Logo_1.png'

// High-end easing curve for Apple/Stripe-tier fluidity
const easeCustom = [0.16, 1, 0.3, 1]

// Precise visual control objects
const colors = {
  navy: '#0A0F1C',
  black: '#000000',
  charcoal: '#1A1A1A',
  gold: '#D4AF37',
  cyan: '#00E5FF',
  white: '#FFFFFF',
}

const styles = {
  header: (scrolled) => ({
    backgroundColor: scrolled ? 'rgba(10, 15, 28, 0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(24px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
    borderBottom: scrolled ? `1px solid ${colors.gold}20` : '1px solid transparent',
    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  navLink: {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    fontWeight: 500,
    position: 'relative',
    padding: '8px 0',
  },
  btnPrimary: {
    border: `1px solid ${colors.gold}`,
    color: colors.gold,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '10px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.4s ease',
  }
}

const Logo = () => (
  <Link to="/" style={{ display: 'block' }}>
    <img 
      src={logoImage} 
      alt={SITE_NAME} 
      className="w-12 h-12 sm:w-14 sm:h-14"
      style={{ 
        objectFit: 'contain',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    />
  </Link>
)

export default function Navbar() {
  const { scrolled } = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useBodyLock(mobileOpen)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeCustom }}
        style={{ 
          ...styles.header(scrolled),
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          willChange: 'transform, opacity, background-color'
        }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between h-20 sm:h-24">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group"
                  style={{
                    ...styles.navLink,
                    color: active ? colors.gold : `${colors.white}80`,
                  }}
                  onMouseEnter={(e) => !active && (e.currentTarget.style.color = colors.white)}
                  onMouseLeave={(e) => !active && (e.currentTarget.style.color = `${colors.white}80`)}
                >
                  {link.label}
                  
                  {/* Stripe-level animated active indicator */}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: '1px',
                        backgroundColor: colors.gold,
                        willChange: 'transform'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hardware-accelerated hover underline (no width thrashing) */}
                  {!active && (
                    <span 
                      className="absolute -bottom-1 left-0 right-0 h-[1px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                      style={{ backgroundColor: `${colors.white}40`, willChange: 'transform' }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <a
              href={`tel:${CONTACT.phone}`}
              style={{
                ...styles.navLink,
                color: `${colors.white}60`,
                letterSpacing: '0.1em'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.gold}
              onMouseLeave={(e) => e.currentTarget.style.color = `${colors.white}60`}
            >
              {CONTACT.phone}
            </a>
            
            <Link
              to="/contact"
              className="group hover:bg-[#D4AF37] hover:text-black"
              style={styles.btnPrimary}
            >
              <span>Enquire</span>
              <ArrowRight 
                size={14} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
                style={{ willChange: 'transform' }}
              />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 transition-colors duration-300"
            style={{ color: mobileOpen ? colors.gold : colors.white }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: easeCustom }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              backgroundColor: colors.navy,
              display: 'flex',
              flexDirection: 'column',
              willChange: 'transform, opacity'
            }}
          >
            <div className="flex-1 px-6 sm:px-8 pt-28 sm:pt-32 pb-8 sm:pb-12 flex flex-col justify-between overflow-y-auto">
              <nav className="flex flex-col gap-4 sm:gap-6">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.path)
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05), duration: 0.5, ease: easeCustom }}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <Link
                        to={link.path}
                        className="text-3xl sm:text-4xl md:text-5xl"
                        style={{
                          display: 'block',
                          fontWeight: 300,
                          letterSpacing: '-0.02em',
                          color: active ? colors.gold : colors.white,
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <div style={{ height: '1px', backgroundColor: `${colors.gold}20`, width: '100%' }} />
                
                <Link
                  to="/contact"
                  className="text-center py-3"
                  style={{
                    ...styles.btnPrimary,
                    justifyContent: 'center',
                    backgroundColor: colors.gold,
                    color: colors.black,
                  }}
                >
                  Start a Conversation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}