import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MorphingBlob from '../ui/MorphingBlob';
import QuoteBlock from '../ui/QuoteBlock';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ede9fe 0%, #fce7f3 50%, #e0f2fe 100%)' }}
    >
      {/* Blob decorations */}
      <MorphingBlob color="#6366f1" size={500} style={{ top: '-10%', left: '-5%' }} />
      <MorphingBlob color="#ec4899" size={380} style={{ bottom: '5%', right: '-5%', animationDelay: '3s' }} />
      <MorphingBlob color="#06b6d4" size={300} style={{ top: '30%', right: '10%', animationDelay: '5s' }} />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-stat text-indigo-600 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Nhóm 4 — Lớp L02 · Kinh tế Vĩ mô
            </span>
          </motion.div>

          {/* Main title */}
          <motion.div variants={fadeInUp}>
            <h1 className="display-xl text-ink-900 text-balance">
              Khủng hoảng Kinh tế
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mt-3 gradient-text-indigo">
              Phe 1A: Market Failure &amp; Lòng Tham của Thị Trường
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-ink-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ba cơ chế tư nhân tích lũy rủi ro hệ thống — và vì sao{' '}
            <span className="font-semibold text-coral-500">chính sách không phải nguyên nhân gốc</span>
          </motion.p>

          {/* Quote */}
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto mt-6">
            <QuoteBlock accent="#6366f1">
              Khủng hoảng không nổ từ thông cáo chính sách. Nó nổ từ bảng cân đối tư nhân đã chất đầy rủi ro.
            </QuoteBlock>
          </motion.div>

          {/* Scroll cue */}
          <motion.div variants={fadeInUp} className="mt-10">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-ink-400"
            >
              <span className="text-xs font-mono tracking-widest uppercase">Cuộn để khám phá</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
