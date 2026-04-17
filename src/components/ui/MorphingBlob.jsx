/**
 * MorphingBlob — SVG blob animation trang trí nền section
 */
export default function MorphingBlob({ color = '#6366f1', size = 400, className = '', style = {} }) {
  return (
    <div
      className={`blob-decoration ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
