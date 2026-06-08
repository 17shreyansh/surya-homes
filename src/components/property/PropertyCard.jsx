import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight } from 'lucide-react'

const colors = {
  charcoal: '#1A1A1A',
  gold: '#D4AF37',
  white: '#FFFFFF',
  obsidian: '#050505'
}

// High-end easing curve
const easeCustom = [0.16, 1, 0.3, 1]

export default function PropertyCard({ property, index = 0 }) {
  const { slug, title, type, status, priceDisplay, location, bedrooms, bathrooms, area, images, badge } = property

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: easeCustom }}
      style={{ willChange: 'transform, opacity' }}
      className="group"
    >
      <Link to={`/properties/${slug}`} className="block w-full h-full">
        <div 
          style={{ 
            backgroundColor: colors.charcoal,
            border: `1px solid ${colors.white}0A`,
            transition: 'border-color 0.5s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
          className="group-hover:border-[#D4AF37]/40"
        >
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-[4/3] bg-[#000]">
            <img
              src={images[0]}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.85,
                willChange: 'transform',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="group-hover:scale-110 group-hover:opacity-100"
              loading="lazy"
            />
            {/* Architectural gradient mask */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ background: 'linear-gradient(to top, #1A1A1A 0%, transparent 40%)' }} 
            />

            {/* Precision Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {badge && (
                <span style={{ 
                  backgroundColor: colors.gold, 
                  color: '#000', 
                  fontSize: '9px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em', 
                  padding: '4px 10px',
                  fontWeight: 600 
                }}>
                  {badge}
                </span>
              )}
            </div>

            <div className="absolute top-4 right-4">
              <span style={{ 
                backgroundColor: `${colors.obsidian}80`, 
                backdropFilter: 'blur(8px)',
                color: colors.white, 
                fontSize: '9px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em', 
                padding: '4px 10px',
                border: `1px solid ${colors.white}20`
              }}>
                {status}
              </span>
            </div>
          </div>

          {/* Data Payload */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Meta */}
            <div className="flex items-center justify-between mb-4">
              <span style={{ color: `${colors.gold}90`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                {type}
              </span>
              <div 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  border: `1px solid ${colors.white}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s ease'
                }}
                className="group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10"
              >
                <ArrowRight 
                  size={14} 
                  style={{ color: `${colors.white}50`, willChange: 'transform', transition: 'all 0.4s ease' }} 
                  className="group-hover:text-[#D4AF37] group-hover:translate-x-1"
                />
              </div>
            </div>

            {/* Core Info */}
            <h3 style={{ color: colors.white, fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.3, marginBottom: '8px' }}>
              {title}
            </h3>
            
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={12} style={{ color: colors.gold, flexShrink: 0 }} />
              <span style={{ color: `${colors.white}60`, fontSize: '12px', fontWeight: 300, letterSpacing: '0.02em' }}>
                {location}
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: `${colors.white}0A`, margin: 'auto 0 20px 0', width: '100%' }} />

            {/* Specs Grid */}
            <div className="flex items-center justify-between">
              <div>
                <div style={{ color: colors.white, fontSize: '1.25rem', fontWeight: 300, letterSpacing: '-0.02em' }}>
                  {priceDisplay}
                </div>
                {property.pricePerSqFt && (
                  <div style={{ color: `${colors.white}40`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>
                    ₹{property.pricePerSqFt.toLocaleString('en-IN')} / SQFT
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                {bedrooms && (
                  <div className="flex items-center gap-2" title="Bedrooms">
                    <BedDouble size={14} style={{ color: `${colors.gold}80` }} />
                    <span style={{ color: `${colors.white}80`, fontSize: '11px' }}>{bedrooms}</span>
                  </div>
                )}
                {bathrooms && (
                  <div className="flex items-center gap-2" title="Bathrooms">
                    <Bath size={14} style={{ color: `${colors.gold}80` }} />
                    <span style={{ color: `${colors.white}80`, fontSize: '11px' }}>{bathrooms}</span>
                  </div>
                )}
                {area && (
                  <div className="flex items-center gap-2" title="Area">
                    <Maximize2 size={14} style={{ color: `${colors.gold}80` }} />
                    <span style={{ color: `${colors.white}80`, fontSize: '11px' }}>{area.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}