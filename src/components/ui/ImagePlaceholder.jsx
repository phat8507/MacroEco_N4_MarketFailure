/**
 * ImagePlaceholder — Đơn giản, đẹp, dễ thay ảnh thật
 * Usage: <ImagePlaceholder width="100%" height={280} label="Nhà máy Bình Dương" icon="🏭" />
 */
export default function ImagePlaceholder({ width = '100%', height = 240, label = 'Hình ảnh', icon = '📷', className = '' }) {
  return (
    <div
      className={`img-placeholder ${className}`}
      style={{ width, height }}
      role="img"
      aria-label={label}
    >
      <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{icon}</span>
      <span className="text-center px-4">{label}</span>
      <span className="text-xs opacity-60">(Thay bằng ảnh thật tại đây)</span>
    </div>
  );
}
