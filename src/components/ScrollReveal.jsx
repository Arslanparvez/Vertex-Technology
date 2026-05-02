import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 44, scale: 0.97 },  visible: { opacity: 1, y: 0, scale: 1 } },
  down:  { hidden: { opacity: 0, y: -44, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1 } },
  left:  { hidden: { opacity: 0, x: 52, scale: 0.97 },  visible: { opacity: 1, x: 0, scale: 1 } },
  right: { hidden: { opacity: 0, x: -52, scale: 0.97 }, visible: { opacity: 1, x: 0, scale: 1 } },
  fade:  { hidden: { opacity: 0, scale: 0.96 },          visible: { opacity: 1, scale: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.82 },          visible: { opacity: 1, scale: 1 } },
};

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={directionVariants[direction] ?? directionVariants.up}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
