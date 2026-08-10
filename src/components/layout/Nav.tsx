"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Flat segmented chrome — the calm frame around the playful body.
 * Current section tracked by IntersectionObserver → aria-current.
 * Sticky; the segmented unit stays visible on mobile as horizontal chips.
 */
export function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = site.navItems.map((item) => item.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="container-p flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="group inline-flex items-baseline gap-2">
          <span className="font-display text-xl uppercase leading-none">
            {site.name}
          </span>
          <span className="font-script text-lg text-brand">{site.scriptNote}</span>
        </a>

        <nav aria-label="Primary" className="-mx-1 flex overflow-x-auto px-1">
          <ul className="flex border-2 border-ink bg-white">
            {site.navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="border-r-2 border-ink last:border-r-0">
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block whitespace-nowrap px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors",
                      isActive
                        ? "bg-ink text-white"
                        : "bg-white text-ink hover:bg-emphasis"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
