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
                  My Real Estate Journey
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  I didn't inherit wealth or get lucky breaks. I overcame devastating adversity, earned elite certifications, and systematically built a $10M+ real estate empire. Today, I'm a recognized thought leader, published expert, and sought-after speaker in real estate investing.
                </p>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  My story started rough. In the 1990s, my family lost everything—foreclosure, job loss, no utilities. But that crisis taught me more than any classroom ever could. I decided right then that I was going to figure out wealth building, no matter what it took.
                </p>
                <p>
                  I got my CFP and Mortgage Broker license, and I studied under people who actually knew how to build wealth. I developed strategies that work because I've tested them myself in real market conditions.
                </p>
                <p>
                  The proof is in the numbers. I've built a $10M+ real estate portfolio that generates $49,000+ every month in income. I went from broke to multi-millionaire by staying disciplined and making smart moves. Everything I teach, I've actually done.
                </p>
                <p>
                  My work got noticed. I've spoken at real estate conferences, been on multiple podcasts, and helped thousands of people escape the 9-5 grind and build real financial freedom.
                </p>
                <p>
                  Today, I live the life I built. I retired in my 30s, traveled 40+ countries, and created multiple income streams. This is real—not theory. I teach exactly what worked for me, and I'm committed to helping others do the same.
                </p>
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

      {/* Key Milestones Section */}
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
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 cursor-pointer"
                onClick={() => window.location.href = '/apply-mastermind'}
              >
                Join the Movement
              </Button>
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
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30 transition-all hover:translate-y-[-2px] cursor-pointer"
              onClick={() => window.location.href = '/apply-mastermind'}
            >
              Apply to Join the Mastermind
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
