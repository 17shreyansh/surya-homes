# Surya Homes — Luxury Real Estate Platform

Premium React.js real estate website for Surya Homes, Greater Noida.

## Tech Stack

- **React 18** + **Vite 5** – fast builds and HMR
- **React Router DOM v6** – client-side routing with lazy loading
- **Tailwind CSS v3** – utility-first styling with custom luxury design tokens
- **Framer Motion** – smooth, production-grade animations
- **Swiper.js** – touch-friendly property and testimonial carousels
- **React Hook Form** – lightweight form validation
- **Lucide React** – consistent icon library

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` after starting dev server.

## Project Structure

```
src/
├── App.jsx                  # Root component with BrowserRouter
├── main.jsx                 # React DOM entry point
├── index.css                # Global styles, Tailwind layers, custom utilities
│
├── routes/
│   └── index.jsx            # All routes with React.lazy + Suspense
│
├── constants/
│   └── index.js             # Site config, nav links, contact, filter options
│
├── data/                    # Static data (replace with API calls later)
│   ├── properties.js        # 6 sample properties with full metadata
│   ├── testimonials.js      # 6 client testimonials
│   ├── blogs.js             # 6 blog articles with markdown content
│   ├── services.js          # 6 service offerings
│   ├── faq.js               # 10 FAQs with categories
│   └── team.js              # 6 team members + company timeline
│
├── hooks/
│   └── index.js             # useScrollPosition, useInView, useMediaQuery, useBodyLock
│
├── utils/
│   └── helpers.js           # formatPrice, formatDate, slugify, truncate, getStatusColor
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Glassmorphism nav with mobile drawer
│   │   ├── Footer.jsx       # Multi-column footer with social links
│   │   └── Layout.jsx       # Page wrapper with scroll-to-top
│   │
│   ├── ui/
│   │   └── index.jsx        # SectionHeader, Badge, Button, StatCard, Avatar, ScrollReveal
│   │
│   ├── property/
│   │   └── PropertyCard.jsx # Feature-rich property card with hover effects
│   │
│   ├── blog/
│   │   └── BlogCard.jsx     # Blog card with default + horizontal variants
│   │
│   ├── forms/
│   │   ├── NewsletterForm.jsx
│   │   └── index.jsx        # ContactForm + InquiryForm
│   │
│   └── sections/
│       ├── Hero.jsx         # Parallax hero with search panel
│       ├── FeaturedProperties.jsx
│       ├── WhyChooseUs.jsx  # WhyChooseUs + Stats
│       ├── Testimonials.jsx # Swiper testimonial carousel
│       └── index.jsx        # PropertyCategories, LuxuryLifestyle, BlogPreview, Newsletter, CTA
│
└── pages/
    ├── Home.jsx
    ├── Properties.jsx       # Advanced filtered listing
    ├── PropertyDetails.jsx  # Gallery + specs + inquiry form
    ├── About.jsx            # Story, timeline, team, mission
    ├── Blog.jsx
    ├── BlogDetails.jsx      # Article with markdown rendering
    ├── Contact.jsx
    ├── Services.jsx
    ├── FAQ.jsx              # Accordion with category filters
    ├── PrivacyPolicy.jsx
    ├── TermsConditions.jsx
    └── NotFound.jsx
```

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/properties` | Properties Listing (with filters) |
| `/properties/:slug` | Property Details |
| `/about` | About |
| `/blog` | Blog Listing |
| `/blog/:slug` | Blog Details |
| `/contact` | Contact |
| `/services` | Services |
| `/faq` | FAQ |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `*` | 404 Not Found |

## Design System

| Token | Value |
|-------|-------|
| `obsidian` | `#0A0B0D` – deepest background |
| `navy` | `#0F1623` – secondary background |
| `charcoal` | `#16191F` – card surfaces |
| `surface` | `#1E2230` – elevated surfaces |
| `gold` | `#C9A455` – primary accent |
| `cream` | `#F0EAD6` – body text |
| `silver` | `#8E9BAA` – muted text |
| Display font | Cormorant Garamond |
| Body font | Plus Jakarta Sans |

## Custom CSS Utilities

```css
.text-gold-gradient   /* Gold gradient text for headlines */
.glass                /* Glassmorphism panel */
.glass-dark           /* Darker glassmorphism */
.card-hover           /* Lift + shadow on hover */
.gold-border          /* Subtle gold border */
.btn-gold             /* Primary CTA button */
.btn-outline          /* Secondary outlined button */
.input-luxury         /* Styled form input */
.section-padding      /* Consistent section spacing */
.container-luxury     /* Max-width + responsive padding */
.overline-text        /* Gold uppercase tracking label */
.divider-gold         /* Gradient gold horizontal rule */
```

## Connecting a Backend

All data is in `src/data/*.js`. To connect an API:

1. Replace the static imports with `fetch()` or `axios` calls
2. Add React Query or SWR for caching and loading states
3. Update the form handlers in `src/components/forms/` to call your API

## Environment

No environment variables required for the frontend-only build.
For production, set `VITE_API_URL` if adding backend calls.

---

© 2026 Surya Homes. All rights reserved. RERA: UPRERAPRJ23458
