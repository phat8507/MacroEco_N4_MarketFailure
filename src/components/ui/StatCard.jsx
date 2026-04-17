import { motion } from 'framer-motion';

/**
 * StatCard — Liquid glass card hiển thị số liệu nổi bật
 */
export default function StatCard({ value, label, source, accent = '#6366f1', prefix = '', suffix = '', size = 'md', className = '' }) {
  const sizeMap = {
    sm: 'text-3xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-6xl',
    xl: 'text-6xl md:text-7xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`glass-stat p-6 md:p-8 ${className}`}
    >
      <div
        className={`stat-number font-bold leading-none mb-2 ${sizeMap[size]}`}
        style={{ color: accent }}
      >
        {prefix}{value}{suffix}
      </div>
      <p className="text-ink-700 font-medium text-sm md:text-base leading-snug">{label}</p>
      {source && (
        <p className="text-ink-500 text-xs mt-2 font-mono">Nguồn: {source}</p>
      )}
    </motion.div>
  );
}
