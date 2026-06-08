import { motion } from 'framer-motion'
import { Shield, TrendingUp, Users, Award, Clock, FileCheck } from 'lucide-react'
import { STATS } from '../../constants'

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
  sectionBlack: {
    backgroundColor: colors.black,
    padding: '120px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  sectionNavy: {
    backgroundColor: colors.navy,
    padding: '80px 0',
    borderTop: `1px solid ${colors.white}0A`,
    borderBottom: `1px solid ${colors.white}0A`,
    position: 'relative',
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
    border: `1px solid ${colors.white}05`,
    padding: '40px 32px',
    height: '100%',
    transition: 'all 0.5s ease',
  },
  iconBox: {
    width: '48px',
    height: '48px',
    border: `1px solid ${colors.gold}40`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
    transition: 'all 0.5s ease',
  }
}

// Simplified, plain English content
const reasons = [
  {
    icon: Shield,
    title: 'Safe & Checked',
    description: 'Every home is checked carefully. We only show safe, registered properties.',
  },
  {
    icon: TrendingUp,
    title: 'Best Prices',
    description: 'We negotiate to get you the best price. There are no hidden fees.',
  },
  {
    icon: Users,
    title: 'Local Experts',
    description: 'Our team knows the area well and is always ready to help you out.',
  },
  {
    icon: Award,
    title: '15 Years Experience',
    description: 'We have been helping people buy and sell homes here since 2010.',
  },
  {
    icon: Clock,
    title: 'Help at Every Step',
    description: 'We handle all the hard work, from your first search to the final keys.',
  },
  {
    icon: FileCheck,
    title: 'Legal Safety',
    description: 'We check all the paperwork so you can buy with complete peace of mind.',
  },
]

export function WhyChooseUs() {
  return (
    <section style={styles.sectionBlack}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={styles.overline}>Why Choose Us</span>
          <h2 style={styles.heading}>What makes us different.</h2>
          <p style={styles.paragraph}>
            Trusted by over 1,000 families. We believe in being honest, working hard, and taking good care of you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: easeCustom }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div 
                className="group"
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${colors.gold}50`;
                  e.currentTarget.style.backgroundColor = '#1F1F1F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${colors.white}05`;
                  e.currentTarget.style.backgroundColor = colors.charcoal;
                }}
              >
                <div 
                  className="group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]"
                  style={styles.iconBox}
                >
                  <reason.icon size={20} style={{ color: colors.gold }} strokeWidth={1.5} />
                </div>
                
                <h3 style={{ color: colors.white, fontSize: '1.25rem', fontWeight: 300, marginBottom: '12px' }}>
                  {reason.title}
                </h3>
                
                <p style={{ color: `${colors.white}60`, fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section style={styles.sectionNavy}>
      {/* Precision Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: easeCustom }}
              style={{ 
                willChange: 'transform, opacity',
                textAlign: 'center',
                borderRight: i !== STATS.length - 1 ? `1px solid ${colors.white}10` : 'none',
              }}
              className="lg:border-r border-white/10 last:border-0"
            >
              <div 
                style={{ 
                  color: colors.white, 
                  fontSize: '3rem', 
                  fontWeight: 300, 
                  letterSpacing: '-0.03em',
                  marginBottom: '8px'
                }}
              >
                {stat.value}
              </div>
              <div 
                style={{ 
                  color: colors.gold, 
                  fontSize: '10px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}