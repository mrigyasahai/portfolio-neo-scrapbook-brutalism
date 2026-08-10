import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

/**
 * The numbered "tab" that opens every section band — instant orientation.
 * Index is a white chip so the orange stays AA-visible on any band color;
 * mono eyebrow follows in ink.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("w-full", className)}>
      <div className="flex items-center gap-3 font-mono text-sm tracking-[0.08em]">
        <span
          aria-hidden="true"
          className="inline-flex items-center border-2 border-ink bg-white px-2 py-0.5 font-bold text-brand"
        >
          {index}
        </span>
        <span className="font-bold">{eyebrow}</span>
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-3xl font-display text-3xl uppercase leading-[1.05] md:text-5xl">
          {title}
        </h2>
        {action}
      </div>
    </header>
  );
}
