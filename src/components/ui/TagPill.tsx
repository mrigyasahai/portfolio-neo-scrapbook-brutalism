import { cn } from "@/lib/cn";

type TagPillProps = {
  children: React.ReactNode;
  as?: "span" | "a";
  href?: string;
  className?: string;
};

/**
 * Tag pill — bordered white chip for meta, tools, social links.
 */
export function TagPill({ children, as = "span", href, className }: TagPillProps) {
  const classes = cn(
    "sticker inline-flex items-center gap-2 border-2 border-ink bg-white px-3 py-1.5 font-mono text-xs tracking-[0.06em] shadow-hard-sm",
    className
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return <span className={classes}>{children}</span>;
}
