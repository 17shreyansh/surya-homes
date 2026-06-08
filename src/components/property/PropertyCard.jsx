import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight } from 'lucide-react'

const colors = {
  charcoal: '#101826',
  gold: '#D4AF37',
  white: '#F8F6F2',
  obsidian: '#08111F'
}

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
      className="group h-full"
    >
      <Link to={`/properties/${slug}`} className="block w-full h-full">
        <div 
          style={{ 
            backgroundColor: colors.charcoal,
            border: `1px solid ${colors.white}0D`,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
          className="group-hover:border-[#D4AF37]/50 group-hover:shadow-2xl"
        >
          <div className="relative overflow-hidden aspect-[5/4] bg-[#000]">
            <img
              src={images[0]}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.88,
                willChange: 'transform',
                transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="group-hover:scale-110 group-hover:opacity-100"
              loading="lazy"
            />
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ background: 'linear-gradient(to top, #101826 0%, transparent 50%)' }} 
            />

            <div className="absolute top-5 left-5 flex flex-col gap-2">
              {badge && (
                <span style={{ 
                  backgroundColor: colors.gold, 
                  color: colors.obsidian, 
                  fontSize: '9px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.18em', 
                  padding: '6px 12px',
                  fontWeight: 600 
                }}>
                  {badge}
                </span>
              )}
            </div>

            <div className="absolute top-5 right-5">
              <span style={{ 
                backgroundColor: `${colors.obsidian}90`, 
                backdropFilter: 'blur(10px)',
                color: colors.white, 
                fontSize: '9px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.18em', 
                padding: '6px 12px',
                border: `1px solid ${colors.white}25`
              }}>
                {status}
              </span>
            </div>
          </div>

          <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-5">
              <span style={{ color: `${colors.gold}95`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 500 }}>
                {type}
              </span>
              <div 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  border: `1px solid ${colors.white}12`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.5s ease'
                }}
                className="group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/12"
              >
                <ArrowRight 
                  size={14} 
                  style={{ color: `${colors.white}55`, willChange: 'transform', transition: 'all 0.5s ease' }} 
                  className="group-hover:text-[#D4AF37] group-hover:translate-x-1"
                />
              </div>
            </div>

            <h3 style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300, lineHeight: 1.3, marginBottom: '12px', letterSpacing: '-0.01em' }}>
              {title}
            </h3>
            
            <div className="flex items-center gap-2 mb-8">
              <MapPin size={13} style={{ color: colors.gold, flexShrink: 0 }} />
              <span style={{ color: `${colors.white}65`, fontSize: '13px', fontWeight: 300, letterSpacing: '0.01em' }}>
                {location}
              </span>
            </div>

            <div style={{ height: '1px', backgroundColor: `${colors.white}0D`, margin: 'auto 0 24px 0', width: '100%' }} />

            <div className="flex items-end justify-between">
              <div>
                <div style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-0.02em' }}>
                  {priceDisplay}
                </div>
                {property.pricePerSqFt && (
                  <div style={{ color: `${colors.white}40`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '6px' }}>
                    ₹{property.pricePerSqFt.toLocaleString('en-IN')} / SQFT
                  </div>
                )}
              </div>

              <div className="flex items-center gap-5">
                {bedrooms && (
                  <div className="flex items-center gap-2" title="Bedrooms">
                    <BedDouble size={15} style={{ color: `${colors.gold}85` }} />
                    <span style={{ color: `${colors.white}85`, fontSize: '12px' }}>{bedrooms}</span>
                  </div>
                )}
                {bathrooms && (
                  <div className="flex items-center gap-2" title="Bathrooms">
                    <Bath size={15} style={{ color: `${colors.gold}85` }} />
                    <span style={{ color: `${colors.white}85`, fontSize: '12px' }}>{bathrooms}</span>
                  </div>
                )}
                {area && (
                  <div className="flex items-center gap-2" title="Area">
                    <Maximize2 size={15} style={{ color: `${colors.gold}85` }} />
                    <span style={{ color: `${colors.white}85`, fontSize: '12px' }}>{area.toLocaleString()}</span>
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