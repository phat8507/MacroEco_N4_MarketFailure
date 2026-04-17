import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

/**
 * FadeInView — Wrapper scroll-triggered fade + slide-up
 */
export default function FadeInView({ children, delay = 0, className = '', amount = 0.2 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
