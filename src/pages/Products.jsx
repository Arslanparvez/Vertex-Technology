import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const productCategories = [
  {
    id: 'printing',
    label: 'Printing Supplies',
    icon: '🖨️',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=85',
    desc: 'Premium toners, ink cartridges, drum units, and printing consumables compatible with all major brands — HP, Canon, Epson, Lexmark, and more.',
    accent: '#0E2D6B',
  },
  {
    id: 'toner',
    label: 'Cartridge & Toner',
    icon: '🖋️',
    image: 'https://images.unsplash.com/photo-1551376347-075b0121a65b?w=800&q=85',
    desc: 'Genuine and compatible toner cartridges, ink refills, and drum units engineered for maximum yield, crisp output, and long-lasting performance.',
    accent: '#7C3AED',
  },
  {
    id: 'computing',
    label: 'Computing Products',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=85',
    desc: 'High-performance laptops, desktops, workstations, and monitors from globally trusted brands, tailored for demanding business environments.',
    accent: '#1B52A8',
  },
  {
    id: 'security',
    label: 'Cyber Security & Backup',
    icon: '🔒',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=85',
    desc: 'Enterprise-grade endpoint security, firewall solutions, data backup, and disaster recovery systems to protect your business around the clock.',
    accent: '#DC2626',
  },
  {
    id: 'networking',
    label: 'Data Storage & Networking',
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=85',
    desc: 'Robust NAS and SAN storage, enterprise switches, routers, structured cabling, and wireless networking for businesses of every scale.',
    accent: '#0EA18E',
  },
  {
    id: 'software',
    label: 'Software & Antivirus',
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=85',
    desc: 'Licensed Microsoft Office 365, Windows OS, ERP platforms, cloud subscriptions, and industry-leading antivirus products for complete digital protection.',
    accent: '#059669',
  },
  {
    id: 'stationery',
    label: 'Stationery & Office Supplies',
    icon: '📎',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
    desc: 'Complete range of premium paper, filing solutions, writing instruments, desk accessories, and workspace essentials to keep your team productive.',
    accent: '#E07020',
  },
];

const filters = [
  { label: 'All',                          id: null },
  { label: 'Printing Supplies',            id: 'printing' },
  { label: 'Cartridge & Toner',            id: 'toner' },
  { label: 'Computing Products',           id: 'computing' },
  { label: 'Cyber Security & Backup',      id: 'security' },
  { label: 'Data Storage & Networking',    id: 'networking' },
  { label: 'Software & Antivirus',         id: 'software' },
  { label: 'Stationery & Office Supplies', id: 'stationery' },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState(null);

  const filtered = activeFilter === null
    ? productCategories
    : productCategories.filter(p => p.id === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-48 pb-28 overflow-hidden bg-gradient-to-br from-[#061328] via-[#0E2D6B] to-[#1B52A8]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#061328]/80 via-[#0E2D6B]/70 to-[#1B52A8]/60"/>
        </div>
        {/* Glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0EA18E]/8 rounded-full blur-[120px] pointer-events-none"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="section-label-light">Product Portfolio</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Premium Products for<br />
              <span style={{color:'#5DD8C8'}}>Modern Business</span>
            </h1>
            <p className="text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology and office products, sourced from the world's most trusted brands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter bar — top offset accounts for top-bar (40px) + main nav (72px) = 112px */}
      <div className="sticky top-[112px] z-30 bg-white/97 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto" style={{scrollbarWidth:'none'}}>
            {filters.map(f => (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f.id
                    ? 'bg-[#0E2D6B] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{aspectRatio:'4/3'}}>
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"/>
                  </div>

                  {/* Info */}
                  <div className="p-7">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl leading-none mt-0.5">{cat.icon}</span>
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">{cat.label}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{cat.desc}</p>
                    {/* Colored accent line at bottom */}
                    <div className="mt-6 h-0.5 rounded-full w-12 transition-all duration-300 group-hover:w-20" style={{background: cat.accent}}/>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0E2D6B] to-[#1B52A8]">
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-4">Can't find what you need?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Our team specializes in sourcing hard-to-find products. Tell us what you need and we'll find it.
            </p>
            <Link to="/contact" className="btn-white">
              Talk to a Specialist
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
