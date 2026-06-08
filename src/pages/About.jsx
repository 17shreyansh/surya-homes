import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Linkedin, ArrowRight, Target, Eye, Heart } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Testimonials from '../components/sections/Testimonials'
import { Newsletter } from '../components/sections'
import { team, timeline } from '../data/team'
import { STATS } from '../constants'

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
    fontSize: '3rem',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '24px'
  },
  paragraph: {
    color: `${colors.white}60`,
    fontSize: '15px',
    lineHeight: 1.7,
    fontWeight: 300,
  },
  card: {
    backgroundColor: colors.charcoal,
    border: `1px solid ${colors.white}05`,
    padding: '40px',
    height: '100%',
    transition: 'all 0.5s ease',
  },
  btnPrimary: {
    backgroundColor: colors.gold,
    color: colors.black,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '14px 28px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 500,
    transition: 'all 0.3s ease',
  }
}

export default function About() {
  return (
    <Layout>
      {/* Cinematic Hero */}
      <div style={{ position: 'relative', padding: '160px 0', backgroundColor: colors.black, overflow: 'hidden' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=50"
            alt="Surya Homes Building"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000000 10%, transparent 100%)' }} />
        </div>
        
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px]" style={{ backgroundColor: colors.gold }} />
              <span style={styles.overline} className="!mb-0">Our Story</span>
              <span className="w-8 h-[1px]" style={{ backgroundColor: colors.gold }} />
            </div>
            <h1 style={{ ...styles.heading, fontSize: '4.5rem' }}>
              About <span style={{ color: `${colors.white}50`, fontStyle: 'italic' }}>Us.</span>
            </h1>
            <p style={{ ...styles.paragraph, maxWidth: '600px', margin: '0 auto' }}>
              For over 15 years, we have helped families find their perfect home in Greater Noida. We work hard, know the area, and care about you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* The Story Section */}
      <section style={{ backgroundColor: colors.navy, padding: '120px 0', borderTop: `1px solid ${colors.white}0A` }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: easeCustom }}
              className="grid grid-cols-2 gap-4"
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                alt="Office"
                style={{ width: '100%', objectFit: 'cover', aspectRatio: '16/9', gridColumn: 'span 2', opacity: 0.9 }}
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                alt="Property"
                style={{ width: '100%', objectFit: 'cover', aspectRatio: '1/1', opacity: 0.9 }}
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                alt="Interior"
                style={{ width: '100%', objectFit: 'cover', aspectRatio: '1/1', opacity: 0.9 }}
                loading="lazy"
              />
            </motion.div>

            <div>
              <span style={styles.overline}>Since 2010</span>
              <h2 style={styles.heading}>Built on Trust.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <p style={styles.paragraph}>
                  Rajesh Kumar Surya started this company with a simple idea: buying a home should be easy and clear, not stressful.
                </p>
                <p style={styles.paragraph}>
                  We started in a single-room office in Greater Noida in 2010. Today, we are the city's most trusted real estate team, helping over 1,000 families with a team of 30+ experts.
                </p>
                <p style={styles.paragraph}>
                  Every home we sell is checked by us personally. We make sure all the legal paperwork is safe, secure, and ready to go.
                </p>
              </div>
              <Link 
                to="/contact" 
                style={styles.btnPrimary}
                className="group hover:bg-white hover:text-black"
              >
                Talk to Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section style={{ backgroundColor: colors.black, padding: '120px 0' }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={styles.overline}>Our Purpose</span>
            <h2 style={styles.heading}>What Drives Us.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                Icon: Target,
                label: 'Our Mission',
                text: 'To make buying a home simple and clear for everyone in Greater Noida. We never cut corners.',
              },
              {
                Icon: Eye,
                label: 'Our Vision',
                text: 'To be the most trusted real estate team in North India. We want to set the standard for great service and honest work.',
              },
              {
                Icon: Heart,
                label: 'Our Values',
                text: 'Clear prices. Honest advice. We respect your time and always do what we promise.',
              },
            ].map(({ Icon, label, text }, i) => (
              <motion.div 
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeCustom }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div 
                  style={styles.card}
                  className="group hover:border-[#D4AF37] hover:bg-[#1F1F1F]"
                >
                  <div style={{ width: '48px', height: '48px', border: `1px solid ${colors.gold}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }} className="group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Icon size={20} style={{ color: colors.gold }} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300, marginBottom: '16px' }}>{label}</h3>
                  <p style={{ color: `${colors.white}60`, fontSize: '14px', lineHeight: 1.6, fontWeight: 300 }}>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: colors.navy, padding: '80px 0', borderTop: `1px solid ${colors.white}0A`, borderBottom: `1px solid ${colors.white}0A` }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeCustom }}
                style={{ textAlign: 'center', borderRight: i !== STATS.length - 1 ? `1px solid ${colors.white}10` : 'none', willChange: 'transform, opacity' }}
                className="lg:border-r border-white/10 last:border-0"
              >
                <div style={{ color: colors.white, fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.03em', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ color: colors.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED: Architectural Timeline */}
      <section style={{ backgroundColor: colors.black, padding: '140px 0', position: 'relative' }}>
        {/* Subtle Blueprint Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02]" 
          style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
        />

        <div className="w-full max-w-[900px] mx-auto px-6 md:px-12 relative z-10">
          <div style={{ marginBottom: '100px' }}>
            <span style={styles.overline}>Our History</span>
            <h2 style={styles.heading}>The Path We Took.</h2>
          </div>
          
          {/* Structural Timeline Container */}
          <div style={{ position: 'relative', paddingLeft: '32px', marginLeft: '8px' }} className="md:pl-16 md:ml-4">
            
            {/* The Main Structural Beam (Animated via scaleY) */}
            <motion.div 
              style={{ 
                position: 'absolute', 
                left: 0, 
                top: '24px', 
                bottom: 0, 
                width: '1px', 
                background: `linear-gradient(to bottom, ${colors.gold}, ${colors.gold}20, transparent)`,
                transformOrigin: 'top',
                willChange: 'transform'
              }} 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: easeCustom }}
            />

            {timeline.map((item, i) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: easeCustom }}
                style={{ position: 'relative', marginBottom: '64px', willChange: 'transform, opacity' }}
              >
                {/* Industrial Diamond Node */}
                <div style={{ position: 'absolute', left: '-32px', top: '32px', transform: 'translateX(-50%)' }} className="md:left-[-64px]">
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: colors.black, 
                    border: `1px solid ${colors.gold}50`, 
                    transform: 'rotate(45deg)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: colors.gold }} />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div 
                  style={{ ...styles.card, padding: '32px 40px', position: 'relative', overflow: 'hidden' }}
                  className="group hover:border-[#D4AF37] hover:bg-[#1F1F1F]"
                >
                  {/* Massive Watermark Year */}
                  <div style={{ 
                    position: 'absolute', 
                    right: '-10px', 
                    bottom: '-20px', 
                    fontSize: '8rem', 
                    fontWeight: 300, 
                    lineHeight: 0.8, 
                    color: `${colors.gold}08`, 
                    pointerEvents: 'none',
                    letterSpacing: '-0.05em',
                    transition: 'color 0.5s ease'
                  }} className="group-hover:text-[#D4AF37]/10">
                    {item.year}
                  </div>

                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ color: colors.gold, fontSize: '1.75rem', fontWeight: 300, marginBottom: '12px' }}>
                      {item.year}
                    </div>
                    <p style={{ color: `${colors.white}80`, fontSize: '15px', lineHeight: 1.7, fontWeight: 300 }}>
                      {item.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section style={{ backgroundColor: colors.navy, padding: '120px 0', borderTop: `1px solid ${colors.white}0A` }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={styles.overline}>Our People</span>
            <h2 style={styles.heading}>The Team Behind You.</h2>
            <p style={styles.paragraph}>
              30+ experts who know the local market better than anyone else.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: easeCustom }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div style={{ ...styles.card, textAlign: 'center' }} className="group hover:border-[#D4AF37]">
                  {/* Inline Avatar Replacement */}
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: `${colors.gold}15`, border: `1px solid ${colors.gold}40`, margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.gold, fontSize: '24px', fontWeight: 300 }}>
                    {member.avatar || member.name.charAt(0)}
                  </div>
                  
                  <h3 style={{ color: colors.white, fontSize: '1.25rem', fontWeight: 300, marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ color: `${colors.gold}80`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                    {member.designation}
                  </div>
                  <p style={{ color: `${colors.white}50`, fontSize: '13px', lineHeight: 1.6, fontWeight: 300, marginBottom: '24px' }}>
                    {member.bio}
                  </p>
                  
                  <a
                    href={member.linkedin}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: `${colors.white}40`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'color 0.3s ease' }}
                    className="hover:text-[#D4AF37]"
                  >
                    <Linkedin size={14} /> Connect
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </Layout>
  )
}