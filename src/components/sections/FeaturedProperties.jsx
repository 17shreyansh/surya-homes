import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getFeaturedProperties } from '../../data/properties';
import { PropertyCard } from '../property/PropertyCard';

const cinematicEase = [0.25, 1, 0.5, 1];

const theme = {
  navy: '#082F67',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  charcoal: '#0A0F1A',
};

const filters = ['All', 'Apartment', 'Villa', 'Plot', 'Commercial'];

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allProperties = getFeaturedProperties();
  const filtered = activeFilter === 'All' ? allProperties : allProperties.filter(p => p.type === activeFilter);

  return (
    <section className="bg-[#FAF8F3] py-16 sm:py-20 lg:py-24 xl:py-32 relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: cinematicEase }}
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <span className="w-8 sm:w-12 h-px bg-[#082F67]" />
              <span className="text-[#082F67] text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-medium">
                Curated Portfolio
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: cinematicEase }}
              className="text-4xl sm:text-5xl lg:text-6xl text-[#082F67] leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              The <span className="italic">Collection.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 sm:gap-8">
            <Link 
              to="/properties" 
              className="group flex items-center gap-2 sm:gap-3 pb-2 border-b transition-colors duration-400"
              style={{ borderBottomColor: 'rgba(8, 47, 103, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = theme.gold}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(8, 47, 103, 0.2)'}
            >
              <span className="text-[#082F67] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold">
                Explore All Acquisitions
              </span>
              <ArrowUpRight size={14} className="text-[#D89B00] transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 border-b border-[#082F67]/15 overflow-x-auto">
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="relative pb-3 sm:pb-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] transition-colors duration-500 whitespace-nowrap"
                style={{
                  color: isActive ? theme.navy : `${theme.navy}50`,
                  fontWeight: isActive ? 600 : 400
                }}
              >
                {f}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterIndicator"
                    className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#082F67]"
                    style={{ willChange: 'transform' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
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
                className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-20 sm:py-24 lg:py-32 border border-dashed"
                style={{ borderColor: 'rgba(8, 47, 103, 0.2)' }}
              >
                <span className="text-[#082F67]/60 text-[9px] sm:text-[10px] uppercase tracking-[0.25em]">
                  No acquisitions currently available in this classification.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}