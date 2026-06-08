import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PropertyCard from '../property/PropertyCard'
import { getFeaturedProperties } from '../../data/properties'

const filters = ['All', 'Apartment', 'Villa', 'Plot', 'Commercial']

const colors = {
  navy: '#0A0F1C',
  gold: '#D4AF37',
  white: '#FFFFFF',
}

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('All')
  const allProperties = getFeaturedProperties()
  const filtered = activeFilter === 'All' ? allProperties : allProperties.filter(p => p.type === activeFilter)

  return (
    <section 
      style={{ 
        backgroundColor: colors.navy, 
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Precision grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span style={{ color: colors.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em' }}>
                Curated Portfolio
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: colors.white, fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.02em', willChange: 'transform, opacity' }}
            >
              Exclusive <span style={{ color: `${colors.white}50`, fontStyle: 'italic' }}>Listings.</span>
            </motion.h2>
          </div>

          <Link 
            to="/properties" 
            className="group flex items-center gap-3"
            style={{ 
              borderBottom: `1px solid ${colors.gold}50`, 
              paddingBottom: '8px',
              color: colors.gold,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}
          >
            <span>Explore Complete Archive</span>
            <ArrowRight 
              size={14} 
              style={{ willChange: 'transform', transition: 'transform 0.4s ease' }} 
              className="group-hover:translate-x-2" 
            />
          </Link>
        </div>

        {/* Stripe-Level Animated Filter Tabs */}
        <div className="flex flex-wrap gap-8 mb-12">
          {filters.map((f) => {
            const isActive = activeFilter === f
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  position: 'relative',
                  padding: '8px 0',
                  color: isActive ? colors.gold : `${colors.white}60`,
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'color 0.4s ease'
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

        {/* 120FPS GPU-Accelerated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-24"
              >
                <span style={{ color: `${colors.white}40`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                  No assets currently available in this classification.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}