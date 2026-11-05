// Vercel serverless function: adds a Money Roadmap signup to Flodesk.
// The API key is read from the FLODESK_API_KEY env var and never returned.

type Req = {
  method?: string;
  body?: unknown;
};
type Res = {
  status: (code: number) => Res;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
};

const FLODESK_URL = "https://api.flodesk.com/v1/subscribers";
const SEGMENT_IDS = [
  "6aeb8c93a8e60497c27ca58b", // Money Roadmap
  "616db0c9a89c5d166a4890bd", // Email Newsletter
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let body: Record<string, unknown> = {};
  try {
    body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : ((req.body as Record<string, unknown>) ?? {});
  } catch {
    return res.status(400).json({ ok: false, error: "Invalid request" });
  }

  // Honeypot: real people never fill this hidden field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const firstName =
    typeof body.first_name === "string" ? body.first_name.trim().slice(0, 100) : "";

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }

  const apiKey = process.env.FLODESK_API_KEY;
  if (!apiKey) {
    console.error("FLODESK_API_KEY is not set");
    return res.status(500).json({ ok: false, error: "Signup is temporarily unavailable." });
  }

  const payload: Record<string, unknown> = { email, segment_ids: SEGMENT_IDS };
  if (firstName) payload.first_name = firstName;

  try {
    const response = await fetch(FLODESK_URL, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${apiKey}:`).toString("base64"),
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "MatthewVargaSite (matthewvarga.com)",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Flodesk error", response.status);
      return res.status(502).json({ ok: false, error: "Signup failed. Please try again." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Flodesk request failed", err instanceof Error ? err.message : "unknown");
    return res.status(502).json({ ok: false, error: "Signup failed. Please try again." });
  }
}
