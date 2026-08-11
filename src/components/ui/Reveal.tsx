"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** If the observer hasn't reported shortly after mount, force content visible. */
const REVEAL_FALLBACK_MS = 1200;

/**
 * Scroll-reveal wrapper (progressive enhancement only):
 * - The server HTML and every no-JS path render VISIBLE — content is never
 *   gated behind JavaScript, so a stalled hydration or observer (the iOS
 *   Safari blank-page failure) can't hide the page.
 * - The entrance animation is opted into on the client, and only for content
 *   below the fold at load — never the first screen (no flash, better LCP).
 * - Reduced motion: no movement. Missing IntersectionObserver: content stays
 *   visible. Observer stalls: a timer forces everything visible.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const timer = window.setTimeout(() => setRevealed(true), REVEAL_FALLBACK_MS);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            setHidden(false);
            window.clearTimeout(timer);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0 }
    );
    io.observe(el);

    // Only elements below the fold at load get the hidden start state —
    // applied after the first frame so the visible first paint is untouched.
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top >= viewportH - 96) {
      requestAnimationFrame(() => setHidden(true));
    }

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [reduce]);

  const visible = reduce || revealed || !hidden;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.25, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
