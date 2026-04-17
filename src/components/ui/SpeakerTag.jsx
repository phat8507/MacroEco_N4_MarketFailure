/**
 * SpeakerTag — Badge hiển thị người trình bày + khoảng thời gian
 */
export default function SpeakerTag({ name, time, color = '#6366f1' }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-ink-100 shadow-sm">
      <span
        className="inline-block w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-ink-700 text-xs font-semibold">{name}</span>
      {time && (
        <>
          <span className="text-ink-300 text-xs">·</span>
          <span className="text-ink-500 text-xs font-mono">{time}</span>
        </>
      )}
    </div>
  );
}
