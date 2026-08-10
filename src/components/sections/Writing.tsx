import { site } from "@/lib/site";
import { getWritingItems } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StickyNote } from "@/components/ui/StickyNote";
import { Reveal } from "@/components/ui/Reveal";

const FORMAT_COLORS: Record<string, string> = {
  "[runbook]": "bg-energy",
  "[guide]": "bg-checkpoint",
  "[diagram]": "bg-lav",
  "[essay]": "bg-voice",
};

/** Writing — documentation & notes in a strictly gridded matrix. Mint band. */
export function Writing() {
  const items = getWritingItems();

  return (
    <section
      id="writing"
      className="border-b-2 border-ink bg-checkpoint py-[clamp(4rem,9vw,7.5rem)]"
    >
      <div className="container-p">
        <Reveal>
          <SectionHeader
            index="04"
            eyebrow="WRITING"
            title="Writing & notes. Docs are product."
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse text-left">
            <caption className="sr-only">
              Documentation and notes by {site.name}: title, format, topic, and
              year.
            </caption>
            <thead>
              <tr className="border-b-2 border-ink font-mono text-xs uppercase tracking-[0.08em]">
                <th className="pb-3 pr-4 font-bold">#</th>
                <th className="pb-3 pr-4 font-bold">Title</th>
                <th className="pb-3 pr-4 font-bold">Format</th>
                <th className="pb-3 pr-4 font-bold">Topic</th>
                <th className="pb-3 font-bold">Year</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr
                  key={item.slug}
                  className="border-b border-dashed border-ink/30 last:border-b-0"
                >
                  <td className="py-3 pr-4 font-mono text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="py-3 pr-4 font-semibold">{item.title}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={`inline-block border-2 border-ink px-2 py-0.5 font-mono text-xs font-bold ${
                        FORMAT_COLORS[item.format] ?? "bg-white"
                      }`}
                    >
                      {item.format}
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs text-muted">
                    {item.topic}
                  </td>
                  <td className="py-3 font-mono text-xs text-muted">
                    {item.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Reveal delay={0.1}>
            <Button href="#contact" variant="secondary" withArrow>
              Ask me for a sample
            </Button>
          </Reveal>
          <Reveal delay={0.15}>
            <StickyNote className="max-w-xs md:max-w-sm">
              {site.writingMarginNote}
            </StickyNote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
