/**
 * RouteMapSVG — Abstract chart minh họa tuyến Suez vs Mũi Hảo Vọng
 * Thay thế bien-do.jpg bằng SVG động, editorial-style
 */
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.4, type: 'spring', duration: 1.8, bounce: 0 },
      opacity: { delay: i * 0.4, duration: 0.3 },
    },
  }),
};

export default function RouteMapSVG() {
  return (
    <div className="route-map-wrapper w-full rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c1a2e 0%, #0f2744 50%, #0a1f3d 100%)',
        padding: '24px',
        border: '1px solid rgba(6,182,212,0.2)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-cyan-300 font-mono text-xs font-bold tracking-widest uppercase">
          Tuyến Vận Chuyển
        </p>
        <p className="text-blue-400 font-mono text-xs opacity-70">WORLD BANK Q1/2024</p>
      </div>

      <motion.svg
        viewBox="0 0 480 200"
        width="100%"
        height="180"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Grid lines */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="20" y1={y} x2="460" y2={y}
            stroke="rgba(6,182,212,0.06)" strokeWidth="1" />
        ))}
        {[80, 160, 240, 320, 400].map((x) => (
          <line key={x} x1={x} y1="10" x2={x} y2="190"
            stroke="rgba(6,182,212,0.06)" strokeWidth="1" />
        ))}

        {/* === Tuyến Suez (đường thẳng / ngắn) === */}
        {/* Bezier hơi cong nhẹ lên trên - tuyến nhanh hơn */}
        <motion.path
          d="M 60,120 C 150,60 320,60 420,120"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2.5"
          strokeLinecap="round"
          custom={0}
          variants={draw}
        />
        {/* Label Suez */}
        <motion.text
          x="240" y="58"
          textAnchor="middle"
          fill="#67e8f9"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          Suez · 30 ngày
        </motion.text>

        {/* === Tuyến Mũi Hảo Vọng (đường vòng dài) === */}
        {/* Bezier cong xuống dưới - vòng qua Nam Phi */}
        <motion.path
          d="M 60,120 C 120,175 180,185 240,180 C 300,175 360,175 420,120"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 4"
          custom={1}
          variants={draw}
        />
        {/* Label Mũi Hảo Vọng */}
        <motion.text
          x="240" y="198"
          textAnchor="middle"
          fill="#fb7185"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.0 }}
        >
          Mũi Hảo Vọng · 40–44 ngày
        </motion.text>

        {/* Endpoints */}
        {/* VN (left) */}
        <motion.circle cx="60" cy="120" r="6"
          fill="#06b6d4"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring' }}
        />
        <motion.text x="60" y="108" textAnchor="middle"
          fill="#a5f3fc" fontSize="9" fontFamily="JetBrains Mono, monospace"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
        >VN</motion.text>

        {/* EU (right) */}
        <motion.circle cx="420" cy="120" r="6"
          fill="#06b6d4"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring' }}
        />
        <motion.text x="420" y="108" textAnchor="middle"
          fill="#a5f3fc" fontSize="9" fontFamily="JetBrains Mono, monospace"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
        >EU</motion.text>

        {/* Kênh Suez indicator (giữa đường) */}
        <motion.circle cx="230" cy="88" r="4"
          fill="none" stroke="#fbbf24" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        />
        <motion.text x="230" y="80" textAnchor="middle"
          fill="#fbbf24" fontSize="8" fontFamily="JetBrains Mono, monospace"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.7 }}
        >Suez</motion.text>

        {/* Delta indicator */}
        <motion.text x="240" y="148" textAnchor="middle"
          fill="rgba(251,113,133,0.6)" fontSize="9" fontFamily="JetBrains Mono, monospace"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 2.2 }}
        >+10–14 ngày</motion.text>
      </motion.svg>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-8 bg-cyan-400 rounded" />
          <span className="text-cyan-300 text-xs font-mono">Suez (trước)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-8 rounded"
            style={{ background: '#f43f5e', backgroundImage: 'repeating-linear-gradient(90deg, #f43f5e 0, #f43f5e 6px, transparent 6px, transparent 10px)' }} />
          <span className="text-red-300 text-xs font-mono">Mũi Hảo Vọng (sau xung đột)</span>
        </div>
      </div>
    </div>
  );
}
