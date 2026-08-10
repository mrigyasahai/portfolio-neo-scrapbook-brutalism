import { cn } from "@/lib/cn";

type StickerProps = {
  className?: string;
};

function Frame({
  fill,
  children,
  className,
}: {
  fill: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      className={cn("h-14 w-14", className)}
    >
      <rect x="2" y="2" width="60" height="60" fill={fill} stroke="#141414" strokeWidth="3" />
      {children}
    </svg>
  );
}

/** Paper-plane sticker — contact / send. */
export function PlaneSticker({ className }: StickerProps) {
  return (
    <Frame fill="#F4A6C6" className={className}>
      <path
        d="M50 14 12 32l13 5 5 13 5-11 15-12Z"
        fill="#FFFFFF"
        stroke="#141414"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M25 37l9 3 8-16" fill="none" stroke="#141414" strokeWidth="2.5" />
    </Frame>
  );
}

/** Gear sticker — build / move. */
export function GearSticker({ className }: StickerProps) {
  return (
    <Frame fill="#F5C242" className={className}>
      <g stroke="#141414" strokeWidth="3">
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="29" y="6" width="6" height="10" fill="#F5C242" transform={`rotate(${i * 45} 32 32)`} />
        ))}
        <circle cx="32" cy="32" r="11" fill="#FFFFFF" />
        <circle cx="32" cy="32" r="4" fill="#141414" />
      </g>
    </Frame>
  );
}

/** Tag sticker — documentation / notes. */
export function TagSticker({ className }: StickerProps) {
  return (
    <Frame fill="#A9E0C4" className={className}>
      <path
        d="M12 8h26l14 14-28 28L12 38V8Z"
        fill="#FFFFFF"
        stroke="#141414"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="27" r="4.5" fill="#141414" />
    </Frame>
  );
}

/** Box sticker — commerce / shipping (Shopify). */
export function BoxSticker({ className }: StickerProps) {
  return (
    <Frame fill="#C6B7E3" className={className}>
      <path d="M8 22h48v32H8z" fill="#FFFFFF" stroke="#141414" strokeWidth="3" />
      <path d="M8 22l6-12h36l6 12M8 22l14 6 10-6 10 6 14-6" fill="none" stroke="#141414" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 22v32" stroke="#141414" strokeWidth="3" />
    </Frame>
  );
}

/** Bot sticker — AI / agents. */
export function BotSticker({ className }: StickerProps) {
  return (
    <Frame fill="#AACBEE" className={className}>
      <path d="M24 20v-5h16v5" fill="none" stroke="#141414" strokeWidth="3" />
      <rect x="16" y="18" width="32" height="28" rx="4" fill="#FFFFFF" stroke="#141414" strokeWidth="3" />
      <circle cx="25" cy="31" r="3.5" fill="#141414" />
      <circle cx="39" cy="31" r="3.5" fill="#141414" />
      <path d="M27 41h10" stroke="#141414" strokeWidth="3" strokeLinecap="square" />
    </Frame>
  );
}

/** Avatar sticker — the person. */
export function AvatarSticker({ className }: StickerProps) {
  return (
    <Frame fill="#F5C242" className={className}>
      <circle cx="32" cy="26" r="10" fill="#F3CDB0" stroke="#141414" strokeWidth="3" />
      <path d="M14 54c3-11 10-16 18-16s15 5 18 16" fill="#141414" />
    </Frame>
  );
}
