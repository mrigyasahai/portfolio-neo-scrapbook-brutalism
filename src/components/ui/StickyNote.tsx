import { cn } from "@/lib/cn";

type StickyNoteProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * The voice component — a scribbled margin note (blue, rotated, taped).
 * Never carries facts; facts live in cards/receipts. One per section max.
 */
export function StickyNote({ children, className }: StickyNoteProps) {
  return (
    <aside
      className={cn(
        "tilt relative inline-block rotate-[-2deg] border-2 border-ink bg-voice p-5 shadow-hard-md",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 h-5 w-24 -translate-x-1/2 -rotate-2 border border-ink/30 bg-checkpoint/80"
      />
      <p className="font-script text-lg leading-snug md:text-xl">{children}</p>
    </aside>
  );
}
