import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import Layout from '../components/layout/Layout'
import { PropertyCard } from '../components/property/PropertyCard'
import { properties } from '../data/properties'
import { LOCATIONS, PROPERTY_TYPES, BUDGET_RANGES } from '../constants'

// High-end easing curve for smooth hardware acceleration
const cinematicEase = [0.25, 1, 0.5, 1]

const theme = {
  navy: '#082F67',
  charcoal: '#101826',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
}

const styles = {
  header: {
    backgroundColor: theme.ivory,
    padding: '140px 0 80px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  overline: {
    fontFamily: '"Inter", sans-serif',
    color: theme.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    fontWeight: 600,
    display: 'block',
    marginBottom: '16px'
  },
  heading: {
    fontFamily: '"Playfair Display", serif',
    color: theme.navy,
    fontSize: '4.5rem',
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: '16px'
  },
  filterBar: {
    backgroundColor: theme.beige,
    borderBottom: `1px solid ${theme.navy}10`,
    position: 'sticky',
    top: '80px',
    zIndex: 30,
    padding: '24px 0',
  },
  inputGroup: {
    position: 'relative',
    borderBottom: `1px solid ${theme.navy}20`,
    transition: 'border-color 0.4s ease',
  },
  input: {
    fontFamily: '"Inter", sans-serif',
    backgroundColor: 'transparent',
    color: theme.navy,
    fontSize: '12px',
    width: '100%',
    padding: '12px 12px 12px 32px',
    outline: 'none',
    appearance: 'none',
    letterSpacing: '0.02em',
  },
  select: {
    fontFamily: '"Inter", sans-serif',
    backgroundColor: 'transparent',
    color: theme.navy,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    padding: '12px 0',
    outline: 'none',
    appearance: 'none',
    width: '100%',
    cursor: 'pointer',
  },
  btnClear: {
    fontFamily: '"Inter", sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: theme.navy,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '8px 16px',
    border: `1px solid ${theme.navy}30`,
    transition: 'all 0.4s ease',
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
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px]" style={{ backgroundColor: theme.gold }} />
              <span style={styles.overline}>Curated Portfolio</span>
            </div>
            <h1 style={styles.heading}>
              Find Your <span style={{ fontStyle: 'italic', color: theme.gold }}>Space.</span>
            </h1>
            <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '14px', fontWeight: 300, lineHeight: 1.6 }}>
              {properties.length} verified properties in Greater Noida and NCR.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Filter Dashboard */}
      <div style={styles.filterBar}>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="w-full lg:w-1/4 group" style={styles.inputGroup}>
              <Search size={14} style={{ color: theme.gold, position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search properties..."
                style={styles.input}
                onFocus={(e) => e.currentTarget.parentElement.style.borderColor = theme.gold}
                onBlur={(e) => e.currentTarget.parentElement.style.borderColor = `${theme.navy}20`}
              />
            </div>

            {/* Dropdown Filters */}
            <div className="w-full lg:w-auto flex flex-wrap lg:flex-nowrap gap-6 items-center flex-1 lg:justify-end">
              
              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.location}
                  onChange={e => setFilter('location', e.target.value)}
                  style={styles.select}
                  onFocus={(e) => e.currentTarget.parentElement.style.borderColor = theme.gold}
                  onBlur={(e) => e.currentTarget.parentElement.style.borderColor = `${theme.navy}20`}
                >
                  <option value="">All Locations</option>
                  {LOCATIONS.slice(1).map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.type}
                  onChange={e => setFilter('type', e.target.value)}
                  style={styles.select}
                  onFocus={(e) => e.currentTarget.parentElement.style.borderColor = theme.gold}
                  onBlur={(e) => e.currentTarget.parentElement.style.borderColor = `${theme.navy}20`}
                >
                  <option value="">All Types</option>
                  {PROPERTY_TYPES.slice(1).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.budget}
                  onChange={e => setFilter('budget', e.target.value)}
                  style={styles.select}
                  onFocus={(e) => e.currentTarget.parentElement.style.borderColor = theme.gold}
                  onBlur={(e) => e.currentTarget.parentElement.style.borderColor = `${theme.navy}20`}
                >
                  <option value="">Any Budget</option>
                  {BUDGET_RANGES.slice(1).map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="w-[45%] lg:w-auto group" style={{ ...styles.inputGroup, flex: '1 1 auto', minWidth: '140px' }}>
                <select
                  value={filters.status}
                  onChange={e => setFilter('status', e.target.value)}
                  style={styles.select}
                  onFocus={(e) => e.currentTarget.parentElement.style.borderColor = theme.gold}
                  onBlur={(e) => e.currentTarget.parentElement.style.borderColor = `${theme.navy}20`}
                >
                  <option value="">Any Status</option>
                  {STATUS_OPTIONS.slice(1).map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Action Area */}
              <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-6 mt-2 lg:mt-0">
                <div style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}50`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', whiteSpace: 'nowrap', fontWeight: 600 }}>
                  {filtered.length} Found
                </div>

                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    style={styles.btnClear}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.gold; e.currentTarget.style.color = theme.ivory; e.currentTarget.style.borderColor = theme.gold; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.navy; e.currentTarget.style.borderColor = `${theme.navy}30`; }}
                  >
                    <X size={12} /> Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Area */}
      <div style={{ backgroundColor: theme.ivory, padding: '80px 0', minHeight: '50vh' }}>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((property, i) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: cinematicEase }}
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
                  <SlidersHorizontal size={32} style={{ color: `${theme.navy}20`, marginBottom: '24px' }} strokeWidth={1} />
                  <h3 style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, fontSize: '2rem', fontWeight: 300, marginBottom: '12px' }}>
                    No properties found.
                  </h3>
                  <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}50`, fontSize: '14px', fontWeight: 300, marginBottom: '24px' }}>
                    Try adjusting your filters or search terms.
                  </p>
                  <button 
                    onClick={clearFilters}
                    style={{ ...styles.btnClear, fontSize: '11px', padding: '12px 24px' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.gold; e.currentTarget.style.color = theme.ivory; e.currentTarget.style.borderColor = theme.gold; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.navy; e.currentTarget.style.borderColor = `${theme.navy}30`; }}
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