import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Home, MapPin, Briefcase, Layers } from 'lucide-react'
import { ScrollReveal } from '../ui'
import BlogCard from '../blog/BlogCard'
import NewsletterForm from '../forms/NewsletterForm'
import { getFeaturedBlogs } from '../../data/blogs'

// High-end easing curve
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
  },
  btnSecondary: {
    border: `1px solid ${colors.gold}50`,
    color: colors.gold,
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    padding: '14px 28px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  }
}

const categories = [
  { label: 'Apartments', icon: Building2, count: '200+ homes', path: '/properties?type=Apartment', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=75' },
  { label: 'Villas', icon: Home, count: '45+ homes', path: '/properties?type=Villa', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=75' },
  { label: 'Plots', icon: MapPin, count: '150+ spaces', path: '/properties?type=Plot', image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=75' },
  { label: 'Offices', icon: Briefcase, count: '60+ spaces', path: '/properties?type=Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75' },
  { label: 'Penthouses', icon: Layers, count: '20+ homes', path: '/properties?type=Penthouse', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=75' },
]

export function PropertyCategories() {
  return (
    <section style={{ backgroundColor: colors.black, padding: '100px 0' }}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <span style={styles.overline}>Property Types</span>
          <h2 style={styles.heading}>What are you looking for?</h2>
          <p style={{ ...styles.paragraph, maxWidth: '500px', margin: '0 auto' }}>
            Find the right type of property for your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: easeCustom }}
              style={{ willChange: 'transform, opacity' }}
            >
              <Link 
                to={cat.path} 
                className="group block relative overflow-hidden bg-[#1A1A1A] aspect-[3/4]"
                style={{ border: `1px solid ${colors.white}0A`, transition: 'border-color 0.4s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${colors.gold}50`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = `${colors.white}0A`}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, transition: 'all 0.8s ease', willChange: 'transform' }}
                  className="group-hover:scale-110 group-hover:opacity-80"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <cat.icon size={20} style={{ color: colors.gold, marginBottom: '12px' }} strokeWidth={1.5} />
                  <div style={{ color: colors.white, fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.02em' }}>
                    {cat.label}
                  </div>
                  <div style={{ color: `${colors.white}40`, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>
                    {cat.count}
                  </div>
                </div>

                <div className="absolute top-4 right-4 overflow-hidden">
                  <ArrowRight 
                    size={16} 
                    style={{ color: colors.gold, transform: 'translateX(-100%)', opacity: 0, transition: 'all 0.4s ease', willChange: 'transform' }} 
                    className="group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LuxuryLifestyle() {
  return (
    <section style={{ backgroundColor: colors.charcoal, padding: '120px 0', overflow: 'hidden', borderTop: `1px solid ${colors.white}05` }}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Strict Masonry Image Grid */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e03af7a7b07?w=600&q=80"
                alt="Modern Home"
                style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '3/4', opacity: 0.9 }}
                loading="lazy"
              />
              <div className="flex flex-col gap-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"
                  alt="Clean Interior"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1/1', opacity: 0.9 }}
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
                  alt="Nice View"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1/1', opacity: 0.9 }}
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <div>
            <span style={styles.overline}>Why Choose Us</span>
            <h2 style={styles.heading}>Built for Better Living.</h2>
            <p style={{ ...styles.paragraph, marginBottom: '32px' }}>
              We pick the best homes in safe, clean locations. We believe buying a home should be simple, honest, and easy for you.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              {[
                '100% legally checked and safe properties.',
                'Clear prices. No hidden fees.',
                'One agent to help you from start to finish.',
                'Help with home care even after you buy.',
              ].map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  {/* Minimalist dot instead of a big checkmark box */}
                  <span style={{ width: '4px', height: '4px', backgroundColor: colors.gold, marginTop: '8px', flexShrink: 0 }} />
                  <p style={{ color: `${colors.white}80`, fontSize: '14px', fontWeight: 300 }}>{point}</p>
                </motion.div>
              ))}
            </div>

            <Link 
              to="/about" 
              className="group"
              style={styles.btnSecondary}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.gold; e.currentTarget.style.color = colors.black; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.gold; }}
            >
              Learn About Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BlogPreview() {
  const blogs = getFeaturedBlogs()

  return (
    <section style={{ backgroundColor: colors.black, padding: '100px 0' }}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/5 pb-8">
          <div>
            <span style={styles.overline}>Helpful Articles</span>
            <h2 style={{ ...styles.heading, marginBottom: 0 }}>Latest Market News.</h2>
            <p style={{ ...styles.paragraph, marginTop: '12px' }}>
              Simple tips and updates to help you buy or sell a home.
            </p>
          </div>
          
          <Link 
            to="/blog" 
            className="group flex items-center gap-3"
            style={{ color: colors.gold, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', paddingBottom: '4px' }}
          >
            Read All Articles
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section style={{ backgroundColor: colors.navy, padding: '100px 0', position: 'relative', borderTop: `1px solid ${colors.white}05`, borderBottom: `1px solid ${colors.white}05` }}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <span style={{ ...styles.overline, display: 'inline-block' }}>Get Weekly Updates</span>
          <h2 style={{ ...styles.heading, fontSize: '2.5rem' }}>
            Join Our Email List.
          </h2>
          <p style={{ ...styles.paragraph, maxWidth: '400px', margin: '0 auto 40px auto' }}>
            Be the first to see new homes, price drops, and local news. No spam, just good info.
          </p>
          
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section style={{ position: 'relative', padding: '120px 0', backgroundColor: colors.black, overflow: 'hidden' }}>
      {/* Background Image with Heavy Overlay for Text Readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=60"
          alt="Luxury Home"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #000000 0%, transparent 100%)' }} />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div style={{ maxWidth: '600px' }}>
          <ScrollReveal>
            <span style={styles.overline}>Next Steps</span>
            <h2 style={{ ...styles.heading, fontSize: '3.5rem' }}>
              Ready to Find <br />
              <span style={{ color: `${colors.white}50`, fontStyle: 'italic' }}>Your Home?</span>
            </h2>
            <p style={{ ...styles.paragraph, marginBottom: '40px', fontSize: '16px' }}>
              Talk to our team today. It is free to ask questions, and we are happy to help you find the right place for your budget.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                className="group hover:bg-white hover:text-black"
                style={styles.btnPrimary}
              >
                Talk to Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/properties" 
                className="group hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]"
                style={styles.btnSecondary}
              >
                See Homes First
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}