import { site } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { AvatarSticker } from "@/components/icons/stickers";

/** About — the person behind the build + a toolkit receipt. Blue band. */
export function About() {
  return (
    <section
      id="about"
      className="border-b-2 border-ink bg-voice py-[clamp(4rem,9vw,7.5rem)]"
    >
      <div className="container-p">
        <Reveal>
          <SectionHeader
            index="06"
            eyebrow="ABOUT"
            title="The person behind the build."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Card className="flex h-full flex-col">
              <div className="flex items-start gap-4">
                <AvatarSticker className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
                <div>
                  <h3 className="font-display text-xl uppercase leading-tight md:text-2xl">
                    {site.name}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {site.roles.map((role) => (
                      <li
                        key={role}
                        className="border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[11px] font-bold tracking-[0.06em]"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-ink/90">
                {site.about.bio}
              </p>
              <p className="mt-3 font-script text-lg text-ink/70 md:text-xl">
                — {site.about.scriptNote}
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="flex h-full flex-col">
              <p className="font-mono text-xs font-bold tracking-[0.08em] text-brand">
                TOOLKIT RECEIPT
              </p>
              <dl className="mt-4 flex-1">
                {site.toolkit.rows.map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-baseline justify-between gap-4 border-t border-dashed border-ink/30 py-2.5 first:border-t-0"
                  >
                    <dt className="font-mono text-xs font-bold">{key}</dt>
                    <dd className="text-right font-mono text-xs text-muted">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 border-t-2 border-dashed border-ink/30 pt-3 font-mono text-[11px] text-muted">
                {site.toolkit.footer}
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
