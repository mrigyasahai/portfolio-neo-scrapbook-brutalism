import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { HowIWork } from "@/components/sections/HowIWork";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <HowIWork />
      <Work />
    </main>
  );
}
