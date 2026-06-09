import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../../constants';

// High-end cinematic easing curve
const cinematicEase = [0.25, 1, 0.5, 1];

// Strict Surya Homes Palette
const theme = {
  navy: '#082F67',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
  text: '#0B2340',
};

// Elevated Copywriting
const pillars = [
  {
    id: '01',
    title: 'Uncompromising Curation',
    description: 'Every estate undergoes exhaustive vetting. We accept only properties that meet our absolute standards for architectural pedigree and location.',
  },
  {
    id: '02',
    title: 'Private Advisory',
    description: 'You are assigned a dedicated director. We provide absolute discretion and tailored counsel throughout your entire acquisition journey.',
  },
  {
    id: '03',
    title: 'Ironclad Provenance',
    description: 'Our legal architecture is flawless. We conduct deep-tier due diligence to guarantee clear titles and absolute peace of mind.',
  },
  {
    id: '04',
    title: 'Yield & Legacy',
    description: 'We do not just sell homes; we secure assets. Our portfolio is optimized for generational wealth preservation and capital appreciation.',
  },
];

// ==========================================
// 1. THE SURYA STANDARD (Why Choose Us)
// ==========================================

export function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-40" 
      style={{ backgroundColor: theme.navy }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Left Column: The Anchor */}
          <div className="lg:w-5/12 flex flex-col items-start">
            <div className="lg:sticky lg:top-40 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, ease: cinematicEase }}
                className="flex items-center gap-4 mb-6 sm:mb-8"
              >
                <div style={{ width: '40px', height: '1px', backgroundColor: theme.gold }} />
                <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600 }}>
                  The Surya Standard
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] mb-6 sm:mb-8"
                style={{ fontFamily: '"Playfair Display", serif', color: theme.ivory, lineHeight: 1.1 }}
              >
                Built on <br />
                <span style={{ fontStyle: 'italic', color: theme.gold }}>Absolute</span> Trust.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
                className="text-sm sm:text-base max-w-md"
                style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}80`, lineHeight: 1.6 }}
              >
                For over a decade, we have facilitated the acquisition of the region's most significant properties. Our reputation is built on a foundation of unyielding integrity and precision.
              </motion.p>
            </div>
          </div>

          {/* Scrolling Right Column: The Editorial Ledger */}
          <div className="lg:w-7/12 flex flex-col pt-8 lg:pt-0">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.15, ease: cinematicEase }}
                className="group flex flex-col sm:flex-row items-start sm:items-baseline gap-6 sm:gap-12 py-10 sm:py-16 border-t cursor-default"
                style={{ borderColor: 'rgba(250, 248, 243, 0.15)', willChange: 'transform, opacity' }}
              >
                {/* Monumental Number */}
                <div 
                  className="text-4xl sm:text-5xl lg:text-6xl transition-colors duration-500 shrink-0"
                  style={{ fontFamily: '"Playfair Display", serif', color: 'rgba(216, 155, 0, 0.4)' }}
                >
                  <span className="group-hover:text-[#D89B00] transition-colors duration-700">
                    {pillar.id}
                  </span>
                </div>

                {/* Pillar Content */}
                <div className="flex flex-col transform transition-transform duration-500 group-hover:translate-x-2">
                  <h3 
                    className="text-2xl sm:text-3xl lg:text-4xl mb-4"
                    style={{ fontFamily: '"Playfair Display", serif', color: theme.ivory }}
                  >
                    {pillar.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-base max-w-lg"
                    style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}70`, lineHeight: 1.7 }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. THE LEGACY (Stats Matrix)
// ==========================================

export function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Fallback data if STATS is undefined/empty
  const displayStats = STATS?.length ? STATS : [
    { value: '₹5K+', label: 'Crore Managed' },
    { value: '15', label: 'Years of Legacy' },
    { value: '100%', label: 'Discretion' },
    { value: '250+', label: 'Estates Curated' }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-40 relative"
      style={{ backgroundColor: theme.ivory }}
    >
      {/* Absolute Minimalist Architecture */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: cinematicEase }}
          className="flex justify-center mb-16 sm:mb-24"
        >
          <span style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.4em', fontWeight: 600 }}>
            By The Numbers
          </span>
        </motion.div>

        {/* The Typographic Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {displayStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, delay: i * 0.15, ease: cinematicEase }}
              className="flex flex-col items-center text-center group cursor-default relative"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Subtle hover scaling on the number */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: cinematicEase }}
                className="text-[4rem] sm:text-[5rem] lg:text-[6rem] leading-none mb-4 sm:mb-6 transition-colors duration-500"
                style={{ 
                  fontFamily: '"Playfair Display", serif', 
                  color: theme.navy,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </motion.div>
              
              <div 
                className="text-[9px] sm:text-[11px]"
                style={{ 
                  fontFamily: '"Inter", sans-serif', 
                  color: `${theme.navy}80`, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.3em',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}