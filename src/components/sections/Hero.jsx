import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, MapPin, Home, Banknote, ArrowRight, ChevronDown } from 'lucide-react'
import { LOCATIONS, PROPERTY_TYPES, BUDGET_RANGES, STATS } from '../../constants'

const heroImage = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80'

// Custom easing for ultra-smooth, premium animations
const premiumEase = [0.25, 1, 0.5, 1]

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: premiumEase } }
}

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
      initial={{ opacity: 0, x: 40, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, x: 0, backdropFilter: "blur(24px)" }}
      transition={{ duration: 1.2, delay: 0.6, ease: premiumEase }}
      className="relative z-20 w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.03] blur-3xl rounded-full" />

      {/* Elegant Header */}
      <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/10">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-tight mb-2">
          Find Your <span className="text-[#D4AF37] italic font-serif">Sanctuary</span>
        </h3>
        <p className="text-white/50 text-xs sm:text-sm font-light tracking-wide">
          Curated properties matching your exquisite taste
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col gap-5 sm:gap-6 relative z-10">
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Location Input */}
          <div className="group">
            <label className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/50 mb-2 sm:mb-2.5 font-medium ml-1">
              Location
            </label>
            <div className="relative border border-white/10 rounded-lg group-hover:border-[#D4AF37]/50 transition-all duration-300 bg-black/20 hover:bg-black/40">
              <MapPin size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <select 
                name="location" 
                className="w-full bg-transparent text-white/90 pl-10 sm:pl-12 pr-8 sm:pr-10 py-3 sm:py-4 appearance-none cursor-pointer focus:outline-none focus:ring-0 text-xs sm:text-sm tracking-wide"
              >
                {LOCATIONS.map(loc => (
                  <option key={loc} value={loc} className="bg-[#08111F] text-white py-2">
                    {loc}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-[#D4AF37] pointer-events-none transition-colors" />
            </div>
          </div>

          {/* Property Type Input */}
          <div className="group">
            <label className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/50 mb-2 sm:mb-2.5 font-medium ml-1">
              Property Type
            </label>
            <div className="relative border border-white/10 rounded-lg group-hover:border-[#D4AF37]/50 transition-all duration-300 bg-black/20 hover:bg-black/40">
              <Home size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <select 
                name="type" 
                className="w-full bg-transparent text-white/90 pl-10 sm:pl-12 pr-8 sm:pr-10 py-3 sm:py-4 appearance-none cursor-pointer focus:outline-none focus:ring-0 text-xs sm:text-sm tracking-wide"
              >
                {PROPERTY_TYPES.map(type => (
                  <option key={type} value={type} className="bg-[#08111F] text-white">
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-[#D4AF37] pointer-events-none transition-colors" />
            </div>
          </div>

          {/* Budget Range Input */}
          <div className="group">
            <label className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/50 mb-2 sm:mb-2.5 font-medium ml-1">
              Budget Range
            </label>
            <div className="relative border border-white/10 rounded-lg group-hover:border-[#D4AF37]/50 transition-all duration-300 bg-black/20 hover:bg-black/40">
              <Banknote size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
              <select 
                name="budget" 
                className="w-full bg-transparent text-white/90 pl-10 sm:pl-12 pr-8 sm:pr-10 py-3 sm:py-4 appearance-none cursor-pointer focus:outline-none focus:ring-0 text-xs sm:text-sm tracking-wide"
              >
                {BUDGET_RANGES.map(range => (
                  <option key={range} value={range} className="bg-[#08111F] text-white">
                    {range}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-[#D4AF37] pointer-events-none transition-colors" />
            </div>
          </div>
        </div>

        {/* Tags & Action Area */}
        <div className="flex flex-col gap-4 sm:gap-6 pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {['Ready to Move', 'Luxury Villas', 'Commercial'].map((tag) => (
              <button
                key={tag}
                type="button"
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/60 bg-white/5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all duration-300 border border-white/5 hover:border-[#D4AF37]/30"
              >
                {tag}
              </button>
            ))}
          </div>
          
          <button 
            type="submit" 
            className="w-full relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#D4AF37] to-[#E8C76A] hover:to-[#F4D780] text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-500 group tracking-[0.15em] sm:tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
          >
            <span className="relative z-10">Explore Portfolio</span>
            <ArrowRight size={14} className="relative z-10 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start start', 'end start'] 
  })
  
  // Slower, more subtle parallax scale and Y axis translation
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center bg-[#04080F] overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 lg:py-0">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale, willChange: "transform" }} 
        className="absolute inset-0 z-0 origin-top"
      >
        <img
          src={heroImage}
          alt="Architectural Estate"
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
        {/* Advanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#04080F] via-[#04080F]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04080F] via-transparent to-transparent h-full" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] z-0 pointer-events-none mix-blend-overlay" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-[1920px] mx-auto mt-4 sm:mt-6 md:mt-10 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-14 lg:gap-12 xl:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 xl:col-span-7"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              <span className="w-8 sm:w-12 md:w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[8px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37] font-semibold">
                Curated Real Estate
              </span>
            </motion.div>

            <div className="mb-8 sm:mb-12 md:mb-16">
              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] text-white font-light mb-4 sm:mb-6 md:mb-8"
              >
                Where Prestige <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/30 italic font-serif pr-2 sm:pr-4">
                  Meets Perfection
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeUpVariant}
                className="text-white/60 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl font-light tracking-wide leading-relaxed"
              >
                An exclusive collection of architectural masterpieces across NCR. 
                Designed for those who refuse to compromise on excellence.
              </motion.p>
            </div>

            {/* Stats Section */}
            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 border-t border-white/10 pt-6 sm:pt-8 md:pt-10 lg:pt-12"
            >
              {STATS.map((stat, index) => (
                <div key={stat.label} className="flex flex-col gap-1.5 sm:gap-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[#D4AF37] text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Search Panel */}
          <div className="lg:col-span-6 xl:col-span-5">
            <SearchPanel />
          </div>
          
        </div>
      </div>
    </section>
  )
}