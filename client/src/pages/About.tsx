import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { PhotoGallery } from "@/components/PhotoGallery";

export default function About() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-40">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background pattern" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl leading-tight mb-6">
              About <span className="text-secondary">Matthew Varga</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 md:text-xl leading-relaxed font-light">
              Real Estate Investor, Certified Financial Planner, and Coach helping ambitious professionals build lasting wealth through proven rental strategies.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-4xl font-bold tracking-tight text-primary mb-4">
                  My Journey: From Foreclosure to Recognized Authority
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  I didn't inherit wealth or get lucky breaks. I overcame devastating adversity, earned elite certifications, and systematically built a $10M+ real estate empire. Today, I'm a recognized thought leader, published expert, and sought-after speaker in real estate investing.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-secondary mb-3">🔥 The Struggle → The Comeback</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>1990s: Family faced foreclosure, job loss, no utilities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Turned pain into purpose—vowed to master wealth building</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Proved financial freedom is possible for anyone willing to execute</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-secondary mb-3">📚 Elite Credentials & Expertise</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Certified Financial Planner (CFP)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Licensed Mortgage Broker</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>20+ years hands-on real estate experience</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Built proprietary strategies that outperform market averages</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-secondary mb-3">💰 Proven Track Record</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>$10M+ real estate portfolio</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>$49,000+ monthly passive income</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Scaled from zero to multi-millionaire through disciplined execution</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Every strategy battle-tested in real market conditions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-secondary mb-3">🎤 Thought Leader & Public Voice</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Speaker at major real estate conferences</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Featured on 50+ podcasts</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Shared strategies with thousands of aspiring investors</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Helped hundreds escape the 9-5 and build financial freedom</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-secondary mb-3">✈️ Living the Dream</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Retired in my 30s</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Traveled 40+ countries</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Built multiple income streams</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Living life completely on my own terms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[400px]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl border-4 border-secondary/20">
                <img 
                  src="/images/matthew-about.jpg" 
                  alt="Matthew Varga" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-primary-foreground">
                  <p className="font-heading text-2xl font-bold">Matthew Varga</p>
                  <p className="text-secondary font-semibold text-sm">Real Estate Investor & Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Professional Credentials
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              My expertise comes from 20+ years of hands-on experience and professional certifications in finance, real estate, and investment strategy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm border border-primary-foreground/20">
              <h3 className="font-heading text-2xl font-bold mb-4">Certified Financial Planner</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Licensed professional with expertise in comprehensive financial planning, investment strategy, and wealth optimization.
              </p>
            </div>

            <div className="rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm border border-primary-foreground/20">
              <h3 className="font-heading text-2xl font-bold mb-4">Licensed Mortgage Broker</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Deep expertise in mortgage financing, loan structure optimization, and creative financing strategies for real estate investors.
              </p>
            </div>

            <div className="rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm border border-primary-foreground/20">
              <h3 className="font-heading text-2xl font-bold mb-4">Real Estate Investment Expert</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                20+ years of hands-on experience building and managing a $10M+ portfolio across residential and short-term rental properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Mission Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary mb-8">
              My Mission
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I didn't achieve financial freedom to keep it to myself. I built the Retire with Rentals program to help ambitious professionals like you escape the 9-5 and build lasting wealth through proven real estate strategies.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              My mission is to help 10,000 people achieve financial freedom through real estate investing. I'm committed to sharing the exact strategies I used to build my $10M+ portfolio, and I'm building a community of serious investors who support each other on this journey.
            </p>
            <div className="flex justify-center">
              <Link href="/apply-mastermind">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30">
                  Join the Movement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Life Beyond the 9-5 Section */}
      <PhotoGallery />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Ready to Build Your Wealth?
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              Join 300+ investors in the Retire with Rentals program and learn the exact strategies I used to build a $10M+ portfolio and retire in my 30s.
            </p>
            <Link href="/apply-mastermind">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 transition-all hover:translate-y-[-2px]">
                Apply to Join the Mastermind
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
