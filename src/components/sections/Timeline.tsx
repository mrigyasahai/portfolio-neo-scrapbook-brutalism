import { site } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

/** Timeline — the path here, as numbered stops on a dashed route. Lavender band. */
export function Timeline() {
  return (
    <section className="border-b-2 border-ink bg-lav py-[clamp(4rem,9vw,7.5rem)]">
      <div className="container-p">
        <Reveal>
          <SectionHeader index="05" eyebrow="PATH" title="The path here." />
        </Reveal>

        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {site.timeline.map((stop, i) => (
            <Reveal key={stop.year} delay={i * 0.08}>
              <li className="relative pl-10 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-white font-mono text-xs font-bold text-brand md:static"
                >
                  {stop.badge}
                </span>
                <p className="mt-2 font-mono text-xs font-bold tracking-[0.08em] text-muted md:mt-5">
                  {stop.year}
                </p>
                <h3 className="mt-1 font-display text-lg uppercase leading-tight">
                  {stop.title}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-ink/80">
                  {stop.beat}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
