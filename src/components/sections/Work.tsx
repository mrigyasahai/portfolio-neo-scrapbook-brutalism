import { getWorkItems, getFeaturedWork } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/content/CaseStudyCard";
import { FeaturedCaseStudy } from "@/components/content/FeaturedCaseStudy";

/** Work — one featured story + a strictly gridded set of receipts. Paper band. */
export function Work() {
  const all = getWorkItems();
  const featured = getFeaturedWork();
  const rest = all.filter((w) => !w.featured);

  return (
    <section
      id="work"
      className="border-b-2 border-ink bg-paper py-[clamp(4rem,9vw,7.5rem)]"
    >
      <div className="container-p">
        <Reveal>
          <SectionHeader
            index="03"
            eyebrow="WORK"
            title="Selected work. The receipts first."
          />
        </Reveal>

        {featured && (
          <Reveal className="mt-12">
            <FeaturedCaseStudy item={featured} />
          </Reveal>
        )}

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.08}>
              <CaseStudyCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Button href="#contact" variant="secondary" withArrow>
            Want the full stories? Let&apos;s talk
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
