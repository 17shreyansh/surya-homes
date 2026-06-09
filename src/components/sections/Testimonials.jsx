import { motion } from 'framer-motion';

// Assuming you have this data, using fallback if not
import { testimonials } from '../../data/testimonials';

const cinematicEase = [0.25, 1, 0.5, 1];

// Strict Surya Homes Palette
const theme = {
  navy: '#082F67',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
};

// Fallback data structure just in case
const displayTestimonials = testimonials?.length ? testimonials : [
  {
    id: 1,
    text: "Surya Homes made buying our new house simple and stress-free. The quality of the work is incredible, and they were always honest with us.",
    name: "Arjun Singhania",
    location: "Villa Owner"
  },
  {
    id: 2,
    text: "There were no hidden fees and no confusing paperwork. They did exactly what they promised, on time. We couldn't be happier.",
    name: "Dr. Meera Kapoor",
    location: "Apartment Resident"
  },
  {
    id: 3,
    text: "The team helped us long after we moved in. The neighborhood is beautiful, and the house feels like it was built to last forever.",
    name: "Vikram & Anjali Desai",
    location: "Homeowners"
  }
];

export function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: cinematicEase }}
      className="flex flex-col h-full pt-8 sm:pt-10"
      style={{ borderTop: `1px solid ${theme.gold}` }}
    >
      {/* Simple, Readable Quote */}
      <p 
        className="text-xl sm:text-2xl flex-grow mb-8"
        style={{ 
          fontFamily: '"Playfair Display", serif', 
          color: theme.navy, 
          lineHeight: 1.5, 
          fontWeight: 400,
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Clean Author Info */}
      <div className="mt-auto">
        <div 
          style={{ 
            fontFamily: '"Inter", sans-serif', 
            color: theme.navy, 
            fontSize: '11px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            fontWeight: 600,
            marginBottom: '4px'
          }}
        >
          {testimonial.name}
        </div>
        <div 
          style={{ 
            fontFamily: '"Inter", sans-serif', 
            color: `${theme.navy}70`, 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em' 
          }}
        >
          {testimonial.location}
        </div>
      </div>
    </motion.div>
  );
}

export default function ClientStories() {
  return (
    <section 
      className="py-24 sm:py-32 lg:py-40"
      style={{ backgroundColor: theme.ivory }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Simple, Confident Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cinematicEase }}
            className="block mb-6"
            style={{ 
              fontFamily: '"Inter", sans-serif', 
              color: theme.gold, 
              fontSize: '10px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.3em', 
              fontWeight: 600 
            }}
          >
            Client Stories
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: cinematicEase }}
            className="text-4xl sm:text-5xl lg:text-6xl m-0"
            style={{ fontFamily: '"Playfair Display", serif', color: theme.navy, lineHeight: 1.1 }}
          >
            Hear from our <br className="hidden sm:block" />
            <span style={{ fontStyle: 'italic', color: theme.navy }}>homeowners.</span>
          </motion.h2>
        </div>

        {/* Clean, 3-Column Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 xl:gap-24">
          {displayTestimonials.slice(0, 3).map((t, index) => (
            <TestimonialCard key={t.id} testimonial={t} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}