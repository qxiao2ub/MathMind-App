// Generates public/sitemap.xml. Runs via predev/prebuild hooks.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { curriculum } from "../src/data/curriculum";

const BASE_URL = "https://mathsmind.lovable.app";
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  path: string;
  changefreq?: string;
  priority?: string;
}

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/login", changefreq: "monthly", priority: "0.6" },
  { path: "/signup", changefreq: "monthly", priority: "0.7" },
  { path: "/forgot-password", changefreq: "yearly", priority: "0.3" },
  { path: "/reset-password", changefreq: "yearly", priority: "0.3" },
  { path: "/learn", changefreq: "weekly", priority: "0.9" },
  { path: "/community", changefreq: "daily", priority: "0.8" },
  { path: "/dashboard", changefreq: "daily", priority: "0.7" },
  { path: "/chat", changefreq: "weekly", priority: "0.7" },
];

// Year-level pages + every topic detail page from curriculum
const dynamicEntries: Entry[] = [];
for (const year of curriculum) {
  dynamicEntries.push({
    path: `/learn/${year.id}`,
    changefreq: "weekly",
    priority: "0.8",
  });
  for (const category of year.categories) {
    for (const topic of category.topics) {
      dynamicEntries.push({
        path: `/learn/${year.id}/${topic.id}`,
        changefreq: "weekly",
        priority: "0.7",
      });
    }
  }
}

const entries = [...staticEntries, ...dynamicEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
