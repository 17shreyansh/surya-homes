import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { formatDateShort, truncate } from '../../utils/helpers';

// High-end cinematic easing curve
const cinematicEase = [0.25, 1, 0.5, 1];

// Strict Surya Homes Palette
const theme = {
  navy: '#082F67',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
};

export default function BlogCard({ blog, index = 0, variant = 'default' }) {
  const { slug, title, excerpt, category, author, date, readTime, image } = blog;

  // ==========================================
  // VARIANT: HORIZONTAL (For sidebars or lists)
  // ==========================================
  if (variant === 'horizontal') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: cinematicEase }}
      >
        <Link 
          to={`/blog/${slug}`} 
          className="group flex flex-col sm:flex-row gap-6 items-start py-6 border-t"
          style={{ borderColor: `${theme.navy}15`, textDecoration: 'none' }}
        >
          {/* Square Editorial Crop */}
          <div className="w-full sm:w-32 h-48 sm:h-32 shrink-0 overflow-hidden" style={{ backgroundColor: theme.beige }}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105" 
              loading="lazy" 
            />
          </div>
          
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-3 mb-2">
              <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>
                {category}
              </span>
              <span style={{ color: `${theme.navy}40`, fontSize: '10px' }}>•</span>
              <span style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}60`, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                {formatDateShort(date)}
              </span>
            </div>
            
            <h4 
              className="text-lg sm:text-xl transition-colors duration-500 group-hover:text-[#D89B00] mb-2"
              style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, lineHeight: 1.3 }}
            >
              {truncate(title, 65)}
            </h4>
            
            <div style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}60`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              By {author}  •  {readTime}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // ==========================================
  // VARIANT: DEFAULT (For main gallery grids)
  // ==========================================
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: cinematicEase }}
      className="h-full"
    >
      <Link to={`/blog/${slug}`} className="group block h-full flex flex-col text-decoration-none">
        
        {/* Image Container (4:3 Aspect Ratio for print-like feel) */}
        <div className="overflow-hidden aspect-[4/3] mb-6" style={{ backgroundColor: theme.beige }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content Architecture */}
        <div className="flex flex-col flex-grow">
          
          {/* Metadata Row (No Icons) */}
          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>
              {category}
            </span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: `${theme.navy}30` }} />
            <span style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}60`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              {formatDateShort(date)}
            </span>
          </div>

          {/* Monumental Title */}
          <h3 
            className="text-2xl sm:text-3xl transition-colors duration-500 group-hover:text-[#D89B00] mb-4"
            style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, lineHeight: 1.25 }}
          >
            {title}
          </h3>

          {/* Editorial Excerpt */}
          <p 
            className="text-sm mb-6 flex-grow"
            style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}80`, lineHeight: 1.6 }}
          >
            {truncate(excerpt, 120)}
          </p>

          {/* Footer Row */}
          <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: `${theme.navy}10` }}>
            <span style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              {readTime} Read
            </span>
            
            <div className="flex items-center gap-2 transition-transform duration-500 ease-[0.25,1,0.5,1] group-hover:translate-x-1">
              <span style={{ fontFamily: '"Inter", sans-serif', color: theme.navy, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
                Read Article
              </span>
              <ArrowUpRight size={14} style={{ color: theme.gold }} />
            </div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}