import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LOCATIONS, PROPERTY_TYPES, BUDGET_RANGES, STATS } from '../../constants';

// The imported asset
import heroBg from '../../assets/hero.png';

const cinematicEase = [0.25, 1, 0.5, 1];

const theme = {
  navy: '#082F67',
  charcoal: '#101826',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  text: '#0B2340',
};

const exactStyles = {
  select: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: theme.ivory,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${theme.ivory}30`,
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    borderRadius: 0,
    transition: 'border-color 0.4s ease'
  },
  label: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '9px',
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    color: theme.gold,
    marginBottom: '8px',
    display: 'block'
  }
};

function ConciergeBar() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const params = new URLSearchParams();
    
    for (const [key, value] of form.entries()) {
      if (value && !value.includes('All') && !value.includes('Any')) {
        params.set(key, value);
      }
    }
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8, ease: cinematicEase }}
      className="absolute bottom-0 left-0 right-0 z-30 flex flex-col lg:flex-row"
      style={{
        backgroundColor: theme.charcoal,
        boxShadow: '0 -20px 40px rgba(0,0,0,0.2)',
        willChange: 'transform, opacity'
      }}
    >
      <div 
        className="py-4 px-6 lg:py-0 lg:px-16 flex items-center justify-center"
        style={{ 
          backgroundColor: theme.gold, 
          color: theme.charcoal,
        }}
      >
        <span style={{ 
          fontFamily: '"Playfair Display", serif', 
          fontStyle: 'italic', 
          fontSize: '1.25rem',
          fontWeight: 500,
          whiteSpace: 'nowrap'
        }}>
          Begin Discovery
        </span>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col lg:flex-row flex-1 w-full">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 p-6 lg:p-8 lg:px-12">
          
          <div style={{ position: 'relative' }} className="group">
            <label style={exactStyles.label}>Location</label>
            <select 
              name="location" 
              style={exactStyles.select}
              onFocus={(e) => e.target.style.borderColor = theme.gold}
              onBlur={(e) => e.target.style.borderColor = `${theme.ivory}30`}
            >
              <option value="" style={{ color: theme.charcoal }}>Select Region</option>
              {LOCATIONS.map(loc => <option key={loc} value={loc} style={{ color: theme.charcoal }}>{loc}</option>)}
            </select>
          </div>

          <div style={{ position: 'relative' }} className="group">
            <label style={exactStyles.label}>Estate Type</label>
            <select 
              name="type" 
              style={exactStyles.select}
              onFocus={(e) => e.target.style.borderColor = theme.gold}
              onBlur={(e) => e.target.style.borderColor = `${theme.ivory}30`}
            >
              <option value="" style={{ color: theme.charcoal }}>Select Classification</option>
              {PROPERTY_TYPES.map(type => <option key={type} value={type} style={{ color: theme.charcoal }}>{type}</option>)}
            </select>
          </div>

          <div style={{ position: 'relative' }} className="group">
            <label style={exactStyles.label}>Investment</label>
            <select 
              name="budget" 
              style={exactStyles.select}
              onFocus={(e) => e.target.style.borderColor = theme.gold}
              onBlur={(e) => e.target.style.borderColor = `${theme.ivory}30`}
            >
              <option value="" style={{ color: theme.charcoal }}>Select Range</option>
              {BUDGET_RANGES.map(range => <option key={range} value={range} style={{ color: theme.charcoal }}>{range}</option>)}
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="group h-16 lg:h-auto lg:w-40 border-t lg:border-t-0 lg:border-l border-white/10 relative overflow-hidden flex items-center justify-center cursor-pointer"
          style={{ 
            backgroundColor: 'transparent',
          }}
        >
          <div 
            style={{ 
              position: 'absolute', inset: 0, backgroundColor: theme.gold, 
              transformOrigin: 'bottom', transform: 'scaleY(0)', 
              transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform', zIndex: 0 
            }}
            className="group-hover:scale-y-100"
          />
          <ArrowRight 
            size={24} 
            style={{ position: 'relative', zIndex: 10, color: theme.ivory, transition: 'color 0.5s ease' }}
            className="group-hover:text-[#101826]"
          />
        </button>
      </form>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start start', 'end start'] 
  });
  
  // Hardware accelerated parallax 
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const textRevealVariants = {
    hidden: { y: '120%' },
    visible: (custom) => ({
      y: 0,
      transition: { duration: 1.4, delay: custom * 0.15, ease: cinematicEase }
    })
  };

  return (
    <section 
      ref={ref} 
      className="relative w-full overflow-hidden min-h-[1200px] lg:min-h-screen"
      style={{ 
        backgroundColor: theme.charcoal,
        paddingTop: 'max(6rem, 96px)'
      }}
    >
      {/* Full-Bleed Cinematic Image */}
      <motion.div 
        className="absolute inset-0 lg:-inset-5"
        style={{ y, willChange: 'transform', zIndex: 0 }} 
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: cinematicEase }}
          src={heroBg}
          alt="Surya Homes Signature Architecture"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Subtle gradient to ensure the Concierge Bar pops without muddying the image */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(16, 24, 38, 0.4) 0%, transparent 25%)',
          pointerEvents: 'none'
        }} />
      </motion.div>

      {/* Foreground Editorial Content - Utilizing left negative space */}
      <div className="relative z-10 w-full lg:w-1/2 min-h-[calc(100vh-96px)] flex flex-col justify-center px-6 pb-48 sm:pb-56 md:pb-64 lg:pl-32 lg:pb-40">
        
       

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-tight lg:leading-[1.05] m-0 mb-4 sm:mb-6 lg:mb-8" style={{ 
          fontFamily: '"Playfair Display", serif', 
          color: theme.navy
        }}>
          <div style={{ overflow: 'hidden', paddingBottom: '0.5rem' }}>
            <motion.div custom={1} variants={textRevealVariants} initial="hidden" animate="visible" style={{ willChange: 'transform' }}>
              A Legacy
            </motion.div>
          </div>
          <div style={{ overflow: 'hidden', paddingBottom: '0.5rem' }}>
            <motion.div custom={2} variants={textRevealVariants} initial="hidden" animate="visible" style={{ willChange: 'transform' }}>
              Carved in <span style={{ color: theme.navy, fontStyle: 'italic', fontWeight: 300 }}>Light.</span>
            </motion.div>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: cinematicEase }}
          className="text-sm sm:text-base max-w-sm lg:max-w-md mb-6 sm:mb-8 lg:mb-12"
          style={{ 
            fontFamily: '"Inter", sans-serif', 
            color: theme.navy,
            lineHeight: 1.6,
            opacity: 0.85
          }}
        >
          Discover architectural sanctuaries designed for those who demand uncompromising excellence. 
          Your narrative begins here.
        </motion.p>

        {/* Minimalist Stats Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex gap-8 lg:gap-16"
        >
          {STATS.slice(0, 2).map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 sm:gap-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: '"Playfair Display", serif', color: theme.navy }}>
                {stat.value}
              </span>
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '8px', sm: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: theme.navy, opacity: 0.7 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <ConciergeBar />
    </section>
  );
}