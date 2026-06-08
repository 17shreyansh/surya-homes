import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, MapPin, Home, Banknote, ArrowRight } from 'lucide-react'
import { LOCATIONS, PROPERTY_TYPES, BUDGET_RANGES, STATS } from '../../constants'

// Swapped to a more architectural, high-end visual
const heroImage = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80'

// High-end easing curve for Apple/Stripe-tier fluidity
const easeCustom = [0.16, 1, 0.3, 1]

function SearchPanel() {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const params = new URLSearchParams()
    
    for (const [key, value] of form.entries()) {
      if (value && !value.includes('All') && !value.includes('Any')) {
        params.set(key, value)
      }
    }
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: easeCustom }}
      style={{ willChange: "transform, opacity" }}
      className="relative z-20 w-full max-w-5xl bg-[#0A0F1C]/80 backdrop-blur-2xl border border-[#D4AF37]/20 p-4 sm:p-6 md:p-8 shadow-2xl"
    >
      <form onSubmit={handleSearch} className="flex flex-col gap-4 sm:gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Location */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-3 font-medium">
              Location
            </label>
            <div className="relative border-b border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-300 pb-2">
              <MapPin size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <select 
                name="location" 
                className="w-full bg-transparent text-white pl-8 appearance-none cursor-pointer focus:outline-none focus:ring-0 text-sm tracking-wide"
              >
                {LOCATIONS.map(loc => (
                  <option key={loc} value={loc} className="bg-[#1A1A1A] text-white py-2">
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Property Type */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-3 font-medium">
              Property Type
            </label>
            <div className="relative border-b border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-300 pb-2">
              <Home size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <select 
                name="type" 
                className="w-full bg-transparent text-white pl-8 appearance-none cursor-pointer focus:outline-none focus:ring-0 text-sm tracking-wide"
              >
                {PROPERTY_TYPES.map(type => (
                  <option key={type} value={type} className="bg-[#1A1A1A] text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-3 font-medium">
              Budget Range
            </label>
            <div className="relative border-b border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-300 pb-2">
              <Banknote size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <select 
                name="budget" 
                className="w-full bg-transparent text-white pl-8 appearance-none cursor-pointer focus:outline-none focus:ring-0 text-sm tracking-wide"
              >
                {BUDGET_RANGES.map(range => (
                  <option key={range} value={range} className="bg-[#1A1A1A] text-white">
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Quick Filters & Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 pt-4 border-t border-white/5 mt-2">
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
            {['Ready to Move', 'Luxury Villas', 'Commercial'].map((tag) => (
              <button
                key={tag}
                type="button"
                className="text-[11px] uppercase tracking-wider text-white/60 bg-[#1A1A1A]/50 px-4 py-2 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-300"
              >
                {tag}
              </button>
            ))}
          </div>
          
          <button 
            type="submit" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-white text-black px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium transition-colors duration-500 group"
          >
            <span>Explore Portfolio</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  
  // Adjusted offsets to prevent jitter and optimize scroll thread
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start start', 'end start'] 
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-end bg-[#000000] overflow-hidden pt-20 sm:pt-24">
      {/* Background with optimized hardware acceleration */}
      <motion.div 
        style={{ y, willChange: "transform" }} 
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Architectural Estate"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Cleaner gradient masking: Matte Black -> Deep Navy -> Transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#0A0F1C]/80 to-transparent" />
      </motion.div>

      {/* Grid Overlay for Industrial Vibe */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none" />

      {/* Content Container */}
      <motion.div 
        style={{ opacity, willChange: "opacity" }} 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-28 mx-auto"
      >
        {/* Subtle Overline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
          style={{ willChange: "transform, opacity" }}
          className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37]">
            Curated Real Estate
          </span>
        </motion.div>

        {/* Minimalist Headline */}
        <div className="mb-10 sm:mb-12 md:mb-14 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: easeCustom }}
            style={{ willChange: "transform, opacity" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-white font-light"
          >
            Architectural <br />
            <span className="text-white/50 italic">Excellence.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeCustom }}
            className="text-white/60 text-xs sm:text-sm md:text-base max-w-lg mt-6 sm:mt-8 font-light tracking-wide leading-relaxed"
          >
            A definitive portfolio of luxury spaces across NCR. 
            Engineered for those who demand precision and uncompromising design.
          </motion.p>
        </div>

        <SearchPanel />

        {/* Minimalist Data Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: easeCustom }}
          style={{ willChange: "opacity" }}
          className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16 border-t border-white/5 pt-6 sm:pt-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="text-xl sm:text-2xl md:text-3xl text-white font-light tracking-tight">
                {stat.value}
              </div>
              <div className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}