import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import Layout from '../components/layout/Layout'
import { PropertyCard } from '../components/property/PropertyCard'
import { properties } from '../data/properties'
import { LOCATIONS, PROPERTY_TYPES, BUDGET_RANGES } from '../constants'

// High-end easing curve for smooth hardware acceleration
const easeCustom = [0.16, 1, 0.3, 1]

// Precise Luxury Industrial color palette
const colors = {
  navy: '#0A0F1C',
  charcoal: '#1A1A1A',
  black: '#000000',
  gold: '#D4AF37',
  white: '#FFFFFF',
}

const styles = {
  header: {
    backgroundColor: colors.black,
    padding: '100px 0 80px 0',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: `1px solid ${colors.white}0A`,
  },
  overline: {
    color: colors.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    fontWeight: 500,
    display: 'block',
    marginBottom: '16px'
  },
  heading: {
    color: colors.white,
    fontSize: '3.5rem',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '16px'
  },
  filterBar: {
    backgroundColor: `${colors.navy}F2`, // slight transparency
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: `1px solid ${colors.white}0A`,
    position: 'sticky',
    top: '64px',
    zIndex: 30,
    padding: '24px 0',
  },
  inputGroup: {
    position: 'relative',
    borderBottom: `1px solid ${colors.white}20`,
    transition: 'border-color 0.3s ease',
  },
  input: {
    backgroundColor: 'transparent',
    color: colors.white,
    fontSize: '13px',
    width: '100%',
    padding: '12px 12px 12px 32px',
    outline: 'none',
    appearance: 'none',
    letterSpacing: '0.02em',
  },
  select: {
    backgroundColor: 'transparent',
    color: colors.white,
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '12px 0',
    outline: 'none',
    appearance: 'none',
    width: '100%',
    cursor: 'pointer',
  },
  btnClear: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: colors.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    padding: '8px 16px',
    border: `1px solid ${colors.gold}40`,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  }
}

const STATUS_OPTIONS = ['Any', 'Ready to Move', 'Under Construction', 'Available']

export default function Properties() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    budget: searchParams.get('budget') || '',
    status: '',
  })

  const setFilter = (key, value) => setFilters(f => ({ ...f, [key]: value }))

  const clearFilters = () => {
    setFilters({ location: '', type: '', budget: '', status: '' })
    setSearch('')
  }

  const activeFilterCount = Object.values(filters).filter(Boolean).length + (search ? 1 : 0)

  const filtered = useMemo(() => {
    return properties.filter(p => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) &&
          !p.location.toLowerCase().includes(search.toLowerCase())) return false
      if (filters.location && !p.location.includes(filters.location) && p.city !== filters.location) return false
      if (filters.type && p.type !== filters.type) return false
      if (filters.status && p.status !== filters.status) return false
      
      // Budget logic
      if (filters.budget) {
        const map = {
          'Under ₹30L': [0, 3000000],
          '₹30L – ₹60L': [3000000, 6000000],
          '₹60L – ₹1Cr': [6000000, 10000000],
          '₹1Cr – ₹2Cr': [10000000, 20000000],
          'Above ₹2Cr': [20000000, Infinity],
        }
        const range = map[filters.budget]
        if (range && (p.price < range[0] || p.price > range[1])) return false
      }
      return true
    })
  }, [filters, search])

  return (
    <Layout>
      {/* Editorial Header */}
      <div style={styles.header}>
        {/* Subtle Architectural Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
        />
        
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span style={styles.overline}>Our Homes</span>
            </div>
            <h1 style={styles.heading}>
              Find Your <span style={{ color: `${colors.white}50`, fontStyle: 'italic' }}>Space.</span>
            </h1>
            <p style={{ color: `${colors.white}60`, fontSize: '14px', fontWeight: 300 }}>
              {properties.length} safe, checked homes in Greater Noida and NCR.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Filter Dashboard */}
      <div style={styles.filterBar}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="w-full lg:w-1/4 group" style={styles.inputGroup}>
              <Search size={14} style={{ color: colors.gold, position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search name or place..."
                style={styles.input}
                className="focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="w-full lg:w-auto flex flex-wrap lg:flex-nowrap gap-6 items-center flex-1 lg:justify-end">
              
              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.location}
                  onChange={e => setFilter('location', e.target.value)}
                  style={styles.select}
                >
                  <option value="" style={{ color: '#888' }}>All Places</option>
                  {LOCATIONS.slice(1).map(l => <option key={l} value={l} style={{ background: colors.charcoal, color: colors.white }}>{l}</option>)}
                </select>
              </div>

              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.type}
                  onChange={e => setFilter('type', e.target.value)}
                  style={styles.select}
                >
                  <option value="" style={{ color: '#888' }}>Home Type</option>
                  {PROPERTY_TYPES.slice(1).map(t => <option key={t} value={t} style={{ background: colors.charcoal, color: colors.white }}>{t}</option>)}
                </select>
              </div>

              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.budget}
                  onChange={e => setFilter('budget', e.target.value)}
                  style={styles.select}
                >
                  <option value="" style={{ color: '#888' }}>Any Price</option>
                  {BUDGET_RANGES.slice(1).map(b => <option key={b} value={b} style={{ background: colors.charcoal, color: colors.white }}>{b}</option>)}
                </select>
              </div>

              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.status}
                  onChange={e => setFilter('status', e.target.value)}
                  style={styles.select}
                >
                  <option value="" style={{ color: '#888' }}>Any Status</option>
                  {STATUS_OPTIONS.slice(1).map(s => <option key={s} value={s} style={{ background: colors.charcoal, color: colors.white }}>{s}</option>)}
                </select>
              </div>

              {/* Action Area */}
              <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-6 mt-2 lg:mt-0">
                <div style={{ color: `${colors.white}40`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                  {filtered.length} {filtered.length === 1 ? 'Found' : 'Found'}
                </div>

                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    style={styles.btnClear}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${colors.gold}10`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <X size={12} /> Clear 
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 120FPS GPU-Accelerated Grid Area */}
      <div style={{ backgroundColor: colors.navy, padding: '80px 0', minHeight: '50vh' }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((property, i) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: easeCustom }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <PropertyCard property={property} index={i} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center text-center py-32"
                >
                  <SlidersHorizontal size={32} style={{ color: `${colors.white}20`, marginBottom: '24px' }} strokeWidth={1} />
                  <h3 style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300, marginBottom: '12px' }}>
                    No homes found.
                  </h3>
                  <p style={{ color: `${colors.white}40`, fontSize: '14px', fontWeight: 300, marginBottom: '24px' }}>
                    Try changing your search or clearing the filters.
                  </p>
                  <button 
                    onClick={clearFilters}
                    style={{ ...styles.btnClear, fontSize: '11px', padding: '12px 24px' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.gold; e.currentTarget.style.color = colors.black; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.gold; }}
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </Layout>
  )
}