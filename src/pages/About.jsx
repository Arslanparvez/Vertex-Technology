import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const milestones = [
  { phase:'Our Origin',     title:'Founded in Dubai',         desc:'Vertex Print Technologies established in Dubai, UAE, with a focus on premium printing consumables.' },
  { phase:'Early Growth',   title:'Brand Partnerships',       desc:'Built strategic partnerships with global printing and technology manufacturers to serve UAE businesses.' },
  { phase:'Innovation',     title:'Vertex Technology Launch', desc:'Launched proprietary brand "Vertex Technology" — manufactured in UAE to global quality standards.' },
  { phase:'Expansion',      title:'Technology Portfolio',     desc:'Expanded into computing, networking, and cyber security solutions for enterprise clients.' },
  { phase:'Modernization',  title:'Enterprise IT Solutions',  desc:'Delivered end-to-end IT infrastructure and managed services across Dubai and the UAE.' },
  { phase:'Today',          title:'Digital Transformation',   desc:'Embracing cloud, AI-driven security, and smart office technology solutions for the next generation.' },
];

const values = [
  { icon:'🏆', title:'Quality First',  desc:'Every product meets rigorous quality standards before reaching our customers.',           bg:'bg-[#1264D6]/8', text:'text-[#1264D6]' },
  { icon:'⚡', title:'Innovation',     desc:'Continuously evolving our portfolio to meet the future needs of businesses.',             bg:'bg-amber-50',    text:'text-amber-600' },
  { icon:'🤝', title:'Customer Focus', desc:'Putting client satisfaction at the center of every decision we make.',                   bg:'bg-[#00B4D8]/8', text:'text-[#00B4D8]' },
  { icon:'🌍', title:'Local Expertise', desc:'Deep Dubai roots paired with global standards — delivering a consistent premium experience.',          bg:'bg-violet-50',   text:'text-violet-600' },
];

// const team = [
//   {
//     name: 'Abdullah Shaikh',
//     role: 'GCC & Africa Sales Manager',
//     phone: '+971 52 266 5050',
//     img: 'https://ui-avatars.com/api/?name=Abdullah+Shaikh&background=0D2848&color=ffffff&size=512&bold=true&font-size=0.38',
//   },
//   {
//     name: 'Anwar Thange',
//     role: 'Sales Manager — UAE',
//     img: 'https://ui-avatars.com/api/?name=Anwar+Thange&background=1264D6&color=ffffff&size=512&bold=true&font-size=0.38',
//   },
//   {
//     name: 'Lamine',
//     role: 'Levant Sales Manager',
//     phone: '+971 52 367 1855',
//     img: '/team/lamine.png',
//   },
//   {
//     name: 'Khalid',
//     role: 'CIS Countries Sales Manager',
//     phone: '+973 3369 2542',
//     img: '/team/khalid.png',
//   },
//   {
//     name: 'Sana Khan',
//     role: 'Legal Counsel',
//     phone: '+971 55 760 1873',
//     img: 'https://ui-avatars.com/api/?name=Sana+Khan&background=00B4D8&color=ffffff&size=512&bold=true&font-size=0.38',
//   },
// ];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#060D1A] via-[#0D2848] to-[#1264D6]">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#4DB8FF]/8 rounded-full blur-[120px] pointer-events-none"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label-light">Our Story</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Building the Future of<br />
              <span style={{color:'#7DD3F5'}}>Technology in the Gulf</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              For over 15 years, Vertex Print Technologies has been the trusted partner for businesses seeking premium printing and technology solutions across Dubai and the UAE.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main about */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80" alt="Team" className="rounded-3xl shadow-xl object-cover w-full h-[480px]"/>
                <div className="absolute -bottom-5 -right-5 bg-[#0D2848] text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl font-black">15+</div>
                  <div className="text-[#7DD3F5] text-xs mt-0.5">Years in Dubai</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <span className="section-label">Who We Are</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Built on Trust, Quality & Innovation</h2>
              <p className="text-slate-500 leading-relaxed mb-5">Headquartered in Dubai, Vertex Print Technologies started as a specialist in printing consumables and has evolved into a full-spectrum technology solutions provider trusted by businesses across the UAE.</p>
              <p className="text-slate-500 leading-relaxed mb-8">Our proprietary brand, <strong className="text-slate-800">Vertex Technology</strong>, is proudly manufactured in the UAE, combining local expertise with international quality standards.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{l:'Country',v:'1'},{l:'Years Active',v:'15+'},{l:'Products',v:'1000+'},{l:'Clients',v:'10K+'}].map(s=>(
                  <div key={s.l} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <div className="text-3xl font-black text-[#1264D6]">{s.v}</div>
                    <div className="text-sm text-slate-500 font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">
                Partner With Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <ScrollReveal><div className="text-center mb-14"><span className="section-label">Our Values</span><h2 className="section-title">What We Stand For</h2></div></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v,i)=>(
              <ScrollReveal key={v.title} delay={i*0.1}>
                <div className="card p-7">
                  <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center text-2xl mb-5`}>{v.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal><div className="text-center mb-14"><span className="section-label">Our Journey</span><h2 className="section-title">Milestones That Define Us</h2></div></ScrollReveal>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden lg:block"/>
            <div className="flex flex-col gap-8">
              {milestones.map((m,i)=>(
                <ScrollReveal key={m.title} delay={i*0.08} direction={i%2===0?'right':'left'}>
                  <div className={`flex flex-col lg:flex-row items-center gap-6 ${i%2===0?'':'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i%2===0?'lg:text-right':''}`}>
                      <div className="card p-6 inline-block w-full lg:max-w-sm">
                        <div className="text-[#1264D6] font-bold text-xs uppercase tracking-[0.18em] mb-2">{m.phase}</div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">{m.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-[#1264D6] rounded-full shadow-md shadow-[#1264D6]/30 z-10 hidden lg:block flex-shrink-0"/>
                    <div className="flex-1 hidden lg:block"/>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-padding bg-slate-50">
        <div className="container-max">
          <ScrollReveal><div className="text-center mb-14"><span className="section-label">Our Team</span><h2 className="section-title">Meet the Team</h2><p className="section-subtitle mx-auto">Regional sales leadership and support, ready to assist customers across the GCC, Africa, the Levant, and CIS markets.</p></div></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {team.map((m,i)=>(
              <ScrollReveal key={m.name} delay={i*0.08}>
                <div className="group card overflow-hidden h-full flex flex-col">
                  <div className="overflow-hidden h-60 bg-slate-100">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-900 text-sm">{m.name}</h3>
                    <p className="text-[#1264D6] text-xs font-medium mt-0.5">{m.role}</p>
                    {m.phone && (
                      <a
                        href={`tel:${m.phone.replace(/\s/g, '')}`}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#1264D6] transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        {m.phone}
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0D2848] to-[#1264D6]">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label-light">Our Mission</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Delivering Excellence, Every Time</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-10">Our mission is to provide quality products, drive innovation, and ensure complete customer satisfaction — enabling businesses across Dubai and the UAE to operate more efficiently.</p>
              <Link to="/contact" className="btn-white">
                Start the Conversation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
