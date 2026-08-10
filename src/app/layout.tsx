import type { Metadata } from "next";
import { Archivo, Archivo_Black, Caveat, Space_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { Nav } from "@/components/layout/Nav";
import { SiteFooter } from "@/components/sections/SiteFooter";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const script = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Product Builder & AI Builder`,
    template: `%s · ${site.name}`,
  },
  description: site.metaDescription,
  keywords: [
    "product manager",
    "product builder",
    "AI builder",
    "documentation engineer",
    "Shopify specialist",
    "portfolio",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — I solve product problems.`,
    description: site.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — I solve product problems.`,
    description: site.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} ${mono.variable} h-full`}
    >
      <body id="top" className="min-h-full">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div
          aria-hidden="true"
          className="bg-grain pointer-events-none fixed inset-0 z-50"
        />
        <Nav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
