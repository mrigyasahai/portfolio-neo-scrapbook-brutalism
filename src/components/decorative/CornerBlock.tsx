import { cn } from "@/lib/cn";

type CornerBlockProps = {
  color?: "lav" | "teal" | "energy" | "checkpoint";
  rotate?: number;
  className?: string;
};

const colorClasses: Record<NonNullable<CornerBlockProps["color"]>, string> = {
  lav: "bg-lav",
  teal: "bg-teal",
  energy: "bg-energy",
  checkpoint: "bg-checkpoint",
};

/**
 * Torn/rotated color block bleeding off-canvas — scrapbook dressing.
 * Absolute positioned by the caller; never under readable text.
 */
export function CornerBlock({
  color = "lav",
  rotate = -6,
  className,
}: CornerBlockProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", colorClasses[color], className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}
