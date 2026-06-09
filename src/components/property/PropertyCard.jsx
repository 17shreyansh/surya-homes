import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { forwardRef } from 'react'

const colors = {
  charcoal: '#101826',
  gold: '#D4AF37',
  white: '#F8F6F2',
  ivory: '#F8F6F2',
  obsidian: '#08111F'
}

const easeCustom = [0.16, 1, 0.3, 1]

export const PropertyCard = forwardRef(function PropertyCard({ property, index = 0 }, ref) {
  const { slug, title, type, priceDisplay, location, bedrooms, bathrooms, area, images, badge } = property;

  const specs = [
    bedrooms && `${bedrooms} BEDS`,
    bathrooms && `${bathrooms} BATHS`,
    area && `${area.toLocaleString()} SQ FT`
  ].filter(Boolean).join('  •  ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: easeCustom }}
      style={{ willChange: 'transform, opacity' }}
      className="group relative cursor-pointer"
    >
      <Link to={`/properties/${slug}`} style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}>
        
        {/* Container: 3:4 Aspect Ratio */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: colors.charcoal }}>
          
          {/* Image */}
          <img
            src={images[0]}
            alt={title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              willChange: 'transform',
              transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
            className="group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Fixed Base Gradient for Legibility */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10, 15, 26, 0.85) 0%, rgba(10, 15, 26, 0.3) 40%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Interactive Top Section */}
          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 10 }}>
            {badge ? (
              <span style={{ 
                backgroundColor: colors.gold, 
                color: colors.charcoal, 
                fontFamily: '"Inter", sans-serif',
                fontSize: '9px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                padding: '6px 12px',
                fontWeight: 600
              }}>
                {badge}
              </span>
            ) : <div />}

            <div 
              style={{ 
                width: '36px', height: '36px', borderRadius: '50%', 
                backgroundColor: 'rgba(250, 248, 243, 0.1)', border: '1px solid rgba(250, 248, 243, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.5s ease', backdropFilter: 'blur(4px)'
              }}
              className="group-hover:bg-[#D89B00] group-hover:border-[#D89B00]"
            >
              <ArrowUpRight size={16} style={{ color: colors.ivory, transition: 'color 0.5s ease' }} className="group-hover:text-[#0A0F1A]" />
            </div>
          </div>

          {/* Fixed Bottom Content */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.5rem 2rem 1.5rem', zIndex: 10, display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontFamily: '"Inter", sans-serif', color: colors.gold, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 500 }}>
                {type}
              </span>
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: colors.gold }} />
              <span style={{ fontFamily: '"Inter", sans-serif', color: colors.ivory, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.8 }}>
                {location}
              </span>
            </div>

            <h3 style={{ 
              fontFamily: '"Playfair Display", serif', 
              color: colors.ivory, 
              fontSize: '1.75rem',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              {title}
            </h3>

            <div style={{ height: '1px', backgroundColor: 'rgba(250, 248, 243, 0.15)', width: '100%', marginBottom: '16px' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: '"Playfair Display", serif', color: colors.ivory, fontSize: '1.25rem', lineHeight: 1 }}>
                  {priceDisplay}
                </span>
                {property.pricePerSqFt && (
                  <span style={{ fontFamily: '"Inter", sans-serif', color: colors.gold, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '4px' }}>
                    ₹{property.pricePerSqFt.toLocaleString('en-IN')} / SQFT
                  </span>
                )}
              </div>

              {specs && (
                <span style={{ 
                  fontFamily: '"Inter", sans-serif', 
                  color: colors.ivory, 
                  fontSize: '9px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em',
                  opacity: 0.9,
                  textAlign: 'right'
                }}>
                  {specs}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});