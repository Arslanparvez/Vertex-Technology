import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const categories = [
  { image: 'https://images.unsplash.com/photo-1740884730591-8f4878e2cc64?w=600&q=85', title: 'Toner & Cartridges',         desc: 'Genuine and compatible toners, ink cartridges & drum units for HP, Canon, Epson & Lexmark.', accent: '#1264D6' },
  { icon: '🖨️', title: 'Printing Supplies',          desc: 'Premium consumables, ribbons & accessories for every major printer brand.',                  accent: '#0EA5E9' },
  { icon: '💻', title: 'Computing Products',           desc: 'PCs, laptops, monitors & workstations.',                                                     accent: '#00B4D8' },
  { icon: '🔒', title: 'Cyber Security & Backup',      desc: 'Advanced endpoint protection & backup solutions.',                                           accent: '#DC2626' },
  { icon: '🌐', title: 'Data Storage & Networking',    desc: 'Servers, NAS, switches & infrastructure.',                                                   accent: '#7C3AED' },
  { icon: '🛡️', title: 'Software & Antivirus',         desc: 'Licenses, OS, productivity & security software.',                                            accent: '#059669' },
];

const stats = [
  { value: '15+',  label: 'Years of Excellence' },
  { value: '1000+', label: 'Brands & Products'  },
  { value: '1',    label: 'Country'             },
  { value: '10K+', label: 'Happy Clients'       },
];

const sliderBrands = [
  { name: 'HP',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png' },
  { name: 'Dell',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/1200px-Dell_Logo.svg.png' },
  { name: 'Canon',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Canon_wordmark.svg/1200px-Canon_wordmark.svg.png' },
  { name: 'Epson',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Epson_logo.svg/1200px-Epson_logo.svg.png' },
  { name: 'Lenovo',    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1200px-Lenovo_logo_2015.svg.png' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' },
  { name: 'Cisco',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png' },
  { name: 'Samsung',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png' },
  { name: 'Brother',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Brother_logo.svg/1200px-Brother_logo.svg.png' },
  { name: 'ASUS',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1200px-ASUS_Logo.svg.png' },
  { name: 'Kingston',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kingston_Technology_logo.svg/1200px-Kingston_Technology_logo.svg.png' },
  { name: 'Lexmark',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lexmark_logo.svg/1200px-Lexmark_logo.svg.png' },
];

const featuredPrinters = [
  {
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=85',
    badge: 'Best Seller',
    name: 'HP All-in-One Multifunction Printer',
    desc: 'Print, scan, and copy with effortless productivity. Engineered for high-volume business workflows with crisp colour output and Wi-Fi connectivity.',
    features: ['Wireless & Wi-Fi Direct', 'Auto Duplex Printing', 'Up to 30 ppm'],
    accent: '#1264D6',
  },
  {
    image: 'https://images.unsplash.com/photo-1650094980833-7373de26feb6?w=1200&q=85',
    badge: 'Office Favourite',
    name: 'Compact Laser Office Printer',
    desc: 'Reliable monochrome and colour laser printing for modern offices. Sharp, fast, and energy-efficient — built to handle daily workloads with ease.',
    features: ['High Yield Toner', 'Mobile Printing', 'Quiet Operation'],
    accent: '#00B4D8',
  },
];

const industries = [
  { label: 'Healthcare',        icon: '🏥' },
  { label: 'Education',         icon: '🎓' },
  { label: 'Government',        icon: '🏛️' },
  { label: 'Banking & Finance', icon: '🏦' },
  { label: 'Hospitality',       icon: '🏨' },
  { label: 'Retail & Logistics',icon: '📦' },
];

/* ── Animated number counter ── */
function CountUp({ value, triggerDelay = 0 }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const match = String(value).match(/^(\d+)(.*)/);
    if (!match) { setDisplay(value); return; }

    const end = parseInt(match[1]);
    const suffix = match[2];
    const duration = 1600;

    const timer = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        setDisplay(Math.round(eased * end) + suffix);
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    }, triggerDelay);

    return () => clearTimeout(timer);
  }, [value, triggerDelay]);

  return display;
}

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=85" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#060D1A]/95 via-[#0D2848]/88 to-[#1264D6]/65" />
        </div>

        {/* Animated glow orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(18,100,214,0.14) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,180,216,0.10) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div key={i}
              className="absolute rounded-full"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 4) * 22}%`,
                width: i % 3 === 0 ? 4 : i % 3 === 1 ? 3 : 2,
                height: i % 3 === 0 ? 4 : i % 3 === 1 ? 3 : 2,
                background: i % 2 === 0 ? 'rgba(77,184,255,0.55)' : 'rgba(255,255,255,0.35)',
              }}
              animate={{ y: [-16, 16, -16], opacity: [0.15, 0.9, 0.15] }}
              transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-[#4DB8FF]/30 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full animate-pulse" />
              Trusted Technology Partner — Dubai, UAE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6"
            >
              Empowering Your
              <motion.span
                className="block mt-1"
                style={{ color: '#7DD3F5' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Printing & Technology
              </motion.span>
              Needs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              Cost-effective, reliable, and innovative solutions for businesses across Dubai and the UAE — from printing consumables to enterprise IT infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn-white text-base">
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/products" className="btn-outline-white text-base">Explore Products</Link>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Animated stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, borderColor: 'rgba(77,184,255,0.5)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="bg-white/8 border border-[#4DB8FF]/20 backdrop-blur-sm rounded-2xl p-5 text-center cursor-default"
              >
                <div className="text-3xl font-black text-white mb-1">
                  <CountUp value={s.value} triggerDelay={700 + i * 120} />
                </div>
                <div className="text-xs text-white/55 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-5 h-9 border border-[#4DB8FF]/40 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-[#4DB8FF]/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label">Our Solutions</span>
              <h2 className="section-title">Everything Your Business Needs</h2>
              <p className="section-subtitle mx-auto">Comprehensive product categories designed to support every aspect of your operations.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.08}>
                <Link to="/products">
                  <motion.div
                    whileHover={{ y: -7, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                    style={{ '--accent': cat.accent }}
                  >
                    {cat.image ? (
                      <div className="w-16 h-16 mb-5 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden p-2">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="text-3xl mb-5">{cat.icon}</div>
                    )}
                    <h3 className="text-base font-bold text-slate-900 mb-2">{cat.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{cat.desc}</p>
                    <div className="flex items-center gap-1.5 font-semibold text-sm transition-all duration-300 group-hover:gap-2.5" style={{ color: cat.accent }}>
                      View Products
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    </div>
                    <div className="mt-4 h-0.5 rounded-full w-10 transition-all duration-300 group-hover:w-16" style={{ background: cat.accent }} />
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRINTERS ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Featured Printers</span>
              <h2 className="section-title">Premium Printers for Every Office</h2>
              <p className="section-subtitle mx-auto">Hand-picked, high-performance printers from the world's most trusted brands — ready for delivery across Dubai.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPrinters.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1} direction={i % 2 === 0 ? 'right' : 'left'}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                  className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col"
                >
                  {/* Big image */}
                  <div className="relative h-72 sm:h-80 bg-slate-50 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md" style={{ background: p.accent }}>
                      {p.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{p.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                    <ul className="flex flex-col gap-2">
                      {p.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND SLIDER ── */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="container-max text-center mb-10">
          <ScrollReveal>
            <span className="section-label">Trusted Partners</span>
            <h2 className="text-3xl font-bold text-slate-900">Authorized Reseller for Global Leaders</h2>
            <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">
              We partner with the world's most recognized technology and printing brands to bring you reliable, high-quality solutions.
            </p>
          </ScrollReveal>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"/>
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"/>
          <div className="animate-marquee">
            {[...sliderBrands, ...sliderBrands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center px-10 h-20">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-10 max-w-[120px] w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-400 cursor-default"
                  loading="lazy"
                  onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
                />
                <span className="hidden text-base font-bold text-slate-400">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80" alt="Office" className="rounded-3xl shadow-xl object-cover w-full h-[440px]" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
                  className="absolute -bottom-5 -right-5 bg-[#0D2848] text-white rounded-2xl p-5 shadow-xl"
                >
                  <div className="text-3xl font-black">15+</div>
                  <div className="text-[#7DD3F5] text-xs mt-0.5">Years of Trust</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45, type: 'spring', stiffness: 260, damping: 20 }}
                  className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#1264D6]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#1264D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">ISO Certified</div>
                      <div className="text-xs text-slate-500">Quality Assured</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <span className="section-label">About Vertex Print</span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-5">A Legacy of Quality & Innovation</h2>
              <p className="text-slate-500 leading-relaxed mb-5">Headquartered in Dubai, Vertex Print Technologies is a leading technology solutions provider trusted by businesses across the UAE for premium printing, computing, and IT infrastructure.</p>
              <p className="text-slate-500 leading-relaxed mb-8">Our mission: deliver quality products, drive innovation, and ensure complete customer satisfaction.</p>
              <div className="flex items-center gap-2 mb-8">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex items-center gap-2 text-slate-700 font-medium text-sm cursor-default"
                >
                  <div className="w-2 h-2 bg-[#1264D6] rounded-full"/>
                  Dubai, United Arab Emirates — Head Office
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/about" className="btn-primary">
                  Learn Our Story
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section-padding bg-[#060D1A] text-white relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(18,100,214,0.10) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 opacity-5">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="container-max relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label-light">Industries We Serve</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">Across Every Sector</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.label} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.04, borderColor: 'rgba(77,184,255,0.4)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center cursor-default"
                >
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <div className="text-xs font-semibold text-white/80 uppercase tracking-wide">{ind.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0D2848] to-[#1264D6] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(77,184,255,0.12) 0%, transparent 60%)' }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container-max relative z-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Ready to Transform Your Business?</h2>
                <p className="text-white/70 text-lg">Get in touch with our experts for a customized solution today.</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center shrink-0">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="btn-white">
                    Contact Us Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/products" className="btn-outline-white">Browse Products</Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
