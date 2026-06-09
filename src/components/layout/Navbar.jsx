import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, CONTACT, SITE_NAME } from '../../constants';
import { useScrollPosition, useBodyLock } from '../../hooks';
import logoImage from '../../assets/Logo_1.png';

// Strict Luxury Palette
const theme = {
  navy: '#082F67',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  text: '#0B2340',
  beige: '#F5F1E8'
};

// Premium Easing
const luxEase = [0.19, 1.0, 0.22, 1.0];

const MagneticButton = ({ children, onClick, scrolled }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // Subtle magnetic pull
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className="relative overflow-hidden group flex items-center justify-center cursor-pointer"
    >
      <div 
        className="absolute inset-0 border border-solid transition-colors duration-500 ease-out z-0"
        style={{ 
          borderColor: theme.navy,
          opacity: 0.4 
        }} 
      />
      
      {/* Hover Fill */}
      <div 
        className="absolute inset-0 origin-bottom transform scale-y-0 transition-transform duration-700 z-0 group-hover:scale-y-100"
        style={{ 
          backgroundColor: theme.gold, 
          willChange: 'transform',
          transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      />
      
      <span 
        className="relative z-10 px-8 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: theme.navy, fontFamily: '"Inter", sans-serif' }}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default function Navbar() {
  const { scrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  useBodyLock(mobileOpen);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;
  const textColor = isTransparent ? theme.ivory : theme.text;

  return (
    <>
      <header
        style={{ 
          backgroundColor: isTransparent ? 'transparent' : theme.ivory,
          borderBottom: isTransparent ? '1px solid transparent' : `1px solid ${theme.navy}15`,
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between h-28 sm:h-32 lg:h-28">
          
          <Link to="/" className="relative z-50 flex items-center h-full">
            <img 
              src={logoImage} 
              alt={SITE_NAME} 
              className="h-full w-auto object-contain origin-left"
              style={{ 
                filter: isTransparent ? 'brightness(0) invert(1) drop-shadow(0 4px 12px rgba(0,0,0,0.2))' : 'none',
                maxHeight: '100%'
              }}
            />
          </Link>

          {/* Editorial Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-14">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative py-2 overflow-hidden"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.24em',
                    color: textColor,
                    opacity: active ? 1 : 0.7,
                  }}
                >
                  <motion.span 
                    className="block relative z-10 transition-transform duration-500 group-hover:-translate-y-full"
                    style={{ willChange: 'transform' }}
                  >
                    {link.label}
                  </motion.span>
                  <motion.span 
                    className="absolute inset-0 z-10 transition-transform duration-500 translate-y-full group-hover:translate-y-0 flex items-center"
                    style={{ color: theme.gold, willChange: 'transform' }}
                  >
                    {link.label}
                  </motion.span>
                  
                  {active && (
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ backgroundColor: theme.gold }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-12">
            <a
              href={`tel:${CONTACT.phone}`}
              style={{
                fontFamily: '"Playfair Display", serif',
                color: textColor,
                fontSize: '14px',
                letterSpacing: '0.05em',
                fontStyle: 'italic'
              }}
              className="hover:text-[#D89B00]"
            >
              {CONTACT.phone}
            </a>
            
            <MagneticButton scrolled={scrolled} onClick={() => window.location.href='/contact'}>
              Private Advisory
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 relative p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <motion.div animate={{ rotate: mobileOpen ? 180 : 0 }} transition={{ duration: 0.8, ease: luxEase }}>
              {mobileOpen ? 
                <X size={32} strokeWidth={1} color={theme.navy} /> : 
                <Menu size={32} strokeWidth={1} color={textColor} />
              }
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile Architectural Reveal */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 1.2, ease: luxEase }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              backgroundColor: theme.ivory, // Solid, warm, readable
              display: 'flex', flexDirection: 'column',
              willChange: 'clip-path'
            }}
          >
            <div className="flex-1 px-8 pt-40 pb-16 flex flex-col justify-between h-full">
              
              <nav className="flex flex-col gap-8">
                {NAV_LINKS.map((link, i) => {
                  const active = location.pathname === link.path;
                  return (
                    <div key={link.path} className="overflow-hidden">
                      <motion.div
                        initial={{ y: '120%', rotate: 2 }}
                        animate={{ y: 0, rotate: 0 }}
                        exit={{ y: '120%', opacity: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1), duration: 1, ease: luxEase }}
                        style={{ willChange: 'transform' }}
                      >
                        <Link
                          to={link.path}
                          style={{
                            fontFamily: '"Playfair Display", serif',
                            display: 'block',
                            fontSize: '3.5rem',
                            lineHeight: '1.1',
                            color: active ? theme.gold : theme.navy,
                          }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: luxEase }}
              >
                <div style={{ height: '1px', backgroundColor: `${theme.navy}20`, width: '100%', marginBottom: '32px' }} />
                <a
                  href={`tel:${CONTACT.phone}`}
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    display: 'block',
                    color: theme.navy,
                    fontSize: '1.5rem',
                    marginBottom: '16px'
                  }}
                >
                  {CONTACT.phone}
                </a>
                <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: `${theme.navy}70` }}>
                  Schedule a private viewing
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}