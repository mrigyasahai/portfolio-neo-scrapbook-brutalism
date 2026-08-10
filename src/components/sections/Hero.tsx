import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { HighlightBlock } from "@/components/ui/HighlightBlock";
import { StatTile } from "@/components/ui/StatTile";
import { AvatarSticker } from "@/components/icons/stickers";
import { CornerBlock } from "@/components/decorative/CornerBlock";
import { Doodle } from "@/components/decorative/Doodle";

/**
 * Hero — exposition. The 5-second answer:
 * name + claim (with THE one highlighted phrase) + hard numbers + CTA.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-2 border-ink bg-paper"
    >
      <CornerBlock
        color="energy"
        rotate={-8}
        className="-right-16 top-8 h-40 w-40 md:-right-10 md:h-56 md:w-56"
      />
      <CornerBlock
        color="lav"
        rotate={6}
        className="-left-20 bottom-10 h-44 w-44 md:-left-12 md:h-64 md:w-64"
      />

      <div className="container-p relative py-[clamp(4rem,9vw,7.5rem)]">
        <div className="flex items-baseline gap-3 font-mono text-sm tracking-[0.08em]">
          <span aria-hidden="true" className="font-bold text-brand">
            [01]
          </span>
          <span className="font-bold">INDEX</span>
          <span className="text-muted">/ first page</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="flex flex-wrap items-baseline gap-x-3 font-display text-2xl uppercase leading-none md:text-3xl">
              {site.name}
              <span className="font-script text-2xl normal-case text-brand md:text-3xl">
                — {site.scriptNote}
              </span>
            </p>

            <h1 className="mt-6 font-display text-[clamp(2.6rem,7.5vw,5.5rem)] uppercase leading-[1.02]">
              I <HighlightBlock>{site.headlineHighlight}</HighlightBlock>.
              <br />
              I build the products
              <br />
              that fix them.
            </h1>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {site.proof.map((item) => (
                <StatTile
                  key={item.hat}
                  value={item.value}
                  hat={item.hat}
                  note={item.note}
                />
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button href="#work" variant="secondary" withArrow>
                See the work
              </Button>
              <Button href="#contact" size="lg" withArrow>
                Say hello
              </Button>
            </div>
          </div>

          <div className="hidden lg:block lg:self-start">
            <AvatarSticker className="h-44 w-44 rotate-3" />
          </div>
        </div>
      </div>

      <Doodle type="asterisk" className="absolute left-[42%] top-10 h-8 w-8" />
      <Doodle type="dots" className="absolute bottom-8 right-12 hidden md:block" />
    </section>
  );
}
