import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { formatDateShort, truncate } from '../../utils/helpers'

export default function BlogCard({ blog, index = 0, variant = 'default' }) {
  const { slug, title, excerpt, category, author, date, readTime, image } = blog

  if (variant === 'horizontal') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Link to={`/blog/${slug}`} className="group flex gap-5 items-start">
          <div className="w-24 h-24 shrink-0 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          </div>
          <div>
            <span className="overline-text text-2xs mb-1 block">{category}</span>
            <h4 className="font-display text-base text-cream font-light leading-snug group-hover:text-gold transition-colors duration-300 mb-1">
              {truncate(title, 70)}
            </h4>
            <div className="flex items-center gap-3 text-silver/50 text-xs font-body">
              <span>{formatDateShort(date)}</span>
              <span>·</span>
              <span>{readTime} read</span>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/blog/${slug}`} className="group block bg-charcoal border border-white/5 overflow-hidden card-hover gold-border-hover">
        {/* Image */}
        <div className="overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="overline-text text-2xs">{category}</span>
            <div className="flex items-center gap-3 text-silver/40 text-xs font-body">
              <div className="flex items-center gap-1">
                <Calendar size={10} />
                <span>{formatDateShort(date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={10} />
                <span>{readTime}</span>
              </div>
            </div>
          </div>

          <h3 className="font-display text-xl text-cream font-light leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>

          <p className="text-silver/60 text-sm font-body leading-relaxed mb-5">
            {truncate(excerpt, 110)}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-silver/50 text-xs font-body">By {author}</span>
            <div className="flex items-center gap-1.5 text-gold text-xs font-body font-medium group-hover:gap-3 transition-all duration-300">
              Read More <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
