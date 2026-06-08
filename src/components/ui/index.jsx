import { motion } from 'framer-motion'
import { useInView } from '../../hooks'

// Section Header with overline + title + subtitle
export const SectionHeader = ({ overline, title, subtitle, center = false, light = false, className = '' }) => {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      {overline && (
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="h-px w-8 bg-gold/60" />
          <span className="overline-text">{overline}</span>
          <span className="h-px w-8 bg-gold/60" />
        </div>
      )}
      {title && (
        <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 ${
          light ? 'text-cream' : 'text-cream'
        }`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`font-body text-base md:text-lg leading-relaxed ${
          light ? 'text-silver/80' : 'text-silver/70'
        } ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

// Gold divider line
export const GoldDivider = ({ className = '' }) => (
  <div className={`divider-gold my-8 ${className}`} />
)

// Badge component
export const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-3 py-1 text-2xs font-body font-semibold tracking-wider uppercase ${className}`}>
    {children}
  </span>
)

// Scroll reveal wrapper
export const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Button components
export const Button = ({ children, variant = 'gold', size = 'md', className = '', ...props }) => {
  const variants = {
    gold: 'btn-gold',
    outline: 'btn-outline',
    ghost: 'text-gold hover:text-gold-light font-body font-medium text-sm tracking-wide uppercase transition-all duration-300 inline-flex items-center gap-2',
  }
  const sizes = {
    sm: 'text-xs py-2.5 px-5',
    md: '',
    lg: 'text-base py-5 px-10',
  }

  return (
    <button className={`${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Stat card
export const StatCard = ({ value, label, delay = 0 }) => {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-6xl font-light text-gold-gradient mb-2">{value}</div>
      <div className="overline-text">{label}</div>
    </motion.div>
  )
}

// Avatar with initials
export const Avatar = ({ initials, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-14 h-14 text-base',
    xl: 'w-20 h-20 text-xl',
  }

  return (
    <div className={`${sizes[size]} bg-gold/15 border border-gold/25 flex items-center justify-center font-display font-semibold text-gold ${className}`}>
      {initials}
    </div>
  )
}

// Feature tag
export const FeatureTag = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 text-silver/70 text-xs font-body px-3 py-1.5 bg-surface border border-white/5">
    <span className="w-1 h-1 rounded-full bg-gold/60" />
    {children}
  </span>
)
