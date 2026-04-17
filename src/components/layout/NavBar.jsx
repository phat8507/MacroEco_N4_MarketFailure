import { useState } from 'react';
import { motion } from 'framer-motion';
import { slidesMeta } from '../../data/slidesMeta';
import useScrollProgress from '../../hooks/useScrollProgress';
import useInViewSection from '../../hooks/useInViewSection';

export default function NavBar() {
  const { progressWidth } = useScrollProgress();
  const activeId = useInViewSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50">
      {/* Progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] rounded-r-full"
        style={{
          width: progressWidth,
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 h-13 flex items-center justify-between" style={{ height: '52px' }}>
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-indigo-500 font-mono font-bold text-sm tracking-tight">Phe 1A</span>
          <span className="hidden md:block text-ink-300 text-xs">·</span>
          <span className="hidden md:block text-ink-500 text-xs">Market Failure</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {slidesMeta.map((slide) => {
            const isActive = activeId === slide.id;
            return (
              <button
                key={slide.id}
                onClick={() => scrollTo(slide.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-ink-500 hover:text-ink-800 hover:bg-ink-100'
                }`}
              >
                {slide.navLabel}
              </button>
            );
          })}
        </nav>

        {/* Mobile: Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-ink-600 hover:bg-ink-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mở menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="lg:hidden glass-nav border-t border-ink-100 py-3 px-4 grid grid-cols-2 gap-1 max-h-72 overflow-y-auto"
        >
          {slidesMeta.map((slide) => (
            <button
              key={slide.id}
              onClick={() => scrollTo(slide.id)}
              className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                activeId === slide.id
                  ? 'bg-indigo-50 text-indigo-600 font-semibold'
                  : 'text-ink-600 hover:bg-ink-50'
              }`}
            >
              {slide.navLabel}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
