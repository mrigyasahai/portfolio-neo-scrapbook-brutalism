import { cn } from "@/lib/cn";

type CardFill = "white" | "energy" | "voice" | "checkpoint" | "lav" | "clear";
type CardVariant = "standard" | "tossed" | "featured" | "receipt" | "stat";

const fillClasses: Record<CardFill, string> = {
  white: "bg-white",
  energy: "bg-energy",
  voice: "bg-voice",
  checkpoint: "bg-checkpoint",
  lav: "bg-lav",
  clear: "bg-transparent",
};

const variantClasses: Record<CardVariant, string> = {
  standard: "shadow-hard-md",
  tossed: "shadow-hard-md",
  featured: "shadow-hard-lg",
  receipt: "shadow-hard-sm",
  stat: "shadow-hard-sm",
};

const paddingClasses: Record<CardVariant, string> = {
  standard: "p-6 md:p-8",
  tossed: "p-6 md:p-8",
  featured: "p-6 md:p-10",
  receipt: "p-5 md:p-6",
  stat: "p-5",
};

type CardProps = {
  variant?: CardVariant;
  fill?: CardFill;
  rotate?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * The universal card recipe: 2px ink border + hard shadow + optional rotation.
 * Factual variants (stat, receipt, featured, standard) never rotate.
 * Tossed cards carry .tilt → they straighten on hover.
 */
export function Card({
  variant = "standard",
  fill = "white",
  rotate = 0,
  className,
  children,
}: CardProps) {
  const rotated = variant === "tossed" && rotate !== 0;
  return (
    <div
      className={cn(
        "border-2 border-ink",
        fillClasses[fill],
        variantClasses[variant],
        paddingClasses[variant],
        rotated && "tilt",
        className
      )}
      style={rotated ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {children}
    </div>
  );
}
