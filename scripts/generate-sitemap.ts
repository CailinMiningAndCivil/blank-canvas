// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Writes public/sitemap.xml listing all public, indexable routes.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.cailinminingcivil.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Keep in sync with src/AppRoutes.tsx. Omits admin, redirects,
// thank-you pages, and internal-only routes.
const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/courses", changefreq: "weekly", priority: "0.9" },
  { path: "/courses/bundles", changefreq: "monthly", priority: "0.8" },
  { path: "/courses/short-courses", changefreq: "monthly", priority: "0.8" },
  { path: "/courses/voc", changefreq: "monthly", priority: "0.7" },
  { path: "/courses/full-day", changefreq: "monthly", priority: "0.7" },
  { path: "/courses/excavator", changefreq: "monthly", priority: "0.8" },
  { path: "/courses/excavator-training-perth", changefreq: "weekly", priority: "0.9" },
  { path: "/courses/wheel-loader", changefreq: "monthly", priority: "0.8" },
  { path: "/courses/moxy", changefreq: "monthly", priority: "0.8" },
  { path: "/courses/moxy-training-perth", changefreq: "weekly", priority: "0.9" },
  { path: "/courses/roller", changefreq: "monthly", priority: "0.8" },
  { path: "/courses/watercart", changefreq: "monthly", priority: "0.8" },
  { path: "/courses/integrated-tool-carrier", changefreq: "monthly", priority: "0.8" },
  { path: "/rpl", changefreq: "monthly", priority: "0.8" },
  { path: "/rplad", changefreq: "monthly", priority: "0.6" },
  { path: "/book", changefreq: "weekly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/privatecall", changefreq: "monthly", priority: "0.7" },
  { path: "/ctf-funding", changefreq: "monthly", priority: "0.7" },
  { path: "/recruitment", changefreq: "monthly", priority: "0.6" },
  { path: "/affiliate", changefreq: "monthly", priority: "0.5" },
  { path: "/returning-student", changefreq: "monthly", priority: "0.6" },
  { path: "/refresher-training", changefreq: "monthly", priority: "0.7" },
  { path: "/rigid-haul-truck-application", changefreq: "weekly", priority: "0.8" },
  { path: "/rigid-haul-truck-booking", changefreq: "weekly", priority: "0.9" },
  { path: "/rigid-haul-truck-schedule", changefreq: "weekly", priority: "0.7" },
  { path: "/privacypolicy", changefreq: "yearly", priority: "0.3" },
  { path: "/termsandconditions", changefreq: "yearly", priority: "0.3" },
];

function generateSitemap(entries: SitemapEntry[]) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
    ``,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
