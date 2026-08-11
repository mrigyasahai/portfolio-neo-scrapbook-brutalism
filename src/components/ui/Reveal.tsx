"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Reveal zone: element counts as visible once its top is this close to the viewport bottom. */
const REVEAL_ZONE_PX = 80;

/**
 * Scroll-reveal wrapper (progressive enhancement only):
 * - The server HTML and every no-JS path render VISIBLE — content is never
 *   gated behind JavaScript, so a stalled hydration or observer (the iOS
 *   Safari blank-page failure) can't hide the page.
 * - The entrance animation is opted into on the client, and only for content
 *   below the fold at load — never the first screen (no flash, better LCP).
 * - Reduced motion: no movement. Missing IntersectionObserver: content stays
 *   visible. A stalled observer: scroll/resize checks reveal the element the
 *   moment it actually reaches the viewport, preserving the scroll-in effect.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (reduce || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;

    let done = false;
    let io: IntersectionObserver | null = null;
    let interval = 0;

    const inZone = () =>
      el.getBoundingClientRect().top <
      (window.innerHeight || document.documentElement.clientHeight) - REVEAL_ZONE_PX;

    const cleanup = () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      if (io) io.disconnect();
    };

    const finish = () => {
      if (done) return;
      done = true;
      setHidden(false);
      cleanup();
    };

    const check = () => {
      if (inZone()) finish();
    };

    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) finish();
        }
      },
      { rootMargin: `0px 0px -${REVEAL_ZONE_PX}px 0px`, threshold: 0 }
    );
    io.observe(el);

    // Fallback for a stalled observer: check on scroll/resize and periodically.
    // Only reveals once the element really reaches the viewport, so the
    // scroll-in effect is preserved even when the observer never fires.
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    interval = window.setInterval(check, 800);

    // Only elements below the fold at load get the hidden start state —
    // applied after the first frame so the visible first paint is untouched.
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top >= viewportH - REVEAL_ZONE_PX - 16) {
      requestAnimationFrame(() => {
        if (!done) setHidden(true);
      });
    }

    return cleanup;
  }, [reduce]);

  const visible = reduce || !hidden;

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
