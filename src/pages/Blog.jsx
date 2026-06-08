import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/layout/Layout'
import BlogCard from '../components/blog/BlogCard'
import { SectionHeader, ScrollReveal } from '../components/ui'
import { Newsletter } from '../components/sections'
import { blogs } from '../data/blogs'

const categories = ['All', ...new Set(blogs.map(b => b.category))]

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active)

  return (
    <Layout>
      {/* Header */}
      <div className="bg-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/2 top-0 w-96 h-96 bg-gold blur-3xl rounded-full -translate-x-1/2" />
        </div>
        <div className="container-luxury text-center relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="overline-text">Blog & Insights</span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cream font-light mb-4">
              Real Estate <span className="text-gold-gradient">Intelligence</span>
            </h1>
            <p className="text-silver/60 font-body text-base md:text-lg max-w-xl mx-auto">
              Expert market analysis, buying guides, and interior inspiration for informed property decisions.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Featured */}
      {blogs.filter(b => b.featured).length > 0 && (
        <section className="section-padding bg-obsidian">
          <div className="container-luxury">
            <div className="flex items-center gap-3 mb-10">
              <span className="overline-text">Editor's Pick</span>
              <span className="h-px flex-1 bg-gold/10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Featured large card */}
              {(() => {
                const featured = blogs.find(b => b.featured)
                return (
                  <ScrollReveal>
                    <a href={`/blog/${featured.slug}`} className="group block relative overflow-hidden aspect-[4/3] bg-charcoal">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-90 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <span className="overline-text mb-3">{featured.category}</span>
                        <h2 className="font-display text-2xl md:text-3xl text-cream font-light leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                          {featured.title}
                        </h2>
                        <div className="text-silver/50 text-xs font-body">{featured.author} · {featured.readTime} read</div>
                      </div>
                    </a>
                  </ScrollReveal>
                )
              })()}

              {/* Side cards */}
              <div className="flex flex-col gap-6">
                {blogs.filter(b => b.featured).slice(1, 3).map((blog, i) => (
                  <ScrollReveal key={blog.id} delay={i * 0.1}>
                    <BlogCard blog={blog} variant="horizontal" />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section-padding bg-navy">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 className="font-display text-3xl text-cream font-light">
              All <span className="text-gold-gradient">Articles</span>
            </h2>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 text-xs font-body font-medium tracking-wide uppercase border transition-all duration-300 ${
                    active === cat
                      ? 'bg-gold text-obsidian border-gold'
                      : 'text-silver/60 border-white/10 hover:border-gold/30 hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
