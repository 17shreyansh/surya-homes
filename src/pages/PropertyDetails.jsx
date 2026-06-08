import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import {
  ArrowLeft, MapPin, BedDouble, Bath, Maximize2, 
  CheckCircle2, Phone, Share2, Heart, ChevronRight
} from 'lucide-react'
import Layout from '../components/layout/Layout'
import PropertyCard from '../components/property/PropertyCard'
import { InquiryForm } from '../components/forms'
import { Newsletter } from '../components/sections'
import { getPropertyBySlug, getRelatedProperties } from '../data/properties'

// High-end easing curve for hardware-accelerated animations
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
  page: {
    backgroundColor: colors.black,
    minHeight: '100vh',
    color: colors.white,
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
    fontSize: '2.5rem',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '8px'
  },
  sectionTitle: {
    color: colors.white,
    fontSize: '1.5rem',
    fontWeight: 300,
    letterSpacing: '-0.01em',
    marginBottom: '20px'
  },
  btnSecondary: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '12px 24px',
    border: `1px solid ${colors.white}15`,
    color: `${colors.white}80`,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  card: {
    backgroundColor: colors.charcoal,
    border: `1px solid ${colors.white}0A`,
    padding: '32px',
  },
  divider: {
    height: '1px',
    backgroundColor: `${colors.white}0A`,
    width: '100%',
    margin: '24px 0'
  }
}

export default function PropertyDetails() {
  const { slug } = useParams()
  const property = getPropertyBySlug(slug)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [liked, setLiked] = useState(false)

  if (!property) return <Navigate to="/properties" replace />

  const related = getRelatedProperties(property.id, property.type)

  const specs = [
    { label: 'Type', value: property.type },
    { label: 'Status', value: property.status },
    { label: 'Floor', value: property.floor || '—' },
    { label: 'Total Floors', value: property.totalFloors || '—' },
    { label: 'Facing', value: property.facing || '—' },
    { label: 'Furnished', value: property.furnishing || '—' },
    { label: 'Parking', value: property.parking ? `${property.parking} Spots` : '—' },
    { label: 'Age', value: property.age || '—' },
    { label: 'RERA No.', value: property.rera },
  ]

  return (
    <Layout>
      <div style={styles.page}>
        
        {/* Inject Swiper Styles to match the Agency UI */}
        <style>{`
          .swiper-button-next, .swiper-button-prev { color: ${colors.gold} !important; transform: scale(0.7); }
          .swiper-pagination-bullet { background: ${colors.white} !important; opacity: 0.3 !important; }
          .swiper-pagination-bullet-active { background: ${colors.gold} !important; opacity: 1 !important; }
        `}</style>

        {/* Breadcrumb & Top Nav */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-8 pb-4">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/40 mb-6">
            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/properties" className="hover:text-[#D4AF37] transition-colors">Our Homes</Link>
            <ChevronRight size={12} />
            <span className="text-white/80 truncate max-w-[200px] md:max-w-md">{property.title}</span>
          </div>

          <Link
            to="/properties"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/60 hover:text-[#D4AF37] mb-8 transition-colors"
          >
            <ArrowLeft size={14} style={{ willChange: 'transform' }} className="group-hover:-translate-x-1 transition-transform" />
            Back to Homes
          </Link>
        </div>

        {/* Cinematic Gallery */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom }}
            style={{ willChange: 'transform, opacity' }}
          >
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              navigation
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              className="w-full border border-white/5"
            >
              {property.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="aspect-[16/9] md:aspect-[21/9] bg-[#1A1A1A]">
                    <img
                      src={img}
                      alt={`${property.title} - View ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnails */}
            {property.images.length > 1 && (
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={4}
                watchSlidesProgress
                className="mt-2"
              >
                {property.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="aspect-[4/3] cursor-pointer overflow-hidden opacity-50 hover:opacity-100 transition-opacity border border-transparent hover:border-[#D4AF37]/50">
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">

            {/* Left Column (Details) */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Title & Price Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {property.badge && (
                        <span style={{ backgroundColor: colors.gold, color: colors.black, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', padding: '4px 10px', fontWeight: 600 }}>
                          {property.badge}
                        </span>
                      )}
                      <span style={{ backgroundColor: `${colors.charcoal}`, border: `1px solid ${colors.white}20`, color: colors.white, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', padding: '4px 10px' }}>
                        {property.status}
                      </span>
                    </div>
                    <h1 style={styles.heading}>{property.title}</h1>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} style={{ color: colors.gold }} />
                      <span style={{ color: `${colors.white}60`, fontSize: '14px', fontWeight: 300 }}>{property.location}</span>
                    </div>
                  </div>

                  <div className="md:text-right">
                    <div style={{ color: colors.gold, fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1 }}>
                      {property.priceDisplay}
                    </div>
                    {property.pricePerSqFt && (
                      <div style={{ color: `${colors.white}40`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>
                        ₹{property.pricePerSqFt.toLocaleString('en-IN')} / SQFT
                      </div>
                    )}
                  </div>
                </div>

                {/* Save & Share */}
                <div className="flex items-center gap-4 mb-10">
                  <button
                    onClick={() => setLiked(!liked)}
                    style={{
                      ...styles.btnSecondary,
                      borderColor: liked ? '#EF4444' : `${colors.white}15`,
                      color: liked ? '#EF4444' : `${colors.white}80`,
                      backgroundColor: liked ? 'rgba(239, 68, 68, 0.05)' : 'transparent'
                    }}
                    onMouseEnter={(e) => { if (!liked) { e.currentTarget.style.borderColor = colors.gold; e.currentTarget.style.color = colors.gold; } }}
                    onMouseLeave={(e) => { if (!liked) { e.currentTarget.style.borderColor = `${colors.white}15`; e.currentTarget.style.color = `${colors.white}80`; } }}
                  >
                    <Heart size={14} style={{ fill: liked ? '#EF4444' : 'transparent', transition: 'fill 0.3s ease' }} /> 
                    {liked ? 'Saved' : 'Save'}
                  </button>
                  <button 
                    style={styles.btnSecondary}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.gold; e.currentTarget.style.color = colors.gold; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors.white}15`; e.currentTarget.style.color = `${colors.white}80`; }}
                  >
                    <Share2 size={14} /> Share
                  </button>
                </div>

                {/* Quick Numbers Bar */}
                <div style={{ ...styles.card, padding: '24px', display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                  {property.bedrooms && (
                    <div className="text-center w-full">
                      <BedDouble size={24} style={{ color: colors.gold, margin: '0 auto 8px auto' }} strokeWidth={1} />
                      <div style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300 }}>{property.bedrooms}</div>
                      <div style={{ color: `${colors.white}40`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Bedrooms</div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center w-full" style={{ borderLeft: `1px solid ${colors.white}10`, borderRight: `1px solid ${colors.white}10` }}>
                      <Bath size={24} style={{ color: colors.gold, margin: '0 auto 8px auto' }} strokeWidth={1} />
                      <div style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300 }}>{property.bathrooms}</div>
                      <div style={{ color: `${colors.white}40`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Bathrooms</div>
                    </div>
                  )}
                  {property.area && (
                    <div className="text-center w-full">
                      <Maximize2 size={24} style={{ color: colors.gold, margin: '0 auto 8px auto' }} strokeWidth={1} />
                      <div style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300 }}>{property.area.toLocaleString()}</div>
                      <div style={{ color: `${colors.white}40`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sq. Feet</div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-12">
                  <h2 style={styles.sectionTitle}>About this Home</h2>
                  <p style={{ color: `${colors.white}70`, fontSize: '14px', lineHeight: 1.8, fontWeight: 300 }}>
                    {property.description}
                  </p>
                </div>

                {/* Amenities / What's Included */}
                <div className="mb-12">
                  <h2 style={styles.sectionTitle}>What's Included</h2>
                  <div className="flex flex-wrap gap-4">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} style={{ display: 'flex', alignItems: 'center', gap: '8px', border: `1px solid ${colors.white}10`, padding: '10px 16px', backgroundColor: colors.charcoal }}>
                        <span style={{ width: '4px', height: '4px', backgroundColor: colors.gold }} />
                        <span style={{ color: `${colors.white}80`, fontSize: '13px', fontWeight: 300 }}>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home Details Table */}
                <div className="mb-12">
                  <h2 style={styles.sectionTitle}>Home Details</h2>
                  <div style={{ border: `1px solid ${colors.white}10`, backgroundColor: colors.charcoal }}>
                    <div className="grid grid-cols-2 md:grid-cols-3">
                      {specs.map((spec, i) => (
                        <div key={spec.label} style={{ padding: '20px', borderBottom: `1px solid ${colors.white}05`, borderRight: (i + 1) % 3 !== 0 ? `1px solid ${colors.white}05` : 'none' }} className="md:border-r border-white/5">
                          <div style={{ color: `${colors.white}40`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                            {spec.label}
                          </div>
                          <div style={{ color: colors.white, fontSize: '14px', fontWeight: 300 }}>
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-12">
                  <h2 style={styles.sectionTitle}>Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-4">
                        <div style={{ width: '20px', height: '20px', border: `1px solid ${colors.gold}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <CheckCircle2 size={10} style={{ color: colors.gold }} />
                        </div>
                        <span style={{ color: `${colors.white}80`, fontSize: '14px', fontWeight: 300, lineHeight: 1.5 }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column (Sticky Agent Form) */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
                style={{ ...styles.card, position: 'sticky', top: '100px', willChange: 'transform, opacity' }}
              >
                <div style={styles.overline}>Agent</div>
                <div className="flex items-center gap-4 mb-6">
                  
                  {/* Custom Inline Avatar */}
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: `${colors.gold}15`, border: `1px solid ${colors.gold}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.gold, fontSize: '18px', fontWeight: 400, flexShrink: 0 }}>
                    {property.agent.avatar || property.agent.name.charAt(0)}
                  </div>
                  
                  <div>
                    <div style={{ color: colors.white, fontSize: '1.25rem', fontWeight: 300, marginBottom: '2px' }}>{property.agent.name}</div>
                    <div style={{ color: `${colors.gold}80`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Verified Agent</div>
                  </div>
                </div>

                <a
                  href={`tel:${property.agent.phone}`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: colors.gold, color: colors.black, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', padding: '16px', fontWeight: 500, width: '100%', marginBottom: '32px', transition: 'background-color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.white}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.gold}
                >
                  <Phone size={14} /> Call {property.agent.phone}
                </a>

                <div style={{ height: '1px', backgroundColor: `${colors.white}10`, width: '100%', marginBottom: '32px' }} />

                <h3 style={{ color: colors.white, fontSize: '1.25rem', fontWeight: 300, marginBottom: '24px' }}>Ask a Question</h3>
                <InquiryForm property={property} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Similar Homes Grid */}
        {related.length > 0 && (
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20" style={{ borderTop: `1px solid ${colors.white}0A` }}>
            <h2 style={{ ...styles.heading, marginBottom: '40px' }}>
              Similar Homes.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Newsletter />
    </Layout>
  )
}