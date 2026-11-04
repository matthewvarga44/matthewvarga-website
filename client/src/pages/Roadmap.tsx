import React, { useState } from "react";
import { CheckCircle2, LineChart, PiggyBank, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";

const ROADMAP_URL =
  "https://docs.google.com/spreadsheets/d/1BcJVPBmbrI1TDMkxLOZz9T4f0qpeXd2FOrzdPp98LhM/edit?gid=1399814381#gid=1399814381";

const PAGE_TITLE = "The Ordinary Millionaire Money Roadmap | Matthew Varga";
const PAGE_DESCRIPTION =
  "Get the free Ordinary Millionaire Money Roadmap: a step-by-step Google Sheet to budget, invest and build toward financial freedom, with US and Canada paths.";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

const insideItems = [
  {
    icon: PiggyBank,
    title: "Build Your Foundation",
    description:
      "Set up a simple budget, build your emergency fund and make a plan to pay off debt.",
  },
  {
    icon: TrendingUp,
    title: "Invest Step by Step",
    description:
      "Follow a clear investing order, with separate paths for the US and Canada.",
  },
  {
    icon: LineChart,
    title: "Track Your Path to Financial Freedom",
    description:
      "Track your net worth and use the FIRE calculators to see when work could become optional.",
  },
];

export default function Roadmap() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [website, setWebsite] = useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    setMeta("name", "description", PAGE_DESCRIPTION);
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESCRIPTION);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", "https://www.matthewvarga.com/roadmap");
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESCRIPTION);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          first_name: name,
          website: website,
        }),
      });

      if (response.status === 400) {
        const data = await response.json().catch(() => null);
        toast.error(data?.error || "Please enter a valid email address.");
        return;
      }
      if (!response.ok) {
        setSignupError(true);
      }
    } catch (err) {
      console.error("Error submitting roadmap signup:", err);
      setSignupError(true);
    } finally {
      setLoading(false);
    }

    // Always give access to the roadmap, even if the email signup failed.
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-16 md:py-32 bg-white">
          <div className="container max-w-2xl">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <CheckCircle2 className="h-16 w-16 md:h-20 md:w-20 text-secondary" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Your Roadmap Is Ready{name ? `, ${name}` : ""}!
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Tap the button below to open The Ordinary Millionaire Money Roadmap.
              </p>
              {signupError && (
                <div className="mb-6 bg-foreground/5 border border-border rounded-xl p-4 text-sm text-foreground/80">
                  We couldn't add you to the email list just now, but you can still open the
                  roadmap below.
                </div>
              )}
              <a
                href={ROADMAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg md:text-xl py-5 px-10 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Open My Roadmap →
              </a>
              <div className="mt-8 bg-secondary/10 border border-secondary/30 rounded-xl p-5 text-left">
                <p className="text-foreground/90">
                  Once it opens, click the big gold <strong>MAKE YOUR OWN COPY</strong> button.
                  Tip: it's easiest on a computer.
                </p>
              </div>
              <p className="mt-8 text-xs text-foreground/60">
                General education, not personal financial advice.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-14 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
              <span className="text-sm font-semibold text-secondary">Free Google Sheet</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              The Ordinary Millionaire Money Roadmap
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              A free, step-by-step Google Sheet to help you budget, invest and build toward
              financial freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start md:items-center">
            {/* Signup Form (first on mobile) */}
            <div className="md:order-2">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                <h2 className="text-2xl font-bold text-primary mb-2">Get the Free Roadmap</h2>
                <p className="text-foreground/70 mb-6">
                  Enter your email and you'll get instant access to the roadmap.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for bots; hidden from people */}
                  <div aria-hidden="true" className="sr-only">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      First Name <span className="text-foreground/50 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your first name"
                      className="w-full px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      inputMode="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Me the Roadmap"}
                  </button>

                  <p className="text-xs text-foreground/60 text-center">
                    Free. Unsubscribe anytime. General education, not personal financial advice.
                  </p>
                </form>
              </div>
            </div>

            {/* What's Inside */}
            <div className="md:order-1">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">
                What's Inside
              </h2>

              <div className="space-y-6">
                {insideItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/10">
                          <Icon className="h-6 w-6 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-foreground/70">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
