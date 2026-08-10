import { site } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HighlightBlock } from "@/components/ui/HighlightBlock";
import { Card } from "@/components/ui/Card";
import { StickyNote } from "@/components/ui/StickyNote";
import { Reveal } from "@/components/ui/Reveal";

/** How I Work — four principles + a margin note. Pink chapter band. */
export function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="border-b-2 border-ink bg-energy py-[clamp(4rem,9vw,7.5rem)]"
    >
      <div className="container-p">
        <Reveal>
          <SectionHeader
            index="02"
            eyebrow="METHOD"
            title={
              <>
                How I work. I <HighlightBlock className="-rotate-1">build</HighlightBlock>{" "}
                the answers.
              </>
            }
          />
          <p className="mt-6 max-w-xl font-semibold leading-relaxed text-ink/90">
            Four things I hold true when a product problem walks in the door —
            and how they show up in every build.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {site.principles.map((principle, i) => (
            <Reveal key={principle.index} delay={(i % 2) * 0.08}>
              <Card
                variant="tossed"
                rotate={i % 2 === 0 ? -0.75 : 0.75}
                className="flex h-full flex-col"
              >
                <p className="font-mono text-sm font-bold text-brand">
                  [{principle.index}]
                </p>
                <h3 className="mt-4 font-display text-xl uppercase leading-tight md:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-2 font-script text-lg text-ink/80 md:text-xl">
                  {principle.quote}
                </p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-ink/90">
                  {principle.note}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-end">
          <StickyNote className="max-w-xs md:max-w-sm">
            {site.methodMarginNote}
          </StickyNote>
        </Reveal>
      </div>
    </section>
  );
}
