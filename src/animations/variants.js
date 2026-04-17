// ─────────────────────────────────────────────────────
// Framer Motion Variants — dùng chung toàn dự án
// ─────────────────────────────────────────────────────

const SPRING = [0.22, 1, 0.36, 1]; // Custom ease — natural spring feel

export const fadeInUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: SPRING }
  }
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const slideInLeft = {
  hidden:  { opacity: 0, x: -72 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: SPRING }
  }
};

export const slideInRight = {
  hidden:  { opacity: 0, x: 72 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: SPRING }
  }
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.55, ease: 'backOut' }
  }
};

export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

export const staggerFast = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.0 }
  }
};

export const staggerSlow = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export const glassCardVariant = {
  rest:  {
    scale: 1,
    boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
  },
  hover: {
    scale: 1.035,
    boxShadow: '0 16px 48px rgba(99,102,241,0.18)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export const numberReveal = {
  hidden:  { opacity: 0, y: 32, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: SPRING }
  }
};

export const tableRowVariant = {
  hidden:  { opacity: 0, x: -24 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.45, ease: SPRING }
  }
};
