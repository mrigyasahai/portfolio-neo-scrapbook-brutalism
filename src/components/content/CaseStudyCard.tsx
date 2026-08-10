import type { WorkItem } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { TagPill } from "@/components/ui/TagPill";

/** Standard case study card — outcome first, strictly gridded. */
export function CaseStudyCard({ item }: { item: WorkItem }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs font-bold tracking-[0.08em] text-muted">
          {item.year}
        </p>
        <p className="font-mono text-xs font-bold tracking-[0.08em] text-brand">
          {item.hat}
        </p>
      </div>
      <p className="mt-4 font-display text-2xl uppercase leading-none md:text-3xl">
        {item.metric}
      </p>
      <h3 className="mt-3 font-display text-base uppercase leading-snug md:text-lg">
        {item.title}
      </h3>
      <p className="mt-3 text-sm font-semibold leading-relaxed text-ink/90">
        <span className="font-bold text-ink">Problem · </span>
        {item.problem}
      </p>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-ink/80">
        <span className="font-bold text-ink">Move · </span>
        {item.move}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {item.tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>
    </Card>
  );
}
