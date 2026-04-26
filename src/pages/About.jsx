import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const milestones = [
  { year:'1998', title:'Founded in Dubai',       desc:'Vertex Print Technologies established in Dubai, UAE, with a focus on printing consumables.' },
  { year:'2003', title:'Regional Expansion',      desc:'Extended operations to Oman and Qatar, serving the growing GCC market.' },
  { year:'2008', title:'Vertex Technology Brand Launch',   desc:'Launched proprietary brand "Vertex Technology" — manufactured in UAE to global quality standards.' },
  { year:'2012', title:'Technology Portfolio',    desc:'Expanded into computing, networking, and cyber security solutions.' },
  { year:'2018', title:'Bahrain Presence',        desc:'Opened operations in Bahrain, completing our GCC footprint.' },
  { year:'2024', title:'Digital Transformation', desc:'Embracing cloud, AI-driven security, and smart office technology solutions.' },
];

const values = [
  { icon:'🏆', title:'Quality First',   desc:'Every product meets rigorous quality standards before reaching our customers.', bg:'bg-[#0E2D6B]/8', text:'text-[#0E2D6B]' },
  { icon:'⚡', title:'Innovation',      desc:'Continuously evolving our portfolio to meet the future needs of businesses.',  bg:'bg-amber-50',     text:'text-amber-600' },
  { icon:'🤝', title:'Customer Focus',  desc:'Putting client satisfaction at the center of every decision we make.',         bg:'bg-[#0EA18E]/8', text:'text-[#0EA18E]' },
  { icon:'🌍', title:'Global Reach',    desc:'Serving clients across 4 GCC countries with a consistent premium experience.', bg:'bg-violet-50',    text:'text-violet-600' },
];

const team = [
  { name:'Khalid Al Mansouri', role:'Chief Executive Officer',     img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face' },
  { name:'Dr. Rania Hassan',   role:'Chief Technology Officer',    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face' },
  { name:'James Crawford',     role:'Head of Sales & Partnerships',img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face' },
  { name:'Nour Al Hamdan',     role:'VP of Operations',            img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#061328] via-[#0E2D6B] to-[#1B52A8]">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60" alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label-light">Our Story</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Building the Future of<br />
              <span style={{color:'#5DD8C8'}}>Technology in the Gulf</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              For over 25 years, Vertex Print Technologies has been the trusted partner for businesses seeking premium printing and technology solutions across the UAE and GCC.
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
                <div className="absolute -bottom-5 -right-5 bg-[#0E2D6B] text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl font-black">1998</div>
                  <div className="text-blue-200 text-xs mt-0.5">Founded in Dubai</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <span className="section-label">Who We Are</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Built on Trust, Quality & Innovation</h2>
              <p className="text-slate-500 leading-relaxed mb-5">Vertex Print Technologies was founded in 1998 in Dubai. What started as a specialist in printing consumables has evolved into a full-spectrum technology solutions provider serving the UAE, Oman, Qatar, and Bahrain.</p>
              <p className="text-slate-500 leading-relaxed mb-8">Our proprietary brand, <strong className="text-slate-800">Vertex Technology</strong>, is proudly manufactured in the UAE, combining local expertise with international quality standards.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{l:'Countries',v:'4'},{l:'Years Active',v:'25+'},{l:'Products',v:'500+'},{l:'Clients',v:'10K+'}].map(s=>(
                  <div key={s.l} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <div className="text-3xl font-black text-[#0E2D6B]">{s.v}</div>
                    <div className="text-sm text-slate-500 font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">Partner With Us<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
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
                <ScrollReveal key={m.year} delay={i*0.08} direction={i%2===0?'right':'left'}>
                  <div className={`flex flex-col lg:flex-row items-center gap-6 ${i%2===0?'':'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i%2===0?'lg:text-right':''}`}>
                      <div className="card p-6 inline-block w-full lg:max-w-sm">
                        <div className="text-[#0E2D6B] font-black text-2xl mb-1">{m.year}</div>
                        <h3 className="text-base font-bold text-slate-900 mb-2">{m.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-[#0E2D6B] rounded-full shadow-md shadow-[#0E2D6B]/30 z-10 hidden lg:block flex-shrink-0"/>
                    <div className="flex-1 hidden lg:block"/>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <ScrollReveal><div className="text-center mb-14"><span className="section-label">Our Leadership</span><h2 className="section-title">Meet the Team</h2><p className="section-subtitle mx-auto">Experienced leaders driving innovation across the GCC.</p></div></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m,i)=>(
              <ScrollReveal key={m.name} delay={i*0.1}>
                <div className="group card overflow-hidden">
                  <div className="overflow-hidden h-56">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 text-sm">{m.name}</h3>
                    <p className="text-[#0E2D6B] text-xs font-medium mt-0.5">{m.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0E2D6B] to-[#1B52A8]">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label-light">Our Mission</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Delivering Excellence, Every Time</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-10">Our mission is to provide quality products, drive innovation, and ensure complete customer satisfaction — enabling businesses across the GCC to operate more efficiently.</p>
              <Link to="/contact" className="btn-white">Start the Conversation<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
