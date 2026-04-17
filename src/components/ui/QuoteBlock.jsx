import { motion } from 'framer-motion';

/**
 * QuoteBlock — Pull-quote đẹp với dấu ngoặc kép lớn
 */
export default function QuoteBlock({ children, author, accent = '#6366f1', className = '' }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative pl-8 py-2 ${className}`}
    >
      {/* Đường viền bên trái */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
        style={{ background: `linear-gradient(180deg, ${accent}, ${accent}44)` }}
      />
      {/* Dấu ngoặc kép trang trí */}
      <span
        className="absolute -top-4 left-4 text-7xl font-serif leading-none select-none opacity-15"
        style={{ color: accent }}
        aria-hidden="true"
      >
        "
      </span>
      <p className="text-ink-800 text-lg md:text-xl font-medium leading-relaxed italic relative z-10">
        {children}
      </p>
      {author && (
        <footer className="mt-3 text-ink-500 text-sm font-mono not-italic">
          — {author}
        </footer>
      )}
    </motion.blockquote>
  );
}
