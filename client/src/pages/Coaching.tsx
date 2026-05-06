import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Calendar, BookOpen, Handshake, Target, TrendingUp, Zap, Award, Network, DollarSign } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Coaching() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Monthly One-on-One Coaching Calls",
      description: "Personalized 60-minute phone calls with me each month to review your business progress, set goals, and address challenges. Tailored guidance on strategy, scaling, and overcoming obstacles.",
      value: "$4,800/year value"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Monthly Industry Expert Calls",
      description: "Live virtual sessions featuring industry leaders sharing insider strategies on storage facilities, business acquisitions (laundromats, car washes, lawn care), Airbnb arbitrage, buy-and-hold real estate, wholesaling, E2 Visa relocation, seller financing, and subject-to purchases.",
      value: "Expert-led insights"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Annual In-Person or Virtual Mastermind Retreats",
      description: "Intensive 1-2 day events where members collaborate, brainstorm, and develop strategies together. Includes workshops, peer-to-peer problem-solving, and guest speakers in a focused environment.",
      value: "Deep connections & innovation"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Private Online Community Platform",
      description: "Members-only platform for ongoing discussions, resource sharing, and networking. Post questions, share wins, collaborate on opportunities, and access 24/7 community support and deal-sharing.",
      value: "Always-on accountability"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Bi-Weekly Accountability Group Calls",
      description: "Small-group virtual meetings (4-6 members) held bi-weekly to discuss progress, set weekly goals, and hold each other accountable. Facilitated by a group leader or rotated among members.",
      value: "Consistent momentum"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Exclusive Resource Library",
      description: "Curated digital library with templates, checklists, and guides for all business models. Includes due diligence checklists, Airbnb pricing strategies, real estate deal analysis spreadsheets, and more.",
      value: "Proven tools & frameworks"
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Deal-Sourcing and Partnership Opportunities",
      description: "Structured process for members to share and vet business or investment opportunities. Access off-market deals and collaborate with trusted peers on joint ventures and partnerships.",
      value: "Amplified investment potential"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Annual Goal-Setting and Review Sessions",
      description: "Kickoff session at year start to set 12-month goals and year-end review to assess progress. Includes goal-setting templates and progress trackers for measurable outcomes.",
      value: "Clarity & structure"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Monthly Case Study Deep Dives",
      description: "Detailed analyses of successful (or failed) ventures in our focus areas. Presented by members or facilitator with lessons learned and actionable takeaways to avoid pitfalls.",
      value: "Real-world insights"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Exclusive Discounts and Vendor Partnerships",
      description: "Negotiated discounts with service providers relevant to real estate and business investing. Includes software, property management tools, business brokers, accountants, legal services, and more.",
      value: "Reduced costs & vetted vendors"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight mb-6">
              The <span className="text-secondary">The Ordinary Millionaire Community</span> Mastermind
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Join an exclusive community of ambitious investors and entrepreneurs committed to building wealth through real estate and alternative business models. Get access to proven strategies, expert guidance, and a network of like-minded peers.
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

      {/* Program Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
              What's Included in Your Membership
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The The Ordinary Millionaire Community program is designed to accelerate your journey to financial independence through comprehensive support, expert guidance, and a thriving community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className="h-1 bg-secondary w-full"></div>
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">{benefit.description}</p>
                  <p className="text-sm font-semibold text-secondary">{benefit.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-12 text-center">
              Why Join <span className="text-secondary">The Ordinary Millionaire Community</span>?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                  <p className="text-primary-foreground/90">
                    I've built a $10M+ portfolio and retired in my 30s. You'll learn exactly what worked, what didn't, and how to avoid costly mistakes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Exclusive Community</h3>
                  <p className="text-primary-foreground/90">
                    Network with 100 serious investors and entrepreneurs. Share deals, strategies, and support with people who understand your ambitions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Actionable Strategies</h3>
                  <p className="text-primary-foreground/90">
                    No fluff. Every session, call, and resource is focused on practical strategies you can implement immediately to grow your wealth.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lifetime Access</h3>
                  <p className="text-primary-foreground/90">
                    Access to all recorded sessions, resources, and templates. Learn at your own pace and reference materials whenever you need them.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Deal Access</h3>
                  <p className="text-primary-foreground/90">
                    Get access to off-market deals, partnership opportunities, and collaborative ventures shared within the private community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border-2 border-secondary bg-white p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                  Join the The Ordinary Millionaire Community Mastermind
                </h3>
                <p className="text-lg text-foreground/80 mb-8">
                  Limited to 300 members. Spots are filling up fast.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between pb-4 border-b border-secondary/20">
                  <span className="text-lg font-semibold text-foreground">Annual Investment</span>
                  <span className="text-4xl font-bold text-secondary">$3,000</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-secondary/20">
                  <span className="text-lg font-semibold text-red-600">Program Value</span>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-base font-semibold text-red-600">(Valued at)</span>
                    <span className="text-2xl font-bold text-red-600 line-through decoration-black decoration-2">$10,000</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-secondary/20">
                  <span className="text-lg font-semibold text-foreground">Program Members</span>
                  <span className="text-2xl font-bold text-secondary">300 (Capped)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">Access Duration</span>
                  <span className="text-2xl font-bold text-foreground">12 Months</span>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-6 mb-8">
                <p className="text-sm text-foreground/80 text-center">
                  <span className="font-bold text-secondary">Value Delivered:</span> Over $50,000+ in coaching, expert calls, resources, and community support included in your membership.
                </p>
              </div>

              <Link href="/apply-mastermind">
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14 rounded-full shadow-lg shadow-secondary/30">
                  Apply Now - Limited Spots
                </Button>
              </Link>

              <p className="text-center text-sm text-foreground/60 mt-6">
                Only 300 members allowed. Spots are filling up fast. Once we reach capacity, enrollment closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">
              Ready to The Ordinary Millionaire Community?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join 300+ investors building wealth through real estate and alternative business models. Limited spots available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-mastermind">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 h-14 rounded-full shadow-lg shadow-secondary/30">
                Apply to Join
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
