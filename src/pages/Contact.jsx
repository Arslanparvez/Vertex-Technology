import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+971 4 234 5678',
    sub: 'Sun – Thu: 8AM – 6PM',
    href: 'tel:+97142345678',
    bg: 'bg-[#1264D6]/10',
    text: 'text-[#1264D6]',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'info@vertexprint.ae',
    sub: 'We respond within 24 hours',
    href: 'mailto:info@vertexprint.ae',
    bg: 'bg-[#00B4D8]/10',
    text: 'text-[#00B4D8]',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Dubai Silicon Oasis',
    sub: 'Dubai, United Arab Emirates',
    href: null,
    bg: 'bg-violet-50',
    text: 'text-violet-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Sun – Thu: 8AM – 6PM',
    sub: 'Fri – Sat: Closed',
    href: null,
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
];

const offices = [
  {
    city: 'Dubai',
    flag: '🇦🇪',
    type: 'Head Office',
    address: 'Dubai Silicon Oasis, Dubai, UAE',
    phone: '+971 4 234 5678',
    email: 'dubai@vertexprint.ae',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (name) =>
    `w-full bg-white border rounded-xl px-4 py-3.5 text-slate-900 text-sm placeholder-slate-400 outline-none transition-all duration-200 ${
      focused === name
        ? 'border-[#1264D6] shadow-lg shadow-[#1264D6]/10 ring-1 ring-[#1264D6]/20'
        : 'border-slate-200 hover:border-slate-300'
    }`;

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#060D1A] via-[#0D2848] to-[#1264D6]">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#4DB8FF]/8 rounded-full blur-[120px] pointer-events-none"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="section-label-light">Get In Touch</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Let's Work<br />
              <span style={{color:'#7DD3F5'}}>Together</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have a product inquiry, need a quote, or want to discuss a custom solution? Our Dubai team is ready — and we respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 0.08}>
                {info.href ? (
                  <a href={info.href} className="group card p-6 flex flex-col gap-4 block hover:border-[#1264D6]/20">
                    <div className={`w-11 h-11 ${info.bg} ${info.text} rounded-xl flex items-center justify-center`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">{info.label}</p>
                      <p className="font-semibold text-slate-900 text-sm">{info.value}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{info.sub}</p>
                    </div>
                  </a>
                ) : (
                  <div className="card p-6 flex flex-col gap-4">
                    <div className={`w-11 h-11 ${info.bg} ${info.text} rounded-xl flex items-center justify-center`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">{info.label}</p>
                      <p className="font-semibold text-slate-900 text-sm">{info.value}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="right">
              <div>
                <span className="section-label">Send a Message</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">How Can We Help?</h2>
                <p className="text-slate-500 mb-8">Fill in the form and our team will get back to you within one business day.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', subject: '', message: '' }); }}
                      className="mt-6 text-[#1264D6] font-semibold text-sm hover:opacity-75 transition-opacity"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                          placeholder="Ahmed Al Rashidi"
                          className={inputClass('name')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                          placeholder="ahmed@company.ae"
                          className={inputClass('email')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        onFocus={() => setFocused('company')} onBlur={() => setFocused('')}
                        placeholder="Your Company LLC"
                        className={inputClass('company')}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject *</label>
                      <select
                        name="subject" required value={form.subject} onChange={handleChange}
                        onFocus={() => setFocused('subject')} onBlur={() => setFocused('')}
                        className={`${inputClass('subject')} cursor-pointer`}
                      >
                        <option value="">Select a subject</option>
                        <option>Product Inquiry</option>
                        <option>Request a Quote</option>
                        <option>Technical Support</option>
                        <option>Partnership Opportunity</option>
                        <option>Bulk / Corporate Order</option>
                        <option>Vertex Technology Products</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                      <textarea
                        name="message" required rows={5} value={form.message} onChange={handleChange}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                        placeholder="Tell us about your requirements..."
                        className={`${inputClass('message')} resize-none`}
                      />
                    </div>

                    <button type="submit" className="btn-primary justify-center text-base py-4">
                      Send Message
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map + Office */}
            <ScrollReveal direction="left">
              <div>
                <span className="section-label">Find Us</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Head Office</h2>

                <div className="rounded-2xl overflow-hidden mb-8 h-64 bg-slate-100 border border-slate-200 relative">
                  <iframe
                    title="Vertex Print Technologies Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0!2d55.3780!3d25.1165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f652b1f9a8e5d%3A0x0!2sDubai+Silicon+Oasis%2C+Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Office Details Card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:border-[#1264D6]/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🇦🇪</span>
                    <div>
                      <h3 className="font-bold text-slate-900">Dubai, UAE</h3>
                      <p className="text-[#1264D6] text-sm font-medium">Head Office</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-slate-500">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span>Dubai Silicon Oasis,<br/>Dubai, United Arab Emirates</span>
                    </div>
                    <a href="tel:+97142345678" className="flex items-center gap-2 hover:text-[#1264D6] transition-colors">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      +971 4 234 5678
                    </a>
                    <a href="mailto:info@vertexprint.ae" className="flex items-center gap-2 hover:text-[#1264D6] transition-colors">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      info@vertexprint.ae
                    </a>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-label">Our Presence</span>
              <h2 className="section-title">Visit Our Dubai Office</h2>
              <p className="section-subtitle mx-auto">
                Headquartered in Dubai, Vertex Print Technologies brings local expertise and dedicated enterprise support to every client.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 max-w-md mx-auto gap-5">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.1}>
                <div className="card p-6 hover:border-[#1264D6]/20 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{office.flag}</span>
                    <div>
                      <h3 className="font-bold text-slate-900">{office.city}</h3>
                      <p className="text-[#1264D6] text-xs font-semibold uppercase tracking-wider">{office.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-slate-500">
                    <p className="leading-relaxed">{office.address}</p>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-[#1264D6] transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-1.5 hover:text-[#1264D6] transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      {office.email}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0D2848] to-[#1264D6]">
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of UAE businesses that trust Vertex Print Technologies for their technology and office needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+97142345678" className="btn-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Us Now
              </a>
              <a href="mailto:info@vertexprint.ae" className="btn-outline-white">
                Send an Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
