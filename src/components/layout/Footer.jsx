import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Mở Đầu' },
  { id: 'team', label: 'Nhóm' },
  { id: 'hook', label: 'Câu Chuyện' },
  { id: 'framework', label: 'Khung PT' },
  { id: 'mechanism-1', label: 'Cơ Chế 1' },
  { id: 'mechanism-2', label: 'Cơ Chế 2' },
  { id: 'mechanism-3', label: 'Cơ Chế 3' },
  { id: 'case-bds', label: 'BDS VN' },
  { id: 'labor-2023', label: 'Lao Động' },
  { id: 'shipping', label: 'Biển Đỏ' },
  { id: 'svb', label: 'SVB 2023' },
  { id: 'crisis-2008', label: '2008' },
  { id: 'conclusion', label: 'Kết Luận' },
  { id: 'team-journey', label: 'Hậu Trường' },
];

const sources = [
  { name: 'GSO — Tổng cục Thống kê VN', url: 'https://www.gso.gov.vn' },
  { name: 'NHNN/SBV — Ngân hàng Nhà nước', url: 'https://www.sbv.gov.vn' },
  { name: 'CBRE Vietnam Q4/2024', url: '#' },
  { name: 'VNDIRECT / VBMA Q1/2025', url: '#' },
  { name: 'OIG Fed 2023-SR-B-013 / DFPI', url: '#' },
  { name: 'S&P Case-Shiller / U.S. Census', url: '#' },
  { name: 'World Bank / UNCTAD Q1/2024', url: 'https://www.worldbank.org' },
  { name: 'Bộ LĐTBXH — 2023', url: '#' },
];

const credits = [
  { name: 'Trường Phát', role: 'Mở đầu, Khung PT' },
  { name: 'Minh Nhật', role: 'Cơ chế 1' },
  { name: 'Minh Quân', role: 'Cơ chế 2 & 3, Lao động' },
  { name: 'Xuân Phúc', role: 'BDS VN, Biển Đỏ' },
  { name: 'Danh Phúc', role: 'SVB 2023' },
  { name: 'Hoàng Việt', role: '2008, Kết luận' },
];

export default function Footer() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '3px solid #1a1a2e',
        position: 'relative',
      }}
    >
      {/* Back to top */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${showBackTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <button
          onClick={scrollTop}
          className="group flex items-center justify-center w-11 h-11 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
          }}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>

      <div className="max-w-6xl mx-auto" style={{ padding: '48px 80px 28px' }}>
        {/* Top grid (3 zones) */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-[25fr_1px_45fr_1px_30fr] items-stretch"
          style={{ gap: '24px' }}
        >

          {/* ZONE 1: Identity block (25%) */}
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{ backgroundColor: '#c0392b' }}
              >
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.75rem' }}>4</span>
              </div>
              <span style={{ color: '#1a1a2e', fontSize: '0.9rem', fontWeight: 700 }} className="font-mono">
                Nhóm 4 — Lớp L02
              </span>
            </div>
            <p style={{ color: '#c0392b', fontSize: '0.75rem', lineHeight: 1.6 }}>
              Phe 1A: <span className="font-semibold">Market Failure & Lòng Tham</span>
              <br />của Thị Trường
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.72rem', marginTop: '12px' }} className="font-mono">
              Môn: Kinh Tế Vĩ Mô · 2025
            </p>
            {/* Credits inline */}
            <div className="mt-4 space-y-1">
              {credits.map((c, i) => (
                <div key={i} style={{ color: '#6b7280', fontSize: '0.72rem' }}>
                  <span style={{ color: '#1a1a2e', fontWeight: 700 }}>{c.name}</span> — {c.role}
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden lg:block w-px h-full" style={{ backgroundColor: '#e0e0e0' }} />

          {/* ZONE 2: Content & Sources (45%) */}
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sub-Col A: Nội Dung (60% implicitly flex auto/width) */}
            <div style={{ flex: '0 0 60%' }}>
              <h3 style={{ color: '#1a1a2e', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }} className="font-mono tracking-widest">
                Nội Dung
              </h3>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoFlow: 'row', gap: '4px 16px' }}>
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className="text-[#374151] hover:text-[#c0392b] text-[0.75rem] leading-[1.8] no-underline hover:underline transition-colors text-left font-mono"
                    >
                      → {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-Col B: Nguồn Dữ Liệu */}
            <div style={{ flex: '1' }}>
              <h3 style={{ color: '#1a1a2e', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }} className="font-mono tracking-widest">
                Nguồn Dữ Liệu
              </h3>
              <ul className="space-y-1">
                {sources.map((s, i) => (
                  <li key={i}>
                    {s.url !== '#' ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#374151] hover:text-[#c0392b] text-[0.75rem] leading-[1.8] no-underline hover:underline transition-colors font-mono block"
                      >
                        ↗ {s.name}
                      </a>
                    ) : (
                      <span className="text-[#374151] text-[0.75rem] leading-[1.8] font-mono block">· {s.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden lg:block w-px h-full" style={{ backgroundColor: '#e0e0e0' }} />

          {/* ZONE 3: Technology Info (30%) */}
          <div className="flex flex-col h-full">
            <h3 style={{ color: '#1a1a2e', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }} className="font-mono tracking-widest">
              Công Nghệ
            </h3>
            <ul className="space-y-1 text-[#374151] text-[0.75rem] leading-[1.8] font-mono mb-8">
              {['React 18 + Vite 5', 'Tailwind CSS v3', 'Framer Motion v11', 'Recharts v2'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#374151] flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>

            {/* Visual Accent Footer */}
            <div className="mt-auto text-right">
              <div 
                style={{ backgroundColor: '#e0e0e0', height: '1px', width: '50%', marginBottom: '8px', marginLeft: 'auto' }} 
              />
              <p style={{ fontSize: '0.6rem', color: '#9ca3af' }} className="font-mono">
                Built with React 18 · Powered by open data
              </p>
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3"
          style={{
            marginTop: '48px',
            padding: '16px 0',
            borderTop: '1px solid #e0e0e0',
            background: 'transparent'
          }}
        >
          <p style={{ color: '#9ca3af', fontSize: '0.65rem' }} className="font-mono text-left w-full">
            © 2025 Nhóm 4 · Kinh tế vĩ mô · Lớp L02 · Tất cả số liệu trích dẫn từ nguồn công khai
          </p>
          <button
            onClick={scrollTop}
            style={{ color: '#1a1a2e', fontWeight: 600, fontSize: '0.65rem' }}
            className="hover:underline font-mono transition-colors flex items-center justify-end gap-1.5 whitespace-nowrap"
          >
            Lên đầu ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
