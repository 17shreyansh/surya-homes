import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import FeaturedProperties from '../components/sections/FeaturedProperties'
import { WhyChooseUs, Stats } from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import {
  PropertyCategories,
  LuxuryLifestyle,
  BlogPreview,
  Newsletter,
  CTASection,
} from '../components/sections'

export default function Home() {
  return (
    <Layout fullBleed>
      <Hero />
      <FeaturedProperties />
      <PropertyCategories />
      <Stats />
      <WhyChooseUs />
      <LuxuryLifestyle />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
      <CTASection />
    </Layout>
  )
}
