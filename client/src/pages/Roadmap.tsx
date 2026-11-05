import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Compass,
  CreditCard,
  Flag,
  Landmark,
  PiggyBank,
  TrendingUp,
} from "lucide-react";
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
    icon: Compass,
    title: "Know exactly what to do next",
    description:
      "Start Here and the Financial Freedom Roadmap lay out every step in order, so you always know your next move.",
  },
  {
    icon: PiggyBank,
    title: "Tell every dollar where to go",
    description:
      "The Budget Sheet, Paycheck Allocation and 50/30/20-style budget splits turn your paycheck into a plan.",
  },
  {
    icon: CreditCard,
    title: "Get out of debt faster",
    description:
      "Debt Snowball and Debt Avalanche calculators show which debt to pay first and how the balance drops month by month.",
  },
  {
    icon: Calculator,
    title: "See your financial freedom number",
    description:
      "The Compound Growth Explorer, Financial Freedom Number and Retirement Timeline show what your savings could grow into.",
  },
  {
    icon: TrendingUp,
    title: "Start investing with confidence",
    description:
      "Account and brokerage guides, fund and ETF comparisons, and a Beginner Portfolio Builder walk you through your first portfolio.",
  },
  {
    icon: Flag,
    title: "Follow the path for your country",
    description:
      "A US path (401(k), IRA, HSA) and a Canada path (TFSA, RRSP, FHSA, CPP and OAS, Canadian ETFs and brokerages).",
  },
];

const forYouItems = [
  "You earn a decent income but still aren't sure where it all goes.",
  "You want to start investing but don't know which account to open first.",
  "You're paying off debt and want a clear plan to finish it.",
  "You want to build a better future for yourself and your kids, one step at a time.",
];

function scrollToForm() {
  document.getElementById("roadmap-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => document.getElementById("email")?.focus({ preventScroll: true }), 500);
}

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
    setMeta("property", "og:image", "https://www.matthewvarga.com/images/roadmap-hero-og.jpg");
    setMeta("name", "twitter:card", "summary_large_image");
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
      {/* Hero Section: headline, image, form on mobile; two columns on desktop */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-12 md:py-20 lg:py-14">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-12 lg:gap-y-6 lg:items-center">
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left lg:col-start-1 lg:row-start-1">
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
                <span className="text-sm font-semibold text-secondary">Free Google Sheet</span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl lg:text-[2.75rem] xl:text-5xl font-extrabold tracking-tight leading-tight mb-6 lg:mb-4">
                The Ordinary Millionaire Money Roadmap
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Know exactly what to do with your money next. One free Google Sheet takes you
                step by step from budgeting and paying off debt to investing and financial freedom.
              </p>
            </div>

            <img
              src="/images/roadmap-hero.webp"
              alt="The Ordinary Millionaire Money Roadmap Google Sheet on a laptop, showing the START HERE page and the Compound Interest Calculator chart"
              width={2048}
              height={1152}
              fetchPriority="high"
              decoding="async"
              className="mx-auto w-full max-w-2xl h-auto rounded-2xl shadow-2xl ring-1 ring-secondary/20 lg:max-w-none lg:col-start-1 lg:row-start-2"
            />

            {/* Signup Form */}
            <div id="roadmap-form" className="mx-auto w-full max-w-xl scroll-mt-24 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="bg-white text-foreground rounded-2xl p-6 md:p-8 shadow-2xl border border-secondary/30">
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
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              What's Inside (and What's in It for You)
            </h2>
            <p className="text-lg text-foreground/70">
              More than 50 tabs of calculators, guides and checklists, organized into one
              clear roadmap.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insideItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* This is for you if... */}
      <section className="py-14 md:py-20 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              This Is for You If...
            </h2>
            <ul className="space-y-4">
              {forYouItems.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-foreground/80">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Credibility + second CTA */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex justify-center">
              <Landmark className="h-10 w-10 text-secondary" />
            </div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              I spent 20 years as a banker and financial planner, then left at 38 to live off my
              rentals. This is the roadmap I wish every one of my clients had: simple steps, in the
              right order, all in one place.
            </p>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8">
              Real estate is how I hit my freedom number. This roadmap gets your foundation in place
              first, so you're ready for whatever comes next.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex w-full sm:w-auto items-center justify-center bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg py-4 px-10 rounded-lg shadow-lg transition-all duration-200"
            >
              Get the Free Roadmap
            </button>
            <p className="mt-4 text-xs text-foreground/60">
              Free. General education, not personal financial advice.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
