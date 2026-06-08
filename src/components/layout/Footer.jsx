import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react'
import { CONTACT, SOCIAL, SITE_NAME, FOOTER_LINKS } from '../../constants'
import logoImage from '../../assets/Logo_1.png'

// High-end easing curve
const easeCustom = [0.16, 1, 0.3, 1]

// Precise visual control
const colors = {
  navy: '#0A0F1C',
  black: '#000000',
  charcoal: '#1A1A1A',
  gold: '#D4AF37',
  white: '#FFFFFF',
}

const styles = {
  footer: {
    backgroundColor: colors.navy,
    borderTop: `1px solid ${colors.white}10`,
    position: 'relative',
    overflow: 'hidden',
  },
  overline: {
    color: colors.gold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    fontWeight: 500,
    marginBottom: '24px',
    display: 'block',
  },
  bodyText: {
    color: `${colors.white}70`,
    fontSize: '13px',
    lineHeight: '1.8',
    fontWeight: 300,
    letterSpacing: '0.02em',
  },
  link: {
    color: `${colors.white}70`,
    fontSize: '12px',
    fontWeight: 300,
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'color 0.3s ease',
  },
  bottomBar: {
    borderTop: `1px solid ${colors.white}05`,
    backgroundColor: colors.black,
  }
}

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, borderColor: `${colors.gold}80`, color: colors.gold }}
    transition={{ duration: 0.3, ease: easeCustom }}
    style={{
      width: '40px',
      height: '40px',
      border: `1px solid ${colors.white}15`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: `${colors.white}60`,
      willChange: 'transform, border-color, color'
    }}
  >
    <Icon size={14} strokeWidth={1.5} />
  </motion.a>
)

const LinkItem = ({ link }) => (
  <li>
    <Link
      to={link.path}
      className="group"
      style={styles.link}
      onMouseEnter={(e) => e.currentTarget.style.color = colors.white}
      onMouseLeave={(e) => e.currentTarget.style.color = `${colors.white}70`}
    >
      <ArrowRight 
        size={12} 
        style={{ color: `${colors.gold}50`, willChange: 'transform', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease' }} 
        className="group-hover:translate-x-1 group-hover:text-[#D4AF37]" 
      />
      {link.label}
    </Link>
  </li>
)

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeCustom } 
  }
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      {/* Subtle background glow */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: `radial-gradient(circle, ${colors.gold}40 0%, transparent 100%)`,
          opacity: 0.5
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:pr-12">
            <Link to="/" className="inline-block mb-8" style={{ willChange: 'transform' }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: easeCustom }}
                src={logoImage} 
                alt={SITE_NAME} 
                style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.15))' }}
              />
            </Link>
            <span style={styles.overline}>Architectural Excellence</span>
            <p style={{ ...styles.bodyText, marginBottom: '32px' }}>
              Curating and developing Greater Noida's most uncompromising residential and commercial spaces since 2010. Engineered for those who demand precision.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon Icon={Facebook} href={SOCIAL.facebook} />
              <SocialIcon Icon={Instagram} href={SOCIAL.instagram} />
              <SocialIcon Icon={Twitter} href={SOCIAL.twitter} />
              <SocialIcon Icon={Youtube} href={SOCIAL.youtube} />
              <SocialIcon Icon={Linkedin} href={SOCIAL.linkedin} />
            </div>
          </motion.div>

          {/* Spacer for structural balance */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 style={styles.overline}>Portfolio</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <LinkItem key={link.path} link={link} />
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 style={styles.overline}>Enterprise</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.company.map((link) => (
                <LinkItem key={link.path} link={link} />
              ))}
            </ul>
          </motion.div>

          {/* Contact Data */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 style={styles.overline}>Headquarters</h4>
            <ul className="flex flex-col gap-5 mb-8">
              <li className="flex items-start gap-4">
                <MapPin size={14} style={{ color: colors.gold, marginTop: '4px', flexShrink: 0 }} />
                <span style={styles.bodyText}>{CONTACT.address}</span>
              </li>
              <li>
                <a 
                  href={`tel:${CONTACT.phone}`} 
                  className="flex items-center gap-4 group"
                  style={{ ...styles.bodyText, transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.gold}
                  onMouseLeave={(e) => e.currentTarget.style.color = `${colors.white}70`}
                >
                  <Phone size={14} style={{ color: colors.gold, flexShrink: 0 }} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${CONTACT.email}`} 
                  className="flex items-center gap-4 group"
                  style={{ ...styles.bodyText, transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.gold}
                  onMouseLeave={(e) => e.currentTarget.style.color = `${colors.white}70`}
                >
                  <Mail size={14} style={{ color: colors.gold, flexShrink: 0 }} />
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            {/* Replaced bulky box with a sleek architectural line-separator for hours */}
            <div style={{ borderLeft: `1px solid ${colors.gold}40`, paddingLeft: '16px' }}>
              <span style={{ ...styles.overline, marginBottom: '8px', fontSize: '9px', color: `${colors.white}50` }}>
                Operating Hours
              </span>
              <p style={{ ...styles.bodyText, fontSize: '12px' }}>
                {CONTACT.hours.weekdays}<br />
                {CONTACT.hours.sunday}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: `${colors.white}40`, fontSize: '11px', fontWeight: 300, letterSpacing: '0.05em' }}>
            © {year} {SITE_NAME}. ALL RIGHTS RESERVED.
          </p>
          <a 
            href="https://www.digitaladhyay.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: `${colors.white}40`, 
              fontSize: '11px', 
              fontWeight: 300,
              letterSpacing: '0.05em',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.gold}
            onMouseLeave={(e) => e.currentTarget.style.color = `${colors.white}40`}
          >
            Developed by Digital Adhyay
          </a>
        </div>
      </div>
    </footer>
  )
}