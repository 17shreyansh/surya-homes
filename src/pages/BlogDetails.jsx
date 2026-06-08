import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ChevronRight, ArrowLeft, Tag } from 'lucide-react'
import Layout from '../components/layout/Layout'
import BlogCard from '../components/blog/BlogCard'
import { ScrollReveal } from '../components/ui'
import { Newsletter } from '../components/sections'
import { getBlogBySlug, getRelatedBlogs, blogs } from '../data/blogs'
import { formatDate } from '../utils/helpers'

function renderMarkdown(content) {
  if (!content) return ''
  return content
    .replace(/^# (.+)$/gm, '<h1 class="font-display text-4xl text-cream font-light mb-6 mt-10 leading-tight">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl text-cream font-light mb-4 mt-8">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl text-cream font-light mb-3 mt-6">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-cream font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-silver/80 italic">$1</em>')
    .replace(/^(\d+\. .+)$/gm, '<li class="text-silver/70 font-body text-sm leading-relaxed mb-2 ml-4 list-decimal">$1</li>')
    .replace(/^- (.+)$/gm, '<li class="text-silver/70 font-body text-sm leading-relaxed mb-2 ml-4 list-disc">$1</li>')
    .replace(/^(?!<[hl]|<li)(.+)$/gm, '<p class="text-silver/70 font-body text-sm leading-relaxed mb-4">$1</p>')
}

export default function BlogDetails() {
  const { slug } = useParams()
  const blog = getBlogBySlug(slug)

  if (!blog) return <Navigate to="/blog" replace />

  const related = getRelatedBlogs(blog.id, blog.category)

  return (
    <Layout>
      <div className="bg-obsidian">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-luxury max-w-4xl py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-silver/40 text-xs font-body mb-8">
            <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-silver/60">{blog.category}</span>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-silver/60 hover:text-gold text-sm font-body mb-8 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <ScrollReveal>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="overline-text">{blog.category}</span>
              <div className="w-1 h-1 rounded-full bg-silver/30" />
              <div className="flex items-center gap-1.5 text-silver/50 text-xs font-body">
                <Calendar size={12} />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-silver/50 text-xs font-body">
                <Clock size={12} />
                <span>{blog.readTime} read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl text-cream font-light leading-tight mb-6">
              {blog.title}
            </h1>

            <p className="text-silver/60 font-body text-base leading-relaxed mb-8 border-l-2 border-gold/40 pl-5 italic">
              {blog.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 p-5 bg-charcoal border border-white/5 mb-10">
              <div className="w-11 h-11 bg-gold/15 border border-gold/25 flex items-center justify-center font-display font-semibold text-gold text-sm">
                {blog.authorAvatar}
              </div>
              <div>
                <div className="text-cream font-body text-sm font-medium">{blog.author}</div>
                <div className="text-silver/50 text-xs font-body">Surya Homes Editorial Team</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Article Content */}
          <ScrollReveal delay={0.1}>
            <div className="divider-gold mb-10" />
            <article
              className="prose-luxury"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(blog.content) }}
            />
            <div className="divider-gold mt-10 mb-8" />
          </ScrollReveal>

          {/* Tags */}
          {blog.tags && (
            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-3 mb-12">
                <Tag size={13} className="text-gold/60" />
                {blog.tags.map(tag => (
                  <span key={tag} className="text-xs font-body text-silver/60 border border-white/10 px-3 py-1.5 hover:border-gold/30 hover:text-gold transition-all duration-300 cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="border-t border-white/5 section-padding">
            <div className="container-luxury">
              <h2 className="font-display text-3xl text-cream font-light mb-10">
                Related <span className="text-gold-gradient">Articles</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((b, i) => (
                  <BlogCard key={b.id} blog={b} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Newsletter />
    </Layout>
  )
}
