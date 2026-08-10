import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { HowIWork } from "@/components/sections/HowIWork";
import { Work } from "@/components/sections/Work";
import { Writing } from "@/components/sections/Writing";
import { Timeline } from "@/components/sections/Timeline";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <HowIWork />
      <Work />
      <Writing />
      <Timeline />
      <About />
      <Contact />
    </main>
  );
}
