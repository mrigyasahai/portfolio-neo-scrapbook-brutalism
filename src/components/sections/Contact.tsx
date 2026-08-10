import { site } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HighlightBlock } from "@/components/ui/HighlightBlock";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";
import { Reveal } from "@/components/ui/Reveal";
import { PlaneSticker } from "@/components/icons/stickers";

/** Contact — the invitation. Yellow finale band. */
export function Contact() {
  return (
    <section
      id="contact"
      className="border-b-2 border-ink bg-emphasis py-[clamp(4rem,9vw,7.5rem)]"
    >
      <div className="container-p">
        <Reveal>
          <SectionHeader
            index="07"
            eyebrow="CONTACT"
            title={
              <>
                Let&apos;s <HighlightBlock className="rotate-1">build</HighlightBlock>.
              </>
            }
          />
          <p className="mt-6 max-w-xl font-semibold leading-relaxed text-ink/90">
            If you have a product problem that needs building, I want to hear
            about it. Email works best — I reply fast.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <PlaneSticker className="h-16 w-16 md:h-20 md:w-20" />
        </Reveal>

        <Reveal delay={0.12} className="mt-8 flex flex-col items-start gap-6">
          <div className="flex flex-wrap gap-4">
            <Button href={`mailto:${site.email}`} variant="dark" withArrow size="lg">
              Say hello
            </Button>
            <Button href="#work" variant="secondary" size="lg">
              See the work first
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {site.links.map((link) => (
              <TagPill
                key={link.label}
                as="a"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </TagPill>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
