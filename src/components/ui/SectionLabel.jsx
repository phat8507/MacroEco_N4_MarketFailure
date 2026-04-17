/**
 * SectionLabel — "SLIDE 4 / 12" eyebrow indicator
 */
export default function SectionLabel({ index, total = 12, label, accent = '#6366f1' }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {index && (
        <span className="section-eyebrow" style={{ color: accent }}>
          Slide {index} / {total}
        </span>
      )}
      {index && label && <span className="text-ink-300 text-xs">—</span>}
      {label && (
        <span className="section-eyebrow" style={{ color: accent }}>
          {label}
        </span>
      )}
    </div>
  );
}
