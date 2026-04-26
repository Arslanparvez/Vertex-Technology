import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Ahmed Al Rashidi',
    role: 'IT Manager, Emirates Healthcare Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    text: 'Vertex Print Technologies transformed our entire IT procurement process. Their range of printing supplies and computing products is unmatched in the UAE market. Delivery is always on time and quality is consistently excellent.',
    stars: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Operations Director, Gulf Education Alliance',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    text: "We have been partnering with Vertex Print Technologies for over 5 years. Their cyber security solutions and data storage products have been critical to our institution's digital transformation. Highly recommended.",
    stars: 5,
  },
  {
    name: 'Mohammed Al Farsi',
    role: 'CEO, Al Farsi Business Group',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    text: "Exceptional service and premium products. Vertex Print Technologies went above and beyond to source the exact toner cartridges we needed across our 12 office locations. The cost savings were significant.",
    stars: 5,
  },
  {
    name: 'Fatima Al Zaabi',
    role: 'Procurement Head, Abu Dhabi Municipality',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    text: 'Government procurement can be complex, but Vertex Print Technologies made it seamless. Their compliance documentation and product quality meet all our regulatory requirements. A trusted partner for public sector.',
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  return (
    <div>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="p-0.5 rounded-2xl bg-gradient-to-br from-[#0E2D6B] to-[#0EA18E]">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <StarRating count={testimonials[current].stars} />
                <p className="text-slate-600 text-lg leading-relaxed mt-4 mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-bold text-slate-900">{testimonials[current].name}</p>
                  <p className="text-[#0E2D6B] text-sm font-medium">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? 'w-8 h-2 bg-[#0E2D6B]' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
