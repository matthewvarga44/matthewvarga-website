import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Award, Briefcase, Home } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { PhotoGallery } from "@/components/PhotoGallery";

export default function About() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const portfolioBreakdown = [
    {
      type: "Long-Term Rentals",
      units: 8,
      value: "$6.5M",
      monthlyIncome: "$18,500",
      description: "Buy-and-hold properties generating steady passive income"
    },
    {
      type: "Airbnb & Short-Term",
      units: 4,
      value: "$2.2M",
      monthlyIncome: "$22,000",
      description: "High-yield short-term rental properties"
    },
    {
      type: "Commercial",
      units: 2,
      value: "$1.3M",
      monthlyIncome: "$8,500",
      description: "Mixed-use and commercial real estate investments"
    }
  ];

  const credentials = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Certified Financial Planner",
      description: "10+ years of experience in personal finance and wealth management"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Licensed Real Estate Agent",
      description: "Deep expertise in property acquisition, valuation, and market analysis"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Mortgage Broker",
      description: "Mastery of financing strategies, loan structures, and investment vehicles"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Entrepreneur & Investor",
      description: "Built multiple 6-figure income streams through real estate and business"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight mb-6">
              About <span className="text-secondary">Matthew Varga</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              From financial hardship to multi-millionaire. My journey from foreclosure to building a $10M+ real estate portfolio and retiring in my 30s.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-4xl font-bold tracking-tight text-primary mb-4">
                  My Journey
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  My story isn't one of privilege or lucky breaks. It's a story of overcoming adversity, learning from failure, and building wealth through disciplined strategy and relentless execution.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">The Struggle</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    In the 1990s, my family faced devastating financial hardship. My mom was laid off, our home was foreclosed on, utilities were shut off, and we had no hot water. These weren't abstract financial problems—they were lived experiences that shaped my determination to build a better life.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">The Education</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    I became obsessed with understanding money and wealth building. I pursued certifications in financial planning, real estate, and mortgage brokerage. Each credential wasn't just a credential—it was a tool to understand the systems that build wealth.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">The Execution</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Over 10 years, I systematically built a $10M+ real estate portfolio. I didn't get lucky. I didn't inherit money. I applied proven strategies, learned from mistakes, and compounded my results year after year.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">The Freedom</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    I retired in my 30s with passive income exceeding my expenses. I've since traveled to 40+ countries, run with the bulls in Spain, skydived, and lived life on my own terms. This is what financial freedom truly means.
                  </p>
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

      {/* Photo Gallery - Lifestyle & Freedom */}
      <PhotoGallery />

      {/* Professional Credentials */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Professional Credentials
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              My expertise comes from 10+ years of hands-on experience and professional certifications in finance, real estate, and investment strategy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {credentials.map((credential, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-secondary/30 hover:border-secondary/60 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-secondary flex-shrink-0">
                      {credential.icon}
                    </div>
                    <CardTitle className="text-primary-foreground">
                      {credential.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">
                    {credential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Breakdown */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
              Investment Portfolio Breakdown
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              A diversified portfolio of $10M+ in real estate generating $49,000+ in monthly passive income. This is what I've built, and this is what I teach.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {portfolioBreakdown.map((portfolio, index) => (
              <Card key={index} className="border-secondary/20 hover:border-secondary/60 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    {portfolio.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-wide font-semibold">Portfolio Value</p>
                    <p className="text-3xl font-bold text-secondary">{portfolio.value}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-wide font-semibold">Units Owned</p>
                    <p className="text-2xl font-bold text-primary">{portfolio.units}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 uppercase tracking-wide font-semibold">Monthly Income</p>
                    <p className="text-2xl font-bold text-secondary">{portfolio.monthlyIncome}</p>
                  </div>
                  <p className="text-foreground/80 text-sm pt-4 border-t border-border">
                    {portfolio.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Summary */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">$10M+</p>
                <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Total Portfolio Value</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">14</p>
                <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Properties Owned</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">$49K+</p>
                <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Monthly Passive Income</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">10 Yrs</p>
                <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">To Build Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Key Milestones
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              My journey to financial freedom wasn't overnight. It was built on consistent execution and strategic decisions.
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                year: "2010-2012",
                title: "Foundation Years",
                description: "Earned certifications in Financial Planning, Real Estate, and Mortgage Brokerage. Began investing in first rental properties."
              },
              {
                year: "2012-2016",
                title: "Portfolio Growth",
                description: "Scaled from 1 to 8 long-term rental properties. Built a portfolio worth $6.5M generating $18,500/month in passive income."
              },
              {
                year: "2016-2018",
                title: "Diversification",
                description: "Discovered Airbnb arbitrage and short-term rentals. Built a 4-unit Airbnb portfolio generating $22,000/month in less than a year."
              },
              {
                year: "2018-2020",
                title: "Commercial Expansion",
                description: "Added 2 commercial properties to portfolio. Achieved $10M+ in total real estate holdings and $49,000+ monthly passive income."
              },
              {
                year: "2020+",
                title: "Financial Freedom",
                description: "Retired in my 30s with passive income exceeding expenses. Traveled 40+ countries. Now focused on helping others achieve the same freedom."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-24">
                  <p className="font-heading text-lg font-bold text-secondary">{milestone.year}</p>
                </div>
                <div className="flex-1 pb-8 border-b border-primary-foreground/20">
                  <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-primary-foreground/90">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Teach */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
              Why I Teach
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I didn't achieve financial freedom to keep it to myself. I built the Retire with Rentals program to help ambitious professionals like you escape the 9-5 and build lasting wealth through proven real estate strategies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  Proven Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  I've done it. I know what works and what doesn't. You don't have to make the same mistakes I did.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-5 w-5" />
                  Actionable Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  No fluff. Every strategy I teach is battle-tested and currently generating income in my portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" />
                  Real Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  My students are achieving real results: scaling portfolios, generating passive income, and building freedom.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join 300+ investors in the Retire with Rentals program and learn the exact strategies I used to build a $10M+ portfolio and retire in my 30s.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply-mastermind">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30">
                  Apply to Join the Mastermind
                </Button>
              </Link>
              <Link href="/book-consultation">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 h-14 rounded-full">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
