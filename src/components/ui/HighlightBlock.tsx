import { cn } from "@/lib/cn";

type HighlightBlockProps = {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
};

/**
 * Highlighter-marker block: a solid color rectangle BEHIND text.
 * The single emphasis device — never more than two per viewport.
 */
export function HighlightBlock({ children, rotate = -1.5, className }: HighlightBlockProps) {
  return (
    <span
      className={cn(
        "inline-block bg-emphasis px-2 py-0.5 text-ink shadow-hard-sm",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
