import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Download, Mail, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Home() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: "Buy and Hold Deal Analysis Calculator",
      description: "Analyze buy-and-hold rental deals with precision. Run numbers, calculate cash flow, ROI, and cap rates instantly. The exact tool I use to evaluate every investment opportunity.",
      icon: <Download className="h-6 w-6" />,
      href: "/BuyandHoldDealAnalysisCalculator.xlsx"
    },
    {
      title: "Short Term Rental Calculator",
      description: "Analyze short-term rental and Airbnb deals. Project income, expenses, and profitability with detailed financial modeling.",
      icon: <Download className="h-6 w-6" />,
      href: "/ShortTermRentalCalculator.xlsx"
    },
    {
      title: "Real Estate Investing Checklist",
      description: "Your step-by-step guide to evaluating properties, running numbers, and making confident investment decisions.",
      icon: <BookOpen className="h-6 w-6" />,
      href: "#"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center overflow-hidden pt-20">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full border border-secondary/40">
                  <p className="text-secondary text-sm font-semibold">Real Estate Investing Mastery</p>
                </div>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight">
                  Retire with <span className="text-secondary">Rentals.</span> Build Your <span className="text-secondary">Legacy.</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                  Join 300+ investors learning proven strategies to build $10M+ portfolios and achieve financial freedom through real estate.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply-mastermind">
                  <button className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full transition-all duration-200 shadow-lg shadow-secondary/30 hover:shadow-secondary/50 text-lg">
                    Apply to Join
                  </button>
                </Link>
                <Link href="/book-consultation">
                  <button className="px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold rounded-full transition-all duration-200 text-lg">
                    Book Consultation
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-secondary">$10M+</h3>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">Portfolio Value</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-secondary">300+</h3>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">Active Members</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-secondary">20+ Yrs</h3>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl"></div>
              <img
                src="/images/IMG_8960.jpeg"
                alt="Matthew Varga"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section - My Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Text Content */}
            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-8">
                My Path to <span className="text-secondary">Financial Freedom</span>
              </h2>
              
              <div className="space-y-6 text-base text-foreground/80 leading-relaxed">
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">From Struggle to Success</h3>
                  <p>
                    My journey began with hardship. When my mom was laid off in the 90s, we faced foreclosure and financial crisis. That pain became my fuel. I vowed to master money and never let circumstances control my life.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">Building Real Wealth</h3>
                  <p>
                    I earned certifications in financial planning and real estate, then invested strategically. Over 20+ years, I built a $10M+ portfolio: 8 long-term rentals, 4 Airbnb properties, and 2 commercial units generating $49,000+ monthly passive income.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">Living the Dream</h3>
                  <p>
                    I retired in my 30s and traveled 40+ countries. Financial freedom isn't about the money—it's about time, experiences, and the ability to help others achieve the same.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center">
              <img 
                src="/images/IMG_3974.jpeg" 
                alt="Matthew Varga - Financial Freedom" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
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
                  Master the buy-and-hold strategy that builds steady passive income through rental properties and long-term appreciation.
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
                  Generate premium returns through short-term rentals and build a scalable Airbnb investment portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="h-3 bg-secondary w-full"></div>
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Exclusive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Network with 300+ serious investors committed to retirement through real estate. Share deals, strategies, and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
              Free Rental Resources
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Get instant access to the exact tools and calculators I use to analyze deals and build my portfolio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="border-2 border-secondary/20 hover:border-secondary/50 transition-colors hover:shadow-lg overflow-hidden group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-primary">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <a
                    href={resource.href}
                    download
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download Now
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">
              Ready to Scale Your Real Estate Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join the Retire with Rentals program and learn the exact strategies to build wealth and achieve financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply-mastermind">
                <button className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-full transition-all duration-200 shadow-lg shadow-secondary/30 text-lg">
                  Apply to Join the Mastermind
                </button>
              </Link>
              <Link href="/book-consultation">
                <button className="px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold rounded-full transition-all duration-200 text-lg">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
