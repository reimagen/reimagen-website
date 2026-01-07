// Basic static sitemap generator for the current routes.
// Usage: node scripts/generate-sitemap.cjs https://www.reimagen.ai
// Outputs sitemap.xml to public/sitemap.xml
const fs = require("fs");
const path = require("path");

const routes = [
  "/",
  "/about",
  "/gallery",
  "/products",
  "/toolkit",
  "/contact",
];

function buildSitemap(baseUrl) {
  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function main() {
  const baseUrl = process.argv[2];
  if (!baseUrl) {
    console.error("Usage: node scripts/generate-sitemap.cjs https://www.reimagen.ai");
    process.exit(1);
  }
  const normalized = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const sitemap = buildSitemap(normalized);
  const outPath = path.join(__dirname, "..", "public", "sitemap.xml");
  fs.writeFileSync(outPath, sitemap.trim() + "\n", "utf8");
  console.log(`sitemap.xml written to ${outPath}`);
}

main();
