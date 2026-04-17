import { useScroll, useTransform } from 'framer-motion';

/**
 * useScrollProgress — Trả về progress % cuộn trang (0 → 1) dưới dạng MotionValue
 */
export default function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return { scrollYProgress, progressWidth: progress };
}
