import { site } from "@/lib/site";

/**
 * Footer — black band, hard-fact mono line (the reference's marquee texture).
 */
export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-white">
      <div className="container-p flex flex-col gap-3 py-8 font-mono text-xs tracking-[0.08em] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} · {site.name}</p>
        <p className="text-white/70">{site.footerNote}</p>
        <p>
          <span className="text-brand">STATUS</span> {site.status}
        </p>
      </div>
    </footer>
  );
}
