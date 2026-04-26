import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import TestimonialSlider from '../components/TestimonialSlider';

const NAVY = '#0E2D6B';

const categories = [
  { icon: '🖨️', title: 'Printing Supplies',         desc: 'Toners, cartridges & consumables for all major brands.',   border: 'hover:border-[#0E2D6B]/30' },
  { icon: '💻', title: 'Computing Products',          desc: 'PCs, laptops, monitors & workstations.',                   border: 'hover:border-violet-400/30' },
  { icon: '🔒', title: 'Cyber Security & Backup',     desc: 'Advanced protection & backup solutions.',                  border: 'hover:border-rose-400/30' },
  { icon: '🌐', title: 'Data Storage & Networking',   desc: 'Servers, NAS, switches & infrastructure.',                 border: 'hover:border-cyan-400/30' },
  { icon: '🛡️', title: 'Software & Antivirus',        desc: 'Licenses, OS, productivity & security software.',          border: 'hover:border-emerald-400/30' },
  { icon: '📎', title: 'Stationery & Office Supplies', desc: 'Everything your office needs, delivered fast.',           border: 'hover:border-amber-400/30' },
];

const stats = [
  { value: '25+',  label: 'Years of Excellence' },
  { value: '500+', label: 'Brands & Products'   },
  { value: '4',    label: 'GCC Countries'        },
  { value: '10K+', label: 'Happy Clients'        },
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

const industries = [
  { label: 'Healthcare',       icon: '🏥' },
  { label: 'Education',        icon: '🎓' },
  { label: 'Government',       icon: '🏛️' },
  { label: 'Banking & Finance',icon: '🏦' },
  { label: 'Hospitality',      icon: '🏨' },
  { label: 'Retail & Logistics',icon:'📦' },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* bg */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#061328]/95 via-[#0E2D6B]/88 to-[#0B3B8A]/80" />
        </div>

        {/* glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0EA18E]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* animated dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i}
              className="absolute rounded-full bg-white/20"
              style={{ left:`${12+i*14}%`, top:`${18+(i%3)*22}%`, width: i%2===0?3:2, height:i%2===0?3:2 }}
              animate={{ y:[-12,12,-12], opacity:[0.2,0.7,0.2] }}
              transition={{ duration:3.5+i*0.6, repeat:Infinity, delay:i*0.5 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-3xl">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#0EA18E] rounded-full animate-pulse" />
              Trusted since 1998 — UAE & GCC
            </motion.div>

            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-6">
              Empowering Your
              <span className="block mt-1" style={{color:'#5DD8C8'}}>Printing & Technology</span>
              Needs
            </motion.h1>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.25}}
              className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Cost-effective, reliable, and innovative solutions for businesses across the UAE and GCC — from printing consumables to enterprise IT infrastructure.
            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.35}}
              className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-white text-base">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              <Link to="/products" className="btn-outline-white text-base">Explore Products</Link>
            </motion.div>
          </div>

          {/* stats */}
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.5}}
            className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s,i)=>(
              <div key={i} className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" animate={{y:[0,8,0]}} transition={{duration:1.8,repeat:Infinity}}>
          <div className="w-5 h-9 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-white/50 rounded-full" />
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
            {categories.map((cat,i)=>(
              <ScrollReveal key={cat.title} delay={i*0.07}>
                <Link to="/products">
                  <div className={`group card p-6 cursor-pointer ${cat.border}`}>
                    <div className="text-3xl mb-5">{cat.icon}</div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{cat.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{cat.desc}</p>
                    <span className="text-[#0E2D6B] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Products
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </Link>
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
        {/* Infinite scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"/>
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"/>
          <div className="animate-marquee">
            {[...sliderBrands, ...sliderBrands].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-10 h-20"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-10 max-w-[120px] w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-400 cursor-default"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
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
                <div className="absolute -bottom-5 -right-5 bg-[#0E2D6B] text-white rounded-2xl p-5 shadow-xl">
                  <div className="text-3xl font-black">25+</div>
                  <div className="text-blue-200 text-xs mt-0.5">Years of Trust</div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#0EA18E]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#0EA18E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">ISO Certified</div>
                      <div className="text-xs text-slate-500">Quality Assured</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <span className="section-label">About Vertex Print</span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-5">A Legacy of Quality & Innovation Since 1998</h2>
              <p className="text-slate-500 leading-relaxed mb-5">Founded in Dubai in 1998, Vertex Print Technologies has grown into a leading technology solutions provider with a strong presence across the UAE, Oman, Qatar, and Bahrain.</p>
              <p className="text-slate-500 leading-relaxed mb-8">Our mission: deliver quality products, drive innovation, and ensure complete customer satisfaction.</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['UAE','Oman','Qatar','Bahrain'].map(c=>(
                  <div key={c} className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <div className="w-2 h-2 bg-[#0E2D6B] rounded-full"/>
                    {c}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Learn Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section-padding bg-[#0B1A3E] text-white relative overflow-hidden">
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
            {industries.map((ind,i)=>(
              <ScrollReveal key={ind.label} delay={i*0.07}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-[#0EA18E]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <div className="text-xs font-semibold text-white/80 uppercase tracking-wide">{ind.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Happy Clients</span>
              <h2 className="section-title">Trusted by Leading Organizations</h2>
              <p className="section-subtitle mx-auto">See what our clients say about working with Vertex Print Technologies.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="max-w-3xl mx-auto">
              <TestimonialSlider />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0E2D6B] to-[#1B52A8]">
        <div className="container-max">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Ready to Transform Your Business?</h2>
                <p className="text-blue-200 text-lg">Get in touch with our experts for a customized solution today.</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center shrink-0">
                <Link to="/contact" className="btn-white">
                  Contact Us Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link to="/products" className="btn-outline-white">Browse Products</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
