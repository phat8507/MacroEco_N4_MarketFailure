/**
 * SourceTag — Nhãn nhỏ trích nguồn dữ liệu dưới biểu đồ
 */
export default function SourceTag({ children }) {
  return (
    <p className="text-ink-400 text-xs font-mono mt-2">
      <span className="font-semibold">Nguồn:</span> {children}
    </p>
  );
}
