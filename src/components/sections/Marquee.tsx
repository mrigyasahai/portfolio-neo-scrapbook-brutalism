import { Sparkles } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Marquee — terrain ticker. Black band, CSS keyframe loop, glyph separators.
 * Pauses on hover/focus; freezes under reduced motion. Decorative (aria-hidden).
 */
export function Marquee() {
  const track = [...site.marquee, ...site.marquee];
  return (
    <section
      aria-hidden="true"
      className="marquee overflow-hidden border-b-2 border-ink bg-ink py-4 text-white"
    >
      <div className="animate-marquee flex w-max items-center will-change-transform">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-display text-lg uppercase tracking-[0.08em] md:text-xl"
          >
            {item}
            <Sparkles strokeWidth={2.5} className="h-4 w-4 text-emphasis" />
          </span>
        ))}
      </div>
    </section>
  );
}
