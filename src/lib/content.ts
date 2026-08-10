import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type WorkItem = {
  slug: string;
  title: string;
  metric: string;
  hat: string;
  problem: string;
  move: string;
  tags: string[];
  year: number;
  featured?: boolean;
  marginNote?: string;
  link?: string;
};

export type WritingItem = {
  slug: string;
  title: string;
  format: string;
  topic: string;
  year: number;
  readTime: string;
  excerpt: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

function readDir<T>(sub: string): T[] {
  const dir = path.join(CONTENT_DIR, sub);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data } = matter(raw);
      return data as T;
    });
}

/** Work items, featured first, then most recent. */
export function getWorkItems(): WorkItem[] {
  const items = readDir<WorkItem>("work");
  return items.sort(
    (a, b) =>
      Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.year - a.year
  );
}

export function getFeaturedWork(): WorkItem | undefined {
  return getWorkItems().find((w) => w.featured);
}

/** Writing items, most recent first. */
export function getWritingItems(): WritingItem[] {
  return readDir<WritingItem>("writing").sort((a, b) => b.year - a.year);
}
