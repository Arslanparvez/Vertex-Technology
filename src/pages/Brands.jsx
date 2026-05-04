import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const brands = [
  { name: 'HP',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png' },
  { name: 'Dell',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1200px-Dell_Logo.svg.png' },
  { name: 'Canon',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Canon_wordmark.svg/1200px-Canon_wordmark.svg.png' },
  { name: 'Epson',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Epson_logo.svg/1200px-Epson_logo.svg.png' },
  { name: 'Lenovo',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1200px-Lenovo_logo_2015.svg.png' },
  { name: 'Wacom',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wacom_logo.svg/1200px-Wacom_logo.svg.png' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' },
  { name: 'Cisco',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png' },
  { name: 'Samsung',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png' },
  { name: 'Brother',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Brother_logo.svg/1200px-Brother_logo.svg.png' },
  { name: 'ASUS',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1200px-ASUS_Logo.svg.png' },
  { name: 'Logitech',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Logitech_logo.svg/1200px-Logitech_logo.svg.png' },
  { name: 'Kingston',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kingston_Technology_logo.svg/1200px-Kingston_Technology_logo.svg.png' },
  { name: 'TP-Link',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/TP-Link_logo.svg/1200px-TP-Link_logo.svg.png' },
  { name: 'Kaspersky', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kaspersky_Lab_logo.svg/1200px-Kaspersky_Lab_logo.svg.png' },
  { name: 'WD',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Western_Digital_logo.svg/1200px-Western_Digital_logo.svg.png' },
  { name: 'Lexmark',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lexmark_logo.svg/1200px-Lexmark_logo.svg.png' },
  { name: 'BenQ',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BenQ_Logo.svg/1200px-BenQ_Logo.svg.png' },
];

const whyAuthorized = [
  { icon: '✅', title: 'Genuine Products Only',     desc: 'All items are sourced directly through authorized distribution channels — no counterfeits, no grey market.' },
  { icon: '🔒', title: 'Full Manufacturer Warranty', desc: 'Every product carries the manufacturer\'s standard warranty, giving you complete confidence in every purchase.' },
  { icon: '💰', title: 'Competitive Pricing',        desc: 'Direct partnerships allow us to pass on better pricing to our customers, whether individual or enterprise.' },
  { icon: '🚀', title: 'Latest Products',            desc: 'Authorized status means we receive the newest releases and updates straight from the source, first.' },
];

const vertexAdvantages = [
  { icon: '🏭', title: 'UAE Manufactured',      desc: 'Proudly produced in the UAE to international quality benchmarks — local expertise, global standards.' },
  { icon: '♻️',  title: 'Eco-Conscious Design',  desc: 'Our cartridges and consumables are engineered with reduced waste and sustainable materials in mind.' },
  { icon: '🎯', title: 'Universal Compatibility', desc: 'Vertex Technology products are designed for seamless compatibility with all major OEM printer brands.' },
  { icon: '📦', title: 'High Yield Performance', desc: 'Maximized page yields and consistent output quality across the full product lifecycle.' },
];

export default function Brands() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#060D1A] via-[#0D2848] to-[#1264D6]">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=60" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#4DB8FF]/8 rounded-full blur-[120px] pointer-events-none"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="section-label-light">Our Brand Partners</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              World-Class Brands,<br />
              <span style={{color:'#7DD3F5'}}>One Trusted Partner</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Vertex Print Technologies is an authorized reseller for 70+ of the world's most recognized technology and office product brands — all under one roof.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vertex Technology Own Brand */}
      <section className="section-padding bg-gradient-to-br from-[#060D1A] to-[#0D2848]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <span className="section-label-light">Our Proprietary Brand</span>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Vertex Technology —<br />
                <span style={{color:'#7DD3F5'}}>Built in the UAE</span>
              </h2>
              <p className="text-white/65 leading-relaxed mb-5">
                Beyond distributing the world's top brands, we manufacture our own line of premium printing consumables under the <strong className="text-white">Vertex Technology</strong> label — proudly made in the UAE.
              </p>
              <p className="text-white/65 leading-relaxed mb-8">
                Every Vertex Technology cartridge, toner, and consumable is engineered to meet or exceed OEM specifications, delivering reliable performance at competitive pricing for businesses across Dubai and the UAE.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  {l:'Products in Range', v:'200+'},
                  {l:'OEM Compatible',    v:'100%'},
                  {l:'UAE Manufactured', v:'Premium'},
                  {l:'Dubai Headquarters', v:'24/7 Support'},
                ].map(s => (
                  <div key={s.l} className="bg-white/8 border border-[#4DB8FF]/20 rounded-2xl p-5">
                    <div className="text-2xl font-black text-[#7DD3F5]">{s.v}</div>
                    <div className="text-sm text-white/50 font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">
                Request a Vertex Technology Catalogue
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=700&q=80"
                  alt="Vertex Technology Products"
                  className="rounded-3xl shadow-2xl object-cover w-full h-[460px]"
                />
                <div className="absolute -bottom-5 -left-5 bg-[#1264D6] text-white rounded-2xl p-5 shadow-xl">
                  <div className="text-3xl font-black">2008</div>
                  <div className="text-white/70 text-xs mt-0.5">Brand Launched in UAE</div>
                </div>
                <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                  <span className="text-white text-xs font-semibold">🇦🇪 Proudly Made in UAE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vertex Technology Advantages */}
      <section className="section-padding bg-[#060D1A]">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label-light">Why Choose Vertex Technology</span>
              <h2 className="text-4xl font-bold text-white">The Vertex Technology Difference</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vertexAdvantages.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-[#4DB8FF]/15 rounded-2xl p-7 hover:bg-white/8 hover:border-[#4DB8FF]/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label">International Partners</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                Authorized Reseller for Global Leaders
              </h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
                <strong className="text-slate-800">Vertex Print Technologies</strong> partners with{' '}
                <strong className="text-slate-800">70+ international brands</strong> to deliver{' '}
                <strong className="text-slate-800">genuine, high-quality technology and office products</strong> across Dubai and the UAE.
              </p>
              <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
                Every brand we carry is authorized. Every product is sourced through verified channels to guarantee authenticity and complete warranty coverage.
              </p>
            </div>
          </ScrollReveal>

          {/* Logo grid */}
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

      {/* Why Authorized */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Authorized Partnership</span>
              <h2 className="section-title">Why Authorized Matters</h2>
              <p className="section-subtitle mx-auto">
                Being an authorized reseller is not just a badge — it directly protects your investment and ensures you receive the best.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyAuthorized.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="card p-7 text-center hover:border-[#1264D6]/30">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="rounded-3xl p-10 text-center bg-gradient-to-br from-[#0D2848] to-[#1264D6] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"/>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00B4D8]/10 rounded-full blur-[60px] pointer-events-none"/>
              <div className="relative z-10">
                <span className="section-label-light">Brand Partnership</span>
                <h3 className="text-3xl font-bold text-white mb-4">Interested in Partnering With Us?</h3>
                <p className="text-white/70 mb-8 max-w-xl mx-auto text-lg">
                  If you represent a brand and want to reach UAE businesses through Vertex Print Technologies' established Dubai network, we'd love to hear from you.
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
