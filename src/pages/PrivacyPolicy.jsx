import Layout from '../components/layout/Layout'
import { motion } from 'framer-motion'

const cinematicEase = [0.25, 1, 0.5, 1]

const theme = {
  navy: '#082F67',
  charcoal: '#101826',
  gold: '#D89B00',
  ivory: '#FAF8F3',
  beige: '#F5F1E8',
}

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
      <div style={{ backgroundColor: theme.ivory }}>
        {/* Header */}
        <div style={{ backgroundColor: theme.beige, padding: '140px 0 80px 0', borderBottom: `1px solid ${theme.navy}08` }}>
          <div className="w-full max-w-[800px] mx-auto px-6 sm:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: cinematicEase }}
            >
              <span style={{ fontFamily: '"Inter", sans-serif', color: theme.gold, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600, marginBottom: '16px', display: 'block' }}>Legal</span>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem', color: theme.navy, fontWeight: 400, marginBottom: '16px', lineHeight: 1.1 }}>Privacy Policy</h1>
              <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}50`, fontSize: '12px', fontWeight: 300 }}>
                Effective Date: 1 January 2025 · Last Updated: 1 June 2026
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-[800px] mx-auto px-6 sm:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: cinematicEase }}
          >
            <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}80`, fontSize: '14px', lineHeight: 1.7, marginBottom: '40px', padding: '24px', backgroundColor: theme.beige, border: `1px solid ${theme.gold}20`, borderLeftWidth: '2px', borderLeftColor: theme.gold, fontWeight: 300 }}>
              At Surya Homes, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard your personal information when you visit our website or engage with our services.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.04, ease: cinematicEase }}
              >
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: theme.navy, fontWeight: 400, marginBottom: '12px' }}>{section.title}</h2>
                <div style={{ width: '40px', height: '1px', backgroundColor: theme.gold, marginBottom: '16px' }} />
                <p style={{ fontFamily: '"Inter", sans-serif', color: `${theme.navy}70`, fontSize: '14px', lineHeight: 1.7, fontWeight: 300 }}>{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
