import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, HardHat, Briefcase, FileText, Palette, ArrowRight, BadgeIndianRupee } from 'lucide-react'
import Layout from '../components/layout/Layout'
import { Stats } from '../components/sections/WhyChooseUs'
import { Newsletter, CTASection } from '../components/sections'
import { services } from '../data/services'

const cinematicEase = [0.25, 1, 0.5, 1]

const theme = {
  navy: '#082F67',
  charcoal: '#101826',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
}

const iconMap = {
  Building2,
  HardHat,
  Briefcase,
  BadgeIndianRupee,
  FileText,
  Palette,
}

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <div style={{ backgroundColor: theme.ivory, padding: '140px 0 80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 h-[1px]" style={{ backgroundColor: theme.gold }} />
              <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600 }}>What We Offer</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: theme.gold }} />
            </div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, fontSize: '5rem', fontWeight: 400, marginBottom: '16px', lineHeight: 1.1 }}>
              Our <span style={{ fontStyle: 'italic', color: theme.gold }}>Services</span>
            </h1>
            <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '14px', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
              Complete real estate services from property discovery to post-purchase support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section style={{ backgroundColor: theme.ivory, padding: '120px 0' }}>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1, delay: i * 0.08, ease: cinematicEase }}
                >
                  <div 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 0, 
                      backgroundColor: theme.ivory, 
                      border: `1px solid ${theme.navy}08`,
                      overflow: 'hidden', 
                      height: '100%',
                      transition: 'all 0.5s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = theme.gold; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${theme.navy}08`; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ width: '100%', overflow: 'hidden', aspectRatio: '16/9' }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'all 0.7s ease' }}
                        loading="lazy"
                        onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.05)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.opacity = 0.85; e.currentTarget.style.transform = 'scale(1)'; }}
                      />
                    </div>

                    <div style={{ padding: '32px' }}>
                      <div style={{ width: '40px', height: '40px', border: `1px solid ${theme.gold}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Icon size={18} style={{ color: theme.gold }} strokeWidth={1.5} />
                      </div>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: theme.navy, fontWeight: 400, marginBottom: '12px' }}>{service.title}</h3>
                      <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '14px', lineHeight: 1.6, marginBottom: '20px', fontWeight: 300 }}>{service.description}</p>

                      <div style={{ marginBottom: '24px' }}>
                        {service.features.map(f => (
                          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <span style={{ color: theme.gold, fontSize: '12px' }}>→</span>
                            <span style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}60`, fontSize: '12px', fontWeight: 300 }}>{f}</span>
                          </div>
                        ))}
                      </div>

                      <Link 
                        to="/contact" 
                        style={{ 
                          fontFamily: '"Inter", sans-serif',
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          fontSize: '11px', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.15em', 
                          padding: '10px 20px', 
                          border: `1px solid ${theme.navy}30`, 
                          color: theme.navy,
                          transition: 'all 0.4s ease',
                          fontWeight: 600
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.gold; e.currentTarget.style.color = theme.ivory; e.currentTarget.style.borderColor = theme.gold; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.navy; e.currentTarget.style.borderColor = `${theme.navy}30`; }}
                      >
                        Enquire <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Stats />
      <CTASection />
      <Newsletter />
    </Layout>
  )
}
