import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react'
import { CONTACT, SOCIAL, SITE_NAME, FOOTER_LINKS } from '../../constants'
import logoImage from '../../assets/Logo_1.png'

const cinematicEase = [0.25, 1, 0.5, 1]

const theme = {
  navy: '#082F67',
  charcoal: '#101826',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  text: '#0B2340',
}

const styles = {
  footer: {
    backgroundColor: theme.navy,
    position: 'relative',
    overflow: 'hidden',
  },
  overline: {
    fontFamily: '"Inter", sans-serif',
    color: theme.gold,
    fontSize: '9px',
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
    fontWeight: 600,
    marginBottom: '16px',
    display: 'block',
  },
  bodyText: {
    fontFamily: '"Inter", sans-serif',
    color: `${theme.ivory}80`,
    fontSize: '13px',
    lineHeight: '1.7',
    fontWeight: 300,
  },
  link: {
    fontFamily: '"Inter", sans-serif',
    color: `${theme.ivory}70`,
    fontSize: '11px',
    fontWeight: 400,
    letterSpacing: '0.02em',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'color 0.4s ease',
  },
  bottomBar: {
    borderTop: `1px solid ${theme.ivory}10`,
    backgroundColor: theme.charcoal,
  }
}

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2, backgroundColor: `${theme.gold}15` }}
    transition={{ duration: 0.4, ease: cinematicEase }}
    style={{
      width: '36px',
      height: '36px',
      border: `1px solid ${theme.ivory}20`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.ivory,
      willChange: 'transform, background-color'
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
      onMouseEnter={(e) => e.currentTarget.style.color = theme.ivory}
      onMouseLeave={(e) => e.currentTarget.style.color = `${theme.ivory}70`}
    >
      {link.label}
    </Link>
  </li>
)

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: cinematicEase } 
  }
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 py-24 lg:py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: cinematicEase }}
                src={logoImage} 
                alt={SITE_NAME} 
                style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p style={{ ...styles.bodyText, marginBottom: '24px', maxWidth: '380px' }}>
              Curating Greater Noida's finest residential and commercial properties since 2010. Quality homes for families who value trust and transparency.
            </p>
            <div className="flex items-center gap-2.5 mb-8">
              <SocialIcon Icon={Facebook} href={SOCIAL.facebook} />
              <SocialIcon Icon={Instagram} href={SOCIAL.instagram} />
              <SocialIcon Icon={Twitter} href={SOCIAL.twitter} />
              <SocialIcon Icon={Youtube} href={SOCIAL.youtube} />
              <SocialIcon Icon={Linkedin} href={SOCIAL.linkedin} />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 style={styles.overline}>Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <LinkItem key={link.path} link={link} />
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 style={styles.overline}>Company</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <LinkItem key={link.path} link={link} />
              ))}
            </ul>
          </motion.div>

          {/* Contact Data */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 style={styles.overline}>Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={13} style={{ color: theme.gold, marginTop: '3px', flexShrink: 0 }} />
                <span style={styles.bodyText}>{CONTACT.address}</span>
              </li>
              <li>
                <a 
                  href={`tel:${CONTACT.phone}`} 
                  className="flex items-center gap-3"
                  style={{ ...styles.bodyText, transition: 'color 0.4s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = theme.gold}
                  onMouseLeave={(e) => e.currentTarget.style.color = `${theme.ivory}80`}
                >
                  <Phone size={13} style={{ color: theme.gold, flexShrink: 0 }} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${CONTACT.email}`} 
                  className="flex items-center gap-3"
                  style={{ ...styles.bodyText, transition: 'color 0.4s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = theme.gold}
                  onMouseLeave={(e) => e.currentTarget.style.color = `${theme.ivory}80`}
                >
                  <Mail size={13} style={{ color: theme.gold, flexShrink: 0 }} />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: `1px solid ${theme.ivory}15` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Clock size={13} style={{ color: theme.gold }} />
                <span style={{ ...styles.overline, marginBottom: 0, fontSize: '8px' }}>Hours</span>
              </div>
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
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}50`, fontSize: '10px', fontWeight: 400, letterSpacing: '0.05em', textAlign: 'center' }}>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-center">
            <Link to="/privacy-policy" style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}50`, fontSize: '10px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = theme.gold} onMouseLeave={(e) => e.currentTarget.style.color = `${theme.ivory}50`}>Privacy</Link>
            <Link to="/terms" style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}50`, fontSize: '10px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = theme.gold} onMouseLeave={(e) => e.currentTarget.style.color = `${theme.ivory}50`}>Terms</Link>
            <a 
              href="https://www.digitaladhyay.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                fontFamily: '"Inter", sans-serif',
                color: `${theme.ivory}50`, 
                fontSize: '10px', 
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme.gold}
              onMouseLeave={(e) => e.currentTarget.style.color = `${theme.ivory}50`}
            >
              Digital Adhyay
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}