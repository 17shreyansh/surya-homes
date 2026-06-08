import { motion } from 'framer-motion'
import { Shield, TrendingUp, Users, Award, Clock, FileCheck } from 'lucide-react'
import { STATS } from '../../constants'

const easeCustom = [0.16, 1, 0.3, 1]

const colors = {
  navy: '#08111F',
  charcoal: '#101826',
  black: '#000000',
  gold: '#D4AF37',
  white: '#F8F6F2',
}

const styles = {
  sectionBlack: {
    backgroundColor: colors.black,
    padding: '160px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  sectionNavy: {
    backgroundColor: colors.navy,
    padding: '100px 0',
    borderTop: `1px solid ${colors.white}0D`,
    borderBottom: `1px solid ${colors.white}0D`,
    position: 'relative',
  },
  overline: {
    color: colors.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.35em',
    fontWeight: 500,
    display: 'block',
    marginBottom: '24px'
  },
  heading: {
    color: colors.white,
    fontSize: '3.5rem',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    marginBottom: '24px'
  },
  paragraph: {
    color: `${colors.white}65`,
    fontSize: '15px',
    lineHeight: 1.7,
    fontWeight: 300,
    maxWidth: '600px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: colors.charcoal,
    border: `1px solid ${colors.white}08`,
    padding: '48px 40px',
    height: '100%',
    transition: 'all 0.6s ease',
  },
  iconBox: {
    width: '52px',
    height: '52px',
    border: `1px solid ${colors.gold}45`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '36px',
    transition: 'all 0.6s ease',
  }
}

const reasons = [
  {
    icon: Shield,
    title: 'Verified Properties',
    description: 'Every property undergoes rigorous verification. We ensure complete legal compliance and authenticity.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Excellence',
    description: 'Our portfolio features high-appreciation assets with transparent pricing and zero hidden charges.',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Our team of specialists provides personalized guidance throughout your property journey.',
  },
  {
    icon: Award,
    title: '15 Years of Trust',
    description: 'Established in 2010, we have built a legacy of excellence and client satisfaction.',
  },
  {
    icon: Clock,
    title: 'End-to-End Service',
    description: 'From initial search to final handover, we manage every detail with precision.',
  },
  {
    icon: FileCheck,
    title: 'Legal Assurance',
    description: 'Comprehensive documentation review ensures complete peace of mind in every transaction.',
  },
]

export function WhyChooseUs() {
  return (
    <section style={styles.sectionBlack}>
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        
        <div style={{ textAlign: 'center', marginBottom: '96px' }}>
          <span style={styles.overline}>Why Choose Us</span>
          <h2 style={styles.heading}>The Surya Homes Difference</h2>
          <p style={styles.paragraph}>
            Trusted by over 1,000 families. Built on integrity, expertise, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
                  e.currentTarget.style.borderColor = `${colors.gold}55`;
                  e.currentTarget.style.backgroundColor = '#14202F';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${colors.white}08`;
                  e.currentTarget.style.backgroundColor = colors.charcoal;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  className="group-hover:bg-[#D4AF37]/12 group-hover:border-[#D4AF37]"
                  style={styles.iconBox}
                >
                  <reason.icon size={22} style={{ color: colors.gold }} strokeWidth={1.5} />
                </div>
                
                <h3 style={{ color: colors.white, fontSize: '1.5rem', fontWeight: 300, marginBottom: '16px', letterSpacing: '-0.01em' }}>
                  {reason.title}
                </h3>
                
                <p style={{ color: `${colors.white}65`, fontSize: '14px', lineHeight: 1.7, fontWeight: 300 }}>
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
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'url("/grid-pattern.svg")' }}
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeCustom }}
              className="text-center lg:border-r border-white/10 lg:last:border-0 group cursor-default"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  color: colors.white, 
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                  fontWeight: 300, 
                  letterSpacing: '-0.03em',
                  marginBottom: '12px',
                  transition: 'color 0.3s ease'
                }}
                className="group-hover:text-[#D4AF37]"
              >
                {stat.value}
              </motion.div>
              <div 
                style={{ 
                  color: colors.gold, 
                  fontSize: 'clamp(9px, 1.8vw, 10px)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.25em',
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