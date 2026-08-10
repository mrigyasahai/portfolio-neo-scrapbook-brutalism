import { cn } from "@/lib/cn";

type StatTileProps = {
  value: string;
  hat?: string;
  note?: string;
  className?: string;
};

/**
 * Stat tile — huge numeral + mono hat + short note. Always gridded, never rotated.
 */
export function StatTile({ value, hat, note, className }: StatTileProps) {
  return (
    <div className={cn("border-2 border-ink bg-white p-5 shadow-hard-sm", className)}>
      <p className="font-display text-2xl leading-none md:text-4xl">{value}</p>
      {hat && (
        <p className="mt-2 font-mono text-xs font-bold tracking-[0.06em] text-brand">{hat}</p>
      )}
      {note && <p className="mt-2 text-sm font-semibold leading-snug">{note}</p>}
    </div>
  );
}
