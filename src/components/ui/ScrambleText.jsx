/**
 * ScrambleText — Kinetic typography: decode/scramble effect
 * Mỗi ký tự in ra từng chữ một với hiệu ứng scramble ngẫu nhiên
 */
import { useEffect, useState, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
const CHARS_VN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

/**
 * @param {string} text - Văn bản cần hiển thị
 * @param {string} className - CSS classes
 * @param {number} delay - Delay (ms) trước khi bắt đầu (default: 0)
 * @param {number} duration - Tổng thời gian animation (ms) (default: 1200)
 * @param {boolean} trigger - Khi nào bắt đầu (default: true = auto)
 */
export default function ScrambleText({
  text,
  className = '',
  style = {},
  delay = 0,
  duration = 1200,
  trigger = true,
  tag: Tag = 'span',
}) {
  const [displayed, setDisplayed] = useState(() => text.split('').map(() => ' '));
  const frameRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;

    const chars = text.split('');
    const revealed = new Array(chars.length).fill(false);
    const startTime = performance.now() + delay;
    const endTime = startTime + duration;

    function frame(now) {
      if (now < startTime) {
        frameRef.current = requestAnimationFrame(frame);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Reveal characters progressively from left to right
      const revealUpTo = Math.floor(progress * chars.length);

      const next = chars.map((ch, i) => {
        if (ch === ' ') return ' ';
        if (i < revealUpTo) {
          revealed[i] = true;
          return ch;
        }
        // Scramble zone: a window of ~3 chars ahead of reveal front
        if (i < revealUpTo + 3 && !revealed[i]) {
          return randomChar();
        }
        return ' ';
      });

      setDisplayed(next);

      if (now < endTime) {
        frameRef.current = requestAnimationFrame(frame);
      } else {
        setDisplayed(chars);
      }
    }

    frameRef.current = requestAnimationFrame(frame);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, text, delay, duration]);

  return (
    <Tag className={className} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>
      {displayed.map((ch, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            minWidth: ch === ' ' ? '0.3em' : undefined,
            transition: 'color 0.1s',
            color: ch !== text[i] && ch !== ' ' ? 'rgba(99,102,241,0.6)' : undefined,
          }}
        >
          {ch}
        </span>
      ))}
    </Tag>
  );
}

/**
 * StaggerText — Chữ vào từng ký tự với stagger animation (không scramble)
 */
export function StaggerText({ text, className = '', style = {}, delay = 0, stagger = 0.06, tag: Tag = 'span' }) {
  return (
    <Tag className={className} style={style} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            animation: `staggerIn 0.5s ease forwards`,
            animationDelay: `${delay + i * stagger}s`,
            opacity: 0,
            minWidth: ch === ' ' ? '0.25em' : undefined,
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </Tag>
  );
}
