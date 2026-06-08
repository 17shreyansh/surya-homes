export const faqs = [
  {
    id: 'f001',
    category: 'Buying',
    question: 'What documents are required to buy a property?',
    answer: 'To purchase a property, you typically need: PAN card, Aadhaar card, passport-size photographs, bank statements (6 months), income proof (salary slips or IT returns for 2 years), and property-related documents including sale deed, encumbrance certificate, and approved building plan.',
  },
  {
    id: 'f002',
    category: 'Buying',
    question: 'Is Surya Homes RERA registered?',
    answer: 'Yes. All our projects are registered under RERA (Real Estate Regulatory Authority) under the UP RERA. You can verify our RERA registration on the UP RERA portal. We believe in complete transparency and provide the RERA number for every project we sell.',
  },
  {
    id: 'f003',
    category: 'Buying',
    question: 'What is the home buying process at Surya Homes?',
    answer: 'Our process is simple: (1) Share your requirements with us, (2) We shortlist properties matching your criteria, (3) Site visits at your convenience, (4) Negotiation and deal finalisation, (5) Legal due diligence, (6) Documentation and registration. Our team guides you through each step.',
  },
  {
    id: 'f004',
    category: 'Finance',
    question: 'Do you help with home loans?',
    answer: 'Absolutely. We have partnerships with leading banks including SBI, HDFC, ICICI, Axis Bank, and Bajaj Finserv. Our finance team helps you assess eligibility, compare interest rates, and secure the best possible terms. We also assist with all documentation required by the bank.',
  },
  {
    id: 'f005',
    category: 'Finance',
    question: 'What are the stamp duty and registration charges in UP?',
    answer: 'In Uttar Pradesh, stamp duty is 7% for male buyers, 6% for female buyers (co-ownership attracts 6.5%). Registration charges are 1% of the property value. These charges are paid at the time of property registration and are mandatory. We help you plan for these costs upfront.',
  },
  {
    id: 'f006',
    category: 'Investment',
    question: 'Which areas offer the best investment returns in Greater Noida?',
    answer: 'Currently, the Yamuna Expressway corridor (near Jewar Airport), Sector 150, and Greater Noida West (Noida Extension) are showing the strongest appreciation. Yamuna Expressway is particularly promising with the upcoming Noida International Airport, which is expected to drive 20-30% price appreciation in the next 3-5 years.',
  },
  {
    id: 'f007',
    category: 'Investment',
    question: 'What is the typical rental yield on properties in Greater Noida?',
    answer: 'Rental yields in Greater Noida typically range from 3-4.5% per annum depending on the location and property type. Sectors with good metro connectivity and IT hub proximity (Sector 62, Sector 137) tend to command the highest rental yields. Plots on the Yamuna Expressway corridor are seeing higher appreciation but lower rental yields.',
  },
  {
    id: 'f008',
    category: 'Services',
    question: 'Do you offer NRI property management services?',
    answer: 'Yes. We provide comprehensive property management for NRI clients including tenant sourcing, rental agreement management, rent collection, periodic maintenance, property tax compliance, and regular photo/video updates. We act as your trusted local representative so you can invest with confidence from anywhere in the world.',
  },
  {
    id: 'f009',
    category: 'Services',
    question: 'Can I list my property with Surya Homes?',
    answer: 'Yes. Property owners can list with Surya Homes to reach our extensive network of qualified buyers. We offer professional photography, virtual tours, and targeted marketing. Our average time-to-sale is significantly lower than market average, and we charge a competitive brokerage only upon successful closure.',
  },
  {
    id: 'f010',
    category: 'General',
    question: 'How long has Surya Homes been in business?',
    answer: 'Surya Homes was founded in 2010 and has been serving Greater Noida and NCR for over 15 years. In that time, we have facilitated more than 1,000 successful property transactions, built a team of 30+ certified real estate professionals, and established ourselves as the most trusted real estate brand in Greater Noida.',
  },
]

export const getFAQCategories = () => [...new Set(faqs.map(f => f.category))]
export const getFAQsByCategory = (category) =>
  category === 'All' ? faqs : faqs.filter(f => f.category === category)
