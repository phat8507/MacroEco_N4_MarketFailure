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
          background: bgOverride || (isDark
            ? `linear-gradient(135deg, ${accent}15, ${accent}08)`
            : `linear-gradient(135deg, ${accent}08, ${accent}04)`),
          border: borderOverride || `1px solid ${accent}20`,
        }}
      >
        <p
          className="text-sm font-mono tracking-widest uppercase mb-3"
          style={{ color: `${accent}99` }}
        >
          ↓ tiếp theo
        </p>
        <p
          className={`text-base leading-relaxed italic font-medium ${isDark ? 'text-white/70' : 'text-ink-600'}`}
        >
          {text}
        </p>
        {nextLabel && (
          <p
            className="text-xs font-mono mt-3 font-semibold tracking-wider"
            style={{ color: nextLabelColorOverride || accent }}
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
          style={{ color: `${accent}60` }}
          className="text-lg"
        >
          ↓
        </motion.div>
      </div>
    </motion.div>
  );
}
