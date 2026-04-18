/**
 * SectionBridge — Text-bridge "hand-off" giữa 2 section
 * Đặt ở cuối section, mở lời cho section tiếp theo
 */
import { motion } from 'framer-motion';

/**
 * @param {string} text - Câu bridge
 * @param {string} nextLabel - Tên section tiếp theo
 * @param {string} accent - Màu accent (hex)
 * @param {'light'|'dark'} variant - Light hay dark background
 */
export default function SectionBridge({
  text,
  nextLabel,
  accent = '#6366f1',
  variant = 'light',
  className = '',
  bgOverride,
  borderOverride,
  nextLabelColorOverride,
}) {
  const isDark = variant === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative mt-16 ${className}`}
    >
      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 -top-8 h-8 w-px -translate-x-1/2"
        style={{ background: `linear-gradient(to bottom, transparent, ${accent}60)` }}
      />

      <div
        className="max-w-2xl mx-auto text-center px-4 py-6 rounded-2xl"
        style={{
          background: bgOverride || '#ffffff',
          border: borderOverride || '1px solid #e0e0e0',
          borderLeft: '3px solid #c0392b',
        }}
      >
        <p
          className="text-sm font-mono tracking-widest uppercase mb-3"
          style={{ color: '#6b7280', opacity: 1 }}
        >
          ↓ tiếp theo
        </p>
        <p
          className="text-base leading-relaxed italic font-medium"
          style={{ color: '#1a1a2e', opacity: 1 }}
        >
          {text}
        </p>
        {nextLabel && (
          <p
            className="text-xs font-mono mt-3 tracking-wider hover:underline cursor-pointer"
            style={{ color: nextLabelColorOverride || '#c0392b', fontWeight: 600, textDecoration: 'none', opacity: 1 }}
          >
            → {nextLabel}
          </p>
        )}
      </div>

      {/* Bottom arrow */}
      <div className="flex justify-center mt-3">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#6b7280', opacity: 1 }}
          className="text-lg"
        >
          ↓
        </motion.div>
      </div>
    </motion.div>
  );
}
