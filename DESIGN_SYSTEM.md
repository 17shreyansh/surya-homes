# Design System - Quick Reference

## Color Palette

```css
/* Primary Colors */
--obsidian: #08111F;      /* Main background - deep navy-black */
--charcoal: #101826;      /* Card surfaces - refined charcoal */
--gold: #D4AF37;          /* Primary accent - luxury gold */
--cream: #F8F6F2;         /* Body text - warm white */

/* Extended Palette */
--gold-light: #E8C76A;    /* Hover states */
--gold-dark: #B8972D;     /* Pressed states */
--silver: #A0A8B0;        /* Muted text */
```

## Typography Scale

```css
/* Hero Headlines */
font-size: 5xl → 8xl (3rem → 6rem on desktop)
letter-spacing: -0.02em
font-weight: 300 (Light)

/* Section Headings */
font-size: 3.5rem
letter-spacing: -0.02em
font-weight: 300

/* Card Titles */
font-size: 1.5rem
letter-spacing: -0.01em
font-weight: 300

/* Body Text */
font-size: 14-15px
line-height: 1.7
font-weight: 300

/* Overlines */
font-size: 10px
letter-spacing: 0.35em
text-transform: uppercase
font-weight: 500
```

## Spacing System

```css
/* Section Padding */
py-32 md:py-40 lg:py-48    /* 128px - 192px vertical */

/* Container */
max-w-[1600px]
px-8 md:px-12 lg:px-20     /* 32px - 80px horizontal */

/* Cards */
p-8                         /* 32px internal padding */
gap-8 lg:gap-10            /* 32px - 40px between cards */

/* Margins */
mb-20                       /* 80px section header margin */
mb-96                       /* 384px header to content */
```

## Component Classes

```css
.btn-gold {
  padding: 12px 28px;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.glass {
  background: rgba(16, 24, 38, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(212, 175, 55, 0.15);
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.6);
}
```

## Usage Examples

### Hero Title
```jsx
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 
               leading-[1.05] tracking-[-0.02em] text-white font-light">
  Where Prestige <br />
  <span className="text-white/40 italic font-serif">Meets Perfection</span>
</h1>
```

### Section Header
```jsx
<div className="flex items-center gap-4 mb-8">
  <span className="w-12 h-[1px] bg-[#D4AF37]" />
  <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-medium">
    Curated Portfolio
  </span>
</div>
<h2 className="text-5xl font-light tracking-[-0.02em]">
  Exclusive <span className="text-white/40 italic font-serif">Residences</span>
</h2>
```

### Property Card
```jsx
<div className="bg-[#101826] border border-white/13 p-8 
                hover:border-[#D4AF37]/50 transition-all duration-600">
  {/* Card content */}
</div>
```

## Animation Easing

```javascript
const easeCustom = [0.16, 1, 0.3, 1] // Apple-style cubic-bezier
```

## Opacity Scale

```css
white/40  - Italic accents
white/50  - Secondary headings
white/60  - Subtle text
white/65  - Body text
white/85  - Icons
```
