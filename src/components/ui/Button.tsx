import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "dark";
  size?: "md" | "lg";
  withArrow?: boolean;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-3 text-xs md:text-sm",
  lg: "px-8 py-4 text-sm md:text-base",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "rounded-pill bg-emphasis text-ink shadow-hard-lg hover:shadow-hard-md",
  secondary:
    "rounded-card bg-white text-ink shadow-hard-sm hover:shadow-hard-md",
  dark: "rounded-pill bg-ink text-white shadow-hard-lg hover:shadow-hard-md",
};

/**
 * Sticker button — the only interactive CTA component.
 * Pressing sinks it into its own hard shadow (.sticker in globals.css).
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  type = "button",
  target,
  rel,
  ariaLabel,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "sticker sticker-link group inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-ink font-bold uppercase tracking-[0.08em]",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          strokeWidth={2.75}
          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
