import type { WorkItem } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { TagPill } from "@/components/ui/TagPill";
import { Button } from "@/components/ui/Button";
import { StickyNote } from "@/components/ui/StickyNote";
import {
  BotSticker,
  BoxSticker,
  GearSticker,
  TagSticker,
} from "@/components/icons/stickers";

/** Sticker chosen by the story's hat — AI → bot, commerce → box, docs → tag. */
function StickerFor({ hat, className }: { hat: string; className?: string }) {
  const key = hat.toUpperCase();
  if (key.includes("AI")) return <BotSticker className={className} />;
  if (key.includes("SHOPIFY") || key.includes("COMMERCE"))
    return <BoxSticker className={className} />;
  if (key.includes("DOC")) return <TagSticker className={className} />;
  return <GearSticker className={className} />;
}

/** Featured case study — the single story that breaks the grid. */
export function FeaturedCaseStudy({ item }: { item: WorkItem }) {
  return (
    <Card
      variant="featured"
      fill="energy"
      className="relative flex flex-col gap-6 md:flex-row md:items-start"
    >
      <StickerFor hat={item.hat} className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold tracking-[0.08em]">
          <span className="border-2 border-ink bg-white px-2 py-0.5">
            FEATURED
          </span>
          <span className="text-ink/80">
            {item.hat} · {item.year}
          </span>
        </div>
        <p className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">
          {item.metric}
        </p>
        <h3 className="mt-3 font-display text-2xl uppercase leading-tight md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 font-semibold leading-relaxed text-ink/90">
          <span className="font-bold text-ink">Problem · </span>
          {item.problem}
        </p>
        <p className="mt-2 font-semibold leading-relaxed text-ink/80">
          <span className="font-bold text-ink">Move · </span>
          {item.move}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
          <TagPill as="span" className="bg-checkpoint">
            [TO FILL] verify metric
          </TagPill>
        </div>
        {item.link && (
          <Button href={item.link} variant="secondary" withArrow className="mt-6">
            Read the case study
          </Button>
        )}
      </div>
      {item.marginNote && (
        <StickyNote className="w-full max-w-xs shrink-0 md:mt-2">
          {item.marginNote}
        </StickyNote>
      )}
    </Card>
  );
}
