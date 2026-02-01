import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function Home() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      {/* Hero Section - Luxury Dark Background */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-40">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background pattern" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary">
              Retire with Rentals
            </div>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl leading-tight">
              Retire with <span className="text-secondary">Rentals</span>. Build Your Legacy.
            </h1>
            <p className="max-w-[600px] text-lg text-primary-foreground/90 md:text-xl leading-relaxed font-light">
              Join 300+ real estate investors in the Retire with Rentals program. Learn the proven strategies I used to build a $10M+ portfolio and achieve financial freedom in my 30s.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/apply-mastermind">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 transition-all hover:translate-y-[-2px]">
                  Apply to Join the Mastermind
                </Button>
              </Link>
              <Link href="/book-consultation">
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 h-14 rounded-full">
                Schedule Consultation
              </Button>
            </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-sm text-primary-foreground/80">
              <div className="space-y-1">
                <p className="font-bold text-secondary">$10M+</p>
                <p className="text-xs uppercase tracking-wide">Real Estate Portfolio</p>
              </div>
              <div className="w-px h-12 bg-secondary/30"></div>
              <div className="space-y-1">
                <p className="font-bold text-secondary">300</p>
                <p className="text-xs uppercase tracking-wide">Program Members</p>
              </div>
              <div className="w-px h-12 bg-secondary/30"></div>
              <div className="space-y-1">
                <p className="font-bold text-secondary">30s</p>
                <p className="text-xs uppercase tracking-wide">Retired & Traveling</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[600px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-4 border-secondary/20">
              {/* Matthew's professional photo */}
              <img 
                src="/images/matthew-hero.jpg" 
                alt="Matthew Varga" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-primary-foreground">
                <p className="font-heading text-3xl font-bold">Matthew Varga</p>
                <p className="text-secondary font-semibold">Real Estate Investor & Coach</p>
                <p className="text-primary-foreground/80 text-sm mt-2">Retired in my 30s • $10M+ Portfolio • Airbnb Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="border-y bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">$10M+</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">Real Estate Owned</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">300+</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">Program Members</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">1M+</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">YouTube Followers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-secondary">20+ Yrs</h3>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section - My Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="flex justify-center order-2 md:order-1">
              <img 
                src="/images/matthew-headshot.jpg" 
                alt="Matthew Varga - Real Estate Investor & Coach" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
                My Path to <span className="text-secondary">Financial Freedom</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    My journey didn't start with success. In the 90s, my family lost everything—foreclosure, job loss, no utilities. That crisis became my wake-up call. I decided right then that I was going to figure out wealth building, no matter what it took.
                  </p>
                </div>
                
                <div>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    I got my CFP and Mortgage Broker license, and I studied under people who actually knew how to build wealth. I developed strategies that work because I've tested them myself in real market conditions. The proof is in the numbers—I've built a $10M+ portfolio that generates $49,000+ every month in income.
                  </p>
                </div>
                
                <div>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    Today, I live the life I built. I retired in my 30s, traveled 40+ countries, and created multiple income streams. This is real—not theory. I help ambitious professionals do the same through proven real estate strategies and a community of 300+ serious investors.
                  </p>
                </div>
              </div>
              
              <Link href="/apply-mastermind">
                <button className="mt-8 px-8 py-3 bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full transition-all duration-200 shadow-lg shadow-secondary/30">
                  Apply to Join the Mastermind
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
              What You'll Learn
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Master the exact strategies I used to build a $10M+ portfolio and achieve financial freedom in my 30s.
            </p>
          </div>

            <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <CardTitle className="text-xl font-bold text-primary">Long-Term Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Master the buy-and-hold strategy that builds steady income through rental properties and long-term appreciation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Airbnb & Short-Term</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Learn how to maximize income with short-term rentals and Airbnb arbitrage strategies that generate higher returns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Deal Analysis & Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Analyze deals like a pro and structure creative financing to maximize returns and minimize risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
