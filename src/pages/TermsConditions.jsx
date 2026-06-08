import Layout from '../components/layout/Layout'
import { ScrollReveal } from '../components/ui'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the Surya Homes website (suryahomes.in) and its associated services, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use this website.`,
  },
  {
    title: '2. Use of the Website',
    content: `This website is intended to provide information about real estate properties and services offered by Surya Homes. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse or interfere with the website or access it using any method other than the interface provided.`,
  },
  {
    title: '3. Property Listings',
    content: `All property listings on this website are for informational purposes only. While we endeavour to ensure accuracy, Surya Homes makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of property information. Prices, availability, and specifications are subject to change without prior notice. All transactions are subject to the terms of the individual sale agreement.`,
  },
  {
    title: '4. RERA Compliance',
    content: `Surya Homes is committed to compliance with the Real Estate (Regulation and Development) Act, 2016. All listed projects include their respective RERA registration numbers. Buyers are encouraged to independently verify RERA registration details on the UP RERA portal (up-rera.gov.in) before making any financial commitments.`,
  },
  {
    title: '5. Intellectual Property',
    content: `All content on this website, including text, images, logos, graphics, and data, is the property of Surya Homes or its content suppliers and is protected by applicable intellectual property laws. Reproduction, distribution, or commercial use of any content without prior written consent from Surya Homes is strictly prohibited.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    content: `This website and its content are provided "as is" without any warranty of any kind, express or implied. Surya Homes does not warrant that the website will be uninterrupted, error-free, or free of viruses or harmful components. Your use of the website is at your sole risk.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, Surya Homes shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of, or inability to use, this website or its content, including but not limited to loss of data, loss of profits, or business interruption.`,
  },
  {
    title: '8. Third-Party Services',
    content: `Our website may link to third-party services, including payment gateways, mapping services, and social media platforms. Surya Homes is not responsible for the terms, privacy practices, or content of these third-party services.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Greater Noida, Uttar Pradesh, India.`,
  },
  {
    title: '10. Modifications',
    content: `Surya Homes reserves the right to modify these Terms and Conditions at any time. Continued use of the website after any modifications constitutes your acceptance of the revised terms. We recommend reviewing this page periodically for updates.`,
  },
  {
    title: '11. Contact',
    content: `For questions about these Terms and Conditions, please contact: Surya Homes, Plot No. 45, Sector Alpha-1, Greater Noida, UP – 201310. Email: info@suryahomes.in | Phone: +91 98765 43210.`,
  },
]

export default function TermsConditions() {
  return (
    <Layout>
      <div className="bg-obsidian">
        <div className="bg-charcoal py-20 border-b border-white/5">
          <div className="container-luxury max-w-3xl">
            <ScrollReveal>
              <span className="overline-text mb-4 block">Legal</span>
              <h1 className="font-display text-4xl md:text-5xl text-cream font-light mb-4">Terms & Conditions</h1>
              <p className="text-silver/50 font-body text-sm">
                Effective Date: 1 January 2025 · Last Updated: 1 June 2026
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="container-luxury max-w-3xl py-16">
          <ScrollReveal>
            <p className="text-silver/70 font-body text-sm leading-relaxed mb-10 p-6 bg-charcoal border border-gold/10 border-l-2 border-l-gold/50">
              Please read these Terms and Conditions carefully before using the Surya Homes website.
              Your access to and use of the website constitutes acceptance of these terms.
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
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
