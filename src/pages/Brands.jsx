import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const brands = [
  { name: 'HP',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png' },
  { name: 'Dell',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1200px-Dell_Logo.svg.png' },
  { name: 'ASUS',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1200px-ASUS_Logo.svg.png' },
  { name: 'Canon',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Canon_wordmark.svg/1200px-Canon_wordmark.svg.png' },
  { name: 'Epson',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Epson_logo.svg/1200px-Epson_logo.svg.png' },
  { name: 'Lenovo',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1200px-Lenovo_logo_2015.svg.png' },
  { name: 'Brother',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Brother_logo.svg/1200px-Brother_logo.svg.png' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' },
  { name: 'Cisco',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png' },
  { name: 'Samsung',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png' },
  { name: 'Logitech',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Logitech_logo.svg/1200px-Logitech_logo.svg.png' },
  { name: 'Kingston',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kingston_Technology_logo.svg/1200px-Kingston_Technology_logo.svg.png' },
  { name: 'TP-Link',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/TP-Link_logo.svg/1200px-TP-Link_logo.svg.png' },
  { name: 'Kaspersky', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kaspersky_Lab_logo.svg/1200px-Kaspersky_Lab_logo.svg.png' },
  { name: 'WD',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Western_Digital_logo.svg/1200px-Western_Digital_logo.svg.png' },
  { name: 'Lexmark',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lexmark_logo.svg/1200px-Lexmark_logo.svg.png' },
  { name: 'BenQ',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BenQ_Logo.svg/1200px-BenQ_Logo.svg.png' },
  { name: 'NVIDIA',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/1200px-NVIDIA_logo.svg.png' },
];

const hiPrintFeatures = [
  { icon: '🏭', title: 'UAE Manufactured',     desc: 'Proudly produced in the UAE with state-of-the-art manufacturing facilities.' },
  { icon: '✅', title: 'ISO Certified Quality', desc: 'Every Vertex Technology product undergoes rigorous quality testing to meet international standards.' },
  { icon: '💰', title: 'Cost Effective',        desc: 'Premium quality at competitive prices — designed for businesses that demand value.' },
  { icon: '♻️', title: 'Eco-Friendly',          desc: 'Sustainable manufacturing and recyclable materials for a greener future.' },
];

const regions = [
  { country: 'United Arab Emirates', flag: '🇦🇪', desc: 'Headquarters & Manufacturing', offices: 3 },
  { country: 'Oman',                 flag: '🇴🇲', desc: 'Regional Distribution Center',  offices: 1 },
  { country: 'Qatar',                flag: '🇶🇦', desc: 'Sales & Support Office',         offices: 1 },
  { country: 'Bahrain',              flag: '🇧🇭', desc: 'Sales & Support Office',         offices: 1 },
];

export default function Brands() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#061328] via-[#0E2D6B] to-[#1B52A8]">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=60" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="section-label-light">Our Brands</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              World-Class Brands,<br />
              <span style={{color:'#5DD8C8'}}>One Trusted Partner</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We partner with the world's most recognized technology brands, plus our very own UAE-manufactured Vertex Technology line.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Grid — reference style: full-color, large, clean */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                Latest Solutions From Global Leaders
              </h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
                <strong className="text-slate-800">Vertex Print Technologies</strong> partners with{' '}
                <strong className="text-slate-800">top international IT brands</strong> to deliver{' '}
                <strong className="text-slate-800">reliable, high-quality technology solutions</strong> across the UAE and GCC.
              </p>
              <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
                We work with globally trusted manufacturers to ensure our clients receive the latest, most innovative products in the industry.
              </p>
            </div>
          </ScrollReveal>

          {/* Logo grid — 3 columns, full color, large */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-slate-100 rounded-2xl overflow-hidden">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center justify-center p-10 border-b border-r border-slate-100 hover:bg-slate-50 transition-colors duration-200 group min-h-[140px]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 max-w-[160px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center">
                  <span className="text-2xl font-black text-slate-700">{brand.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertex Technology */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <span className="section-label">Proprietary Brand</span>
              <div className="mb-3">
                <h2 className="text-6xl font-black text-[#E07020] inline-block tracking-tight">Vertex Technology</h2>
              </div>
              <p className="text-slate-500 text-lg font-medium mb-6">Made in UAE · Global Quality Standards</p>
              <p className="text-slate-500 leading-relaxed mb-5">
                Vertex Technology is Vertex Print Technologies's flagship proprietary brand — designed, engineered, and manufactured right here in the UAE. Combining world-class quality with competitive pricing, Vertex Technology products are a trusted choice for thousands of businesses across the GCC.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our toners and cartridges are fully compatible with all major printer brands and go through rigorous quality control to ensure flawless performance and exceptional yield.
              </p>
              <Link to="/contact" className="btn-primary">
                Enquire About Vertex Technology
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                {hiPrintFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card p-6 hover:border-[#E07020]/30"
                  >
                    <div className="text-3xl mb-3">{f.icon}</div>
                    <h3 className="text-slate-900 font-bold text-sm mb-2">{f.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Our Presence</span>
              <h2 className="section-title">Serving the GCC Region</h2>
              <p className="section-subtitle mx-auto">
                Strategically located across four GCC countries to serve your business with speed and reliability.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regions.map((r, i) => (
              <ScrollReveal key={r.country} delay={i * 0.1}>
                <div className="card p-7 text-center hover:border-[#0E2D6B]/20">
                  <div className="text-5xl mb-4">{r.flag}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{r.country}</h3>
                  <p className="text-[#0EA18E] text-sm font-medium mb-1">{r.desc}</p>
                  <p className="text-slate-400 text-xs">{r.offices} {r.offices > 1 ? 'Offices' : 'Office'}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-14 rounded-3xl p-10 text-center bg-gradient-to-br from-[#0E2D6B] to-[#1B52A8] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"/>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Become a Brand Partner</h3>
                <p className="text-blue-200 mb-6 max-w-xl mx-auto">
                  Interested in distributing your products through Vertex Print Technologies's network? We're always looking for innovative brands to add to our portfolio.
                </p>
                <Link to="/contact" className="btn-white">
                  Contact Our Team
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
