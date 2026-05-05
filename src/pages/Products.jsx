import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const CATEGORIES = [
  {
    id: 'toner',
    name: 'Toner & Cartridges',
    image: '/products/toner-cartridges.png',
    desc: 'Genuine and compatible toner cartridges, ink refills, and drum units for maximum yield and crisp output across all major brands.',
  },
  {
    id: 'aio-printers',
    name: 'All-in-One Printers',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=85',
    desc: 'Multifunction printers that print, scan, and copy — perfect for high-volume office workflows from HP, Canon, Brother, and Epson.',
  },
  {
    id: 'laser-printers',
    name: 'Laser Office Printers',
    image: 'https://images.unsplash.com/photo-1650094980833-7373de26feb6?w=800&q=85',
    desc: 'Reliable monochrome and colour laser printers built for daily business workloads — fast, sharp, and energy-efficient.',
  },
  {
    id: 'laptops',
    name: 'Laptops',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/1-2.png',
    desc: 'High-performance laptops from Dell, HP, Lenovo and more — engineered for business and enterprise use.',
  },
  {
    id: 'desktops',
    name: 'Desktops & Workstations',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/2-2.png',
    desc: 'Powerful desktops, mini PCs, and workstations from globally trusted brands for professional environments.',
  },
  {
    id: 'monitors',
    name: 'Monitors & Displays',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/3-2.png',
    desc: 'From ultra-wide to 4K panels — crisp, vibrant displays for every workspace and workload.',
  },
  {
    id: 'aio',
    name: 'All-In-One PCs',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/4-2.png',
    desc: 'Space-saving all-in-one computers combining performance and elegance for modern offices.',
  },
  {
    id: 'printing',
    name: 'Printing Supplies',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/5-2.png',
    desc: 'Premium toners, ink cartridges, drum units, and consumables for HP, Canon, Epson, and Lexmark.',
  },
  {
    id: 'projectors',
    name: 'Projectors & AV',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/6-2.png',
    desc: 'Bright, reliable projectors and audio-visual equipment for boardrooms, classrooms, and events.',
  },
  {
    id: 'scanners',
    name: 'Scanners & Copiers',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/7-1.png',
    desc: 'Document scanners and sheetfed solutions for high-volume office digitisation.',
  },
  {
    id: 'networking',
    name: 'Networking Products',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/8-1.png',
    desc: 'Managed switches, routers, access points, and structured cabling from Cisco, TP-Link, and Ubiquiti.',
  },
  {
    id: 'storage',
    name: 'Storage & Backup',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/9-1.png',
    desc: 'NAS, SAN, HDDs, SSDs, and enterprise backup solutions to protect your critical business data.',
  },
  {
    id: 'memory',
    name: 'Memory & Components',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/10-1.png',
    desc: 'RAM upgrades, SSDs, and system components from Kingston, Samsung, and Crucial.',
  },
  {
    id: 'software',
    name: 'Software & Antivirus',
    image: 'https://technoxuae.com/wp-content/uploads/2025/10/11-1.png',
    desc: 'Licensed Microsoft 365, Windows OS, Kaspersky, Bitdefender, and enterprise ERP platforms.',
  },
];

const TRUST_ITEMS = [
  {
    title: 'Free Delivery',
    desc: 'On orders above AED 500',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 8h12l1-8M10 12h4" />
      </svg>
    ),
  },
  {
    title: 'Genuine Products',
    desc: '100% authorised reseller',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Warranty Covered',
    desc: 'Full manufacturer warranty',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    desc: 'Expert tech assistance',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

function CategoryCard({ category, index }) {
  return (
    <ScrollReveal delay={Math.min(index * 0.06, 0.5)} direction="up">
      <motion.div
        className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#1264D6]/35 hover:shadow-[0_8px_40px_rgba(18,100,214,0.10)] transition-all duration-300 cursor-pointer h-full flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      >
        {/* Square image */}
        <div className="aspect-square bg-slate-50 overflow-hidden flex items-center justify-center p-6">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-contain group-hover:scale-[1.07] transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-5 border-t border-slate-100 flex flex-col flex-1">
          <h3 className="font-bold text-slate-900 text-[15px] mb-2 group-hover:text-[#1264D6] transition-colors duration-200 leading-snug">
            {category.name}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed flex-1">{category.desc}</p>

          <div className="mt-4 flex items-center gap-1.5 text-[#1264D6] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
            <span>View Products</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Products() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative pt-48 pb-28 overflow-hidden bg-gradient-to-br from-[#060D1A] via-[#0D2848] to-[#1264D6]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#060D1A]/88 via-[#0D2848]/78 to-[#1264D6]/60" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#4DB8FF]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="section-label-light">Product Portfolio</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Premium Products for<br />
              <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Technology and office consumables sourced directly from the world's most trusted brands — delivered across Dubai and the UAE.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
              {[
                { value: '1000+', label: 'Products' },
                { value: '50+',  label: 'Brands' },
                { value: '1',    label: 'Country' },
                { value: '15+',  label: 'Yrs Experience' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-white/55 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06} direction="up">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1264D6]/8 text-[#1264D6] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Categories Grid ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Our Product Portfolio</h2>
              <p className="section-subtitle mx-auto">
                Explore our comprehensive range of technology products sourced from the world's most trusted brands.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0D2848] to-[#1264D6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4DB8FF] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="section-label-light">Can't Find What You Need?</span>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              We source products globally.<br />
              <span className="text-[#7DD3F5]">Just ask us.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Our specialist team can procure hard-to-find items, negotiate bulk pricing, and deliver across Dubai and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn-white">
                  Talk to a Specialist
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a href="mailto:admin@vertexprintdxb.com" className="btn-outline-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  admin@vertexprintdxb.com
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
