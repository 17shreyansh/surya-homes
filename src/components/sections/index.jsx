import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

// Assuming these are your internal components
import { ScrollReveal } from '../ui';
import BlogCard from '../blog/BlogCard';
import NewsletterForm from '../forms/NewsletterForm';
import { getFeaturedBlogs } from '../../data/blogs';
import heroImg from '../../assets/hero.png';

// High-end cinematic easing curve
const cinematicEase = [0.25, 1, 0.5, 1];

// Strict Surya Homes Palette
const theme = {
  navy: '#082F67',
  charcoal: '#0A0F1A',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
};

// ==========================================
// 1. PROPERTY CATEGORIES (Unsymmetric Grid)
// ==========================================

const categories = [
  { 
    label: 'Villas', count: '45 Homes', path: '/properties?type=Villa', 
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80', 
    // Spans wide across the top
    span: 'md:col-span-8 md:row-span-1' 
  },
  { 
    label: 'Apartments', count: '200 Homes', path: '/properties?type=Apartment', 
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', 
    // Spans tall down the right side
    span: 'md:col-span-4 md:row-span-2' 
  },
  { 
    label: 'Penthouses', count: '20 Homes', path: '/properties?type=Penthouse', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', 
    // Fills the bottom left
    span: 'md:col-span-4 md:row-span-1' 
  },
  { 
    label: 'Commercial', count: '60 Spaces', path: '/properties?type=Commercial', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', 
    // Fills the bottom middle
    span: 'md:col-span-4 md:row-span-1' 
  },
];

export function PropertyCategories() {
  return (
    <section className="py-24 lg:py-40" style={{ backgroundColor: theme.beige }}>
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Simple, Confident Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b pb-8" style={{ borderColor: `${theme.navy}15` }}>
          <div className="max-w-2xl">
            <span className="block mb-4 text-[10px] uppercase tracking-[0.3em] font-bold" style={{ fontFamily: '"Inter", sans-serif', color: theme.gold }}>
              What We Offer
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl m-0 leading-[1.1]" style={{ fontFamily: '"Playfair Display", serif', color: theme.navy }}>
              Explore Our <span style={{ fontStyle: 'italic' }}>Homes.</span>
            </h2>
          </div>
          <p className="text-base m-0 max-w-sm" style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}80`, lineHeight: 1.6 }}>
            Beautifully designed spaces for every lifestyle. Find the perfect place for your family or business.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-[300px] lg:auto-rows-[400px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 1, ease: cinematicEase }}
              className={`group relative overflow-hidden bg-black cursor-pointer ${cat.span}`}
              style={{ willChange: 'transform' }}
            >
              <Link to={cat.path} className="block w-full h-full text-decoration-none relative">
                
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105 group-hover:opacity-100"
                  style={{ willChange: 'transform' }}
                />
                
                {/* Gradient for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/90 via-[#0A0F1A]/20 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-70" />

                {/* Content Embedded Inside Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl sm:text-4xl mb-2" style={{ fontFamily: '"Playfair Display", serif', color: theme.ivory, lineHeight: 1.1 }}>
                      {cat.label}
                    </h3>
                    <div style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500 }}>
                      {cat.count}
                    </div>
                  </div>
                  
                  {/* Subtle Interactive Icon */}
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center transform translate-y-4 opacity-0 transition-all duration-500 ease-[0.25,1,0.5,1] group-hover:translate-y-0 group-hover:opacity-100 backdrop-blur-sm" style={{ borderColor: 'rgba(250, 248, 243, 0.3)', backgroundColor: 'rgba(250, 248, 243, 0.1)' }}>
                    <ArrowUpRight size={18} color={theme.ivory} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. WHY SURYA HOMES (Light Theme)
// ==========================================

export function LuxuryLifestyle() {
  const ethosPoints = [
    { title: 'Built to Last', desc: 'We use the highest quality materials so your home stays beautiful and safe for decades.' },
    { title: 'Honest Prices', desc: 'No hidden fees or confusing paperwork. What you see is exactly what you pay.' },
    { title: 'Great Locations', desc: 'We only build in safe, clean neighborhoods that grow in value over time.' },
    { title: 'Always Here For You', desc: 'Our team is ready to help you with everything, even years after you move in.' },
  ];

  return (
    <section className="py-24 lg:py-40 relative" style={{ backgroundColor: theme.ivory }}>
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Overlapping Image Gallery */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full flex justify-center items-center">
            {/* Back Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: cinematicEase }}
              className="absolute top-0 left-0 lg:left-0 w-[75%] lg:w-[80%] h-[75%] lg:h-[80%] z-10 shadow-2xl"
            >
              <img src={heroImg} alt="Surya Homes Luxury Property" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Front Image (Light border to match Ivory background) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
              className="absolute bottom-0 right-0 w-[60%] lg:w-[55%] h-[60%] lg:h-[55%] z-20 border-8 shadow-2xl"
              style={{ borderColor: theme.ivory }}
            >
              <img src={heroImg} alt="Surya Homes Interior" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Right: Navy Text on Ivory Background */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <span className="block mb-4 text-[10px] uppercase tracking-[0.3em] font-bold" style={{ fontFamily: '"Inter", sans-serif', color: theme.gold }}>
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 leading-[1.1]" style={{ fontFamily: '"Playfair Display", serif', color: theme.navy }}>
                Quality You <br />
                <span style={{ fontStyle: 'italic', color: theme.gold }}>Can Trust.</span>
              </h2>
              <p className="text-base mb-12 max-w-lg" style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}80`, lineHeight: 1.6 }}>
                Buying a home is a big decision. We make it easy, safe, and exciting. Here is what makes a Surya home different.
              </p>

              <div className="flex flex-col gap-8 mb-12">
                {ethosPoints.map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: cinematicEase }}
                    className="flex items-start gap-6"
                  >
                    <span className="text-2xl mt-[-4px]" style={{ fontFamily: '"Playfair Display", serif', color: theme.gold }}>
                      0{i + 1}.
                    </span>
                    <div>
                      <h4 className="text-xl sm:text-2xl mb-2" style={{ fontFamily: '"Playfair Display", serif', color: theme.navy }}>
                        {point.title}
                      </h4>
                      <p className="text-sm" style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, lineHeight: 1.6 }}>
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="group inline-flex items-center gap-3 cursor-pointer pb-2 border-b"
                style={{ borderColor: 'rgba(8, 47, 103, 0.2)', transition: 'border-color 0.4s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = theme.gold}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'rgba(8, 47, 103, 0.2)'}
              >
                <span style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>
                  Read Our Story
                </span>
                <ArrowRight size={14} style={{ color: theme.gold, transition: 'transform 0.4s ease' }} className="group-hover:translate-x-2" />
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. LATEST NEWS (Blog Preview)
// ==========================================

export function BlogPreview() {
  const blogs = getFeaturedBlogs();

  return (
    <section className="py-24 lg:py-40" style={{ backgroundColor: theme.beige }}>
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="block mb-4 text-[10px] uppercase tracking-[0.3em] font-bold" style={{ fontFamily: '"Inter", sans-serif', color: theme.navy }}>
              Market Updates
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl m-0 leading-[1.1]" style={{ fontFamily: '"Playfair Display", serif', color: theme.navy }}>
              Latest <span style={{ fontStyle: 'italic' }}>News.</span>
            </h2>
          </div>
          
          <Link 
            to="/blog" 
            className="group inline-flex self-start md:self-end items-center gap-3 cursor-pointer pb-2 border-b"
            style={{ borderColor: `${theme.navy}30`, transition: 'border-color 0.4s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = theme.gold}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = `${theme.navy}30`}
          >
            <span style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>
              View All Articles
            </span>
            <ArrowRight size={14} style={{ color: theme.gold, transition: 'transform 0.4s ease' }} className="group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Responsive Grid for Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {blogs.slice(0, 3).map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: cinematicEase }}
              style={{ willChange: 'transform, opacity' }}
            >
              <BlogCard blog={blog} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. STAY IN TOUCH (Newsletter)
// ==========================================

export function Newsletter() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: theme.navy }}>
      <div className="w-full max-w-[800px] mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="block mb-6 text-[10px] uppercase tracking-[0.3em] font-bold" style={{ fontFamily: '"Inter", sans-serif', color: theme.gold }}>
            Stay Connected
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6" style={{ fontFamily: '"Playfair Display", serif', color: theme.ivory, fontWeight: 400 }}>
            Join Our Email List.
          </h2>
          <p className="text-base mx-auto mb-10 sm:mb-12 max-w-md" style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}80`, lineHeight: 1.6 }}>
            Be the first to know about new homes, special offers, and local news. We never send spam.
          </p>
          
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ==========================================
// 5. READY TO BEGIN? (CTA)
// ==========================================

export function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  
  // Parallax effect reduced slightly for better mobile performance
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative py-32 lg:py-48 flex items-center overflow-hidden" style={{ backgroundColor: theme.charcoal }}>
      
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y, willChange: 'transform' }}>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Beautiful Home"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0A0F1A 0%, rgba(10, 15, 26, 0.2) 100%)' }} />
      </motion.div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="block mb-6 text-[10px] uppercase tracking-[0.3em] font-bold" style={{ fontFamily: '"Inter", sans-serif', color: theme.ivory }}>
            Next Steps
          </span>
          <h2 
            className="text-5xl sm:text-6xl lg:text-[7rem] mb-8"
            style={{ fontFamily: '"Playfair Display", serif', color: theme.ivory, lineHeight: 1.05 }}
          >
            Ready to find <br />
            <span style={{ color: theme.gold, fontStyle: 'italic' }}>your home?</span>
          </h2>
          <p className="text-base mx-auto mb-12 max-w-lg" style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}80`, lineHeight: 1.6 }}>
            Our team is here to answer your questions and help you find exactly what you're looking for.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link 
              to="/contact" 
              className="group relative overflow-hidden flex items-center justify-center w-full sm:w-auto px-10 py-5 cursor-pointer"
              style={{ backgroundColor: theme.gold }}
            >
              <div 
                className="absolute inset-0 origin-bottom transform scale-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1] group-hover:scale-y-100 z-0"
                style={{ backgroundColor: theme.ivory, willChange: 'transform' }}
              />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#082F67]" style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600, color: theme.charcoal }}>
                Talk To Us Today
              </span>
            </Link>
            
            <Link 
              to="/properties" 
              className="group flex items-center justify-center w-full sm:w-auto px-10 py-5 cursor-pointer"
              style={{ border: `1px solid rgba(250, 248, 243, 0.4)`, transition: 'all 0.4s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = theme.ivory; e.currentTarget.style.backgroundColor = 'rgba(250, 248, 243, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(250, 248, 243, 0.4)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <span style={{ fontFamily: '"Inter", sans-serif', color: theme.ivory, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>
                View All Homes
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}