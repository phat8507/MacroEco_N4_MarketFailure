import { useEffect, useRef, useState } from 'react';
import useScrollProgress from '../../hooks/useScrollProgress';
import useInViewSection from '../../hooks/useInViewSection';

// Tab Data as per specification
const customTabs = [
  { id: 'hero', num: '①', label: 'MỞ ĐẦU' },
  { id: 'hook', num: '②', label: 'CÂU CHUYỆN' },
  { id: 'framework', num: '③', label: 'KHUNG PT' },
  { id: 'mechanism-1', num: '④', label: 'VÒNG XOÁY' },
  { id: 'mechanism-2', num: '⑤', label: 'LỆCH KH' },
  { id: 'mechanism-3', num: '⑥', label: 'BẪY ĐÀN' },
  { id: 'case-bds', num: '⑦', label: 'BDS VN' },
  { id: 'labor-2023', num: '⑧', label: 'LAO ĐỘNG' },
  { id: 'shipping', num: '⑨', label: 'BIẾN ĐỘ' },
  { id: 'svb', num: '⑩', label: 'SVB 2023' },
  { id: 'crisis-2008', num: '⑪', label: '2008' },
  { id: 'conclusion', num: '⑫', label: 'KẾT LUẬN' },
];

export default function NavBar() {
  const { progressWidth } = useScrollProgress();
  const activeId = useInViewSection();
  const tabsRef = useRef([]);

  // Smooth scroll handler
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Keyboard navigation logic
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % customTabs.length;
      tabsRef.current[next]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + customTabs.length) % customTabs.length;
      tabsRef.current[prev]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollTo(customTabs[index].id);
    }
  };

  // Default to first tab if no activeId matches
  const currentActiveId = activeId || 'hero';

  return (
    <>
      <style>{`
        .nav-tabs-container::-webkit-scrollbar {
          display: none;
        }
        .editorial-tab {
          transition: all 0.18s ease;
        }
        .editorial-tab[data-active="false"]:hover {
          color: #0d0d0d !important;
          border-bottom: 2px solid #cccccc !important;
        }
        .editorial-tab[data-active="true"]:hover {
          color: #0d0d0d !important;
        }
        .editorial-tab:focus-visible {
          outline: none;
          background: rgba(0, 0, 0, 0.05) !important;
        }
      `}</style>
      
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#ffffff',
          boxShadow: '0 1px 0 #e0e0e0',
          borderBottom: '1px solid #e0e0e0',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: "'IBM Plex Mono', 'DM Mono', monospace",
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            maxWidth: '1440px', // Prevent it from stretching infinitely on ultrawides
            margin: '0 auto',
          }}
        >
          {/* Left Label */}
          <div
            style={{
              color: '#c0392b',
              fontVariant: 'small-caps',
              letterSpacing: '0.15em',
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0 20px',
              borderRight: '1px solid #e0e0e0',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              cursor: 'default',
            }}
          >
            Phe 1A
          </div>

          {/* Scrollable Tabs Container */}
          <nav
            className="nav-tabs-container"
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              height: '100%',
              alignItems: 'center',
            }}
          >
            {customTabs.map((tab, index) => {
              const isActive = currentActiveId === tab.id;
              
              // Prevent default scroll behavior for active tabs 
              // Wait, active tabs auto-scroll to view on render -> effect below
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  ref={(el) => (tabsRef.current[index] = el)}
                  onClick={() => scrollTo(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  className="editorial-tab"
                  data-active={isActive}
                  style={{
                    height: '100%',
                    padding: '0 20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: isActive ? '2px solid #1a56db' : '2px solid transparent',
                    color: isActive ? '#0d0d0d' : '#6b7280',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65em',
                      marginTop: '-0.3em',
                      marginRight: '6px',
                      opacity: 0.8,
                    }}
                  >
                    {tab.num}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Progress Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '1px',
            background: '#1a56db',
            width: progressWidth,
            transition: 'width 0.1s linear',
            zIndex: 2,
          }}
        />
      </header>
    </>
  );
}
