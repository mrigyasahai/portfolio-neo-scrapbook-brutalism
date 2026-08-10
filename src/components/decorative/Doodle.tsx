import { cn } from "@/lib/cn";

type DoodleProps = {
  type?: "asterisk" | "plus" | "dots";
  className?: string;
};

/**
 * Ambient scrapbook doodles — ink at low opacity, corners only, never under text.
 */
export function Doodle({ type = "asterisk", className }: DoodleProps) {
  if (type === "plus") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className={cn("h-6 w-6 text-ink/10", className)}
      >
        <path d="M12 3v18M3 12h18" strokeLinecap="square" />
      </svg>
    );
  }

  if (type === "dots") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 40 12"
        fill="currentColor"
        className={cn("h-3 w-10 text-ink/10", className)}
      >
        <circle cx="4" cy="6" r="2.5" />
        <circle cx="20" cy="6" r="2.5" />
        <circle cx="36" cy="6" r="2.5" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={cn("h-6 w-6 text-ink/10", className)}
    >
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" strokeLinecap="square" />
    </svg>
  );
}
