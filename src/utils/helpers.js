export const formatPrice = (price) => {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`
  if (price >= 100000) return `₹${(price / 100000).toFixed(0)} L`
  return `₹${price.toLocaleString('en-IN')}`
}

export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatDateShort = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

export const truncate = (text, length = 120) =>
  text.length > length ? `${text.substring(0, length)}...` : text

export const getInitials = (name) =>
  name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

export const getStatusColor = (status) => {
  const map = {
    'Ready to Move': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    'Under Construction': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    'Available': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    'Sold Out': 'text-red-400 bg-red-400/10 border-red-400/20',
  }
  return map[status] || 'text-silver bg-surface border-white/10'
}

export const getBadgeStyle = (badge) => {
  const map = {
    'Featured': 'bg-gold text-obsidian',
    'Premium': 'bg-gold-dark text-cream',
    'Exclusive': 'bg-obsidian border border-gold/50 text-gold',
    'New Launch': 'bg-emerald-600 text-white',
    'Hot Deal': 'bg-red-700 text-white',
  }
  return map[badge] || 'bg-surface text-silver'
}

export const classNames = (...classes) => classes.filter(Boolean).join(' ')
