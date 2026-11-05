// Vercel serverless function: sends book buyers straight to Amazon in their
// own country, using Vercel's visitor-country header. No page in between.
//   /book               -> paperback
//   /book?f=kindle      -> Kindle edition

type Req = {
  headers: Record<string, string | string[] | undefined>;
  query?: Record<string, string | string[] | undefined>;
};
type Res = {
  status: (code: number) => Res;
  setHeader: (name: string, value: string) => void;
  end: () => void;
};

const ASIN = {
  paperback: "B0GXWBXDWG",
  kindle: "B0GX2WZHPH",
} as const;

// Amazon store by visitor country; everyone else goes to amazon.com.
const STORES: Record<string, string> = {
  CA: "www.amazon.ca",
  GB: "www.amazon.co.uk",
  IE: "www.amazon.co.uk",
  AU: "www.amazon.com.au",
  NZ: "www.amazon.com.au",
  DE: "www.amazon.de",
  AT: "www.amazon.de",
  FR: "www.amazon.fr",
  ES: "www.amazon.es",
  IT: "www.amazon.it",
  NL: "www.amazon.nl",
  MX: "www.amazon.com.mx",
  BR: "www.amazon.com.br",
  IN: "www.amazon.in",
  JP: "www.amazon.co.jp",
};

const first = (v: string | string[] | undefined) =>
  Array.isArray(v) ? v[0] : v;

export default function handler(req: Req, res: Res) {
  const country = (first(req.headers["x-vercel-ip-country"]) || "").toUpperCase();
  const format = first(req.query?.f) === "kindle" ? "kindle" : "paperback";
  const host = STORES[country] || "www.amazon.com";

  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("Location", `https://${host}/dp/${ASIN[format]}`);
  res.status(302).end();
}
