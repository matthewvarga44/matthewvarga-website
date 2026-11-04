// Writes dist/public/roadmap/index.html: a copy of the SPA shell with
// /roadmap-specific title, description and Open Graph tags, so link
// previews (Instagram, iMessage, etc.) show the right text.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const out = "dist/public";
const title = "The Ordinary Millionaire Money Roadmap | Matthew Varga";
const description =
  "Get the free Ordinary Millionaire Money Roadmap: a step-by-step Google Sheet to budget, invest and build toward financial freedom, with US and Canada paths.";
const url = "https://www.matthewvarga.com/roadmap";

const tags = `<title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />`;

const html = readFileSync(`${out}/index.html`, "utf8");
if (!/<title>[\s\S]*?<\/title>/.test(html)) throw new Error("No <title> in index.html");
const page = html.replace(/<title>[\s\S]*?<\/title>/, tags);
mkdirSync(`${out}/roadmap`, { recursive: true });
writeFileSync(`${out}/roadmap/index.html`, page);
console.log("Wrote roadmap/index.html with page meta tags");
