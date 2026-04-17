import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

/**
 * HeroStat — Số siêu lớn Playfair Display, dùng cho headline data points
 */
export default function HeroStat({ value, suffix = '', prefix = '', label, sublabel, accent = '#f43f5e', decimals = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-8"
    >
      <div className="hero-number" style={{ color: accent }}>
        <AnimatedNumber value={value} decimals={decimals} suffix={suffix} prefix={prefix} duration={2000} />
      </div>
      {label && (
        <p className="text-ink-800 text-xl md:text-2xl font-semibold mt-3 text-balance">{label}</p>
      )}
      {sublabel && (
        <p className="text-ink-500 text-sm md:text-base mt-2">{sublabel}</p>
      )}
    </motion.div>
  );
}
