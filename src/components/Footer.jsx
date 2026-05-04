import { Link } from 'react-router-dom';
import Logo from './Logo';

const productLinks = [
  { label: 'Printing Supplies',          path: '/products' },
  { label: 'Cartridge & Toner',          path: '/products' },
  { label: 'Computing Products',         path: '/products' },
  { label: 'Cyber Security & Backup',    path: '/products' },
  { label: 'Data Storage & Networking',  path: '/products' },
  { label: 'Software & Antivirus',       path: '/products' },
  { label: 'Stationery & Office',        path: '/products' },
];

const companyLinks = [
  { label: 'About Us',        path: '/about' },
  { label: 'Our Brands',      path: '/brands' },
  { label: 'Vertex Technology', path: '/brands' },
  { label: 'Contact Us',      path: '/contact' },
];

const supportLinks = [
  { label: 'Technical Support', path: '/contact' },
  { label: 'Product Warranty',  path: '/contact' },
  { label: 'Sales Inquiry',     path: '/contact' },
  { label: 'Partnership',       path: '/contact' },
  { label: 'Request a Quote',   path: '/contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060D1A] text-white/60">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <Logo className="h-12 text-white transition-opacity group-hover:opacity-80"/>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 mb-6 max-w-xs">
              Empowering businesses in Dubai and across the UAE with premium printing, technology, and office solutions.
            </p>

            <div className="flex items-center gap-2 mb-8">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:bg-[#1264D6]/20 hover:text-[#7DD3F5] hover:border-[#1264D6]/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:admin@vertexprintdxb.com" className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-md bg-[#1264D6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1264D6]/20 transition-colors">
                  <svg className="w-3.5 h-3.5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                admin@vertexprintdxb.com
              </a>
              <div className="flex items-start gap-2.5 text-white/50">
                <div className="w-7 h-7 rounded-md bg-[#1264D6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="leading-relaxed">Shop No. 2, Falcon Apartments,<br/>Bur Dubai, Al Ghubaiba, Dubai</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#00B4D8]"/>
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-white hover:pl-1 transition-all duration-200 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#00B4D8]"/>
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-white hover:pl-1 transition-all duration-200 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#00B4D8]"/>
              Support
            </h4>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-white hover:pl-1 transition-all duration-200 block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-lg px-3 py-2 w-fit">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <span className="text-xs text-white/60 font-medium">ISO Certified Quality</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-lg px-3 py-2 w-fit">
                <span className="text-sm">🇦🇪</span>
                <span className="text-xs text-white/60 font-medium">Proudly Made in UAE</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/5"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Vertex Print Technologies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/30">
            <Link to="/contact" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-white/10"/>
            <Link to="/contact" className="hover:text-white/60 transition-colors">Terms of Use</Link>
            <span className="w-px h-3 bg-white/10"/>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full animate-pulse"/>
              Headquartered in Dubai, UAE
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
