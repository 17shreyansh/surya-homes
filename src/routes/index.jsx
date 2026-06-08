import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Properties = lazy(() => import('../pages/Properties'))
const PropertyDetails = lazy(() => import('../pages/PropertyDetails'))
const About = lazy(() => import('../pages/About'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogDetails = lazy(() => import('../pages/BlogDetails'))
const Contact = lazy(() => import('../pages/Contact'))
const FAQ = lazy(() => import('../pages/FAQ'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('../pages/TermsConditions'))
const NotFound = lazy(() => import('../pages/NotFound'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 border-2 border-gold/20 rotate-45" />
          <div className="absolute inset-0 border-t-2 border-gold rotate-45 animate-spin" />
        </div>
        <span className="text-gold/40 text-xs font-body tracking-widest uppercase">Loading</span>
      </div>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:slug" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
