export default function Footer() {
  return (
    <footer className="bg-ink-100 border-t border-ink-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nhóm */}
          <div>
            <h3 className="font-bold text-ink-800 mb-2">Nhóm 4 — Lớp L02</h3>
            <p className="text-ink-500 text-sm leading-relaxed">
              Thuyết trình phân tích kinh tế<br />
              Phe 1A: Market Failure &amp; Lòng Tham của Thị Trường
            </p>
          </div>

          {/* Nguồn tham khảo */}
          <div>
            <h3 className="font-bold text-ink-800 mb-2">Nguồn Dữ Liệu</h3>
            <ul className="text-ink-500 text-xs space-y-1 font-mono">
              <li>GSO — Tổng cục Thống kê Việt Nam</li>
              <li>NHNN/SBV — Ngân hàng Nhà nước</li>
              <li>CBRE Vietnam Q4/2024</li>
              <li>VNDIRECT / VBMA Q1/2025</li>
              <li>OIG Fed 2023-SR-B-013 / DFPI</li>
              <li>S&amp;P Case-Shiller Index / U.S. Census</li>
              <li>World Bank / UNCTAD Q1/2024</li>
            </ul>
          </div>

          {/* Kỹ thuật */}
          <div>
            <h3 className="font-bold text-ink-800 mb-2">Công Nghệ</h3>
            <ul className="text-ink-500 text-xs space-y-1 font-mono">
              <li>React 18 + Vite 5</li>
              <li>Tailwind CSS v3</li>
              <li>Framer Motion v11</li>
              <li>Recharts v2</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-200 text-center text-ink-400 text-xs font-mono">
          © 2025 Nhóm 4 — Kinh tế vĩ mô · Lớp L02 · Tất cả số liệu trích dẫn từ nguồn công khai
        </div>
      </div>
    </footer>
  );
}
