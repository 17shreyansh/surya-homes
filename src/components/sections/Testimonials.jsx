import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

// High-end easing curve for smooth mounting
const easeCustom = [0.16, 1, 0.3, 1]

// Precise visual control
const colors = {
  navy: '#0A0F1C',
  charcoal: '#1A1A1A',
  black: '#000000',
  gold: '#D4AF37',
  white: '#FFFFFF',
}

const styles = {
  section: {
    backgroundColor: colors.navy,
    padding: '120px 0',
    overflow: 'hidden',
    position: 'relative'
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
    lineHeight: 1.2,
    marginBottom: '16px'
  },
  paragraph: {
    color: `${colors.white}60`,
    fontSize: '14px',
    lineHeight: 1.6,
    fontWeight: 300,
    maxWidth: '500px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: colors.charcoal,
    border: `1px solid ${colors.white}0A`,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'border-color 0.4s ease',
    position: 'relative'
  },
  avatarWrap: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: `${colors.gold}15`,
    border: `1px solid ${colors.gold}40`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.gold,
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    flexShrink: 0
  }
}

function TestimonialCard({ testimonial }) {
  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${colors.gold}40`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = `${colors.white}0A`}
    >
      {/* Minimalist Oversized Quote Mark Background */}
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          fontSize: '120px',
          fontFamily: 'serif',
          color: colors.white,
          opacity: 0.02,
          lineHeight: 1,
          pointerEvents: 'none'
        }}
      >
        "
      </div>

      {/* Precision Stars */}
      <div className="flex gap-1 mb-8 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={12} style={{ color: colors.gold, fill: colors.gold }} />
        ))}
      </div>

      {/* Clean, Simple Review Text */}
      <p 
        style={{ 
          color: `${colors.white}80`, 
          fontSize: '14px', 
          lineHeight: 1.8, 
          fontWeight: 300, 
          flex: 1, 
          marginBottom: '32px',
          position: 'relative',
          zIndex: 10
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Footer Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px', borderTop: `1px solid ${colors.white}0A`, position: 'relative', zIndex: 10 }}>
        <div style={styles.avatarWrap}>
          {testimonial.avatar || testimonial.name.charAt(0)}
        </div>
        <div>
          <div style={{ color: colors.white, fontSize: '14px', fontWeight: 400, letterSpacing: '0.02em', marginBottom: '2px' }}>
            {testimonial.name}
          </div>
          <div style={{ color: `${colors.white}40`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {testimonial.location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={styles.section}>
      
      {/* Inject Swiper Styles to match the Agency UI */}
      <style>{`
        .swiper-pagination-bullet {
          background: ${colors.white} !important;
          opacity: 0.2 !important;
          transition: all 0.3s ease !important;
          width: 6px !important;
          height: 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: ${colors.gold} !important;
          opacity: 1 !important;
          transform: scale(1.5) !important;
        }
      `}</style>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCustom }}
          style={{ textAlign: 'center', marginBottom: '64px', willChange: 'transform, opacity' }}
        >
          <span style={styles.overline}>Client Reviews</span>
          <h2 style={styles.heading}>What people say.</h2>
          <p style={styles.paragraph}>
            Read honest reviews from people who found their home with us. We let our work do the talking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: easeCustom }}
          style={{ willChange: 'opacity' }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: '60px' }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} style={{ height: 'auto' }}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}