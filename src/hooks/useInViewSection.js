import { useState, useEffect } from 'react';
import { sectionIds } from '../data/slidesMeta';

/**
 * useInViewSection — Track section hiện tại đang trong viewport
 * Trả về: activeId (string)
 */
export default function useInViewSection(threshold = 0.4) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        { threshold, rootMargin: '-10% 0px -50% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [threshold]);

  return activeId;
}
