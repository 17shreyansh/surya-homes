import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PropertyCard from '../property/PropertyCard'
import { getFeaturedProperties } from '../../data/properties'

const filters = ['All', 'Apartment', 'Villa', 'Plot', 'Commercial']

const colors = {
  navy: '#08111F',
  gold: '#D4AF37',
  white: '#F8F6F2',
}

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('All')
  const allProperties = getFeaturedProperties()
  const filtered = activeFilter === 'All' ? allProperties : allProperties.filter(p => p.type === activeFilter)

  return (
    <section 
      style={{ 
        backgroundColor: colors.navy, 
        padding: '160px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 border-b border-white/8 pb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-[#D4AF37]" />
              <span style={{ color: colors.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.35em', fontWeight: 500 }}>
                Curated Portfolio
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: colors.white, fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-0.02em', willChange: 'transform, opacity', lineHeight: 1.15 }}
            >
              Exclusive <span style={{ color: `${colors.white}40`, fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>Residences</span>
            </motion.h2>
          </div>

          <Link 
            to="/properties" 
            className="group flex items-center gap-3 self-end"
            style={{ 
              borderBottom: `1px solid ${colors.gold}60`, 
              paddingBottom: '10px',
              color: colors.gold,
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontWeight: 500
            }}
          >
            <span>View Complete Collection</span>
            <ArrowRight 
              size={14} 
              style={{ willChange: 'transform', transition: 'transform 0.4s ease' }} 
              className="group-hover:translate-x-2" 
            />
          </Link>
        </div>

        <div className="flex flex-wrap gap-10 mb-16">
          {filters.map((f) => {
            const isActive = activeFilter === f
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  position: 'relative',
                  padding: '10px 0',
                  color: isActive ? colors.gold : `${colors.white}60`,
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  transition: 'color 0.5s ease'
                }}
                className="hover:text-white"
              >
                {f}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterIndicator"
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-32"
              >
                <span style={{ color: `${colors.white}40`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em' }}>
                  No properties available in this category.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}