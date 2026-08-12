/*
 * Design philosophy: premium travel editorial with a near-black charcoal foundation,
 * restrained gold accents, Playfair Display-style display typography, asymmetrical
 * compositions, and clear benefit-led conversion moments. Every section should feel
 * like a thoughtful travel journal—not a generic SaaS template.
 */
import {
  ArrowRight,
  Check,
  Compass,
  CreditCard,
  Gem,
  Hotel,
  Map,
  Menu,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const checkoutUrl =
  "https://matthewvarga.gumroad.com/l/travelhackingguidebook?wanted=true";

const heroImage = "/manus-storage/travel-guide-hero_e394b3c1.png";
const hotelImage = "/manus-storage/travel-guide-hotel_d611a167.png";
const familyImage = "/manus-storage/travel-guide-family_c3a00d28.png";
const heroFallback = "https://res.cloudinary.com/dheaagd8g/image/upload/v1781535663/matthewvarga/IMG_8960.jpg";
const hotelFallback = "https://res.cloudinary.com/dheaagd8g/image/upload/v1781535653/matthewvarga/6cec682f-2935-4430-846b-8b4ca3fb254d.jpg";
const familyFallback = "https://res.cloudinary.com/dheaagd8g/image/upload/v1781535651/matthewvarga/62b1462d-8a9e-4087-9873-8eb9c666ec64.jpg";

function useImageFallback(fallback: string) {
  return (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallback;
  };
}

function trackGuideClick(location: string) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
      "event",
      "travel_guide_checkout_click",
      { location, value: 12.99, currency: "USD" },
    );
  }
}

function PurchaseLink({
  children,
  location,
  className = "",
}: {
  children: React.ReactNode;
  location: string;
  className?: string;
}) {
  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackGuideClick(location)}
      className={className}
    >
      {children}
    </a>
  );
}

const outcomes = [
  {
    icon: CreditCard,
    eyebrow: "SPEND WITH INTENTION",
    title: "Earn from the life you already live.",
    copy: "Build a points strategy around ordinary spending instead of chasing every new card or every loud internet hack.",
  },
  {
    icon: Plane,
    eyebrow: "REDEEM WITH CONFIDENCE",
    title: "Trade points for premium flights.",
    copy: "Learn how business- and first-class redemptions work, so you can pursue high-value trips for taxes and fees instead of cash fares.",
  },
  {
    icon: Hotel,
    eyebrow: "GO FURTHER",
    title: "Turn stays into part of the plan.",
    copy: "Use loyalty programs and hotel points to make luxury stays and family trips more attainable—and more intentional.",
  },
];

const chapters = [
  "The points ecosystem, explained without the jargon",
  "Which cards and loyalty programs deserve your attention",
  "A practical first-90-days plan for beginners",
  "How to earn points on spending you already do",
  "How to compare cash prices against redemption value",
  "Business-class, first-class, hotel, and family-trip strategies",
];

export default function TravelHackingGuide() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#11100f] text-[#f7f1e8] selection:bg-[#c89a49] selection:text-[#11100f]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11100f]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Back to Matthew Varga home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c89a49]/60 text-[#e7bd76] transition-colors group-hover:border-[#f4d196] group-hover:text-[#f4d196]">
              <Compass className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f7f1e8] sm:text-xs">
              Matthew Varga
              <span className="block text-[9px] tracking-[0.3em] text-[#c89a49]">Travel Hacking Guide</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Travel guide navigation">
            <a href="#inside" className="text-xs uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white">Inside the guide</a>
            <a href="#method" className="text-xs uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white">The method</a>
            <PurchaseLink location="header" className="inline-flex items-center gap-2 rounded-full bg-[#c89a49] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#11100f] transition-all hover:bg-[#e7bd76] active:scale-[0.98]">
              Get the guide <ArrowRight className="h-3.5 w-3.5" />
            </PurchaseLink>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 px-5 py-5 md:hidden" aria-label="Mobile travel guide navigation">
            <div className="flex flex-col gap-5">
              <a href="#inside" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.16em] text-white/70">Inside the guide</a>
              <a href="#method" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.16em] text-white/70">The method</a>
              <PurchaseLink location="mobile-header" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#c89a49] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#11100f]">
                Get the guide <ArrowRight className="h-3.5 w-3.5" />
              </PurchaseLink>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative isolate border-b border-white/10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(200,154,73,0.16),transparent_34%),linear-gradient(115deg,#11100f_18%,#171411_58%,#0d0c0b)]" />
          <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-20">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e7bd76]">
                <span className="h-px w-10 bg-[#c89a49]" />
                Travel Hacking Guide 2026
              </div>
              <h1 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[#f7f1e8] sm:text-6xl lg:text-[5.25rem]">
                Fly further.
                <span className="block text-[#d4a45a]">Stay better.</span>
                <span className="block">Pay with strategy.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
                Learn the step-by-step system ordinary families use to unlock premium travel—first-class flights, luxury hotels, and unforgettable trips—without paying cash prices or opening dozens of cards.
              </p>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <PurchaseLink location="hero" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c89a49] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#11100f] shadow-[0_14px_40px_rgba(200,154,73,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#e7bd76] active:scale-[0.98]">
                  Get the guide for $12.99 <ArrowRight className="h-4 w-4" />
                </PurchaseLink>
                <a href="#inside" className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[#f4d196]">
                  See what&apos;s inside <ArrowRight className="h-4 w-4 text-[#c89a49]" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/45">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#c89a49]" /> Instant digital access</span>
                <span className="inline-flex items-center gap-2"><Map className="h-4 w-4 text-[#c89a49]" /> 163-page deep dive</span>
              </div>
            </div>

            <div className="relative lg:translate-x-5">
              <div className="absolute -inset-5 rounded-[2rem] bg-[#c89a49]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-[#c89a49]/45 bg-[#1b1815] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                <img src={heroImage} alt="Premium first-class airplane suite at dusk" onError={useImageFallback(heroFallback)} className="aspect-[4/3] w-full rounded-[1.1rem] object-cover" />
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-5 rounded-xl border border-white/15 bg-[#11100f]/80 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e7bd76]">The 2026 guide</p>
                    <p className="mt-1 font-serif text-xl text-[#f7f1e8]">Premium travel, made practical.</p>
                  </div>
                  <Plane className="hidden h-6 w-6 shrink-0 text-[#e7bd76] sm:block" strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-[#c89a49]/35 bg-[#1a1714] px-5 py-4 shadow-xl sm:block lg:-left-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">Today&apos;s price</p>
                <p className="mt-1 text-2xl font-semibold text-[#f7f1e8]">$12.99</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#f4efe7] py-14 text-[#171411] sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a16d22]">A different way to think about travel</p>
              <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">The best trips start before you book the flight.</h2>
            </div>
            <div className="max-w-2xl text-lg leading-8 text-[#514a42]">
              <p>Most people start with a destination and then accept whatever the cash price happens to be. Travel hacking starts earlier: with a clear points strategy, a shortlist of programs that matter, and a redemption plan that makes premium travel feel possible.</p>
              <p className="mt-5">This guide is built for beginners who want a system—not a collection of scattered tips.</p>
            </div>
          </div>
        </section>

        <section id="method" className="border-b border-white/10 bg-[#11100f] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#e7bd76]">The OMP travel method</p>
                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#f7f1e8] sm:text-5xl">A simple framework for more valuable redemptions.</h2>
                <p className="mt-6 max-w-md leading-7 text-white/55">No gimmicks. No pressure to carry a wallet full of cards. Just a practical sequence for earning, choosing, and redeeming points with intention.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {outcomes.map((outcome) => {
                  const Icon = outcome.icon;
                  return (
                    <article key={outcome.title} className="border-t border-[#c89a49]/55 pt-5">
                      <Icon className="h-6 w-6 text-[#e7bd76]" strokeWidth={1.5} />
                      <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c89a49]">{outcome.eyebrow}</p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight text-[#f7f1e8]">{outcome.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-white/55">{outcome.copy}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="inside" className="border-b border-white/10 bg-[#171411] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.86fr] lg:gap-20">
              <div className="order-2 lg:order-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#e7bd76]">Inside the 163 pages</p>
                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#f7f1e8] sm:text-5xl">From first points to first-class confidence.</h2>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {chapters.map((chapter) => (
                    <div key={chapter} className="flex gap-3 border-t border-white/10 pt-4 text-sm leading-6 text-white/65">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#d4a45a]" />
                      <span>{chapter}</span>
                    </div>
                  ))}
                </div>
                <PurchaseLink location="inside-section" className="mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-[#e7bd76] transition-colors hover:text-[#f7f1e8]">
                  Explore the full guide <ArrowRight className="h-4 w-4" />
                </PurchaseLink>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#c89a49]/35" />
                <img src={hotelImage} alt="Luxury hotel suite overlooking the ocean" onError={useImageFallback(hotelFallback)} className="relative aspect-[4/3] w-full rounded-[1.2rem] object-cover shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 max-w-[220px] border border-[#c89a49]/40 bg-[#11100f] p-5 shadow-xl sm:-left-10">
                  <Gem className="h-5 w-5 text-[#e7bd76]" strokeWidth={1.5} />
                  <p className="mt-3 font-serif text-xl leading-tight text-[#f7f1e8]">Make the redemption worth the journey.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#f4efe7] py-20 text-[#171411] sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="relative">
                <img src={familyImage} alt="Family walking through an international airport" onError={useImageFallback(familyFallback)} className="aspect-[4/3] w-full rounded-[1.2rem] object-cover shadow-2xl" />
                <div className="absolute -bottom-6 -right-5 bg-[#c89a49] px-5 py-4 text-[#11100f] shadow-xl sm:-right-10">
                  <Users className="h-5 w-5" strokeWidth={1.5} />
                  <p className="mt-2 max-w-[130px] text-xs font-bold uppercase leading-5 tracking-[0.12em]">Travel that includes everyone</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a16d22]">What changes when you have a plan</p>
                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl">Luxury is not the point. Freedom of choice is.</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#514a42]">The guide helps you understand the mechanics behind the trip: how to choose a strategy, when to hold points, and how to make a redemption decision that fits your real life.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Premium flights without premium cash fares",
                    "Hotel stays that feel like part of the experience",
                    "A repeatable system for family travel",
                    "A first-90-days plan you can actually follow",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-[#514a42]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#a16d22]" />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#11100f] py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#c89a49]/45 bg-[radial-gradient(circle_at_80%_0%,rgba(200,154,73,0.18),transparent_40%),#171411] p-7 sm:p-12 lg:p-16">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#c89a49]/20" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#c89a49]/45 bg-[#c89a49]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e7bd76]">
                    <Sparkles className="h-3.5 w-3.5" /> Limited launch price
                  </div>
                  <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#f7f1e8] sm:text-5xl">Your next premium trip starts with a better points strategy.</h2>
                  <p className="mt-5 max-w-xl leading-7 text-white/55">Get the complete Travel Hacking Guide 2026 and build your plan before your next booking window opens.</p>
                </div>
                <div className="lg:text-right">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Regular price</p>
                  <div className="mt-2 flex items-center gap-3 lg:justify-end">
                    <span className="relative text-2xl font-semibold text-white/45 after:absolute after:left-0 after:right-0 after:top-1/2 after:h-1 after:-rotate-6 after:bg-[#d74c45] after:content-['']">$39.99</span>
                    <span className="rounded-full bg-[#d74c45] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white">Save 67% today</span>
                  </div>
                  <p className="mt-2 font-serif text-5xl text-[#f4d196]">$12.99</p>
                  <PurchaseLink location="final-offer" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c89a49] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#11100f] transition-all hover:bg-[#e7bd76] active:scale-[0.98] sm:w-auto">
                    Get instant access <ArrowRight className="h-4 w-4" />
                  </PurchaseLink>
                </div>
              </div>
              <div className="relative mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs text-white/45">
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#c89a49]" /> 163-page guide</span>
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#c89a49]" /> Beginner-friendly system</span>
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#c89a49]" /> Digital access</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0c0b0a] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c89a49]/60 text-[#e7bd76]"><Compass className="h-4 w-4" strokeWidth={1.5} /></span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f7f1e8]">Matthew Varga</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35">Travel Hacking Guide 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            <Link href="/" className="transition-colors hover:text-white">MatthewVarga.com</Link>
            <Link href="/coaching" className="transition-colors hover:text-white">Coaching</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
          </div>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Matthew Varga</p>
        </div>
      </footer>
    </div>
  );
}

// Extend the global Window type locally for GA4 without introducing a dependency.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

