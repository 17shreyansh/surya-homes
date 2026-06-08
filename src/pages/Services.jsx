import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, HardHat, Briefcase, FileText, Palette, ArrowRight, BadgeIndianRupee } from 'lucide-react'
import Layout from '../components/layout/Layout'
import { SectionHeader, ScrollReveal } from '../components/ui'
import { WhyChooseUs, Stats } from '../components/sections/WhyChooseUs'
import { Newsletter, CTASection } from '../components/sections'
import { services } from '../data/services'

const iconMap = {
  Building2,
  HardHat,
  Briefcase,
  BadgeIndianRupee,
  FileText,
  Palette,
}

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=50"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container-luxury text-center relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="overline-text">What We Offer</span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cream font-light mb-4">
              Our <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-silver/60 font-body text-base md:text-lg max-w-xl mx-auto">
              End-to-end real estate services under one roof — from property discovery to post-purchase support.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-padding bg-obsidian">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Building2
              return (
                <ScrollReveal key={service.id} delay={i * 0.08}>
                  <div className="group flex flex-col md:flex-row gap-0 bg-charcoal border border-white/5 gold-border-hover overflow-hidden card-hover h-full">
                    {/* Image */}
                    <div className="w-full md:w-48 shrink-0 overflow-hidden aspect-[4/3] md:aspect-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col">
                      <div className="w-10 h-10 border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold/40 transition-all duration-300">
                        <Icon size={18} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-xl text-cream font-light mb-3">{service.title}</h3>
                      <p className="text-silver/60 font-body text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                      <div className="space-y-2 mb-5">
                        {service.features.map(f => (
                          <div key={f} className="flex items-center gap-2">
                            <span className="text-gold text-xs">→</span>
                            <span className="text-silver/60 text-xs font-body">{f}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact" className="btn-outline text-xs py-2.5 px-5 inline-flex self-start">
                        Enquire <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <Stats />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  )
}
