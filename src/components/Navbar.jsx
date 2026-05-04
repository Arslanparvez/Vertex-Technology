import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Brands',   path: '/brands' },
  { label: 'Contact',  path: '/contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const linkVariants = {
  hidden:  { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.55 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const onDark = !scrolled;
  const linkBase   = onDark ? 'text-white/80 hover:text-white'        : 'text-slate-600 hover:text-[#1264D6]';
  const activeLink = onDark ? 'text-white font-semibold'               : 'text-[#1264D6] font-semibold';

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* ── Top utility bar ── */}
      <div className="bg-[#060D1A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">

            <div className="hidden sm:flex items-center gap-5 text-[11px] text-white/55">
              <a href="mailto:admin@vertexprintdxb.com" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                admin@vertexprintdxb.com
              </a>
              <span className="w-px h-3 bg-white/15"/>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-[#00B4D8]" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3"/>
                </svg>
                Sun – Thu: 8AM – 6PM
              </span>
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <span className="hidden md:block text-[11px] text-white/40 tracking-wide">Dubai · United Arab Emirates</span>
              <span className="hidden md:block w-px h-3 bg-white/15"/>
              <div className="flex items-center gap-2">
                {socials.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="text-white/40 hover:text-white transition-colors duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div className={`transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_12px_rgba(18,100,214,0.08)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            <Link to="/" className="flex items-center group flex-shrink-0">
              <Logo className={`h-11 transition-opacity duration-200 group-hover:opacity-80 ${
                scrolled ? 'text-[#0D2848]' : 'text-white'
              }`}/>
            </Link>

            <nav className="hidden md:flex items-center">
              {navLinks.map((link, i) => (
                <div key={link.path} className="flex items-center">
                  <motion.div custom={i} initial="hidden" animate="visible" variants={linkVariants}>
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 text-sm transition-all duration-200 ${
                        location.pathname === link.path ? activeLink : linkBase
                      }`}
                    >
                      {link.label}
                      {location.pathname === link.path && (
                        <motion.span
                          layoutId="activeNav"
                          className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                            onDark ? 'bg-white' : 'bg-[#1264D6]'
                          }`}
                        />
                      )}
                    </Link>
                  </motion.div>
                  {i < navLinks.length - 1 && (
                    <span className={`w-px h-3.5 ${onDark ? 'bg-white/15' : 'bg-slate-200'}`}/>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="mailto:admin@vertexprintdxb.com"
                className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                  scrolled ? 'text-slate-500 hover:text-[#1264D6]' : 'text-white/70 hover:text-white'
                }`}
              >
                <svg className={`w-4 h-4 ${scrolled ? 'text-[#00B4D8]' : 'text-[#7DD3F5]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                admin@vertexprintdxb.com
              </a>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className={`hidden md:inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                    scrolled
                      ? 'bg-[#1264D6] text-white shadow-md shadow-[#1264D6]/25 hover:bg-[#0D52B8]'
                      : 'bg-white/15 text-white border border-white/30 hover:bg-white hover:text-[#0D2848] backdrop-blur-sm'
                  }`}
                >
                  Get a Quote
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </motion.div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-1.5">
                  <span className={`h-px w-full bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
                  <span className={`h-px bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-full'}`}/>
                  <span className={`h-px w-full bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                    location.pathname === link.path
                      ? 'bg-[#1264D6]/8 text-[#1264D6] font-semibold border-l-2 border-[#1264D6]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#1264D6]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-100 flex flex-col gap-2">
                <a href="mailto:admin@vertexprintdxb.com" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  admin@vertexprintdxb.com
                </a>
                <Link to="/contact" className="text-center bg-[#1264D6] text-white font-semibold px-5 py-3 rounded-xl text-sm">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}






