import React, { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Animated number counter that starts when scrolled into view.
// Respects prefers-reduced-motion and falls back to a static value.
export default function Counter({ value, prefix = "", suffix = "", decimals = 0, duration = 1600, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    let rafId = null;
    let started = false;
    const el = ref.current;
    if (!el) return;

    const animate = (from, to) => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        setDisplay((from + (to - from) * eased).toFixed(decimals));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          animate(0, value);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, decimals, duration]);

  const text = display === null ? (0).toFixed(decimals) : display;

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}