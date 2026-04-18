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
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
        borderTop: '1px solid rgba(99,102,241,0.15)',
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

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: Project info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <span className="text-white font-bold text-sm font-mono">Nhóm 4 — Lớp L02</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Phe 1A: <span className="text-indigo-300 font-semibold">Market Failure & Lòng Tham</span>
              <br />của Thị Trường
            </p>
            <p className="text-slate-500 text-xs mt-3 font-mono">
              Môn: Kinh Tế Vĩ Mô · 2025
            </p>
            {/* Credits inline */}
            <div className="mt-5 space-y-1.5">
              {credits.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-slate-300 text-xs font-semibold">{c.name}</span>
                  <span className="text-slate-500 text-xs">— {c.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Sitemap */}
          <div>
            <h3 className="text-slate-300 font-mono font-bold text-xs tracking-widest uppercase mb-4">
              Nội Dung
            </h3>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className="text-slate-400 text-xs hover:text-indigo-300 transition-colors text-left font-mono"
                  >
                    → {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sources */}
          <div>
            <h3 className="text-slate-300 font-mono font-bold text-xs tracking-widest uppercase mb-4">
              Nguồn Dữ Liệu
            </h3>
            <ul className="space-y-2">
              {sources.map((s, i) => (
                <li key={i}>
                  {s.url !== '#' ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 text-xs hover:text-cyan-300 transition-colors font-mono"
                    >
                      ↗ {s.name}
                    </a>
                  ) : (
                    <span className="text-slate-500 text-xs font-mono">· {s.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tech + quote */}
          <div>
            <h3 className="text-slate-300 font-mono font-bold text-xs tracking-widest uppercase mb-4">
              Công Nghệ
            </h3>
            <ul className="space-y-1.5 text-slate-500 text-xs font-mono">
              {['React 18 + Vite 5', 'Tailwind CSS v3', 'Framer Motion v11', 'Recharts v2'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>

            {/* Mini quote */}
            <div
              className="mt-6 p-4 rounded-xl"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}
            >
              <p className="text-slate-300 text-xs italic leading-relaxed">
                "Khủng hoảng không nổ từ thông cáo chính sách. Nó nổ từ bảng cân đối tư nhân."
              </p>
              <p className="text-indigo-400 text-xs mt-2 font-mono">— Phe 1A · Nhóm 4</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs font-mono">
            © 2025 Nhóm 4 · Kinh tế vĩ mô · Lớp L02 · Tất cả số liệu trích dẫn từ nguồn công khai
          </p>
          <button
            onClick={scrollTop}
            className="text-indigo-400 hover:text-indigo-300 text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            Lên đầu ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
