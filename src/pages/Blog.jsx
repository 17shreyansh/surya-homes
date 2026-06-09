import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/layout/Layout'
import BlogCard from '../components/blog/BlogCard'
import { Newsletter } from '../components/sections'
import { blogs } from '../data/blogs'

const cinematicEase = [0.25, 1, 0.5, 1]

const theme = {
  navy: '#082F67',
  charcoal: '#101826',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
}

const categories = ['All', ...new Set(blogs.map(b => b.category))]

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active)

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
              <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600 }}>Blog & Insights</span>
              <span className="w-12 h-[1px]" style={{ backgroundColor: theme.gold }} />
            </div>
            <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, fontSize: '5rem', fontWeight: 400, marginBottom: '16px', lineHeight: 1.1 }}>
              Latest <span style={{ fontStyle: 'italic', color: theme.gold }}>News.</span>
            </h1>
            <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '14px', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
              Market insights, buying guides, and design inspiration.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured */}
      {blogs.filter(b => b.featured).length > 0 && (
        <section style={{ backgroundColor: theme.ivory, padding: '80px 0 120px 0' }}>
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
            <div className="flex items-center gap-3 mb-10">
              <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 600 }}>Featured</span>
              <span className="h-px flex-1" style={{ backgroundColor: `${theme.navy}10` }} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(() => {
                const featured = blogs.find(b => b.featured)
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: cinematicEase }}
                  >
                    <a href={`/blog/${featured.slug}`} style={{ display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '4/3', backgroundColor: theme.beige }}>
                      <img
                        src={featured.image}
                        alt={featured.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'all 0.7s ease' }}
                        loading="lazy"
                        onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.03)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.opacity = 0.85; e.currentTarget.style.transform = 'scale(1)'; }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${theme.charcoal} 0%, rgba(16, 24, 38, 0.4) 60%, transparent 100%)` }} />
                      <div style={{ position: 'absolute', inset: 0, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '12px', fontWeight: 600 }}>{featured.category}</span>
                        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', color: theme.ivory, fontWeight: 400, lineHeight: 1.2, marginBottom: '12px' }}>
                          {featured.title}
                        </h2>
                        <div style={{ fontFamily: '"Inter", sans-serif', color: `${theme.ivory}60`, fontSize: '11px', fontWeight: 300 }}>{featured.author} · {featured.readTime} read</div>
                      </div>
                    </a>
                  </motion.div>
                )
              })()}

              <div className="flex flex-col gap-6">
                {blogs.filter(b => b.featured).slice(1, 3).map((blog, i) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: cinematicEase }}
                  >
                    <BlogCard blog={blog} variant="horizontal" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section style={{ backgroundColor: theme.beige, padding: '120px 0' }}>
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', color: theme.navy, fontWeight: 400 }}>
              All <span style={{ fontStyle: 'italic' }}>Articles</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    padding: '10px 20px',
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    border: `1px solid ${active === cat ? theme.gold : `${theme.navy}20`}`,
                    backgroundColor: active === cat ? theme.gold : 'transparent',
                    color: active === cat ? theme.ivory : theme.navy,
                    transition: 'all 0.4s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.borderColor = `${theme.navy}40`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.borderColor = `${theme.navy}20`;
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filtered.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  )
}
