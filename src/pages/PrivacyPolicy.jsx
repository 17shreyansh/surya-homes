import Layout from '../components/layout/Layout'
import { ScrollReveal } from '../components/ui'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information that you provide directly to us, including name, email address, phone number, and property preferences when you fill out inquiry forms or subscribe to our newsletter. We may also collect information automatically when you use our website, including IP address, browser type, pages visited, and time spent on pages.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to: respond to your property inquiries and send you relevant listings; communicate with you about our services, new developments, and market insights; improve our website and services based on your interactions; comply with legal obligations and prevent fraudulent activity; send periodic newsletter communications where you have subscribed.`,
  },
  {
    title: '3. Information Sharing',
    content: `Surya Homes does not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in website operation, business management, or legal compliance, provided those parties agree to keep this information confidential. We may also disclose information when required by law or to protect our rights.`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organisational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. However, no method of transmission over the Internet or electronic storage is 100% secure.`,
  },
  {
    title: '5. Cookies',
    content: `Our website uses cookies to enhance your browsing experience, analyse site traffic, and personalise content. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features may not function properly without cookies.`,
  },
  {
    title: '6. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to access, correct, or delete your personal information held by us. You may also withdraw consent for marketing communications at any time by contacting us at info@suryahomes.in or by clicking the unsubscribe link in any email we send.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at: Surya Homes, Plot No. 45, Sector Alpha-1, Greater Noida, UP – 201310. Email: info@suryahomes.in | Phone: +91 98765 43210.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="bg-obsidian">
        {/* Header */}
        <div className="bg-charcoal py-20 border-b border-white/5">
          <div className="container-luxury max-w-3xl">
            <ScrollReveal>
              <span className="overline-text mb-4 block">Legal</span>
              <h1 className="font-display text-4xl md:text-5xl text-cream font-light mb-4">Privacy Policy</h1>
              <p className="text-silver/50 font-body text-sm">
                Effective Date: 1 January 2025 · Last Updated: 1 June 2026
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Content */}
        <div className="container-luxury max-w-3xl py-16">
          <ScrollReveal>
            <p className="text-silver/70 font-body text-sm leading-relaxed mb-10 p-6 bg-charcoal border border-gold/10 border-l-2 border-l-gold/50">
              At Surya Homes, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard your personal information when you visit our website or engage with our services.
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div>
                  <h2 className="font-display text-xl text-cream font-light mb-3">{section.title}</h2>
                  <div className="divider-gold mb-4" />
                  <p className="text-silver/60 font-body text-sm leading-relaxed">{section.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
