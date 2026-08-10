import { site } from "@/lib/site";

export default function Home() {
  return (
    <main id="main">
      <p className="p-8 font-mono text-sm">{site.name} — scaffolding…</p>
    </main>
  );
}
